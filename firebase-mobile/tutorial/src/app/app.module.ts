import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import {ListaContatosPage} from "../pages/lista-contatos/lista-contatos";

/**
 * To enable permission enabled to create;edit;delete on database go to:
 * https://stackoverflow.com/questions/37403747/firebase-permission-denied
 * */
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {EditaContatoPage} from "../pages/edita-contato/edita-contato";

export const firebaseConfig ={
  apiKey: "AIzaSyCSzR_Iq2kMi9TCBIGx3JoL87vz9RscwAA",
  authDomain: "tutorial-ionic2.firebaseapp.com",
  databaseURL: "https://tutorial-ionic2.firebaseio.com",
  projectId: "tutorial-ionic2",
  storageBucket: "",
  messagingSenderId: "794962047722"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ListaContatosPage,
    EditaContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ListaContatosPage,
    EditaContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
