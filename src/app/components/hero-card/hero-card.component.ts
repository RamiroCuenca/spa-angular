import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() idx: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  watchHero( idx: number) {
    this.router.navigate( [ 'hero', this.idx]);
  }

}
