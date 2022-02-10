// Angular

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Store
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PeliculasStoreModule } from './store/peliculas.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    //Store
    PeliculasStoreModule,
    /** This comment is for information only
     *  PeliculasStoreModule handle  the store related for peliculas
     *  removing  not necessary imports and splitting ngrx in small pieces
     *  binded by this module and a file  called *.facade.ts which is the main
     *  in every feature and is who is as a bridge between view and store
     *  **/
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
