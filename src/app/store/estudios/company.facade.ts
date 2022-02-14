// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store
import { CompanyActions } from './actions/action-types';
import { CompanyState } from './reducers/reducer-map';
import { CompanyFormState } from './reducers/company.reducers';

import * as fromSelectors from './selectors/company.selectors';
import { Company } from '../../models/Company.model';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseCompanyFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  /*   companies$: Observable<Company[]> = this.parentStore.pipe(
    select(fromSelectors.getCompanies)
  ); */

  companyList$: Observable<Company[]> = this.parentStore.pipe(
    select(fromSelectors.getCompanyList)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<CompanyFormState> = this.parentStore.pipe(
    select(fromSelectors.getCompanyFormState)
  );

  selectedCompany$: Observable<Company> = this.parentStore.pipe(
    select(fromSelectors.getSelectedCompany)
  );

  constructor(private parentStore: Store<CompanyState>) {}

  loadViewData(): void {
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
      this.parentStore.dispatch(CompanyActions.getCompanies());
    });
  }

  updateCurrentCompany(selectedCompany: Company): void {
    this.parentStore.dispatch(CompanyActions.updateForm({ selectedCompany }));
  }

  setCompany(company: Company): void {
    this.parentStore.dispatch(CompanyActions.setCompany({ company }));
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updateCompany(company: Company): void {
    this.parentStore.dispatch(CompanyActions.updateCompany({ company }));
  }

  deleteCompany(company: Company): void {
    this.parentStore.dispatch(CompanyActions.deleteCompany({ company }));
  }

  clearCompanies(): void {
    this.parentStore.dispatch(CompanyActions.clearData());
  }

  clearCompaniesForm(): void {
    this.parentStore.dispatch(CompanyActions.clearForm());
  }

  clearCurrentCompanyForm(): void {
    this.parentStore.dispatch(CompanyActions.clearCurrentCompanyForm());
  }
}
