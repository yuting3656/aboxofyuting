import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-member-login-log',
  templateUrl: './member-login-log.component.html',
  styleUrls: ['./member-login-log.component.scss']
})
export class MemberLoginLogComponent implements OnInit {

  // toggle button attribute
  show:boolean = false;
  buttonName: string = '進階';

  source=[
    {
      name: '王小明',
      loginTime: '2018/11/19 08:45',
      prviousLoginTime: '2016/10/10 10:10',
      app: 'TT',
      ip: '10.0.0.1',
      loginStauts: 'success',
      status: '快速登入會員',
      loginOk: 'ok',
    },
    {
      name: '林阿宏',
      loginTime: '2018/11/19 17:45',
      prviousLoginTime: '2017/10/10 10:10',
      app: 'TTS',
      ip: '127.0.0.1',
      loginStauts: 'passwordError',
      status: '公司會員',
      loginOk: 'not ok',
    },
    {
      name: '陳大鵬',
      loginTime: '2018/11/19 08:45',
      prviousLoginTime: '2017/10/10 10:10',
      app: '活動匯',
      ip: '10.0.0.1',
      loginStauts: 'success',
      status: '公司會員',
      loginOk: 'ok',
    },
    {
      name: '柯小文',
      loginTime: '2018/11/19 10:45',
      prviousLoginTime: '2017/10/10 10:10',
      app: '採洽易',
      ip: '192.168.1.34',
      loginStauts: 'success',
      status: '公司會員',
      loginOk: 'ok',
    },
    {
      name: '韓中天',
      loginTime: '2018/11/19 18:45',
      prviousLoginTime: '2017/10/10 10:10',
      app: '活動匯',
      ip: '10.0.0.1',
      loginStauts: 'noAccoount',
      status: '個人會員',
      loginOk: 'not ok',
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
      // app:{
      //   title:'服務',
      //   filter: false,
      // },
      loginStauts:{
        title: '登入狀況',
        filter: false,
        type: 'html',
        valuePrepareFunction: (loginStauts: string) => {
          if (loginStauts == 'success') {
            return `成功`;
          } else if (loginStauts == 'passwordError') {
            return `密碼錯誤`;
          }else if (loginStauts == 'noAccoount') {
            return `帳號不存在`;
         }
       },
   　 },
      loginOk:{
        title: '是否成功',
        filter: false,
        type: 'html',
        valuePrepareFunction: (loginOk: string) => {
          if (loginOk == 'ok') {
            return `登入成功`;
          } else{
            return `登入失敗`
          }
         },
        width: '10%',
       },
      name:{
        title:'姓名',
        filter: false,
      },
      status:{
        title: '會員狀態',
        filter: false,
      },
      ip:{
        title:'ip',
        filter: false,
      },
      prviousLoginTime:{
        title: '上一次登入時間',
        filter: false,
      },
    }
  }

  constructor() { }

  ngOnInit() {
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
