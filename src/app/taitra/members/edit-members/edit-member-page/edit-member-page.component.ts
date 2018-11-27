import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-edit-member-page',
  templateUrl: './edit-member-page.component.html',
  styleUrls: ['./edit-member-page.component.scss']
})
export class EditMemberPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  goback(){
    this._location.back();
  }


  settings={
    actions: false,
    hideSubHeader: true,
    columns: {
      service:{
        title:'服務',
        filter: false,
      },
      FirstLoginTime:{
        title:'首次登入時間',
        filter: false,
      },
      TOS:{
        title: '勾選同意說明書時間',
        filter: false,
      },
      // edit:{
      //   title: '修改'
      // },
      // tt:{
      //   title: 'test',
      // }
    }
  }

  // TOS == terms of use, terms of service
  source = [
    {
      service: '台灣經貿網',
      FirstLoginTime: '2017/10/11',
      TOS:'2018/10/09',
    },
    {
      service: '台灣國際專業展',
      FirstLoginTime: '2017/12/11',
      TOS:'2017/12/25',
    },
    {
      service: '採洽易',
      FirstLoginTime: '2018/02/11',
      TOS:'2018/04/11',
    },
    {
      service: '活動匯',
      FirstLoginTime: '2018/04/11',
      TOS:'2018/09/21',
    },
    {
      service: '新南向',
      FirstLoginTime: '2018/06/11',
      TOS:'2018/09/09',
    },
  ]


  settings2={
    actions: false,
    hideSubHeader: true,
    columns: {
      ttFirstLoginTime:{
        title:'TT 勾選同意說明書',
        filter: false,
      },
      ttsFirstLoginTime:{
        title:'TTS 勾選同意說明書',
        filter: false,
      },
      isourcingFirstLoginTime:{
        title:'採洽易 勾選同意說明書',
        filter: false,
      },
      eventsFirstLoginTime:{
        title:'活動匯 勾選同意說明書',
        filter: false,
      },
      newsouthFirstLoginTime:{
        title:'新南向 勾選同意說明書',
        filter: false,
      },
    }
  }

  source2 = [
    {
      ttFirstLoginTime: '2017/10/11',
      ttsFirstLoginTime: '2017/12/11',
      isourcingFirstLoginTime: '2018/02/11',
      eventsFirstLoginTime: '2018/04/11',
      newsouthFirstLoginTime: '2018/06/11',
    },
  ]


}
