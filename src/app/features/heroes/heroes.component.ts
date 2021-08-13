import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/interfaces/Hero.interface';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/Movie.interface';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SingleSpecies } from '@interfaces/SingleSpecies.interface';
import { StarShip } from '@interfaces/StarShip.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  movies: Movie[] = [];
  moviesTitles: string[] = [];
  species: SingleSpecies[] = [];
  speciesNames: string[] = [];
  starShips: StarShip[] = [];
  form: FormGroup;

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  constructor(
    private router: Router,
    private storeService: StoreService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      movie: [''],
      species: [''],
      from: [''],
      to: [''],
    });
    this.subscription1 = this.storeService.getSpecies().subscribe((value) => {
      if (value) {
        this.species = value;
        this.speciesNames = this.species.map((item) => item.name);
      }
    });
    this.subscription2 = this.storeService.getHeroes().subscribe((value) => {
      if (value) {
        this.heroes = value;
        this.filteredHeroes = value;
      }
    });
    this.subscription3 = this.storeService.getMovies().subscribe((value) => {
      if (value) {
        this.movies = value;
        this.moviesTitles = this.movies.map((item) => {
          return item.title;
        });
      }
    });
    this.subscription4 = this.storeService.getStarShips().subscribe((value) => {
      if (value) {
        this.starShips = value;
      }
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(
      (value: { movie: string; species: string; from: string; to: string }) => {
        let filteredHeroes = this.heroes;
        if (value.movie) {
          const movie = this.movies.find((item) => item.title === value.movie);
          const characters = movie!.characters;
          filteredHeroes = filteredHeroes.filter((item) => {
            return characters.includes(item.url);
          });
        }
        if (value.species) {
          const species = this.species.find(
            (item) => item.name === value.species
          );
          const characters = species!.people;
          filteredHeroes = filteredHeroes.filter((item) =>
            characters.includes(item.url)
          );
        }
        if (value.from) {
          filteredHeroes = filteredHeroes.filter((item) => {
            if (item.birth_year === 'unknown') return false;
            return +item.birth_year.split('B')[0] <= +value.from;
          });
        }
        if (value.to) {
          filteredHeroes = filteredHeroes.filter((item) => {
            if (item.birth_year === 'unknown') return false;
            return +item.birth_year.split('B')[0] >= +value.to;
          });
        }
        this.filteredHeroes = filteredHeroes;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
    if (this.subscription4) {
      this.subscription4.unsubscribe();
    }
  }

  get _movie(): FormControl {
    return this.form.controls.movie as FormControl;
  }

  get _species(): FormControl {
    return this.form.controls.species as FormControl;
  }

  showHeroDetails(hero: Hero): void {
    const speciesNames = this.species
      .filter((item) => hero.species.includes(item.url))
      .map((item) => item.name);
    const moviesNames = this.movies
      .filter((item) => hero.films.includes(item.url))
      .map((item) => item.title);
    const starShipsNames = this.starShips
      .filter((item) => hero.starships.includes(item.url))
      .map((item) => item.name);
    this.router.navigate([hero.name.replace(/\s/, '')], {
      state: { hero, speciesNames, moviesNames, starShipsNames },
    });
  }
}
