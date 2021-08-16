import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '@interfaces/Hero';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() items: Hero[] = [];

  constructor(private router: Router) {}

  showHeroDetails = (hero: Hero): void => {
    this.router.navigate([hero.name.replace(/\s/, '_')]);
  };
}
