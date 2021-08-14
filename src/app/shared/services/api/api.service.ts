import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@interfaces/Hero';
import { ItemsListResponse } from '@interfaces/ItemsListResponse';
import { Movie } from '@interfaces/Movie';
import { Species } from '@interfaces/Species';
import { StarShip } from '@interfaces/StarShip';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, reduce, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api';

  heroes$ = new BehaviorSubject(1);
  species$ = new BehaviorSubject(1);
  starShips$ = new BehaviorSubject(1);

  constructor(private http: HttpClient) {}

  getAllEntities<T>(
    subject$: BehaviorSubject<number>,
    method: (page: number) => Observable<ItemsListResponse<T>>
  ): Observable<T[]> {
    console.log(method, 'A');
    return subject$.pipe(
      concatMap((page) =>
        method(page).pipe(
          tap((value) => {
            if (value.next) {
              subject$.next(++page);
            } else {
              subject$.complete();
            }
          })
        )
      ),
      reduce((acc: T[], currentValue) => acc.concat(currentValue.results), [])
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.getAllEntities(this.heroes$, this.getHeroesByPage);
  }

  getSpecies(): Observable<Species[]> {
    return this.getAllEntities(this.species$, this.getSpeciesByPage);
  }

  getStarShips(): Observable<StarShip[]> {
    return this.getAllEntities(this.starShips$, this.getStarShipsByPage);
  }

  private getHeroesByPage = (
    page: number
  ): Observable<ItemsListResponse<Hero>> => {
    return this.http.get<ItemsListResponse<Hero>>(`${this.baseUrl}/people`, {
      params: {
        page: page.toString(),
      },
    });
  };

  getMoviesByPage(page: number): Observable<ItemsListResponse<Movie>> {
    return this.http.get<ItemsListResponse<Movie>>(`${this.baseUrl}/films`, {
      params: { page: page.toString() },
    });
  }

  private getSpeciesByPage = (
    page: number
  ): Observable<ItemsListResponse<Species>> => {
    return this.http.get<ItemsListResponse<Species>>(
      `${this.baseUrl}/species`,
      {
        params: { page: page.toString() },
      }
    );
  };

  private getStarShipsByPage = (
    page: number
  ): Observable<ItemsListResponse<StarShip>> => {
    return this.http.get<ItemsListResponse<StarShip>>(
      `${this.baseUrl}/starships`,
      {
        params: { page: page.toString() },
      }
    );
  };
}
