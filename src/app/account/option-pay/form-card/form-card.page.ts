import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ServerService } from '../../../service/server.service';
 
declare var OpenPay;
declare var $this;
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.page.html',
  styleUrls: ['./form-card.page.scss'],
})
export class FormCardPage implements OnInit {

  user:any;
  loadingCard: any;
  deviceSessionId: any;
  constructor(
    public server: ServerService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    OpenPay.setId('mhcwrzqbqvnc3urvi8dk');
​    OpenPay.setApiKey('pk_f8afc62cdff34f9eb583448fafee399a');
    OpenPay.setSandboxMode(false);
   
    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.user = response.data;
    });
  }

  async createToken(data)
  {
    
    const loading = await this.loadingController.create({
      message: 'Guardando datos...'
    });
    await loading.present();

    let deviceSessionId = OpenPay.deviceData.setup();
    

    // Generamos el token de la tarjeta
    let ParamsToken = {
      "card_number": data.card_number, //"5555555555554444",
      "holder_name": data.holder_name, //"Juan Perez Ramirez",
      "expiration_year":data.expiration_year, //"21",
      "expiration_month": data.expiration_month, //"06",
      "cvv2":data.cvv2, //"110",
    }
    
    console.log(ParamsToken);

    OpenPay.token.create(ParamsToken,(suc,err) => {
      if (err) {
        this.presentToast(err.message,'danger');
      }else {
        var cardRequest = {
          'user_id'  : this.user.id,
          "customer" : this.user.customer_id,
          'token_id' : suc.data.id,
          'deviceSessionId' : deviceSessionId
        }
    
        // Generamos el Token de la tarjeta
        this.server.setCardClient(cardRequest).subscribe((data:any) => {
          
          loading.dismiss();
          if (data.data != 'error') {
            // this.loadingCard.dismiss();
            if (data.data.status == true) {
              this.presentToast("Tarjeta agregada con exito.",'success');
              this.modalController.dismiss();
            }else {
              this.presentToast(this.ControlFails(data.data.data.error_code),'danger');
            }
          }else {
            this.presentToast("Algo ha ocurrido mal, por favor vuelve a intentar mas tarde",'danger');
          }
        });
      }
    });
    
  }
 
  ControlFails(code_error)
  {
    switch (code_error) {
      case 3001:
          return 'La tarjeta fue rechazada.'
        break;
      case 3002:
        return 'La tarjeta ha expirado.'
        break;
      case 3003:
        return 'La tarjeta no tiene fondos suficientes.'
        break;
      case 3004:
        return 'La tarjeta ha sido identificada como una tarjeta robada.'
        break;
      case 3005:
        return 'La tarjeta ha sido rechazada por el sistema antifraudes.'
        break;
      case 1003:
        return 'La tarjeta ha sido rechazada por el sistema antifraudes.'
        break;
      default:
        return 'La tarjeta fue rechazada.';
        break;
    }
  }

  closeForm()
  {
    this.modalController.dismiss();
  }
   
  async presentToast(txt, color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }
}
