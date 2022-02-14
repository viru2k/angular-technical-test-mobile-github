// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import { CompaniesEffects } from './effects/company.effects';
import { CompanyReducers } from './reducers/reducer-map';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('company', CompanyReducers),
    EffectsModule.forFeature([CompaniesEffects]),
  ],
  providers: [],
})
export class CompaniesStoreModule {}
