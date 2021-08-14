import { UrlString } from './utils.interface';

export interface SingleSpecies {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: UrlString[];
  films: UrlString[];
  created: string;
  edited: string;
  url: UrlString;
}
