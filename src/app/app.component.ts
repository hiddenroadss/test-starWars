import { Component } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './shared/services/api/api.service';
import { StoreService } from './shared/services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$: Observable<any>;
  loading = true;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {
    this.data$ = zip(
      this.apiService.getHeroes(),
      this.apiService.getSpecies(),
      this.apiService.getStarShips(),
      this.apiService.getMovies()
    ).pipe(
      tap((value) => {
        this.storeService.setHeroes(value[0]);
        this.storeService.setSpecies(value[1]);
        this.storeService.setStarShips(value[2]);
        this.storeService.setMovies(value[3]);
      })
    );
  }
}
