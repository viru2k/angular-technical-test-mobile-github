import { Model } from './Model';

export declare class Movie extends Model {
  id: string;
  title: string;
  poster: string;
  genre: GenreEnums.Genre;
  year: string;
  duration: number;
  imdbRating: number;
  actors: number[];
  constructor(attrs?: Attrs);
  constructor(attrs?: Attrs);
}

export interface Attrs {
  id: string;
  title: string;
  poster: string;
  genre: GenreEnums.Genre;
  year: string;
  duration: number;
  imdbRating: number;
  actors: number[];
  constructor(attrs?: Attrs);
}

export declare namespace GenreEnums {
  enum Genre {
    'Adventure',
    'Comedy',
    'Crime',
    'Drama',
    'Musical',
    'Horror',
    'Sci-Fi',
    'War',
    'Romance',
    'Thriller',
  }
}
