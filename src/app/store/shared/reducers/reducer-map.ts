// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { sharedFormState, sharedFormReducerFunction } from './shared.reducers';
import { routerReducer } from '@ngrx/router-store';
import { RouterNavigatorDataState } from './router-navigator.reducers';

export interface sharedState {
  sharedFormState: sharedFormState;

  appRouterReducer: RouterNavigatorDataState;
}
export const sharedsReducers: ActionReducerMap<sharedState> = {
  sharedFormState: sharedFormReducerFunction,

  appRouterReducer: routerReducer,
};
