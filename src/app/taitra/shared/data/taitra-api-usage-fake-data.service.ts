import { Injectable } from "@angular/core";


@Injectable()
export class TaitaApiUsageFakeDataService {

    source=[
        {
            date:'2018/04/04 21:14',
            apiName: '更新公司資料',
            usageApp: '台灣經貿網',
            ip: '220.130.139.12',
        },
        {
            date:'2018/02/03 18:00',
            apiName: '帳號密碼驗證',
            usageApp: '新南向',
            ip: '220.130.139.12',
        },
        {
            date:'2017/12/11 09:40',
            apiName: '帳號密碼驗證',
            usageApp: '台灣國際專業展',
            ip: '220.130.139.12',
        },
        {
            date:'2017/10/14 10:20',
            apiName: '公司列表查詢',
            usageApp: '台灣經貿網',
            ip: '220.130.139.12',
        },
        {
            date:'2017/08/22 09:53',
            apiName: '公司會員查詢',
            usageApp: '台灣經貿網',
            ip: '220.130.139.12',
        },
        {
            date:'2018/04/04 21:14',
            apiName: '查詢帳號',
            usageApp: '台灣經貿網',
            ip: '220.130.139.12',
        },
        {
            date:'2018/02/03 18:00',
            apiName: 'Email發送服務',
            usageApp: '台灣國際專業展',
            ip: '220.130.139.12',
        },
        {
            date:'2017/12/11 09:40',
            apiName: 'Email發送服務',
            usageApp: '活動匯',
            ip: '220.130.139.12',
        },
        {
            date:'2017/10/14 10:20',
            apiName: '查詢帳號',
            usageApp: '採洽易',
            ip: '220.130.139.12',
        },
        {
            date:'2017/08/22 09:53',
            apiName: '查詢帳號',
            usageApp: '台灣經貿網',
            ip: '220.130.139.12',
        },
        {
            date:'2018/04/04 21:14',
            apiName: '公司(ID)列表查詢',
            usageApp: '採洽易',
            ip: '220.130.139.12',
        },
        {
            date:'2018/02/03 18:00',
            apiName: 'Email發送服務',
            usageApp: '活動匯',
            ip: '220.130.139.12',
        },
        {
            date:'2017/12/11 09:40',
            apiName: '新增會員與公司關聯',
            usageApp: '台灣國際專業展',
            ip: '220.130.139.12',
        },
        {
            date:'2017/10/14 10:20',
            apiName: '公司會員查詢',
            usageApp: '採洽易',
            ip: '220.130.139.12',
        },
        {
            date:'2017/08/22 09:53',
            apiName: '公司會員查詢',
            usageApp: '新南向',
            ip: '220.130.139.12',
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