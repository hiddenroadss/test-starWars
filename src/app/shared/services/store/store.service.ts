import { Injectable } from '@angular/core';
import { Species } from '@interfaces/Species';
import { StarShip } from '@interfaces/StarShip';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Hero } from '@interfaces/Hero';
import { Movie } from '@interfaces/Movie';
import {
  concatMap,
  map,
  mergeMap,
  pluck,
  skipWhile,
  take,
  tap,
  toArray,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private heroes$ = new BehaviorSubject<Hero[]>([]);
  private movies$ = new BehaviorSubject<Movie[]>([]);
  private species$ = new BehaviorSubject<Species[]>([]);
  private starShips$ = new BehaviorSubject<StarShip[]>([]);

  getHeroes(): Observable<Hero[]> {
    return this.heroes$.asObservable();
  }

  getOneHero(name: string): Hero | undefined {
    return this.heroes$.value.find((hero) => hero.name === name);
  }

  getMovies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  getSpecies(): Observable<Species[]> {
    return this.species$.asObservable();
  }

  getSpeciesNames(): Observable<string[]> {
    return this.species$.pipe(
      skipWhile((value) => value.length === 0),
      take(1),
      mergeMap((list) => from(list)),
      pluck('name'),
      toArray()
    );
  }

  getMoviesNames(): Observable<string[]> {
    return this.movies$.pipe(
      skipWhile((value) => value.length === 0),
      take(1),
      mergeMap((list) => from(list)),
      pluck('title'),
      toArray()
    );
  }

  getStarShips(): Observable<StarShip[]> {
    return this.starShips$.asObservable();
  }

  setHeroes(heroes: Hero[]): void {
    this.heroes$.next(heroes);
  }

  setMovies(movies: Movie[]): void {
    this.movies$.next(movies);
  }

  setSpecies(species: Species[]): void {
    this.species$.next(species);
  }

  setStarShips(starShips: StarShip[]): void {
    this.starShips$.next(starShips);
  }
}
