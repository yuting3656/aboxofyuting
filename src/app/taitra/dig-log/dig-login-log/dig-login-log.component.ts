import { Component, OnInit } from '@angular/core';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { LocalDataSource } from 'ng2-smart-table';
import { DigLoginLogRenderComponent } from '../dig-login-log-render/dig-login-log-render.component';

@Component({
  selector: 'ngx-dig-login-log',
  templateUrl: './dig-login-log.component.html',
  styleUrls: ['./dig-login-log.component.scss']
})
export class DigLoginLogComponent implements OnInit {

    // toggle button attribute
    show:boolean = false;
    buttonName: string = '進階';

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
      tt_visit:{
        title: '登入時間',
        type: 'string',
        filter: false,
        width: '15%',
      },
      email: {
        title: '帳號',
        type: 'custom',
        renderComponent: DigLoginLogRenderComponent,
        width: '15%'
      },
      name: {
        title: '姓名',
        type: 'string',
        filter: false,
      },
      company:{
        title: '關聯公司',
        type: 'string',
        filter: false,
      },
      service: {
        title: '服務',
        type: 'string',
        filter: false, 
      },

      // tts_visit:{
      //   title: 'TTS 登入時間',
      //   type: 'string',
      //   filter: false,
      // },
      // issorcing:{
      //   title: '採洽易 登入時間',
      //   type: 'string',
      //   filter: false,
      // },
      // event:{
      //   title: '活動匯 登入時間',
      //   type: 'string',
      //   filter: false,
      // },
      // newsouth:{
      //   title: '新南向 登入時間',
      //   type: 'string',
      //   filter: false,
      // },
    },
  };


  HomeMadeToggle(){
    this.show  = !this.show;

    // chamge buttom name 
    if (this.show) {
      this.buttonName = '縮回'
    } else {
　　　this.buttonName = '進階'
    }
  }
}
