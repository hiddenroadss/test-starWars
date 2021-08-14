import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './shared/services/api/api.service';
import { StoreService } from './shared/services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {
    this.apiService.getHeroes().subscribe((heroes) => {
      this.storeService.setHeroes(heroes);
    });
    this.apiService.getSpecies().subscribe((heroes) => {
      this.storeService.setSpecies(heroes);
    });
    this.apiService.getStarShips().subscribe((heroes) => {
      this.storeService.setStarShips(heroes);
    });

    this.subscription = this.apiService
      .getMoviesByPage(1)
      .subscribe((value) => {
        this.storeService.setMovies(value.results);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
