// Angular
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Store
import { BaseMoviesFacade } from '../../../../store/peliculas/movie.facade';

// Api
import { Movie } from '../../../../models/Movie.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pelicula-item',
  templateUrl: './pelicula-item.component.html',
})
export class PeliculaItemComponent implements OnInit, OnDestroy {
  @Input() itemPelicula: Movie;
  constructor(
    public peliculasFacade: BaseMoviesFacade,
    public navCtrl: NavController
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editElement(selectedIitem: Movie): void {
    this.peliculasFacade.updateCurrentMovie(selectedIitem);
    /*     this.navCtrl.navigateForward('/pelicula-details', {
      queryParams: { order: 'popular' },
    }); */
    this.navCtrl.navigateForward('pelicula-details', {
      queryParams: { order: 'popular' },
    });
  }

  deleteElement(selectedIitem: Movie): void {
    this.peliculasFacade.deleteMovie(selectedIitem);
  }
}
