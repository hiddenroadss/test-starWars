import { Hero } from './Hero.interface';

export interface Heroes {
  count: number;
  next: string;
  previous: string | null;
  results: Hero[];
}
