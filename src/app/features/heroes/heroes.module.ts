import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { DropdownModule } from '@components/dropdown/dropdown.module';
import { CardListModule } from './components/card-list/card-list.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    CardListModule,
  ],
})
export class HeroesModule {}
