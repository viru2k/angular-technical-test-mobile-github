// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { routerNavigatorActions } from '../actions/action-types';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

// DATA  VIEW STATE
export interface RouterNavigatorDataState {
  url: string;
  router: RouterReducerState;
}

export const appRouterReducer = {
  router: routerReducer,
};

export const initialDataState: RouterNavigatorDataState = {
  url: null,
  router: null,
};

const routerNavigatorDataReducer = createReducer(
  initialDataState,
  on(routerNavigatorActions.navigate, (state, payload) => {
    return {
      ...state,
      payload: payload,
    };
  })
);

export type MergedRouteReducerState =
  RouterReducerState<RouterNavigatorDataState>;

export function routerNavigatorDataReducerFunction(
  state: RouterNavigatorDataState | undefined,
  action: Action
): RouterNavigatorDataState {
  return routerNavigatorDataReducer(state, action);
}
