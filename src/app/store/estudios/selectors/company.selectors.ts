// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { CompanyState } from '../reducers/reducer-map';

export const getCompanyModuleState =
  createFeatureSelector<CompanyState>('Company');

// VIEW DATA SELECTORS
export const getCompanyDataState = createSelector(
  getCompanyModuleState,
  (state) => state.CompanyDataState
);

export const getCompanies = createSelector(
  getCompanyDataState,
  (state) => state.companies
);

export const isViewReady = createSelector(getCompanyDataState, (state) => {
  return !!state.companies;
});

// VIEW FORM SELECTORS
export const getCompanyFormState = createSelector(
  getCompanyModuleState,
  (state) => state.CompanyFormState
);

export const getCompanyList = createSelector(
  getCompanyFormState,
  (state) => state.companyList
);

export const getSelectedCompany = createSelector(
  getCompanyFormState,
  (state) => state.selectedCompany
);
