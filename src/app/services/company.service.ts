// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJs
import { Observable } from 'rxjs';

//Api
import { Company } from '../models/Company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url + 'companies');
  }

  getCompanyById(company: Company): Observable<Company> {
    return this.http.get<Company>(this.url + 'companies/' + company.id);
  }

  postCompany(company: Company): Observable<Company[]> {
    return this.http.post<Company[]>(this.url + 'companies', company);
  }

  putCompany(company: Company): Observable<Company[]> {
    return this.http.put<Company[]>(
      this.url + 'companies/' + company.id,
      company
    );
  }

  deleteCompany(company: Company): Observable<Company[]> {
    return this.http.delete<Company[]>(this.url + 'companies/' + company.id);
  }
}
