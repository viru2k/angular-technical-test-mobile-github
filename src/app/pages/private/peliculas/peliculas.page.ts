import { BasePeliculasFacade } from './../../../store/peliculas/peliculas.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  constructor(private peliculasFacade: BasePeliculasFacade) {}

  ngOnInit() {
    this.peliculasFacade.loadViewData();
  }
}
