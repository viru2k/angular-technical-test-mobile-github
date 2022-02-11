// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { Estudio } from '../../../models/Estudio.model';

import { Persona } from '../../../models/Persona.model';

// VIEW DATA REQUEST ACTIONS
export const getEstudios = createAction('[Estudios] Get Estudios');

export const getEstudiosSuccess = createAction(
  '[Estudios] Get Estudios Success',
  props<{ payload: Estudio[] }>()
);

export const getEstudiosById = createAction(
  '[Estudios] Get Estudios By Id',
  props<{ payload: Estudio }>()
);
export const getEstudiosByIdSuccess = createAction(
  '[Estudios] Get Estudios By Id Success',
  props<{ payload: Estudio }>()
);
//
export const getEstudiosFail = createAction(
  '[Estudios] Get Estudios Fail',
  props<{ payload: any }>()
);

export const deleteEstudio = createAction(
  '[Estudios] Remove Estudios',
  props<{ estudio: Estudio }>()
);

export const deleteEstudioSuccess = createAction(
  '[Estudios] Remove Estudios Success',
  props<{ payload: Estudio[] }>()
);

export const setEstudio = createAction(
  '[Estudios] Set Estudios',
  props<{ estudio: Estudio }>()
);

export const setEstudioSuccess = createAction(
  '[Estudios] Set Estudios Success',
  props<{ payload: Estudio[] }>()
);

export const updateEstudio = createAction(
  '[Estudios] Update Estudios',
  props<{ estudio: Estudio }>()
);

export const updateEstudioSuccess = createAction(
  '[Estudios] Update Estudios Success',
  props<{ payload: Estudio[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Estudios] Update Form',
  props<{
    [key: string]: any;
  }>()
);

export const deleteSelectedCast = createAction(
  '[Estudios] Remove Selected Cast',
  props<{ persona: Persona; estudio: Estudio }>()
);

export const deleteSelectedCastSuccess = createAction(
  '[Estudios] Remove Estudios Success',
  props<{ payload: Estudio[] }>()
);

export const setSelectedCast = createAction(
  '[Estudios] Set Selected Cast',
  props<{ persona: Persona; estudio: Estudio }>()
);

export const setSelectedCastSuccess = createAction(
  '[Estudios] Set Selected Cast Success',
  props<{ payload: Estudio[] }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Estudios] Clear Form');

export const clearCurrentEstudioForm = createAction(
  '[Estudios] Clear Current Estudios Form'
);

export const clearData = createAction('[Estudios] Clear  Data');
