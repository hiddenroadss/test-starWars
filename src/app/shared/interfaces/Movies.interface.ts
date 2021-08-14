import { ItemsListResponse } from './ItemsListResponse.interface';
import { Movie } from './Movie.interface';

export interface Movies extends ItemsListResponse {
  results: Movie[];
}
