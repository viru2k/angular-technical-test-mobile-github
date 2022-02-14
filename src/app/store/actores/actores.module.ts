// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { ActoresEffects } from './effects/actores.effects';
import { ActoresReducers } from './reducers/reducer-map';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('actores', ActoresReducers),
    EffectsModule.forFeature([ActoresEffects]),
  ],
  providers: [],
})
export class ActorsStoreModule {}
