import { Component, OnInit } from '@angular/core';
import { TaitraCompanyFakeDataService } from '../../shared/data/taitra-company-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.scss']
})
export class CompanySearchComponent implements OnInit {

  // toggle button attribute
  show:boolean = false;
  buttonName: string = '進階';

  // smart table 
  source: LocalDataSource = new LocalDataSource
  

  constructor(
    private comSrc: TaitraCompanyFakeDataService
  ) { 
    const data = this.comSrc.getData()
    this.source.load(data)
  }

  ngOnInit() {
  }

  HomeMadeToggle(){
    this.show = ! this.show;
    // chamge buttom name 
    if (this.show) {
      this.buttonName = '縮回'
    } else {
　　　this.buttonName = '進階'
    }
  }

  settings={
    actions: false,
    hideSubHeader: true,
    columns:{
      name:{
        title: '公司名稱',
        filter: false,
      },
      phone:{
        title: '公司電話',
        filter: false,
      }
    }
  }

}
