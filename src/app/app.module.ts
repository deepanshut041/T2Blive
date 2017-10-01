import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

//Firebase config.....
export const firebaseConfig = {
  apiKey: "AIzaSyBeCWwiGzAxu3N-ygz7MpR5v3_n5nmIdv8",
  authDomain: "t2b-live.firebaseapp.com",
  databaseURL: "https://t2b-live.firebaseio.com",
  projectId: "t2b-live",
  storageBucket: "",
  messagingSenderId: "782395750079"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HomeModule, AppRoutingModule
    , FormsModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
