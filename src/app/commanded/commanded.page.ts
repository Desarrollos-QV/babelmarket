import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { AlertController, IonSearchbar, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ServerService } from '../service/server.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;

declare var OpenPay;


@Component({
  selector: 'app-commanded',
  templateUrl: './commanded.page.html',
  styleUrls: ['./commanded.page.scss'],
})
export class CommandedPage implements OnInit {

  @ViewChild("searchad",{static: false}) searchad : IonSearchbar;

  user: any;
  admin:any;
  data:any;
  searchQuery: any;
  hasSearch:any;
  address:any;
  set_type_address: any;
  address_origin: any;
  lat_orig: any;
  lng_orig: any;
  address_destin: any;
  lat_dest: any;
  lng_dest: any;
  LocationNow:any;
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  lat:any;
  lng:any;
  MyLocation = [];

  step_comm:Number = 0;
  text_address: String = "Punto de recolección";

  first_instr: String = "";
  second_instr: String = "";

  ready: Boolean = false;
  cost_ship :any;

  
  stripeView = false;
  payment_id:any;
  paypal_id:any;
  stripe_id:any;
  iva_stripe:any;
  comm_stripe: any;
  send_terminal:any;
  total_amount:any;
  otype:number;

  cardData = [];
  chargeInProcess:boolean = false;
  constructor(
    public modalController: ModalController,
    public nav: NavController,
    public server: ServerService,
    public geolocation: Geolocation,
    public zone: NgZone,
    public nativeGeocoder: NativeGeocoder,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private payPal: PayPal,
  ) { }

  ngOnInit() {
    OpenPay.setId('mhcwrzqbqvnc3urvi8dk');
​    OpenPay.setApiKey('pk_f8afc62cdff34f9eb583448fafee399a');
    OpenPay.setSandboxMode(false);
  }

  ionViewWillEnter(){
    let flag: boolean = true;

    this.admin = JSON.parse(localStorage.getItem('admin'));
    this.autocomplete = { input: '' };
    this.searchQuery = null;
    this.hasSearch   = false;
    this.autocompleteItems = [];
    
    this.send_terminal = this.admin.send_terminal;
    this.comm_stripe   = this.admin.comm_stripe;
    if(this.admin.paypal_client_id) this.paypal_id = this.admin.paypal_client_id;
    if(this.admin.stripe_client_id) this.stripe_id = this.admin.stripe_client_id;

    // Si no cuenta con metodo de pago predeterminado Redireccionamos
    if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
      flag = false;
      this.presentToast("Agrega un método de pago predeterminado.",'warning');
      this.nav.navigateForward('/option-pay');
    }else {
      this.otype = JSON.parse(localStorage.getItem('otype_user'));
      if (this.otype == 3) {
        // Si el metodo de pago es tarjeta D/B la obtenemos
        if (localStorage.getItem('cardPredClient') && localStorage.getItem('cardPredClient') != null) {
          this.getCard(localStorage.getItem('cardPredClient'));
        }else {
          this.presentToast("Agrega un método de pago predeterminado.",'warning');
          this.nav.navigateForward('/option-pay');
        }
      }
    }

