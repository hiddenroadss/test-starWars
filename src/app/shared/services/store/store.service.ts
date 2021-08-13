import { Injectable } from '@angular/core';
import { SingleSpecies } from '@interfaces/SingleSpecies.interface';
import { StarShip } from '@interfaces/StarShip.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '@interfaces/Hero.interface';
import { Movie } from '@interfaces/Movie.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private heroes$ = new BehaviorSubject<Hero[] | null>(null);
  private movies$ = new BehaviorSubject<Movie[] | null>(null);
  private species$ = new BehaviorSubject<SingleSpecies[] | null>(null);
  private starShips$ = new BehaviorSubject<StarShip[] | null>(null);

  constructor() {}

  getHeroes(): Observable<Hero[] | null> {
    return this.heroes$.asObservable();
  }

  getMovies(): Observable<Movie[] | null> {
    return this.movies$.asObservable();
  }

  getSpecies(): Observable<SingleSpecies[] | null> {
    return this.species$.asObservable();
  }

  getStarShips(): Observable<StarShip[] | null> {
    return this.starShips$.asObservable();
  }

  setHeroes(heroes: Hero[]): void {
    if (this.heroes$.value !== null) {
      this.heroes$.next([...this.heroes$.value, ...heroes]);
    } else {
      this.heroes$.next(heroes);
    }
  }

  setMovies(movies: Movie[]): void {
    this.movies$.next(movies);
  }

  setSpecies(species: SingleSpecies[]): void {
    if (this.species$.value) {
      this.species$.next([...this.species$.value, ...species]);
    } else {
      this.species$.next(species);
    }
  }

  setStarShips(starShips: StarShip[]): void {
    if (this.starShips$.value) {
      this.starShips$.next([...this.starShips$.value, ...starShips]);
    } else {
      this.starShips$.next(starShips);
    }
    console.log(this.starShips$.value);
  }
}
