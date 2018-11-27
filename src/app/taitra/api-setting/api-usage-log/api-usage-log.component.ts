import { Component, OnInit } from '@angular/core';
import { TaitaApiUsageFakeDataService } from '../../shared/data/taitra-api-usage-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-api-usage-log',
  templateUrl: './api-usage-log.component.html',
  styleUrls: ['./api-usage-log.component.scss']
})
export class ApiUsageLogComponent implements OnInit {

  // toggle button attribute
  show: boolean = false;
  buttonName: string = '進階  ';

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private apiUsageSrc: TaitaApiUsageFakeDataService
  ){
    const data = this.apiUsageSrc.getData() 
    this.source.load(data)
  }

  ngOnInit() {
  }

  settings={
    actions: false,
    hideSubHeader: true,
    columns:{
      date:{
        title: '介接時間',
        filter: false,
      },
      usageApp:{
        title: '服務',
        filter: false,
      },
      apiName:{
        title: 'API 名稱',
        filter: false,
      },
      ip:{
        title: 'ip',
        filter: false,
      },
    }
  }

  HomeMadeToggle(){
    this.show  = !this.show;
    // chamge buttom name 
    if (this.show) {
      this.buttonName = '縮回'
    } else {
　　　this.buttonName = '進階'
    }
  }
}
