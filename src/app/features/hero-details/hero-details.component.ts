import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '@interfaces/Hero';
import { StoreService } from '@services/store/store.service';
import { from, Observable } from 'rxjs';
import { filter, mergeMap, pluck, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined;
  speciesNames$: Observable<string[]>;
  moviesNames$: Observable<string[]>;
  starShipsNames$: Observable<string[]>;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router
  ) {
    let name = route.snapshot.paramMap.get('name')!;
    name = name?.replace(/_/, ' ');
    this.hero = this.storeService.getOneHero(name!);
    if (!this.hero) {
      this.router.navigate(['/']);
    }
    this.moviesNames$ = this.storeService.getMovies().pipe(
      take(1),
      mergeMap((value) => from(value)),
      filter((item) => this.hero!.films.includes(item.url)),
      pluck('title'),
      toArray()
    );
    this.speciesNames$ = this.storeService.getSpecies().pipe(
      take(1),
      mergeMap((value) => from(value)),
      filter((item) => this.hero!.species.includes(item.url)),
      pluck('name'),
      toArray()
    );
    this.starShipsNames$ = this.storeService.getStarShips().pipe(
      take(1),

      mergeMap((value) => from(value)),
      filter((item) => this.hero!.starships.includes(item.url)),
      pluck('name'),
      toArray()
    );
  }

  ngOnInit(): void {}
}
