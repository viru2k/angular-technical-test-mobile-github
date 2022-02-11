// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';

// Store
import { EstudiosActions } from '../actions/action-types';
import { sharedActions } from '../../shared/actions/action-types';

// API

import { Estudio } from '../../../models/Estudio.model';
import { EstudioService } from '../../../services/estudio.service';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [EstudiosActions.getEstudios];
const HIDE_LOADER_ACTIONS = [
  EstudiosActions.getEstudiosSuccess,
  EstudiosActions.getEstudiosFail,
];

@Injectable()
export class EstudiosEffects {
  constructor(
    private actions$: Actions,
    private estudioService: EstudioService
  ) {}

  getEstudios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EstudiosActions.getEstudios),
      exhaustMap(() =>
        this.estudioService.getEstudios().pipe(
          map((data: Estudio[]) => {
            return EstudiosActions.getEstudiosSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(EstudiosActions.getEstudiosFail(error)))
        )
      )
    )
  );

  updateEstudios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EstudiosActions.updateEstudio),
      exhaustMap((payload) =>
        this.estudioService.putEstudio(payload.estudio).pipe(
          map((data) => {
            return EstudiosActions.updateEstudioSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(EstudiosActions.getEstudiosFail(error)))
        )
      )
    )
  );

  setEstudios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EstudiosActions.setEstudio),
      exhaustMap((payload) =>
        this.estudioService.postEstudio(payload.estudio).pipe(
          map((data) => {
            return EstudiosActions.setEstudioSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(EstudiosActions.getEstudiosFail(error)))
        )
      )
    )
  );

  deleteEstudios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EstudiosActions.deleteEstudio),
      exhaustMap((payload) =>
        this.estudioService.deleteEstudio(payload.estudio).pipe(
          map((data) => {
            return EstudiosActions.deleteEstudioSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(EstudiosActions.getEstudiosFail(error)))
        )
      )
    )
  );

  showLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...SHOW_LOADER_ACTIONS),
      map(() => sharedActions.showLoader())
    )
  );

  hideLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...HIDE_LOADER_ACTIONS),
      map(() => sharedActions.hideLoader())
    )
  );
}
