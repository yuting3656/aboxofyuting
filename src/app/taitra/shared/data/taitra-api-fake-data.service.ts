import { Injectable } from "@angular/core";


@Injectable()
export class TaitraApiFakeDataService {

    source=[
        {
          id: '1',
          name: '帳號密碼驗證',
          apiUrl: '/auth/user/authentication',
          metohd: 'POST',
          status: 'enable',
          inputParams: '{"account": 帳號, "password": 密碼}',
          outPutInfo: '{"code": 代碼, "message": 訊息}',          
        },
        {
          id: '2',
          name: '查詢帳號',
          apiUrl: '/user/accounts/{account}',
          metohd: 'GET',
          status: 'enable',
        },
        {
          id: '3',
          name: '更新帳號資訊',
          apiUrl: '/user/accounts/{account}',
          metohd: 'POST',
          status: 'enable',
        },
        {
          id: '4',
          name: '帳號註冊',
          apiUrl: '/user/accounts',
          method: 'POST',
          status: 'enable',
        },
        {
          id: '5',
          name: '帳號簡易註冊',
          apiUrl: '/user/accounts/simpleRegister',
          method: 'POST',
          status: 'disable',
        },
        {
          id: '6',
          name: '公司(ID)列表查詢',
          apiUrl: '/company/{companyId}',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '7',
          name: '公司列表查詢',
          apiUrl: '/company/pager',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '8',
          name: '更新公司資料',
          apiUrl: '/company',
          method: 'PUT',
          status: 'enable',
        },
    
        {
          id: '9',
          name: '新增會員與公司關聯',
          apiUrl: '/company/{companyId}/members',
          method: 'PUT',
          status: 'enable',
        },
    
        {
          id: '10',
          name: '解除會員與公司關聯',
          apiUrl: '/company/{companyId}/members',
          method: 'DELETE',
          status: 'enable',
        },
    
        {
          id: '11',
          name: '更新公司權益角色',
          apiUrl: '/company/{companyId}/companyRight',
          method: 'PUT',
          status: 'enable',
        },
        
        {
          id: '12',
          name: '公司會員查詢',
          apiUrl: '/company/{companyId}/members/pager',
          method: 'GET',
          status: 'enable',
        },
            
        {
          id: '13',
          name: 'Email發送服務',
          apiUrl: '/notification/mail',
          method: 'POST',
          status: 'enable',
        },
    
      ]

    getData(){
        return this.source
    }

    getDataById(id:any){
      const data = this.source[id-1]
      return data
    }


}