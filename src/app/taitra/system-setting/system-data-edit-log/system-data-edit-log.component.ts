import { Component, OnInit } from '@angular/core';
import { SystemDataEditLogButtonRenderComponent } from './system-data-edit-log-button-render/system-data-edit-log-button-render.component';

@Component({
  selector: 'ngx-system-data-edit-log',
  templateUrl: './system-data-edit-log.component.html',
  styleUrls: ['./system-data-edit-log.component.scss']
})
export class SystemDataEditLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  source=[
    {
      systemEditTime: '2018/10/09 18:45',
      editAccount: 'sysadmin',
      editItem: 'API管理',
      ip: '10.0.0.1',
    },
    {
      systemEditTime: '2018/07/29 08:45',
      editAccount: 'systest',
      editItem: '應用系統維護',
      ip: '127.0.0.1',
    },
    {
      systemEditTime: '2018/10/09 08:45',
      editAccount: 'admin',
      editItem: '密碼規則',
      ip: '10.0.0.1',
    },
    {
      systemEditTime: '2018/11/09 17:45',
      editAccount: 'sysadmin',
      editItem: '應用系統維護',
      ip: '10.0.0.1',
    },
    
  ]

  settings={
    actions: false,
    hideSubHeader: true,
    columns: {
      systemEditTime:{
        title: '異動時間',
        filter:false,
      },
      editAccount:{
        title: '系統帳號',
        filter:false,
      },
      ip:{
        title: 'IP',
        filter:false,
      },
      editItem:{
        title: '異動項目',
        filter: false,
      },
      // edit:
      // {
      //   title: '動作',
      //   type: 'custom',
      //   renderComponent: SystemDataEditLogButtonRenderComponent,
      // }
    },
    // attr: {
    //   class: 'table-bordered table-striped'
    // }
  }
}
