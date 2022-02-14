// Angular
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Store
import { BaseMoviesFacade } from '../../../../store/peliculas/movie.facade';

// Api
import { Movie } from '../../../../models/Movie.model';

@Component({
  selector: 'app-pelicula-item',
  templateUrl: './pelicula-item.component.html',
})
export class PeliculaItemComponent implements OnInit, OnDestroy {
  @Input() itemPelicula: Movie;
  constructor(public peliculasFacade: BaseMoviesFacade) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editElement(selectedIitem: Movie): void {
    this.peliculasFacade.updateCurrentMovie(selectedIitem);
  }

  deleteElement(selectedIitem: Movie): void {
    this.peliculasFacade.deleteMovie(selectedIitem);
  }
}
