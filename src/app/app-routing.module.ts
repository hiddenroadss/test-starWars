import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: ':name',
    loadChildren: () =>
      import('./features/hero-details/hero-details.module').then(
        (m) => m.HeroDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
