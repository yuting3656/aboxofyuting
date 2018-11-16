import { Component, OnInit } from '@angular/core';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-dig-login-log',
  templateUrl: './dig-login-log.component.html',
  styleUrls: ['./dig-login-log.component.scss']
})
export class DigLoginLogComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableService,
  ) {
    const data = this.service.getData();
    this.source.load(data);
   }

  ngOnInit() {
  }

  settings = {
    actions: false,
    // 可以把多的　row 隱藏~~~
    hideSubHeader: true,
    columns: {
      // contry: {
      //   title: '國別',
      //   type: 'number',
      //   filter: false,
      // },
      name: {
        title: '姓名',
        type: 'string',
        filter: false,
      },
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      // tellphone: {
      //   title: '行動電話',
      //   type: 'string',
      //   filter: false,
      // },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false,
        // width: '15%',
      },
      // phone: {
      //   title: '連絡電話',
      //   type: 'number',
      //   filter: false,
      // },
      // fax: {
      //   title: '傳真電話',
      //   type: 'number',
      //   filter: false,
      // },
      // address: {
      //   title: '地址',
      //   type: 'number',
      //   filter: false,
      // },
      tt_visit:{
        title: 'TT',
        type: 'string',
        filter: false,
      },
      tts_visit:{
        title: 'TTS',
        type: 'string',
        filter: false,
      },
      issorcing:{
        title: '採洽易',
        type: 'string',
        filter: false,
      },
      event:{
        title: '活動匯',
        type: 'string',
        filter: false,
      },
      newsouth:{
        title: '新南向',
        type: 'string',
        filter: false,
      },

      
    },
  };


}
