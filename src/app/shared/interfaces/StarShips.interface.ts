import { ItemsListResponse } from './ItemsListResponse.interface';
import { StarShip } from './StarShip.interface';

export interface StarShips extends ItemsListResponse {
  results: StarShip[];
}
