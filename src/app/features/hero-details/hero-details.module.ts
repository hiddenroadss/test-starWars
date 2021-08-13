import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailsRoutingModule } from './hero-details-routing.module';
import { HeroDetailsComponent } from './hero-details.component';


@NgModule({
  declarations: [
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    HeroDetailsRoutingModule
  ]
})
export class HeroDetailsModule { }
