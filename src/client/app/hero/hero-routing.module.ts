import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'hero', component: HeroComponent },
      { path: 'hero/detail/:id', component: HeroDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
