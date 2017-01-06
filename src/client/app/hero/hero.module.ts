import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeroService } from '../shared/index';

@NgModule({
  imports: [CommonModule, HeroRoutingModule, SharedModule],
  declarations: [HeroComponent, HeroDetailComponent],
  exports: [HeroComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroModule { }
