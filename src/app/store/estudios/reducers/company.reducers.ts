// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { CompanyActions } from '../actions/action-types';

// API
import { Company } from '../../../models/Company.model';

// DATA VIEW STATE
export interface CompanyDataState {
  companies: Company[];
}

export const initialState: CompanyDataState = {
  companies: null,
};

const CompanyReducer = createReducer(
  initialState,
  on(CompanyActions.getCompaniesSuccess, (state, action) => {
    return {
      ...state,
      Movies: action.payload,
    };
  }),

  on(CompanyActions.clearData, () => {
    return { ...initialState };
  })
);

export function CompanyReducerFunction(
  state: CompanyDataState | undefined,
  action: Action
): any {
  return CompanyReducer(state, action);
}

// FORM VIEW STATE
export interface CompanyFormState {
  companyList: Company[];
  selectedCompany: Company;
  companyName: string;
}

export const initialFormState: CompanyFormState = {
  companyList: null,
  selectedCompany: null,
  companyName: null,
};

const CompanyFormReducer = createReducer(
  initialFormState,
  on(CompanyActions.getCompaniesSuccess, (state, action) => {
    return {
      ...state,
      companyList: action.payload,
    };
  }),

  on(CompanyActions.setCompanySuccess, (state, action) => {
    return {
      ...state,
      companyList: action.payload,
    };
  }),
  on(CompanyActions.updateCompanySuccess, (state, action) => {
    return {
      ...state,
      companyList: action.payload,
    };
  }),
  on(CompanyActions.deleteCompanySuccess, (state, action) => {
    return {
      ...state,
      companyList: action.payload,
    };
  }),
  on(CompanyActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(CompanyActions.getCompaniesSuccess, (state, action) => {
    return {
      ...state,
      companyList: action.payload,
    };
  }),
  on(CompanyActions.clearCurrentCompanyForm, (state) => {
    return {
      ...state,
      selectedCompany: null,
    };
  }),
  on(CompanyActions.clearForm, () => {
    return initialFormState;
  })
);

export function CompanyFormReducerFunction(
  state: CompanyFormState | undefined,
  action: Action
): CompanyFormState {
  return CompanyFormReducer(state, action);
}
