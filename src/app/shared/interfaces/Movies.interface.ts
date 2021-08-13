import { Movie } from './Movie.interface';

export interface Movies {
  count: number;
  next: string | null;
  previous: string | null;
  results: Movie[];
}
