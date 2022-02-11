import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public main: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.main = 'catalogo de Peliculas';
  }
}
