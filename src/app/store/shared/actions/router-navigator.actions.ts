import { RouterReducerState } from '@ngrx/router-store';
// Ngrx
import { createAction, props } from '@ngrx/store';

// VIEW DATA REQUEST ACTIONS

export const navigate = createAction(
  '[Router Navigator] Navigate',
  props<{ router: RouterReducerState }>()
);
