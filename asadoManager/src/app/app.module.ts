import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { DetalleComponent } from './list/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAGAH3qnf2FNgw4C36DPsgBUDxX7U9I2S4",
      authDomain: "proyectoasado.firebaseapp.com",
      databaseURL: "https://proyectoasado.firebaseio.com",
      projectId: "proyectoasado",
      storageBucket: "proyectoasado.appspot.com",
      messagingSenderId: "447296264283"
    }),
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
