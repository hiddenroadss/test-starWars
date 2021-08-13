import { StarShip } from './StarShip.interface';

export interface StarShips {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarShip[];
}
