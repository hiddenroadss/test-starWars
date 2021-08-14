import { Hero } from './Hero.interface';
import { ItemsListResponse } from './ItemsListResponse.interface';

export interface Heroes extends ItemsListResponse {
  results: Hero[];
}
