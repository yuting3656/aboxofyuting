import { Injectable } from "@angular/core";


@Injectable()
export class TaitraCompanyFakeDataService {

    source=[
        {
          id: '1',
          name: '鴻海',
          phone: '03-12345678',
          metohd: 'POST',       
        },
        {
          id: '2',
          name: '捷安特',
          phone: '05-98765432',
          metohd: 'GET',
          status: 'enable',
        },
        {
          id: '3',
          name: '悠遊卡公司',
          phone: '02-11112222',
          metohd: 'POST',
          status: 'enable',
        },
        {
          id: '4',
          name: '聯發科',
          phone: '09-0000888',
          method: 'POST',
          status: 'enable',
        },
        {
          id: '5',
          name: 'HP',
          phone: '08-20181124',
          method: 'POST',
          status: 'disable',
        },
        {
          id: '6',
          name: '台積電',
          phone: '04-95279527',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '7',
          name: '群創',
          phone: '01-09090909',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '8',
          name: '光寶',
          phone: '08-88884444',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '9',
          name: '池上便當',
          phone: '06-09090909',
          method: 'GET',
          status: 'enable',
        },
        {
          id: '10',
          name: 'ASUS',
          phone: '02-08876654',
          method: 'GET',
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