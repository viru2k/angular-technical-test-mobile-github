// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { sharedActions } from '../actions/action-types';

// FORM VIEW STATE
export interface sharedFormState {
  loading: boolean;
}

export const initialFormState: sharedFormState = {
  loading: false,
};

const sharedFormReducer = createReducer(
  initialFormState,
  on(sharedActions.showLoader, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(sharedActions.hideLoader, (state) => {
    return {
      ...state,
      loading: false,
    };
  })
);

export function sharedFormReducerFunction(
  state: sharedFormState | undefined,
  action: Action
): sharedFormState {
  return sharedFormReducer(state, action);
}
