import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '@interfaces/Hero';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/interfaces/Movie';
import { StoreService } from 'src/app/shared/services/store/store.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StarShip } from '@interfaces/StarShip';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Species } from '@interfaces/Species';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  movies: Movie[] = [];
  moviesNames$: Observable<string[]>;
  species: Species[] = [];
  speciesNames$: Observable<string[]>;
  form: FormGroup;
  moviesSub: Subscription;
  speciesSub: Subscription;

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
    this.speciesNames$ = this.storeService.getSpeciesNames();
    this.heroes$ = this.storeService.getHeroes().pipe(
      tap((value) => {
        this.heroes = value;
        this.filteredHeroes = value;
      })
    );
    this.moviesNames$ = this.storeService.getMoviesNames();
    this.moviesSub = this.storeService
      .getMovies()
      .subscribe((value) => (this.movies = value));
    this.speciesSub = this.storeService
      .getSpecies()
      .subscribe((value) => (this.species = value));
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
    if (this.moviesSub) {
      this.moviesSub.unsubscribe();
    }
    if (this.speciesSub) {
      this.speciesSub.unsubscribe();
    }
  }

  get _movie(): FormControl {
    return this.form.controls.movie as FormControl;
  }

  get _species(): FormControl {
    return this.form.controls.species as FormControl;
  }

  showHeroDetails = (hero: Hero): void => {
    this.router.navigate([hero.name.replace(/\s/, '_')]);
  };
}
