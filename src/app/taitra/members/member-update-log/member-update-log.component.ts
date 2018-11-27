import { Component, OnInit } from '@angular/core';
import { TaitraMemberUpdateLogFakeDataService } from '../../shared/data/taitra-member-update-log-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-member-update-log',
  templateUrl: './member-update-log.component.html',
  styleUrls: ['./member-update-log.component.scss']
})
export class MemberUpdateLogComponent implements OnInit {

  // smart table 
  source: LocalDataSource = new LocalDataSource

  constructor(
    private memberUpdSrc: TaitraMemberUpdateLogFakeDataService
    ){
      const data = this.memberUpdSrc.getData()
      this.source.load(data)
    }

  ngOnInit() {
  }

  settings={
    actions: false,
    hideSubHeader: true,
    columns:{
      date:{
        title: '修改時間',
        filter: false,

      },
      name:{
        title: '會員',
        filter: false,

      },
      editor:{
        title: '修改者',
        filter: false,
      },
      ip:{
        title: 'ip',
        filter: false,

      }
    }
  }

}
