import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!: Heroe;
  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService){}

  ngOnInit(): void {
   this.activatedRoute.params
   .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroesById(id))

   )
   .subscribe( heroe => this.heroe = heroe)

  }
}
