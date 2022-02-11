// Ngrx
import { createReducer, on, Action } from '@ngrx/store';

// Store
import { ActoresActions } from '../actions/action-types';

// API
import { Actor } from '../../../models/Actor.model';
import { Persona } from '../../../models/Persona.model';

// DATA VIEW STATE
export interface ActoresDataState {
  actores: Actor[];
}

export const initialState: ActoresDataState = {
  actores: null,
};

const ActoresReducer = createReducer(
  initialState,
  on(ActoresActions.getActoresSuccess, (state, action) => {
    return {
      ...state,
      peliculas: action.payload,
    };
  }),

  on(ActoresActions.clearData, () => {
    return { ...initialState };
  })
);

export function ActoresReducerFunction(
  state: ActoresDataState | undefined,
  action: Action
): any {
  return ActoresReducer(state, action);
}

// FORM VIEW STATE
export interface ActoresFormState {
  estudioList: Actor[];
  selectedActor: Actor;
  estudioNombre: string;
}

export const initialFormState: ActoresFormState = {
  estudioList: null,
  selectedActor: null,
  estudioNombre: null,
};

const ActoresFormReducer = createReducer(
  initialFormState,
  on(ActoresActions.getActoresSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),

  on(ActoresActions.setActorSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(ActoresActions.updateActorSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(ActoresActions.deleteActorSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(ActoresActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(ActoresActions.getActoresSuccess, (state, action) => {
    return {
      ...state,
      estudioList: action.payload,
    };
  }),
  on(ActoresActions.clearCurrentActorForm, (state) => {
    return {
      ...state,
      selectedActor: null,
    };
  }),
  on(ActoresActions.clearForm, () => {
    return initialFormState;
  })
);

export function ActoresFormReducerFunction(
  state: ActoresFormState | undefined,
  action: Action
): ActoresFormState {
  return ActoresFormReducer(state, action);
}
