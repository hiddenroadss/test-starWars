import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from '@interfaces/Species.interface';
import { StarShips } from '@interfaces/StarShips.interface';
import { Observable } from 'rxjs';
import { Heroes } from '../../interfaces/Heroes.interface';
import { Movies } from '../../interfaces/Movies.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api';
  private imageBaseUrl = 'https://akabab.github.io/starwars-api/api';

  constructor(private http: HttpClient) {}

  getHeroes(page: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/people`, {
      params: {
        page,
      },
    });
  }

  getMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseUrl}/films`);
  }

  getSpecies(page: string): Observable<Species> {
    return this.http.get<Species>(`${this.baseUrl}/species`, {
      params: { page },
    });
  }

  getStarShips(page: string): Observable<StarShips> {
    return this.http.get<StarShips>(`${this.baseUrl}/starships`, {
      params: { page },
    });
  }
}
