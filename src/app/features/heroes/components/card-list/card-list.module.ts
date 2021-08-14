import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';

import { CardModule } from '../card/card.module';
import { RetrieveIdModule } from '@pipes/retrieve-id/retrieve-id.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule, CardModule, RetrieveIdModule],
  exports: [CardListComponent],
})
export class CardListModule {}
