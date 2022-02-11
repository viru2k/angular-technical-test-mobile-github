// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';

// Store

import { sharedsReducers } from './reducers/reducer-map';
@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('shared', sharedsReducers)],
  providers: [],
})
export class SharedStoreModule {}
