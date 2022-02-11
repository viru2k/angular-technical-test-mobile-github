// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { sharedState } from '../reducers/reducer-map';

export const getSharedModuleState =
  createFeatureSelector<sharedState>('shared');

// VIEW FORM SELECTORS
export const getSharedFormState = createSelector(
  getSharedModuleState,
  (state) => state.sharedFormState
);

export const getLoading = createSelector(
  getSharedFormState,
  (state) => state.loading
);
