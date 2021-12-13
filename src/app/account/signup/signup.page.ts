import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,Platform,LoadingController,Events } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  logedd: any;
  text:any;
  dating = [];
  phone: any;
  login_view: boolean = false;
  isKeyboardHide=true;
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: Events,
    public keyboard:Keyboard
  ){
    this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit()
  {
    this.keyboard.onKeyboardWillShow().subscribe(()=>{
      this.isKeyboardHide=false;
      // console.log('SHOWK');
    });

    this.keyboard.onKeyboardWillHide().subscribe(()=>{
      this.isKeyboardHide=true;
      // console.log('HIDEK');
    });
  }

  ionViewWillEnter(){
    if (localStorage.getItem('number_phone') && localStorage.getItem('number_phone') != null) {
      this.login_view = true;
      this.phone = JSON.parse(localStorage.getItem('number_phone'));
    }  
  }

  async signup(data)
  {
    const loading = await this.loadingController.create({
      mode: 'md'
    });
    await loading.present();

    this.server.signup(data).subscribe((response:any) => {
      
      if(response.msg != "done")
      {
        this.presentToast(response.msg,'danger');
      }
      else
      {
        localStorage.removeItem('number_phone');
        localStorage.setItem('user_id',response.user_id);
        this.events.publish('user_login', response.user_id);
        this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');

        if (this.login_view == true) { // Viene ya de la verificacion telefonica
          let navigationExtras: NavigationExtras = {
            queryParams: {
              redirect: 'home'
            }
          };
          this.nav.navigateForward(['/waitpage'], navigationExtras);
        }else {
          this.nav.navigateRoot('/login');
        }
        
      }

      loading.dismiss();
    });
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

  goBck()
  {
    this.nav.navigateRoot('welcome');  
  }
}
