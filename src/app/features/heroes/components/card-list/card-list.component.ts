import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '@interfaces/Hero';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() items: Hero[] = [];
  @Input() onItemClick!: (hero: Hero) => void;
}
