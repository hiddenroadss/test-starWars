import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsRoutingModule } from './hero-details-routing.module';
import { HeroDetailsComponent } from './hero-details.component';
import { RetrieveIdModule } from '@pipes/retrieve-id/retrieve-id.module';

@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [CommonModule, HeroDetailsRoutingModule, RetrieveIdModule],
})
export class HeroDetailsModule {}
