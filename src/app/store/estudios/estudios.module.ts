// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { EstudiosEffects } from './effects/estudios.effects';
import { EstudiosReducers } from './reducers/reducer-map';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('estudios', EstudiosReducers),
    EffectsModule.forFeature([EstudiosEffects]),
  ],
  providers: [],
})
export class EstudiosStoreModule {}
