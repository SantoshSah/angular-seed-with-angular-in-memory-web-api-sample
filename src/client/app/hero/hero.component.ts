import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { HeroService } from '../shared/index';
import {Hero} from '../shared/modules/hero';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class HeroComponent implements OnInit {
  heroName: string = '';

  errorMessage: string;
  heroes: Hero[] = [];

  /**
   * Creates an instance of the HeroComponent with the injected
   * HeroService.
   *
   * @param {HeroService} heroService - The injected HeroService.
   */
  constructor(public heroService: HeroService, private router: Router) {}

  /**
   * Get the heroes OnInit
   */
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        heroes=> {this.heroes = heroes},
        error => this.errorMessage = <any>error
      );
  }

  addHeroName() {
    if(!this.heroName) {return;}
    this.heroService.addHeroes(this.heroName.trim())
          .subscribe(
            hero => {
              this.heroName = ''; 
              this.heroes.push(hero);
            },
            error => this.errorMessage = <any>error
          );
  }

  deleteHero(hero: Hero): void {
    this.heroService
        .deleteHero(hero.id)
        .subscribe(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
        });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/hero/detail', id]);
  }

}
