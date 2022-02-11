import { BasePeliculasFacade } from './../../../store/peliculas/peliculas.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit {
  constructor(private peliculasFacade: BasePeliculasFacade) {}

  ngOnInit() {
    this.peliculasFacade.loadViewData();
  }
}
