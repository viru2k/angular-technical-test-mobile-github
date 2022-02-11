// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store

import { sharedState } from './reducers/reducer-map';

import * as fromSelectors from './selectors/shared.selectors';
import { sharedActions } from './actions/action-types';

@Injectable({ providedIn: 'root' })
export class BaseSharedFacade {
  // DATA VIEW OBSERVABLES
  isLoading$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.getLoading)
  );

  constructor(private parentStore: Store<sharedState>) {}

  showLoader(): void {
    this.parentStore.dispatch(sharedActions.showLoader());
  }
  HideLoader(): void {
    this.parentStore.dispatch(sharedActions.hideLoader());
  }
}
