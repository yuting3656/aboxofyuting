import { Injectable } from "@angular/core";


@Injectable()
export class TaitaApiAuthFakeDataService {

    source=[
    　{
        date:'2018/08/08 08:07',
        apiName: '帳號密碼驗證',
        editor: 'sysadmin',
        targetService: '台灣國際專業展',
        status: 'enable',
      },
      {
        date:'2018/06/06 19:00',
        apiName: '帳號註冊',
        editor: 'sysadmin',
        targetService: '台灣經貿網',
        status: 'disable',
      },
      {
        date:'2018/04/23 09:00',
        apiName: '更新帳號資訊',
        editor: 'sysadmin',
        targetService: '台灣國際專業展',
        status: 'enable',
      },
      {
        date:'2007/07/17 17:17',
        apiName: '公司列表查詢',
        editor: 'sysadmin',
        targetService: '台灣經貿網',
        status: 'enable',
      },
      {
        date:'2009/09/09 09:09',
        apiName: '更新公司資料',
        editor: 'sysadmin',
        targetService: '活動匯',
        status: 'enable',
      },
      {
        date:'2018/06/06 19:00',
        apiName: '新增會員與公司關聯',
        editor: 'sysadmin',
        targetService: '新南向',
        status: 'enable',
      },
      {
        date:'2010/10/19 19:11',
        apiName: '公司會員查詢',
        editor: 'sysadmin',
        targetService: '採洽易',
        status: 'enable',
      },
      {
        date:'2018/03/23 17:45',
        apiName: 'Email發送服務',
        editor: 'sysadmin',
        targetService: '活動匯',
        status: 'disable',
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