// Angular
import { Component, OnInit } from '@angular/core';

// Store
import { BaseMoviesFacade } from '../../../store/peliculas/movie.facade';

// Ionic
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  constructor(
    private peliculasFacade: BaseMoviesFacade,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.peliculasFacade.loadViewData();
  }

  ionViewWillLeave() {
    this.clearStore();
  }

  addNewMovie(): void {
    this.navCtrl.navigateForward('pelicula-details');
  }

  private clearStore(): void {
    this.peliculasFacade.clearMoviesForm();
    this.peliculasFacade.clearMovies();
  }
}
