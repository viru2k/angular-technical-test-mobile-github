// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  ActoresDataState,
  ActoresFormState,
  ActoresReducerFunction,
  ActoresFormReducerFunction,
} from './actores.reducers';

export interface ActoresState {
  ActoresDataState: ActoresDataState;
  ActoresFormState: ActoresFormState;
}
export const ActoresReducers: ActionReducerMap<ActoresState> = {
  ActoresDataState: ActoresReducerFunction,
  ActoresFormState: ActoresFormReducerFunction,
};
