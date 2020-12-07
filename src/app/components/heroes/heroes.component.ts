// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// Services
import { HeroesService } from '../../services/heroes.service';

// Interface
import { Hero } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  // watchHero( idx: number) {
  //   this.router.navigate( [ 'hero', idx]);
  // }

}
