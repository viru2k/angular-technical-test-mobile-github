import { BaseActoresFacade } from '../../../store/actores/actores.facade';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit, OnDestroy {
  constructor(private actoresFacade: BaseActoresFacade) {}

  ngOnInit() {
    this.actoresFacade.loadViewData();
  }

  ngOnDestroy() {}

  private clearStore(): void {
    this.actoresFacade.clearActoresForm();
    this.actoresFacade.clearActores();
  }

  ionViewWillLeave() {
    this.clearStore();
  }
}
