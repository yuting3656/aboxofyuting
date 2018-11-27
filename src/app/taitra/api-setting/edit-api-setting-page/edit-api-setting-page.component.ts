import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route } from '@angular/router';
import { TaitraApiFakeDataService } from '../../shared/data/taitra-api-fake-data.service';

@Component({
  selector: 'ngx-edit-api-setting-page',
  templateUrl: './edit-api-setting-page.component.html',
  styleUrls: ['./edit-api-setting-page.component.scss']
})
export class EditApiSettingPageComponent implements OnInit {

  // 宣告一變數　可放入從參數加進來的id name
  editData

  constructor(
    private _location: Location,
    private activateRoute: ActivatedRoute,
    private taitraApiSrc: TaitraApiFakeDataService
    ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      this.editData = this.taitraApiSrc.getDataById(id)
    }
    )
  }


  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      service: {
        title: '服務',
        filter: false,
      },
      FirstLoginTime: {
        title: '首次登入時間',
        filter: false,
      },
      TOS: {
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
  sources = [
    {
      service: '台灣經貿網',
      FirstLoginTime: '2017/10/11',
      TOS: '2018/10/09',
      status: 'disable',
    },
    {
      service: '台灣國際專業展',
      FirstLoginTime: '2017/12/11',
      TOS: '2017/12/25',
      status: 'enable',
    },
    {
      service: '採洽易',
      FirstLoginTime: '2018/02/11',
      TOS: '2018/04/11',
      status: 'enable',
    },
    {
      service: '活動匯',
      FirstLoginTime: '2018/04/11',
      TOS: '2018/09/21',
      status: 'enable',
    },
    {
      service: '新南向',
      FirstLoginTime: '2018/06/11',
      TOS: '2018/09/09',
      status: 'enable',
    },
  ]

  goback() {
    this._location.back();
  }

}
