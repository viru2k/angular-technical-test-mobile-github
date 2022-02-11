// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';

// Store
import { ActoresActions } from '../actions/action-types';
import { sharedActions } from '../../shared/actions/action-types';

// API

import { Actor } from '../../../models/Actor.model';
import { ActorService } from '../../../services/actor.service';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [ActoresActions.getActores];
const HIDE_LOADER_ACTIONS = [
  ActoresActions.getActoresSuccess,
  ActoresActions.getActoresFail,
];

@Injectable()
export class ActoresEffects {
  constructor(private actions$: Actions, private actorService: ActorService) {}

  getActores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActoresActions.getActores),
      exhaustMap(() =>
        this.actorService.getActores().pipe(
          map((data: Actor[]) => {
            return ActoresActions.getActoresSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(ActoresActions.getActoresFail(error)))
        )
      )
    )
  );

  updateActores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActoresActions.updateActor),
      exhaustMap((payload) =>
        this.actorService.putActor(payload.actor).pipe(
          map((data) => {
            return ActoresActions.updateActorSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(ActoresActions.getActoresFail(error)))
        )
      )
    )
  );

  setActores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActoresActions.setActor),
      exhaustMap((payload) =>
        this.actorService.postActor(payload.actor).pipe(
          map((data) => {
            return ActoresActions.setActorSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(ActoresActions.getActoresFail(error)))
        )
      )
    )
  );

  deleteActores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActoresActions.deleteActor),
      exhaustMap((payload) =>
        this.actorService.deleteActor(payload.actor).pipe(
          map((data) => {
            return ActoresActions.deleteActorSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(ActoresActions.getActoresFail(error)))
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
