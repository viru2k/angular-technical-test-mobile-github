// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { EstudiosState } from '../reducers/reducer-map';

export const getEstudiosModuleState =
  createFeatureSelector<EstudiosState>('peliculas');

// VIEW DATA SELECTORS
export const getEstudiosState = createSelector(
  getEstudiosModuleState,
  (state) => state.EstudiosDataState
);
/* 
export const getEstudio = createSelector(
  EstudiosDataState,
  (state) => state.estudios
); */

export const getEstudios = createSelector(
  getEstudiosState,
  (state) => (state) => state
);

export const isViewReady = createSelector(getEstudiosState, (state) => {
  return !!state.estudios;
});

// VIEW FORM SELECTORS
export const getEstudiosFormState = createSelector(
  getEstudiosModuleState,
  (state) => state.EstudiosFormState
);

export const getEstudioList = createSelector(
  getEstudiosFormState,
  (state) => state.estudioList
);

export const getSelectedEstudio = createSelector(
  getEstudiosFormState,
  (state) => state.selectedEstudio
);

export const getSelectedPersona = createSelector(
  getEstudiosFormState,
  (state) => state.selectedEstudio
);
