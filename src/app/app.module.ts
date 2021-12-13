import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

// Material Design
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon'; 
import { MatRadioModule } from '@angular/material/radio'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PayPal } from '@ionic-native/paypal/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import { Keyboard } from '@ionic-native/keyboard/ngx';

// Facebook
import { Facebook } from '@ionic-native/facebook/ngx';
// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

// ModalBox
import { OptionPageModule } from './option/option.module';
import { OfferPageModule } from './offer/offer.module';
import { CommandedPageModule } from './commanded/commanded.module';
import { FormCardPageModule } from './account/option-pay/form-card/form-card.module'; 
import { InfoFeePageModule } from './cart/info-fee/info-fee.module';
import { RateTripePageModule } from './done-comm/rate-tripe/rate-tripe.module'; 
 

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(), //{_forceStatusbarPadding: true}
    AppRoutingModule,
    HttpClientModule,

    // ModalBox
    OptionPageModule,
    OfferPageModule,
    CommandedPageModule,
    FormCardPageModule,
    InfoFeePageModule,
    RateTripePageModule,
    
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  
  providers: [
    Geolocation,
    NativeGeocoder,
    PayPal,
    StatusBar,
    SplashScreen,
    OneSignal,
    Keyboard,
    Facebook,
    FirebaseAuthentication,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
