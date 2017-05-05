import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
    private _heroService: HeroService) {}

  ngOnInit(): void {
    this._getHeroes();
  }

  _getHeroes(): void {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  _onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  _gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  _add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  _delete(hero: Hero): void {
    this._heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null };
      })
  }
}
