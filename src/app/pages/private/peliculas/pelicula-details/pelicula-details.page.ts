// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Store
import { BaseMoviesFacade } from './../../../../store/peliculas/movie.facade';
import { BaseSharedFacade } from '../../../../store/shared/shared.facade';

// RxJs
import { take, takeUntil, withLatestFrom } from 'rxjs/operators';

// 3rd Party
import { v4 as uuidv4 } from 'uuid';

// Ionic
import { NavController } from '@ionic/angular';

// Pages
import { MainPage } from '../../../../main/main.page';

// Api
import { Movie } from 'src/app/models/Movie.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.page.html',
  styleUrls: ['./pelicula-details.page.scss'],
})
export class PeliculaDetailsPage implements OnInit {
  peliculaForm: FormGroup;
  esNuevo: boolean = false;
  destroyed: boolean = false;
  mainPage: MainPage;

  constructor(
    public moviesFacade: BaseMoviesFacade,
    public sharedFacade: BaseSharedFacade,
    public navCtrl: NavController
  ) {
    this.peliculaForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required),
      poster: new FormControl(
        'http://dummyimage.com/600x400.png/dddddd/000000'
      ),
      genre: new FormControl(['War']),
      year: new FormControl(1900, Validators.required),
      duration: new FormControl(0, Validators.required),
      imdbRating: new FormControl(0),
      actors: new FormControl([1]),
    });
  }

  ngOnInit(): void {
    this.setMoviesSubscrition();
  }

  ngOnDestroy(): void {}

  ionViewWillLeave(): void {
    this.destroyed = true;
  }

  guardar(): void {
    if (this.esNuevo) {
      // set am id to new pelicula object only for  test reasons
      this.peliculaForm.patchValue({
        id: uuidv4(),
      });
      this.moviesFacade.setMovie(this.peliculaForm.value);
    } else {
      this.moviesFacade.updateMovie(this.peliculaForm.value);
    }
    this.navigateToHome();
  }

  navigateToHome(): void {
    this.moviesFacade.clearCurrentMovieForm();
    this.navCtrl.navigateBack('peliculas');
  }

  agregarActor(): void {
    this.navCtrl.navigateForward('actores');
  }

  private setMoviesSubscrition(): void {
    this.sharedFacade.currentRoute$.subscribe((route) => {
      console.log(route);
    });

    this.moviesFacade.selectedMovie$
      .pipe(take(1))
      .subscribe((pelicula: Movie) => {
        if (!!pelicula) {
          this.peliculaForm.patchValue({
            id: pelicula.id,
            title: pelicula.title,
            //  poster: pelicula.poster,
            //  recaudacion: pelicula.genre,
            year: pelicula.year,
            duration: pelicula.duration,
            imdbRating: pelicula.imdbRating,
            //   actors: [],
          });
        } else {
          this.esNuevo = true;
        }
      });
  }
}

/* 
id: string;
title: string;
poster: string;
genre: GenreEnums.Genre;
year: string;
duration: number;
imdbRating: number;
actors: number[]; */
