// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { MovieEffects } from './effects/movie.effects';
import { MovieReducers } from './reducers/reducer-map';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('Movie', MovieReducers),
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [],
})
export class MoviesStoreModule {}
