import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-login-log',
  templateUrl: './admin-login-log.component.html',
  styleUrls: ['./admin-login-log.component.scss']
})
export class AdminLoginLogComponent implements OnInit {

  source=[
    {
      name: 'sysadmin',
      loginTime: '2018/10/09 08:45',
      ip: '10.0.0.1',
    },
    {
      name: 'yoyohyweb',
      loginTime: '2018/11/09 17:45',
      ip: '127.0.0.1',
    },
    {
      name: 'sysadmin',
      loginTime: '2018/07/29 08:45',
      ip: '10.0.0.1',
    },
    {
      name: 'yoyohyweb',
      loginTime: '2018/04/15 10:45',
      ip: '192.168.1.34',
    },
    {
      name: 'sysadmin',
      loginTime: '2018/10/09 18:45',
      ip: '10.0.0.1',
    },
  ]

  settings={
    actions: false,
    hideSubHeader: true,
    columns: {
      loginTime:{
        title:'登入時間',
        filter: false,
      },
      name:{
        title:'系統帳號',
        filter: false,
      },
      ip:{
        title:'ip',
        filter: false,
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
