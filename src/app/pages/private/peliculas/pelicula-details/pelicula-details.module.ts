import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaDetailsPageRoutingModule } from './pelicula-details-routing.module';

import { PeliculaDetailsPage } from './pelicula-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PeliculaDetailsPageRoutingModule,
  ],
  declarations: [PeliculaDetailsPage],
})
export class PeliculaDetailsPageModule {}
