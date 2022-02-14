// Angular
import { Injectable } from '@angular/core';

// Ngrx
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Rxjs
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';

// Store
import { CompanyActions } from '../actions/action-types';
import { sharedActions } from '../../shared/actions/action-types';

// API

import { Company } from '../../../models/Company.model';
import { CompanyService } from '../../../services/company.service';

// Show/hide spinner actions
const SHOW_LOADER_ACTIONS = [CompanyActions.getCompanies];
const HIDE_LOADER_ACTIONS = [
  CompanyActions.getCompaniesSuccess,
  CompanyActions.getCompaniesFail,
];

@Injectable()
export class CompaniesEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  getCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.getCompanies),
      exhaustMap(() =>
        this.companyService.getCompanies().pipe(
          map((data: Company[]) => {
            return CompanyActions.getCompaniesSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(CompanyActions.getCompaniesFail(error)))
        )
      )
    )
  );

  updateCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.updateCompany),
      exhaustMap((payload) =>
        this.companyService.putCompany(payload.company).pipe(
          map((data) => {
            return CompanyActions.updateCompanySuccess({
              payload: data,
            });
          }),
          catchError((error) => of(CompanyActions.getCompaniesFail(error)))
        )
      )
    )
  );

  setCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.setCompany),
      exhaustMap((payload) =>
        this.companyService.postCompany(payload.company).pipe(
          map((data) => {
            return CompanyActions.setCompanySuccess({
              payload: data,
            });
          }),
          catchError((error) => of(CompanyActions.getCompaniesFail(error)))
        )
      )
    )
  );

  deleteCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.deleteCompany),
      exhaustMap((payload) =>
        this.companyService.deleteCompany(payload.company).pipe(
          map((data) => {
            return CompanyActions.deleteCompanySuccess({
              payload: data,
            });
          }),
          catchError((error) => of(CompanyActions.getCompaniesFail(error)))
        )
      )
    )
  );

  showLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...SHOW_LOADER_ACTIONS),
      map(() => sharedActions.showLoader())
    )
  );

  hideLoader$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...HIDE_LOADER_ACTIONS),
      map(() => sharedActions.hideLoader())
    )
  );
}
