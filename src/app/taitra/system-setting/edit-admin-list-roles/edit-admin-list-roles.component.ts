import { Component, OnInit } from '@angular/core';
import { EditAdminListRolesButtonRenderComponent } from './edit-admin-list-roles-button-render/edit-admin-list-roles-button-render.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-admin-list-roles',
  templateUrl: './edit-admin-list-roles.component.html',
  styleUrls: ['./edit-admin-list-roles.component.scss']
})
export class EditAdminListRolesComponent implements OnInit {

  source = [
    {
      name: 'SuperAdmin',
      title: '所有權限都開啟',
      bindingAccount: 'sysadmin, yoyohyweb'
    },
    { 
      name: 'TT_role',
      title: '開啟與TT相關的權限',
      bindingAccount: '',
    },
    { 
      name: 'TTS_role',
      title: '開啟與TTS相關的權限',
      bindingAccount: '',
    },
  ]

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      name:{
        title: '角色名稱',
        type: 'string',
        filter: false,
        width: '10%',
      },
      title:{
        title: '描述',
        type: 'string',
        filter: false,
        width: '10%',
      },
      bindingAccount:{
        title: '綁定帳號',
        type: 'string',
        filter: false,
      },
      edit:{
        title: '維護',
        type: 'custom',
        filter: false,
        renderComponent: EditAdminListRolesButtonRenderComponent,
        // width: '10%',
      }
    }
  }

  constructor( private router: Router) { }

  ngOnInit() {
  }

  addAdmin(){
    this.router.navigate(['taitra/system-setting/edit-admin-list-roles/edit-admin-list-role-page'])
  }

}
