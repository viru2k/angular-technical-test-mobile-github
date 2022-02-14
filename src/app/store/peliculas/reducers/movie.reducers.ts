// Ngrx
import { createReducer, on, Action } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

// Store
import { MovieActions } from '../actions/action-types';

// API
import { Movie } from '../../../models/Movie.model';
import { Actor } from '../../../models/Actor.model';

// DATA VIEW STATE
export interface MoviesDataState {
  movies: Movie[];
  actors: Actor[];
}

export const initialState: MoviesDataState = {
  movies: null,
  actors: null,
};

const MoviesReducer = createReducer(
  initialState,
  on(MovieActions.getMoviesSuccess, (state, action) => {
    return {
      ...state,
      movies: action.payload,
    };
  }),
  on(MovieActions.getActorsSuccess, (state, action) => {
    return {
      ...state,
      actors: action.payload,
    };
  }),
  on(MovieActions.getMovieByIdSuccess, (state, action) => {
    return { ...state, MovieDetails: action.payload };
  }),

  on(MovieActions.clearData, () => {
    return { ...initialState };
  })
);

export function MoviesReducerFunction(
  state: MoviesDataState | undefined,
  action: Action
): any {
  return MoviesReducer(state, action);
}

// FORM VIEW STATE
export interface MoviesFormState {
  movieList: Movie[];
  selectedActor: Actor;
  selectedMovie: Movie;
  castPrincipal: Actor[];
  titulo: string;
  fechaEstreno: string;
  recaudacion: number;
  direccion: string;
  genero: string;
  productora: string;
}

export const initialFormState: MoviesFormState = {
  movieList: null,
  selectedActor: null,
  selectedMovie: null,
  castPrincipal: null,
  // If a reactive component with ngrx is need, state is required updates are already setted
  titulo: null,
  fechaEstreno: null,
  recaudacion: null,
  direccion: null,
  genero: null,
  productora: null,
};

const MoviesFormReducer = createReducer(
  initialFormState,
  on(MovieActions.getMoviesSuccess, (state, action) => {
    return {
      ...state,
      movieList: action.payload,
    };
  }),

  on(MovieActions.setMoviesuccess, (state, action) => {
    return {
      ...state,
      movieList: action.payload,
    };
  }),
  on(MovieActions.updateMoviesuccess, (state, action) => {
    return {
      ...state,
      movieList: action.payload,
    };
  }),
  on(MovieActions.deleteMoviesuccess, (state, action) => {
    return {
      ...state,
      movieList: action.payload,
    };
  }),
  on(MovieActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(MovieActions.getMoviesSuccess, (state, action) => {
    return {
      ...state,
      movieList: action.payload,
    };
  }),
  on(MovieActions.clearCurrentMovieForm, (state) => {
    return {
      ...state,
      selectedMovie: null,
      titulo: null,
      fechaEstreno: null,
      recaudacion: null,
      direccion: null,
      genero: null,
      productora: null,
    };
  }),
  on(MovieActions.clearForm, () => {
    return initialFormState;
  })
);

export function MoviesFormReducerFunction(
  state: MoviesFormState | undefined,
  action: Action
): MoviesFormState {
  return MoviesFormReducer(state, action);
}
