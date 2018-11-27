import { Component, OnInit } from '@angular/core';
import { TaitaApiAuthFakeDataService } from '../../shared/data/taitra-api-auth-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-api-auth-log',
  templateUrl: './api-auth-log.component.html',
  styleUrls: ['./api-auth-log.component.scss']
})
export class ApiAuthLogComponent implements OnInit {

    // toggle button attribute
    show:boolean = false;
    buttonName: string = '進階';
  

  // smart table 
  source: LocalDataSource = new LocalDataSource()

  constructor(
    private apiAuthSrc: TaitaApiAuthFakeDataService
  ) { 
    const data = this.apiAuthSrc.getData()
    this.source.load(data)
  }

  ngOnInit() {
  }

  settings ={
    actions: false,
    hideSubHeader: true,
    columns:{
      date:{
        title: '授權日期',
        filter: false,
      },
      apiName:{
        title: 'API名稱',
        filter: false,
      },
      editor:{
        title: '授權者',
        filter: false,
      },
      targetService:{
        title: '授權服務',
        filter: false,
      },
      status:{
        title: '授權狀態',
        filter: false,
        type: 'html',
        valuePrepareFunction: (status: any) => {
          if(status == "enable"){
            return `啟用`
          }else{
            return `關閉`
          }
        }
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
