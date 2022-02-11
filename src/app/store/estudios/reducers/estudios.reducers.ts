// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { EstudiosActions } from '../actions/action-types';

// API
import { Estudio } from '../../../models/Estudio.model';
import { Persona } from '../../../models/Persona.model';

// DATA VIEW STATE
export interface EstudiosDataState {
  estudios: Estudio[];
}

export const initialState: EstudiosDataState = {
  estudios: null,
};

const EstudiosReducer = createReducer(
  initialState,
  on(EstudiosActions.getEstudiosSuccess, (state, action) => {
    return {
      ...state,
      peliculas: action.payload,
    };
  }),

  on(EstudiosActions.clearData, () => {
    return { ...initialState };
  })
);

export function EstudiosReducerFunction(
  state: EstudiosDataState | undefined,
  action: Action
): any {
  return EstudiosReducer(state, action);
}

// FORM VIEW STATE
export interface EstudiosFormState {
  estudioList: Estudio[];
  selectedEstudio: Estudio;
  estudioNombre: string;
}

export const initialFormState: EstudiosFormState = {
  estudioList: null,
  selectedEstudio: null,
  estudioNombre: null,
};

const EstudiosFormReducer = createReducer(
  initialFormState,
  on(EstudiosActions.getEstudiosSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),

  on(EstudiosActions.setEstudioSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(EstudiosActions.updateEstudioSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(EstudiosActions.deleteEstudioSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(EstudiosActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(EstudiosActions.getEstudiosSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(EstudiosActions.clearCurrentEstudioForm, (state) => {
    return {
      ...state,
      selectedEstudio: null,
    };
  }),
  on(EstudiosActions.clearForm, () => {
    return initialFormState;
  })
);

export function EstudiosFormReducerFunction(
  state: EstudiosFormState | undefined,
  action: Action
): EstudiosFormState {
  return EstudiosFormReducer(state, action);
}
