import { Model } from './Model';

export declare class Actor extends Model {
  id: string;
  first_name: string;
  last_name: string;
  gender: GenderEnums.Gender;
  bornCity: string;
  birthdate: string;
  img: string;
  rating: number;
  movies: number[];
  constructor(attrs?: Attrs);
}

export interface Attrs {
  id?: number;
  first_name?: string;
  last_name?: string;
  gender?: GenderEnums.Gender;
  bornCity?: string;
  birthdate?: string;
  img?: string;
  rating?: number;
  movies?: number[];
}

export declare namespace GenderEnums {
  enum Gender {
    'Male',
    'Female',
  }
}