    this.loadData();
  }

  async getCard(cardId)
  {
    // Obtenemos la info del usuario
    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.user = response.data;

      let allData = {
        'customer' : response.data.customer_id,
        'cardId'   : cardId
      };
      
      this.server.getCard(allData).subscribe((data:any) => {
        if (data.data.status == true) {
          this.cardData = data.data.data;
        }else {
          this.presentToast(data.data.description,'danger');
        }
      });
    });
  }

  loadData()
  {
    this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.address = response.data;
    });

    // Obtenemos la ubicación actual
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    this.server.GeocodeFromCoords(lattitude, longitude,this.admin.ApiKey_google).subscribe((data:any) => {
      let formatted_address = data.results[0].formatted_address;
      this.LocationNow = formatted_address;
      this.MyLocation.push({
        "lat"          : data.results[0].geometry.location.lat,
        "lng"          : data.results[0].geometry.location.lng,
        "address"      : this.LocationNow
      });
      
    });
   
  }

  search(ev)
  {
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();

    var val = ev.target.value;
    if(val && val.length > 0)
    {
      this.data      = null;
      this.hasSearch = val;
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input,location : new google.maps.LatLng(this.lat,this.lng),radius: 10 },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
    }
    else
    {
      this.ngOnInit();
      this.hasSearch = false;
    }
  }
  
  clearSearch() {
    this.searchQuery = null;
    this.hasSearch   = false;
    this.autocompleteItems = [];
    this.autocomplete = { input: '' };
  }

  SelectSearchResult(item)
  {
    if (this.set_type_address == 'origin') {
      this.address_origin = item.description;
      this.step_comm = 2;
      this.chargeMap(this.address_origin, 'address_origin');
    }else {
      this.address_destin = item.description;
      this.step_comm = 3;
      this.chargeMap(this.address_destin, 'address_destin');
    }
   
  }
  
  async saveAddress(item)
  {
    if (this.set_type_address == 'origin') {
      this.address_origin = item.address;
      this.step_comm = 2;
      this.chargeMap(this.address_origin, 'address_origin');
    }else {
      this.address_destin = item.address;
      this.step_comm = 3;
      this.chargeMap(this.address_destin, 'address_destin');
    }    
  }

  async removeAddress(id) {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    this.server.trashAddress(id).subscribe(data => {
      loading.dismiss();
      if (data) {
        this.presentToast("La dirección se ha eliminado...",'success');
        this.clearSearch();
      }else {
        this.presentToast(data,'danger');
      }
    });
  }

  next_step(step)
  {

    if (step == 'back') {
      this.step_comm  = Number(this.step_comm) - 1; 
    }

    if (step == "add_origin") {
      this.step_comm = 1;
      this.set_type_address = "origin";
      this.text_address = "Punto de recogida";
      this.clearSearch();

      setTimeout(() => {
        this.searchad.setFocus();
      }, 400);
    }else if (step == "add_destin") {
      if (this.address_origin) {
        this.set_type_address = "destination";
        this.text_address = "Punto de entrega";
        this.step_comm = 1;
        this.clearSearch();
        setTimeout(() => {
          this.searchad.setFocus();
        }, 400);
      }else {
        this.presentToast("Ingresa un punto de partida",'danger');
        this.next_step('add_origin');
      }
    }else if (step == 'ready') {
      this.step_comm = 0;
      setTimeout(() => {
        // Cargamos costos de envio
        this.ViewCostShipCommanded();
      }, 500);
    }
  }

  async ViewCostShipCommanded()
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    let allData = {
      lat_orig : this.lat_orig, 
      lng_orig  : this.lng_orig,
      lat_dest  : this.lat_dest,
      lng_dest  : this.lng_dest,
    }
    this.server.ViewCostShipCommanded(allData).subscribe((data:any) => {
      loading.dismiss();
      if (data.data.service == 1) {
        this.ready = true;
        this.cost_ship = data.data;
        this.total_amount = data.data.costs_ship;
      }else {
        this.presentToast("No se ha podido calcular los cargos de envio",'danger');
      }
    });
  }

  chargeMap(address, type)
  {
    // Obtenemos las coordenadas de la direccion de recogida
    this.server.GeocodeFromAddress(address,this.admin.ApiKey_google).subscribe((data:any) => {
      
      if (data.status != 'ZERO_RESULTS') {
        if (type == 'address_origin') {
          this.lat_orig = data.results[0].geometry.location.lat;
          this.lng_orig = data.results[0].geometry.location.lng;
        }else {
          this.lat_dest = data.results[0].geometry.location.lat;
          this.lng_dest = data.results[0].geometry.location.lng;
        }
      }else {
        this.presentToast("No se encontraro resultado de busqueda",'danger');
        this.step_comm = 1;
      }
    });
  }

  closeComm()
  {
    this.nav.navigateRoot('/home');
  }


  makeOrder()
  {
    if(this.otype == 2)
    {
      this.payPaypal();
    }
    else if(this.otype == 3)
    {
      this.chargeInProcess = true;
      this.payWithOpenPay();
    }
    else
    {
      this.order();
    }
  }

  async order()
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    let allData = {
      address_origin  : this.address_origin,
      lat_orig  : this.lat_orig,
      lng_orig  : this.lng_orig,
      address_destin  : this.address_destin,
      lat_dest  : this.lat_dest,
      lng_dest  : this.lng_dest,
      first_instr   : this.first_instr,
      second_instr  : this.second_instr,
      user_id : localStorage.getItem('user_id'),
      price_comm : this.iva_stripe,
      payment_method : this.otype,
      payment_id : this.payment_id,
      d_charges: this.cost_ship['costs_ship'],
      total: this.total_amount
    }

    this.server.OrderComm(allData).subscribe((data:any) => {
      loading.dismiss();
      if (data.data == 'done') {
        this.presentToast("Tu solicitud ha sido enviada",'success');
        this.nav.navigateRoot('/done-comm');
      }else {
        this.presentToast("Ha ocurrido un problema con el servido, por favor intente mas tarde.",'danger');
        this.nav.navigateRoot('/home');
      }
    });
  
  }

  payPaypal()
  { 
      this.payPal.init({
      PayPalEnvironmentProduction: this.paypal_id,
      PayPalEnvironmentSandbox: this.paypal_id
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment(this.total_amount, 'MXN', 'Description', 'sale');
          this.payPal.renderSinglePaymentUI(payment).then((res) => {
            
            this.payment_id = res.response.id;

            if(this.payment_id)
            {
              this.order();
            }

          }, () => {
            this.presentToast("Paypal Transaction Cancelled","danger");
          });
        }, () => {
          this.presentToast("Error in configuration","danger");
        });
      }, () => {
        this.presentToast("Error in initialization, maybe PayPal isn't supported","danger");
      });
  }

  payWithOpenPay()
  {
    if (this.cardData) {

      // Obtenemos el Customer
      let dat = {
        'customer' : this.user.customer_id
      };
      
      this.server.getClient(dat).subscribe((customer:any) => {
      
        if (customer.data.status == true) {
          var deviceSessionId = OpenPay.deviceData.setup();
          let order_id        = (deviceSessionId + Math.floor(Math.random()*2000000000)+1).toString().substring(1);
          let allData = {
            'source_id' : this.cardData['id'],
            'amount'    : this.data.total,
            'order_id'    : order_id,
            'device_session_id' : deviceSessionId,
            'customer_id' :  this.user.customer_id
          }

          this.server.chargeClient(allData).subscribe((data:any) => {
            this.chargeInProcess = false;
            if (data.data.status == true) {
              this.presentToast("Pago aprobado con éxito.",'success');
              this.payment_id = data.data.data.id;
              this.order();
            }else {
              this.presentToast(data.data.data.description,'danger');
            }
          });
        }else {
          this.presentToast(customer.data.data.description,'danger');
        }
      });
      
    }
  }

  async makePayment(token)
  {
    const loading = await this.loadingController.create({
      message: 'Enviando Informacion...',
      mode: 'ios'
    });
    await loading.present();

    this.server.makeStripePayment("?token="+token+"&amount="+this.total_amount).subscribe((response:any) => {

    if(response.data == "done")
    {
        this.payment_id = response.id;

        if(this.payment_id)
        {
          this.order();
        }
    }
    else
    {
      this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.","danger");
    }

    loading.dismiss();

    });
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top',
      color:color
    });
    toast.present();
  }

}