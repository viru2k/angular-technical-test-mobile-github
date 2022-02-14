// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  CompanyDataState,
  CompanyFormState,
  CompanyReducerFunction,
  CompanyFormReducerFunction,
} from './company.reducers';

export interface CompanyState {
  CompanyDataState: CompanyDataState;
  CompanyFormState: CompanyFormState;
}
export const CompanyReducers: ActionReducerMap<CompanyState> = {
  CompanyDataState: CompanyReducerFunction,
  CompanyFormState: CompanyFormReducerFunction,
};
