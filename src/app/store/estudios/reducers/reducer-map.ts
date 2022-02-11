// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  EstudiosDataState,
  EstudiosFormState,
  EstudiosReducerFunction,
  EstudiosFormReducerFunction,
} from './estudios.reducers';

export interface EstudiosState {
  EstudiosDataState: EstudiosDataState;
  EstudiosFormState: EstudiosFormState;
}
export const EstudiosReducers: ActionReducerMap<EstudiosState> = {
  EstudiosDataState: EstudiosReducerFunction,
  EstudiosFormState: EstudiosFormReducerFunction,
};
