// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// Ngrx
import { select, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Store
import { ActoresActions } from './actions/action-types';
import { ActoresState } from './reducers/reducer-map';
import { ActoresFormState } from './reducers/actores.reducers';

import * as fromSelectors from './selectors/actores.selectors';
import { Actor } from '../../models/Actor.model';

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: 'root' })
export class BaseActoresFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  /*   actors$: Observable<Actor[]> = this.parentStore.pipe(
    select(fromSelectors.getActores)
  ); */

  actorList$: Observable<Actor[]> = this.parentStore.pipe(
    select(fromSelectors.getActorList)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<ActoresFormState> = this.parentStore.pipe(
    select(fromSelectors.getActoresFormState)
  );

  selectedActor$: Observable<Actor> = this.parentStore.pipe(
    select(fromSelectors.getSelectedActor)
  );

  constructor(private parentStore: Store<ActoresState>) {}

  loadViewData(): void {
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
      this.parentStore.dispatch(ActoresActions.getActores());
    });
  }

  updateCurrentActor(selectedActor: Actor): void {
    this.parentStore.dispatch(ActoresActions.updateForm({ selectedActor }));
  }

  setActor(actor: Actor): void {
    this.parentStore.dispatch(ActoresActions.setActor({ actor }));
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updateActor(actor: Actor): void {
    this.parentStore.dispatch(ActoresActions.updateActor({ actor }));
  }

  deleteActor(actor: Actor): void {
    this.parentStore.dispatch(ActoresActions.deleteActor({ actor }));
  }

  clearActores(): void {
    this.parentStore.dispatch(ActoresActions.clearData());
  }

  clearActoresForm(): void {
    this.parentStore.dispatch(ActoresActions.clearForm());
  }

  clearCurrentActorForm(): void {
    this.parentStore.dispatch(ActoresActions.clearCurrentActorForm());
  }
}
