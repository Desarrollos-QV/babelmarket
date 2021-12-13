import { Component, Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform,NavController,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ServerService } from './service/server.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  appType:number = 0;
  dir:string = "ltr";
  text:any;
  apiKey: any;
  public appPages:any = [];

  
  admin:any;
  data:any;
  constructor(
    public server : ServerService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public nav : NavController,
    private oneSignal: OneSignal,
    public events: Events,
    public renderer: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {

    
    this.loadData(localStorage.getItem('city_id')+"?ss=ss");
    this.events.subscribe('admin', (type) => {  
      this.admin = type;
    });

    if(localStorage.getItem('admin'))
    {
      this.admin = JSON.parse(localStorage.getItem('admin'));
    }
    
    // Cargamos el menu lateral
    this.loadMenu();
    // Obtenemos actualizacion del menu
    this.events.subscribe('text', (text) => {
      this.text = text;
      this.appPages = [
        {
          title: text.home,
          url: '/home',
          icon: 'home'
        },
        {
          title: "Métodos de pago",
          url: '/option-pay',
          icon: 'wallet'
        },
        {
          title: text.account,
          url: '/profile',
          icon: 'person'
        },
        {
          title: text.order,
          url: '/order',
          icon: 'cart'
        }
      ];
    });

   
    this.initializeApp();

    this.events.subscribe('user_login', (id) => {
      this.subPush(id);
    });

  }

  loadMenu()
  {
    this.appPages = [
      {
        title: "Inicio",
        url: '/home',
        icon: 'home'
      },
      {
        title: "Cuenta",
        url: '/profile',
        icon: 'person'
      },
      {
        title: "Métodos de pago",
        url: '/option-pay',
        icon: 'wallet'
      },
      {
        title: "Pedidos",
        url: '/order',
        icon: 'cart'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#ffffff");
      this.statusBar.styleDefault();
    });
  }
    
  async loadData(city_id)
  {
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.homepage(city_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      
      this.data = response.data;
      this.text = response.data.text;

      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);
      this.apiKey = response.data.admin.ApiKey_google;
      this.injectSDK().then((res) => {
        // Obtenemos la Geolocalicacion
        if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
          this.server.getGeolocation();
        }
      });

      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
      
      // Registramos en oneSignal
      this.subPush();
    });
  }
  
  subPush(id = 0)
  {
    this.oneSignal.startInit('e1e128a0-915b-44b4-9c41-0899eace7cf9', '603854625473');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
  });
    
  if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
  {
    this.oneSignal.sendTags({user_id: localStorage.getItem('user_id')});
    this.nav.navigateRoot('/home');
  }else {
    this.nav.navigateRoot('/welcome');
  }

  if(id > 0) this.oneSignal.sendTags({user_id: id});
  
  this.oneSignal.endInit();
  }
  
  logout()
  {
    localStorage.setItem('user_id',null);
    localStorage.removeItem('user_id');
    this.nav.navigateRoot('/welcome');
  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

        window['mapInit'] = () => {
            resolve(true);
        }

        let script = this.renderer.createElement('script');
        script.id = 'googleMaps';

        if(this.apiKey){
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';       
        }

        this.renderer.appendChild(this._document.body, script);

    });
  }
}
