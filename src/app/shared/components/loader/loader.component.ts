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
    this.setLoaderParams();
  }

  async setLoaderParams() {
    this.loader = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando',
    });
  }

  private setLoadersubscription(): void {
    console.log(this.loader);
    this.sharedFacade.isLoading$.subscribe((loading: boolean) => {
      console.log('call action', loading);

      if (loading) {
        this.presentLoading();
      } else {
        this.removeLoading();
      }
    });
  }

  async presentLoading() {
    await this.loader.present();
  }

  async removeLoading() {
    await this.loader.dismiss();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
