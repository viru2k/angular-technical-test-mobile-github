// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Store
import { MovieActions } from './actions/action-types';
import { MovieState } from './reducers/reducer-map';
import { MoviesFormState } from './reducers/movie.reducers';

import * as fromSelectors from './selectors/movie.selectors';
import { Movie } from '../../models/Movie.model';
import { Actor } from '../../models/Actor.model';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseMoviesFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  Movies$: Observable<Movie[]> = this.parentStore.pipe(
    select(fromSelectors.getMovies)
  );

  peliculaList$: Observable<Movie[]> = this.parentStore.pipe(
    select(fromSelectors.getMovieList)
  );

  personas$: Observable<Actor[]> = this.parentStore.pipe(
    select(fromSelectors.getActors)
  );
  castPrincipal$: Observable<Actor[]> = this.parentStore.pipe(
    select(fromSelectors.getCastPrincipal)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<MoviesFormState> = this.parentStore.pipe(
    select(fromSelectors.getMoviesFormState)
  );

  selectedMovie$: Observable<Movie> = this.parentStore.pipe(
    select(fromSelectors.getSelectedMovie)
  );

  selectedActor$: Observable<Actor> = this.parentStore.pipe(
    select(fromSelectors.getSelectedActor)
  );

  constructor(private parentStore: Store<MovieState>) {}

  loadViewData(): void {
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
      this.parentStore.dispatch(MovieActions.getMovies());
      this.parentStore.dispatch(MovieActions.getActors());
    });
  }

  updateCurrentMovie(selectedMovie: Movie): void {
    this.parentStore.dispatch(MovieActions.updateForm({ selectedMovie }));
  }

  setCastPrincipal(pelicula: Movie, actor: Actor): void {
    this.parentStore.dispatch(
      MovieActions.setSelectedCast({ pelicula, actor })
    );
  }

  deleteCastPrincipal(pelicula: Movie, actor: Actor): void {
    this.parentStore.dispatch(
      MovieActions.deleteSelectedCast({ actor, pelicula })
    );
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updatetitulo(titulo: string): void {
    this.parentStore.dispatch(MovieActions.updateForm({ titulo }));
  }

  updateFechaEstreno(fechaEstreno: string): void {
    this.parentStore.dispatch(MovieActions.updateForm({ fechaEstreno }));
  }

  updateRecaudacion(recaudacion: number): void {
    this.parentStore.dispatch(MovieActions.updateForm({ recaudacion }));
  }

  updateDireccion(direccion: string): void {
    this.parentStore.dispatch(MovieActions.updateForm({ direccion }));
  }

  updateGenero(genero: string): void {
    this.parentStore.dispatch(MovieActions.updateForm({ genero }));
  }

  updateProductora(productora: string): void {
    this.parentStore.dispatch(MovieActions.updateForm({ productora }));
  }

  // todo handle correct param
  updatecastPrincipal(selectedMovie: Movie): void {
    const castPrincipal = selectedMovie;
    this.parentStore.dispatch(MovieActions.updateForm({ castPrincipal }));
  }

  setMovie(movie: Movie): void {
    this.parentStore.dispatch(MovieActions.setMovie({ movie }));
  }

  updateMovie(movie: Movie): void {
    this.parentStore.dispatch(MovieActions.updateMovie({ movie }));
  }

  deleteMovie(movie: Movie): void {
    this.parentStore.dispatch(MovieActions.deleteMovie({ movie }));
  }

  clearMovies(): void {
    this.parentStore.dispatch(MovieActions.clearData());
  }

  clearMoviesForm(): void {
    this.parentStore.dispatch(MovieActions.clearForm());
  }

  clearCurrentMovieForm(): void {
    this.parentStore.dispatch(MovieActions.clearCurrentMovieForm());
  }
}
