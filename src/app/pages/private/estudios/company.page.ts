import { Component, OnInit } from '@angular/core';
import { BaseCompanyFacade } from '../../../store/estudios/company.facade';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  constructor(private companyFacade: BaseCompanyFacade) {}

  ngOnInit() {
    this.companyFacade.loadViewData();
  }
}
