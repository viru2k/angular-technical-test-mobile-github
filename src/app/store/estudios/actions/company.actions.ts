// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { Company } from '../../../models/Company.model';

import { Actor } from '../../../models/Actor.model';

// VIEW DATA REQUEST ACTIONS
export const getCompanies = createAction('[Companies] Get Companies');

export const getCompaniesSuccess = createAction(
  '[Companies] Get Companies Success',
  props<{ payload: Company[] }>()
);

export const getCompanyById = createAction(
  '[Companies] Get Company By Id',
  props<{ payload: Company }>()
);
export const getCompanyByIdSuccess = createAction(
  '[Companies] Get Company By Id Success',
  props<{ payload: Company }>()
);
//
export const getCompaniesFail = createAction(
  '[Companies] Get Companies Fail',
  props<{ payload: any }>()
);

export const deleteCompany = createAction(
  '[Companies] Remove Companies',
  props<{ company: Company }>()
);

export const deleteCompanySuccess = createAction(
  '[Companies] Remove Companies Success',
  props<{ payload: Company[] }>()
);

export const setCompany = createAction(
  '[Companies] Set Companies',
  props<{ company: Company }>()
);

export const setCompanySuccess = createAction(
  '[Companies] Set Companies Success',
  props<{ payload: Company[] }>()
);

export const updateCompany = createAction(
  '[Companies] Update Companies',
  props<{ company: Company }>()
);

export const updateCompanySuccess = createAction(
  '[Companies] Update Companies Success',
  props<{ payload: Company[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Companies] Update Form',
  props<{
    [key: string]: any;
  }>()
);

export const deleteSelectedCast = createAction(
  '[Companies] Remove Selected Cast',
  props<{ persona: Actor; company: Company[] }>()
);

export const deleteSelectedCastSuccess = createAction(
  '[Companies] Remove Companies Success',
  props<{ payload: Company[] }>()
);

export const setSelectedCast = createAction(
  '[Companies] Set Selected Cast',
  props<{ persona: Actor; company: Company[] }>()
);

export const setSelectedCastSuccess = createAction(
  '[Companies] Set Selected Cast Success',
  props<{ payload: Company[] }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Companies] Clear Form');

export const clearCurrentCompanyForm = createAction(
  '[Companies] Clear Current Companies Form'
);

export const clearData = createAction('[Companies] Clear  Data');
