// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Store
import { EstudiosActions } from './actions/action-types';
import { EstudiosState } from './reducers/reducer-map';
import { EstudiosFormState } from './reducers/estudios.reducers';

import * as fromSelectors from './selectors/estudios.selectors';
import { Estudio } from '../../models/Estudio.model';
import { Persona } from '../../models/Persona.model';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseEstudioFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  /*   estudios$: Observable<Estudio[]> = this.parentStore.pipe(
    select(fromSelectors.getEstudios)
  ); */

  estudioList$: Observable<Estudio[]> = this.parentStore.pipe(
    select(fromSelectors.getEstudioList)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<EstudiosFormState> = this.parentStore.pipe(
    select(fromSelectors.getEstudiosFormState)
  );

  selectedEstudio$: Observable<Estudio> = this.parentStore.pipe(
    select(fromSelectors.getSelectedEstudio)
  );

  constructor(private parentStore: Store<EstudiosState>) {}

  loadViewData(): void {
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
      this.parentStore.dispatch(EstudiosActions.getEstudios());
    });
  }

  updateCurrentEstudio(selectedEstudio: Estudio): void {
    this.parentStore.dispatch(EstudiosActions.updateForm({ selectedEstudio }));
  }

  setEstudio(estudio: Estudio): void {
    this.parentStore.dispatch(EstudiosActions.setEstudio({ estudio }));
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updateEstudio(estudio: Estudio): void {
    this.parentStore.dispatch(EstudiosActions.updateEstudio({ estudio }));
  }

  deleteEstudio(estudio: Estudio): void {
    this.parentStore.dispatch(EstudiosActions.deleteEstudio({ estudio }));
  }

  clearEstudios(): void {
    this.parentStore.dispatch(EstudiosActions.clearData());
  }

  clearEstudiosForm(): void {
    this.parentStore.dispatch(EstudiosActions.clearForm());
  }

  clearCurrentEstudioForm(): void {
    this.parentStore.dispatch(EstudiosActions.clearCurrentEstudioForm());
  }
}
