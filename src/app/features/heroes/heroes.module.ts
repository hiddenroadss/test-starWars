import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { CardModule } from './components/card/card.module';
import { DropdownModule } from '@components/dropdown/dropdown.module';
import { RetrieveIdModule } from '@pipes/retrieve-id/retrieve-id.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    RetrieveIdModule,
  ],
})
export class HeroesModule {}
