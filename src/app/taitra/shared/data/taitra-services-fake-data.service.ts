import { Injectable } from '@angular/core';

@Injectable()
export class TaitraServicesFakeDataService {

    source=[
        {
          id: 1,
          name: '台灣經貿網',
          imgUrl: 'tt',
          status: 'enable',
          memberLevel: '公司會員',
        },
        {
            
          id: 2,
          name: '台灣國際專業展',
          imgUrl: 'tts',
          status: 'enable',
          memberLevel: '公司會員',
        },
        {
            
          id: 3,
          name: '採洽易',
          imgUrl: 'isourcing',
          status: 'enable',
          memberLevel: '公司會員',
        },
        {
            
          id: 4,
          name: '活動匯',
          imgUrl: 'tt',
          status: 'disable',
          memberLevel: '一般會員',
        },
        {
            
          id: 5,
          name: '新南向',
          imgUrl: 'newsouth',
          status: 'enable',
          memberLevel: '快速會員',
        },
      ];

    getData() {
       return this.source
    }

    getDataById( id: any ){
      const data = this.source[id-1]
      return data
    }

}
