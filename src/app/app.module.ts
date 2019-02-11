import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataStorageProvider } from '../providers/data-storage/data-storage';
import { ModalPage } from '../pages/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataStorageProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataStorageProvider
  ]
})
export class AppModule {}
