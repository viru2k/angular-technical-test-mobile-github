// Ngrx
import { createAction, props } from '@ngrx/store';

// API
import { Movie } from '../../../models/Movie.model';

import { Actor } from '../../../models/Actor.model';

// VIEW DATA REQUEST ACTIONS
export const getMovies = createAction('[Movies] Get Movies');

export const getMoviesSuccess = createAction(
  '[Movies] Get Movies Success',
  props<{ payload: Movie[] }>()
);

export const getMovieById = createAction(
  '[Movie] Get Movie By Id',
  props<{ payload: Movie }>()
);
export const getMovieByIdSuccess = createAction(
  '[Movie] Get Movie By Id Success',
  props<{ payload: Movie }>()
);
//
export const getMovieFail = createAction(
  '[Movie] Get Movie Fail',
  props<{ payload: any }>()
);

export const getActors = createAction('[Movie] Get Actors');

export const getActorsSuccess = createAction(
  '[Movie] Get Actors Success',
  props<{ payload: Actor[] }>()
);

export const getActorsFail = createAction('[Movie] Get Actors  Fail');

export const getCastBMovieId = createAction(
  '[Movie] Get Cast By Movie Id',
  props<{ payload: Movie }>()
);
export const getCastBMovieIdSuccess = createAction(
  '[Movie] Get Cast By Movie Id Success',
  props<{ payload: Actor[] }>()
);

export const deleteMovie = createAction(
  '[Movies] Remove Movie',
  props<{ movie: Movie }>()
);

export const deleteMoviesuccess = createAction(
  '[Movie] Remove Movie Success',
  props<{ payload: Movie[] }>()
);

export const setMovie = createAction(
  '[Movie] Set Movie',
  props<{ movie: Movie }>()
);

export const setMoviesuccess = createAction(
  '[Movie] Set Movie Success',
  props<{ payload: Movie[] }>()
);

export const updateMovie = createAction(
  '[Movie] Update Movie',
  props<{ movie: Movie }>()
);

export const updateMoviesuccess = createAction(
  '[Movie] Update Movie Success',
  props<{ payload: Movie[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  '[Movies] Update Form',
  props<{
    [key: string]: any;
  }>()
);

export const deleteSelectedCast = createAction(
  '[Movies] Remove Selected Cast',
  props<{ actor: Actor; pelicula: Movie }>()
);

export const deleteSelectedCastSuccess = createAction(
  '[Movie] Remove Movie Success',
  props<{ payload: Movie[] }>()
);

export const setSelectedCast = createAction(
  '[Movie] Set Selected Cast',
  props<{ actor: Actor; pelicula: Movie }>()
);

export const setSelectedCastSuccess = createAction(
  '[Movie] Set Selected Cast Success',
  props<{ payload: Movie[] }>()
);

// CLEAN ACTIONS
export const clearForm = createAction('[Movies] Clear Form');

export const clearCurrentMovieForm = createAction(
  '[Movies] Clear Current Movie Form'
);

export const clearData = createAction('[Movies] Clear  Data');
