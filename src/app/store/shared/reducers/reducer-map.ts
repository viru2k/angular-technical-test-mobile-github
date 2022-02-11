// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { sharedFormState, sharedFormReducerFunction } from './shared.reducers';

export interface sharedState {
  sharedFormState: sharedFormState;
}
export const sharedsReducers: ActionReducerMap<sharedState> = {
  sharedFormState: sharedFormReducerFunction,
};
