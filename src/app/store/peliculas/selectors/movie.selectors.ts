// Ngrx
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Store
import { MovieState } from '../reducers/reducer-map';

export const getMoviesModuleState = createFeatureSelector<MovieState>('Movie');

// VIEW DATA SELECTORS
export const getMoviesState = createSelector(
  getMoviesModuleState,
  (state) => state.MoviesDataState
);

export const getMovies = createSelector(
  getMoviesState,
  (state) => state.movies
);

export const getActors = createSelector(
  getMoviesState,
  (state) => state.actors
);

export const isViewReady = createSelector(getMoviesState, (state) => {
  return !!state.movies;
});

// VIEW FORM SELECTORS
export const getMoviesFormState = createSelector(
  getMoviesModuleState,
  (state) => state.MoviesFormState
);

export const getMovieList = createSelector(
  getMoviesFormState,
  (state) => state.movieList
);

export const getSelectedMovie = createSelector(
  getMoviesFormState,
  (state) => state.selectedMovie
);

export const getSelectedActor = createSelector(
  getMoviesFormState,
  (state) => state.selectedActor
);

export const getCastPrincipal = createSelector(
  getMoviesFormState,
  (state) => state.castPrincipal
);
