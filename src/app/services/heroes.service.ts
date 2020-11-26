import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    private heroes: Hero[] = [
        {
          name: 'Aquaman',
          bio: 'Aquamans most famous super power it is the telepatic capacity witch allow him to communicate with marine life, wich he can invoce from large distances.',
          img: 'assets/img/aquaman.png',
          born: '1941-11-01',
          home: 'DC'
        },
        {
          name: 'Batman',
          bio: 'Batman\'s main characteristics can be summarize in « physical prowess, deductive habilities and his obsession ». The largest amount of his basic habilities from the comics have been changing through the different interpretations wich have been given to the character.',
          img: 'assets/img/batman.png',
          born: '1939-05-01',
          home: 'DC'
        },
        {
          name: 'Daredevil',
          bio: 'After going blind, the other four senses of Daredevil rise up due to being exposed to superhuman levels of radiation in an accident he had as a child. In spite of his blindness, hi managed to \'see\' through a \'sixth sense\' wich it serves as a radar similar to bat ones.',
          img: 'assets/img/daredevil.png',
          born: '1964-01-01',
          home: 'Marvel'
        },
        {
          name: 'Hulk',
          bio: 'His main super power is his capacity to increase his strength to unlimitless levels as his fury rise up. Depending on what personality controls or it is on charge in that moment (The Hulk Banner it is physically weaker but it compensates with it intelligence).',
          img: 'assets/img/hulk.png',
          born: '1962-05-01',
          home: 'Marvel'
        },
        {
          name: 'Linterna Verde',
          bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
          img: 'assets/img/linterna-verde.png',
          born: '1940-06-01',
          home: 'DC'
        },
        {
          name: 'Spider-Man',
          bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \'sentido arácnido\', que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
          img: 'assets/img/spiderman.png',
          born: '1962-08-01',
          home: 'Marvel'
        },
        {
          name: 'Wolverine',
          bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
          img: 'assets/img/wolverine.png',
          born: '1974-11-01',
          home: 'Marvel'
        }
      ];

    constructor() {
    }

    getHeroes(): Hero[]{
        return this.heroes;
    }

    getHero( idx: string){
      return this.heroes[idx];
    }

    searchHeroes( record: string ): Hero[]
    {
      const heroesArr: Hero[] = [];

      record = record.toLowerCase();

      for ( let hero of this.heroes )
      {
        let name = hero.name.toLowerCase();
        if ( name.indexOf(record) >= 0 ) 
        // Check if the param it's contained in the hero's name
        // If it's true, returns 0 or 1 ; If it's false, returns -1
        {
          heroesArr.push( hero );
        }
      }

      return heroesArr;
    }
}

export interface Hero {
  name: string;
  bio : string;
  img : string;
  born: string;
  home: string;
}
