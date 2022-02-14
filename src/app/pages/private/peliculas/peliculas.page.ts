import { BaseMoviesFacade } from '../../../store/peliculas/movie.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  constructor(private peliculasFacade: BaseMoviesFacade) {}

  ngOnInit() {
    this.peliculasFacade.loadViewData();
  }

  ionViewWillLeave() {
    this.clearStore();
  }

  private clearStore(): void {
    this.peliculasFacade.clearMoviesForm();
    this.peliculasFacade.clearMovies();
  }
}
