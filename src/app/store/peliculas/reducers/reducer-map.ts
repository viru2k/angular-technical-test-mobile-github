// NgRX
import { ActionReducerMap } from '@ngrx/store';

// Reducers
import {
  MoviesDataState,
  MoviesFormState,
  MoviesReducerFunction,
  MoviesFormReducerFunction,
} from './Movie.reducers';

export interface MovieState {
  MoviesDataState: MoviesDataState;
  MoviesFormState: MoviesFormState;
}
export const MovieReducers: ActionReducerMap<MovieState> = {
  MoviesDataState: MoviesReducerFunction,
  MoviesFormState: MoviesFormReducerFunction,
};
