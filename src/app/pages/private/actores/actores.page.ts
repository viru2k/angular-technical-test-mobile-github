import { BasePeliculasFacade } from './../../../store/peliculas/peliculas.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {
  constructor(private peliculasFacade: BasePeliculasFacade) {}

  ngOnInit() {
    this.peliculasFacade.loadViewData();
  }
}
