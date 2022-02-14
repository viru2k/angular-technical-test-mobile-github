// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { Observable } from 'rxjs';

// Api
import { Movie } from '../models/Movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + 'movies');
  }

  getMovieById(movie: Movie): Observable<Movie> {
    return this.http.get<Movie>(this.url + 'movies/' + movie.id);
  }

  postMovie(movie: Movie): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.url + 'movies', movie);
  }

  putMovie(movie: Movie): Observable<Movie[]> {
    return this.http.put<Movie[]>(this.url + 'movies/' + movie.id, movie);
  }

  deleteMovie(movie: Movie): Observable<Movie[]> {
    return this.http.delete<Movie[]>(this.url + 'movies/' + movie.id);
  }
}
