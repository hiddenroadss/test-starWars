import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '@interfaces/Hero.interface';
import { StoreService } from '@services/store/store.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  hero!: Hero;
  speciesNames: string[] = [];
  moviesNames: string[] = [];
  starShipsNames: string[] = [];
  constructor(private router: Router, private storeService: StoreService) {
    const currentRoot = this.router.getCurrentNavigation();
    if (!currentRoot || !currentRoot.extras.state) {
      this.router.navigate(['/']);
    } else {
      this.hero = currentRoot.extras.state?.hero as Hero;
      this.speciesNames = currentRoot.extras.state.speciesNames;
      this.moviesNames = currentRoot.extras.state.moviesNames;
      this.starShipsNames = currentRoot.extras.state.starShipsNames;
    }
  }

  ngOnInit(): void {}
}
