// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';

// Store
import { MovieActions } from '../actions/action-types';

// API

import { Movie } from '../../../models/Movie.model';
import { MovieService } from '../../../services/movie.service';
import { Actor } from '../../../models/Actor.model';

import { sharedActions } from '../../shared/actions/action-types';
import { ActorService } from '../../../services/actor.service';
import { getActores } from '../../actores/actions/actores.actions';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [MovieActions.getActors, MovieActions.getMovies];
const HIDE_LOADER_ACTIONS = [
  MovieActions.getActorsSuccess,
  MovieActions.getMoviesSuccess,
  MovieActions.getMovieFail,
];

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private peliculaService: MovieService,
    private actorService: ActorService
  ) {}

  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.getMovies),
      exhaustMap(() =>
        this.peliculaService.getMovies().pipe(
          map((data: Movie[]) => {
            return MovieActions.getMoviesSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(MovieActions.getMovieFail(error)))
        )
      )
    )
  );

  updateMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.updateMovie),
      exhaustMap((payload) =>
        this.peliculaService.putMovie(payload.movie).pipe(
          map((data) => {
            return MovieActions.updateMoviesuccess({
              payload: data,
            });
          }),
          catchError((error) => of(MovieActions.getMovieFail(error)))
        )
      )
    )
  );

  setMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.setMovie),
      exhaustMap((payload) =>
        this.peliculaService.postMovie(payload.movie).pipe(
          map((data) => {
            return MovieActions.setMoviesuccess({
              payload: data,
            });
          }),
          catchError((error) => of(MovieActions.getMovieFail(error)))
        )
      )
    )
  );

  deleteMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.deleteMovie),
      exhaustMap((payload) =>
        this.peliculaService.deleteMovie(payload.movie).pipe(
          map((data) => {
            return MovieActions.deleteMoviesuccess({
              payload: data,
            });
          }),
          catchError((error) => of(MovieActions.getMovieFail(error)))
        )
      )
    )
  );

  getPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.getActors),
      exhaustMap(() =>
        this.actorService.getActores().pipe(
          map((data: Actor[]) => {
            return MovieActions.getActorsSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(MovieActions.getMovieFail(error)))
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
