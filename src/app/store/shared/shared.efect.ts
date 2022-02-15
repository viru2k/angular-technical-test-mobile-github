// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions } from '@ngrx/effects';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions) {}
}
