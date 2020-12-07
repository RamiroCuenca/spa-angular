// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { Hero, HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  heroesArr: Hero[] = [];
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
        // console.log( params['record'] );

        // for ( let hero of this.heroesService.searchHeroes( params['record']))
        for ( const hero of this.heroesService.searchHeroes( this.term ))
        {
          this.heroesArr.push(hero);
        }
      });
  }

}
