// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { sharedState } from '../reducers/reducer-map';

export const getRouterNavigatorModuleState =
  createFeatureSelector<sharedState>('router');

// VIEW FORM SELECTORS
export const getCurrentRoute = createSelector(
  getRouterNavigatorModuleState,
  (state) => state.appRouterReducer.router
);
