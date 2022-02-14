import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { BaseSharedFacade } from '../../../store/shared/shared.facade';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loader;
  constructor(
    public loadingController: LoadingController,
    private sharedFacade: BaseSharedFacade
  ) {}

  ngOnInit(): void {
    this.setLoadersubscription();
  }

  private setLoadersubscription(): void {
    console.log(this.loader);
    this.sharedFacade.isLoading$.subscribe((loading: boolean) => {
      if (loading) {
        this.presentLoading();
      } else {
        this.removeLoading();
      }
    });
  }

  async presentLoading() {
    this.loader = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando',
    });
    await this.loader.present();
  }

  async removeLoading() {
    await this.loader.dismiss();
  }
}
