import { UrlString } from './utils.interface';

export interface Hero {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: UrlString[];
  species: UrlString[];
  vehicles: UrlString[];
  starships: UrlString[];
  created: string;
  edited: string;
  url: UrlString;
}
