import { SingleSpecies } from './SingleSpecies.interface';

export interface Species {
  count: number;
  next: string | null;
  previous: string | null;
  results: SingleSpecies[];
}
