// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { ActoresState } from '../reducers/reducer-map';

export const getActoresModuleState =
  createFeatureSelector<ActoresState>('actores');

// VIEW DATA SELECTORS
export const getActoresState = createSelector(
  getActoresModuleState,
  (state) => state.ActoresDataState
);
/* 
export const getActor = createSelector(
  ActoresDataState,
  (state) => state.actores
); */

export const getActores = createSelector(
  getActoresState,
  (state) => (state) => state
);

export const isViewReady = createSelector(getActoresState, (state) => {
  return !!state.actores;
});

// VIEW FORM SELECTORS
export const getActoresFormState = createSelector(
  getActoresModuleState,
  (state) => state.ActoresFormState
);

export const getActorList = createSelector(
  getActoresFormState,
  (state) => state.estudioList
);

export const getSelectedActor = createSelector(
  getActoresFormState,
  (state) => state.selectedActor
);

export const getSelectedPersona = createSelector(
  getActoresFormState,
  (state) => state.selectedActor
);
