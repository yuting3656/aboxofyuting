import { Component, OnInit } from '@angular/core';
import { EditApiSettingButtonRenderComponent } from '../edit-api-setting-button-render/edit-api-setting-button-render.component';
import { TaitraApiFakeDataService } from '../../shared/data/taitra-api-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';
import { EditApiSettingHyperLinkRenderComponent } from '../edit-api-setting-hyperlink-render/edit-api-setting-hyperlink-render.component';

@Component({
  selector: 'ngx-edit-api-setting',
  templateUrl: './edit-api-setting.component.html',
  styleUrls: ['./edit-api-setting.component.scss']
})
export class EditApiSettingComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource;

  constructor(
    private apiSrc: TaitraApiFakeDataService,
  ) { 
    const data = this.apiSrc.getData()
    this.source.load(data)
  }

  ngOnInit() {
  }

  // smart table
  settings={
    pager: {
      display: true,
      perPage: 15
    },
    actions: false,
    hideSubHeader: true,
    columns: {
      name:{
        title:'API名稱',
        filter: false,
        // type: 'html',
        type: 'custom',
        renderComponent: EditApiSettingHyperLinkRenderComponent
      },
      apiUrl:{
        title:'API 格式',
        filter: false,
        // type:'html',
        // valuePrepareFunction: (picture:string) => {
        //    return `<img width="150px" src="./../../../../assets/images/${picture}.jpg"/>`; 
        //   },
      },
      status:{
        title:'狀態',
        filter: false,
        type: 'html',
        valuePrepareFunction: (status:string) => {
          if (status === 'enable'){
             return `啟用`;
          }else{
            return `未啟用`;
          }
        },
      },
      // edit:{
      //   title:'維護',
      //   filter: false,
      //   type:'custom',
      //   renderComponent: EditApiSettingButtonRenderComponent,
      //   width: '10%',
      // }
    }
  } 

  // smart table  
  // source=[
  //   {
  //     name: '查詢帳號',
  //     apiUrl: '/user/accounts/{account}',
  //     metohd: 'GET',
  //     status: 'enable',
  //   },
  //   {
  //     name: '更新帳號資訊',
  //     apiUrl: '/user/accounts/{account}',
  //     metohd: 'POST',
  //     status: 'enable',
  //   },
  //   {
  //     name: '帳號註冊',
  //     apiUrl: '/user/accounts',
  //     method: 'POST',
  //     status: 'enable',
  //   },
  //   {
  //     name: '帳號簡易註冊',
  //     apiUrl: '/user/accounts/simpleRegister',
  //     method: 'POST',
  //     status: 'disable',
  //   },
  //   {
  //     name: '公司(ID)列表查詢',
  //     apiUrl: '/company/{companyId}',
  //     method: 'GET',
  //     status: 'enable',
  //   },
  //   {
  //     name: '公司列表查詢',
  //     apiUrl: '/company/pager',
  //     method: 'GET',
  //     status: 'enable',
  //   },
  //   {
  //     name: '更新公司資料',
  //     apiUrl: '/company',
  //     method: 'PUT',
  //     status: 'enable',
  //   },

  //   {
  //     name: '新增會員與公司關聯',
  //     apiUrl: '/company/{companyId}/members',
  //     method: 'PUT',
  //     status: 'enable',
  //   },

  //   {
  //     name: '解除會員與公司關聯',
  //     apiUrl: '/company/{companyId}/members',
  //     method: 'DELETE',
  //     status: 'enable',
  //   },

  //   {
  //     name: '更新公司權益角色',
  //     apiUrl: '/company/{companyId}/companyRight',
  //     method: 'PUT',
  //     status: 'enable',
  //   },
    
  //   {
  //     name: '公司會員查詢',
  //     apiUrl: '/company/{companyId}/members/pager',
  //     method: 'GET',
  //     status: 'enable',
  //   },
        
  //   {
  //     name: 'Email發送服務',
  //     apiUrl: '/notification/mail',
  //     method: 'POST',
  //     status: 'enable',
  //   },

  // ]

}
