import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,LoadingController,Events } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-verfycode',
  templateUrl: './verfycode.page.html',
  styleUrls: ['./verfycode.page.scss'],
})
export class VerfycodePage implements OnInit {

  user_id:any = 'null';
  Code: String;
  phone: any = '';
  stateVerify;
  windowsRef:any;
  confirmationResult: any;
  txtbnt: any = 'Verificar';

  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    public keyboard:Keyboard,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: Events,
    public firebaseAuthentication: FirebaseAuthentication
  ) { 
    if (!localStorage.getItem('confirmationResult')) {
      this.nav.navigateForward('/home');
    }
  }

  ngOnInit() {
    this.confirmationResult = localStorage.getItem('confirmationResult');
    this.phone = localStorage.getItem('phone');
    if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
      this.user_id = localStorage.getItem('user_id');
    }
  }

  async verfyCode()
  {
    const loading = await this.loadingController.create({
      message: 'Validando...',
    });
    await loading.present();
    if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
      let verificationCode: string = this.Code.toString();
      
      this.firebaseAuthentication.signInWithVerificationId(this.confirmationResult,verificationCode).then((data:any) => {
        var allData = {
          user_id : this.user_id, 
          phone : this.phone
        }  
        
        this.server.chkUser(allData).subscribe((res:any) => {
          loading.dismiss();
          if (res.msg == 'phone_exist') {
            this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.","danger");
          }
          else if(res.msg == "not_exist")
          {
            this.presentToast("Termina tu registro ingresando tus datos de contacto. ","warning");
            localStorage.setItem("number_phone",JSON.stringify(this.phone));
            this.nav.navigateRoot('/signup');
          }
          else {
            this.presentToast('Bienvenido(a) de nuevo...','success');
            localStorage.setItem('user_id',res.user_id);
            this.events.publish('user_login', res.user_id);
            this.server.SignPhone({phone : this.phone, user_id: res.user_id}).subscribe((req:any) => {
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
      });
    }else {
      loading.dismiss();
      this.presentToast('Porfavor Ingresa un Codigo valido!','danger');
    }
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
