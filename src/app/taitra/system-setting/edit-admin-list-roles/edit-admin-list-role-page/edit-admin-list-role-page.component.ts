import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-edit-admin-list-role-page',
  templateUrl: './edit-admin-list-role-page.component.html',
  styleUrls: ['./edit-admin-list-role-page.component.scss']
})
export class EditAdminListRolePageComponent implements OnInit {


//　綁定系統帳號
  adminAccountSourceSetting = {
    actions:{
      edit: false,
      add: true,
      position: 'right',
      columnTitle: '動作',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    // actions: false,
    // hideSubHeader: true,
    columns: {
      account:{
        title: '帳號',
        type: 'string',
        filter: false,
        // 客製化選單
        editor:{
          type: 'list',
          config:{
            list: [{
              title: 'sysadmin2',
              value: 'sysadmin2'
            }, {
              title: 'hywebsysadmin',
              value: 'hywebsysadmin'
            }, {
              title: 'admin',
              value: 'admin',
            }, {
              title: 'admin4',
              value: 'admin4'
            }]
          },
        // }
      },
      // name:{
      //   title: '姓名',
      //   type: 'string',
      //   filter: false,
      // },
      // email:{
      //   title: 'E-mail',
      //   type: 'string',
      //   filter: false,
      // },
      // phone:{
      //   title: '電話',
      //   type: 'string',
      //   filter: false,
      // }
    }
  }
}

  adminAccountSource=[
    {
      account: 'sysadmin',
      name: 'hywebTest',
      email: 'hywebTest@hyweb.com.tw',
      password: 'sysadmin',
      phone: '0987587587',
    }, {
      account: 'yoyohyweb',
      name: 'yoyoting',
      email: 'yoyoting@hyweb.com.tw',
      password: 'yoyohyweb',
      phone: '0952766666',
    },
  ]
// ===============================================================================

// 功能權限
moduleSourceSetting={
  actions: false,
    hideSubHeader: true,
    columns: {
      module:{
        title: '模組',
        type: 'string',
        filter: false,
      },
      subModule:{
        title: '模組功能',
        type: 'string',
        filter: false,
        // valuePrepareFunction: (subModule) => {
        //    const data = [ subModule, subModule.subModule1, subModule.subModule2]
        //    return data
        // },
      }
      
    },
}

  moduleSource=[
    {
       module: '會員管理',
       subModule: '會員資料維護'
    },
    {
      module: '系統維護',
      subModule: '系統帳號維護, 系統權限角色維護'
      // {
      //   subModule1: '系統帳號維護',
      //   subModule2: '系統權限角色維護', 
      // }, 
    },
  ]

  constructor( private _location: Location) { }

  ngOnInit() {
  }
  
  goback(){
    this._location.back()
  }
}
