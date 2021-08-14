import { UrlString } from './utils.interface';

export interface Movie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: UrlString[];
  planets: UrlString[];
  starships: UrlString[];
  vehicles: UrlString[];
  species: UrlString[];
  created: string;
  edited: string;
  url: UrlString;
}
