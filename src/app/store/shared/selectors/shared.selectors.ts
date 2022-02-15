import { RouterReducerState } from '@ngrx/router-store';
// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { sharedState } from '../reducers/reducer-map';

export const getSharedModuleState =
  createFeatureSelector<sharedState>('shared');

export const getRouterReducerModuleState =
  createFeatureSelector<RouterReducerState>('routerReducerState');

// VIEW FORM SELECTORS
export const getSharedFormState = createSelector(
  getSharedModuleState,
  (state) => state.sharedFormState
);

export const getRouteNavigationDataState = createSelector(
  getSharedModuleState,
  (state) => state.appRouterReducer
);

export const getLoading = createSelector(
  getSharedFormState,
  (state) => state.loading
);
