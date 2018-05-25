import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from '../providers';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {

      // Configuracion de aspecto global app Ionic
      // https://ionicframework.com/docs/api/config/Config/

      mode: 'ios' // 'wp', 'md'

      //backButtonText: 'Go Back',
      //iconMode: 'ios',
      //modalEnter: 'modal-slide-in',
      //modalLeave: 'modal-slide-out',
      //tabsPlacement: 'bottom',
      //pageTransition: 'ios-transition'
    }
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Api,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
