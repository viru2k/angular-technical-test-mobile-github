// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Store
import { BaseMoviesFacade } from './../../../../store/peliculas/movie.facade';

// RxJs
import { take } from 'rxjs/operators';

// 3rd Party
import { v4 as uuidv4 } from 'uuid';

// Ionic
import { NavController } from '@ionic/angular';

// Pages
import { Movie } from 'src/app/models/Movie.model';

// Api
import { MainPage } from '../../../../main/main.page';

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.page.html',
  styleUrls: ['./pelicula-details.page.scss'],
})
export class PeliculaDetailsPage implements OnInit {
  peliculaForm: FormGroup;
  esNuevo: boolean = false;

  mainPage: MainPage;

  constructor(
    public moviesFacade: BaseMoviesFacade,
    public navCtrl: NavController
  ) {
    this.peliculaForm = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('', Validators.required),
      fechaEstreno: new FormControl('', Validators.required),
      recaudacion: new FormControl(0, Validators.required),
      direccion: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      productora: new FormControl(''),
      castPrincipal: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.setMoviesSubscrition();
  }

  ngOnDestroy(): void {}

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
    this.navCtrl.navigateRoot;
    // this.router.navigate(['pelicula/list']);
  }

  editarCast(): void {
    this.moviesFacade.selectedMovie$
      .pipe(take(1))
      .subscribe((pelicula: Movie) => {
        this.moviesFacade.updatecastPrincipal(pelicula);
        //   this.router.navigate(['cast/list']);
      });
  }

  agregarActor(): void {
    //this.router.navigate(['cast/list']);
  }

  private setMoviesSubscrition(): void {
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
