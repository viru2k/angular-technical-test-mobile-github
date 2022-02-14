import { Model } from './Model';

export declare class Company extends Model {
  id: string;
  name: string;
  country: string;
  createYear: string;
  employees: number;
  rating: number;
  movies: number[];

  constructor(attrs?: Attrs);
}

export interface Attrs {
  id?: string;
  name?: string;
  country?: string;
  createYear?: string;
  employees?: number;
  rating?: number;
  movies?: number[];
}
