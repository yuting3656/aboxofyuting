import { Injectable } from '@angular/core';

@Injectable()
export class TaitraMemberUpdateLogFakeDataService {

    source=[
        {
          date: '2018/09/10 11:24',
          name: '王小明',
          editor: '王小明',
          ip: '10.0.0.1',
        },
        {
          date: '2018/10/10 10:24',
          name: '柯小柏',
          editor: 'sysadmin',
          ip: '128.0.0.1',
        },
        {
          date: '2018/11/24 11:24',
          name: '韓小天',
          editor: '韓小天',
          ip: '10.0.0.1',
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