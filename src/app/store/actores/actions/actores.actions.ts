// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { Actor } from '../../../models/Actor.model';

// VIEW DATA REQUEST ACTIONS
export const getActores = createAction('[Actores] Get Actores');

export const getActoresSuccess = createAction(
  '[Actores] Get Actores Success',
  props<{ payload: Actor[] }>()
);

export const getActoresById = createAction(
  '[Actores] Get Actores By Id',
  props<{ payload: Actor }>()
);
export const getActoresByIdSuccess = createAction(
  '[Actores] Get Actores By Id Success',
  props<{ payload: Actor }>()
);
//
export const getActoresFail = createAction(
  '[Actores] Get Actores Fail',
  props<{ payload: any }>()
);

export const deleteActor = createAction(
  '[Actores] Remove Actores',
  props<{ actor: Actor }>()
);

export const deleteActorSuccess = createAction(
  '[Actores] Remove Actores Success',
  props<{ payload: Actor[] }>()
);

export const setActor = createAction(
  '[Actores] Set Actores',
  props<{ actor: Actor }>()
);

export const setActorSuccess = createAction(
  '[Actores] Set Actores Success',
  props<{ payload: Actor[] }>()
);

export const updateActor = createAction(
  '[Actores] Update Actores',
  props<{ actor: Actor }>()
);

export const updateActorSuccess = createAction(
  '[Actores] Update Actores Success',
  props<{ payload: Actor[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Actores] Update Form',
  props<{
    [key: string]: any;
  }>()
);

export const setSelectedCastSuccess = createAction(
  '[Actores] Set Selected Cast Success',
  props<{ payload: Actor[] }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Actores] Clear Form');

export const clearCurrentActorForm = createAction(
  '[Actores] Clear Current Actores Form'
);

export const clearData = createAction('[Actores] Clear  Data');
