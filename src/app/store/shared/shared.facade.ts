// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Ngrx
import { select, Store } from '@ngrx/store';

// Store

import { sharedState } from './reducers/reducer-map';

import * as fromSharedSelectors from './selectors/shared.selectors';
import * as fromRouterSelectors from './selectors/reducer-navigator.selectors';
import { sharedActions } from './actions/action-types';

@Injectable({ providedIn: 'root' })
export class BaseSharedFacade {
  // DATA VIEW OBSERVABLES
  isLoading$: Observable<boolean> = this.parentStore.pipe(
    select(fromSharedSelectors.getLoading)
  );

  currentRoute$: Observable<any> = this.parentStore.pipe(
    select(fromSharedSelectors.getRouteNavigationDataState)
  );

  constructor(private parentStore: Store<sharedState>) {}

  showLoader(): void {
    this.parentStore.dispatch(sharedActions.showLoader());
  }
  HideLoader(): void {
    this.parentStore.dispatch(sharedActions.hideLoader());
  }
}
