import { ItemsListResponse } from './ItemsListResponse.interface';
import { SingleSpecies } from './SingleSpecies.interface';

export interface Species extends ItemsListResponse {
  results: SingleSpecies[];
}
