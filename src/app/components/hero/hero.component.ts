// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.hero = this._heroesServices.getHero( params['id'] );
      console.log(this.hero);
    });
   }

  ngOnInit(): void {
  }

}
