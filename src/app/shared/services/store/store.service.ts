import { Injectable } from '@angular/core';
import { Species } from '@interfaces/Species';
import { StarShip } from '@interfaces/StarShip';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '@interfaces/Hero';
import { Movie } from '@interfaces/Movie';

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

  getMovies(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  getSpecies(): Observable<Species[]> {
    return this.species$.asObservable();
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
