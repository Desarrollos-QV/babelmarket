import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController, NavController, Platform, LoadingController, Events, IonInput, MenuController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';


import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  @ViewChild("phone", {static: false}) phone : IonInput;
  @ViewChild("otp1", {static: false}) otp1 : IonInput;
  
  text:any;
  user_id: any = null;
  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  
  

  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verifyCode: Boolean = false;
  
  isKeyboardHide=true;
  number_phone: any;
  Code: String;
  OTP;
  OTPorigin;
  countHash: any;

  otp_1;
  otp_2;
  otp_3;
  otp_4;
  otp_5;
  
  isCheckedPC: boolean = true;
  timer_code: any;
  time_verify: boolean = false;
  resend_stat: boolean = false;
 
  stateVerify;
  windowsRef:any;
  confirmationResult: any;
  prefjix: any = "+521";
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public keyboard:Keyboard,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: Events, 
    public menu: MenuController,
    public platform: Platform,
    public firebaseAuthentication: FirebaseAuthentication
  ){
    this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit()
  { 
    
    this.windowsRef = this.server.windowRef;
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
    this.phone.setFocus();
    this.menu.enable(false);
    this.Code = '';
    this.verifyCode = false;

    if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
      this.user_id = localStorage.getItem('user_id');
    }

    this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
      size: "invisible",
      callback: function(response) {
        this.login();
      }
    });
  }

  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }else {
      this.valid();
    }
     
  }

  async login()
  {
    const loading = await this.loadingController.create({
      mode:'md'
    });
    await loading.present();

    if (this.phone.value.toString().length > 0) {
        this.number_phone = "+521"+this.phone.value.toString();
        
        this.firebaseAuthentication.verifyPhoneNumber(this.number_phone,3000).then((verifyID:any) => {
          localStorage.setItem('confirmationResult',verifyID);
          localStorage.setItem('phone',this.phone.value.toString());
          loading.dismiss();
          this.nav.navigateForward('/verfycode');
        });
    }
  }
 
  resend() {
    this.Code = '';
    this.OTP = '';
    this.OTPorigin = '';
    this.verifyCode = false;
  }

  async valid() {
    this.time_verify = false;
    clearInterval(this.timer_code);

    const loading = await this.loadingController.create({
      message: 'Validando...',
    });
    await loading.present();
    let Code = this.otp_1+this.otp_2+this.otp_3+this.otp_4+this.otp_5;
    // Validamos
      if (Code == this.OTPorigin) {
        var allData = {
          user_id : this.user_id, 
          phone : this.number_phone
        }  
        
        this.server.chkUser(allData).subscribe((res:any) => {
          if (res.msg == 'phone_exist') {
            this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.","danger");
            this.resend();
          }
          else if(res.msg == "not_exist")
          {
            this.presentToast("Termina tu registro ingresando tus datos de contacto. ","warning");
            localStorage.setItem("number_phone",JSON.stringify(this.number_phone));
            this.nav.navigateRoot('/signup');
          }
          else {
            this.presentToast('Bienvenido(a) de nuevo...','success');
            localStorage.removeItem('number_phone');
            localStorage.setItem('user_id',res.user_id);
            this.events.publish('user_login', res.user_id);
            this.server.SignPhone({phone : this.number_phone, user_id: res.user_id}).subscribe((req:any) => {
              if (req.msg == 'done') {
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    redirect: 'home'
                  }
                };
                this.nav.navigateForward(['/waitpage'], navigationExtras);
              }else {
                this.presentToast(req.msg,'danger');
              }
            });
          }
        });
        loading.dismiss();
      }else {
        loading.dismiss();
        this.presentToast("El Codigo OTP no es válido","danger");
        this.Code = '';
        this.resend_stat = true;
      }
    
  }
  
  TimerCode()
  {
    let i = 15;
    this.timer_code = setInterval(() => {
      i = i-1
      
      if (i == 0) {
        this.resend_stat = true;
        this.time_verify = false;
        clearInterval(this.timer_code);
        this.TimerCode();
      }
    }, 1000);
  }


  async presentToast(txt,color) {
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
