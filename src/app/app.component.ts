import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './shared/services/api/api.service';
import { StoreService } from './shared/services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  heroesSubject$ = new Subject();
  speciesSubject$ = new Subject();
  starShipsSubject$ = new Subject();
  subscription: Subscription;
  page = 1;
  page2 = 1;
  page3 = 1;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {
    this.heroesSubject$
      .pipe(switchMap(() => this.apiService.getHeroes(this.page.toString())))
      .subscribe((value) => {
        this.storeService.setHeroes(value.results);
        if (value.next) {
          this.page++;
          this.heroesSubject$.next();
        } else {
          this.heroesSubject$.complete();
        }
      });

    this.speciesSubject$
      .pipe(switchMap(() => this.apiService.getSpecies(this.page2.toString())))
      .subscribe((value) => {
        this.storeService.setSpecies(value.results);
        if (value.next) {
          this.page2++;
          this.speciesSubject$.next();
        } else {
          this.speciesSubject$.complete();
        }
      });
    this.starShipsSubject$
      .pipe(
        switchMap(() => this.apiService.getStarShips(this.page3.toString()))
      )
      .subscribe((value) => {
        this.storeService.setStarShips(value.results);
        if (value.next) {
          this.page3++;
          this.starShipsSubject$.next();
        } else {
          this.starShipsSubject$.complete();
        }
      });
    this.speciesSubject$.next();
    this.starShipsSubject$.next();
    this.heroesSubject$.next();

    this.subscription = this.apiService.getMovies().subscribe((value) => {
      this.storeService.setMovies(value.results);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
