// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  heroesArr: [];
  term: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>
      {
        this.heroesArr = [];
        this.term = params['record'];
        console.log( params['record'] );

        for ( let hero of this.heroesService.searchHeroes( params['record']))
        {
          this.heroesArr.push(hero);
        }
      });
  }

}
