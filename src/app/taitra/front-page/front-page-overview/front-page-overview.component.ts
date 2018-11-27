import { Component, OnInit, Testability } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { TaitraServicesFakeDataService } from '../../shared/data/taitra-services-fake-data.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FrontPageHyperlinkRenderComponent } from '../front-page-hyperlink-render/front-page-hyperlink-render.component';

@Component({
  selector: 'ngx-front-page-overview',
  templateUrl: './front-page-overview.component.html',
  styleUrls: ['./front-page-overview.component.scss']
})
export class FrontPageOverviewComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private TaitraSrc: TaitraServicesFakeDataService,
  ) {
    const data = this.TaitraSrc.getData();
    this.source.load(data)
  }

  ngOnInit() {
  }

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      name: {
        title: '服務名稱',
        filter: false,
        type: 'custom',
        renderComponent: FrontPageHyperlinkRenderComponent,
        // type: 'html',
        // valuePrepareFunction: (name: string) => {
        //    if (name === '台灣經貿網'){
        //      href="/#/taitra/system-setting/edit-system-admin/add-system-admin-page
        //       return `<a [routerLink]="['/']" >${name}</a>`;
        //    } else {
        //       return name;
        //    }
        // },
        width: '10%',
      },
      imgUrl: {
        title: '照片',
        filter: false,
        type: 'html',
        // 客製化
        valuePrepareFunction: (picture: string) => {
          return `<img width="150px" src="./../../../../assets/images/${picture}.jpg"/>`;
        },
      },
      memberLevel:{
        title: '會員等級',
      },
      status: {
        title: '前台顯示狀態',
        filter: false,
        type: 'html',
        valuePrepareFunction: (status: string) => {
          if (status === 'enable') {
            return `顯示`;
          } else {
            return `關閉`;
          }
        },
      },
    }
  }

  // source=[
  //   {
  //     name: '台灣經貿網',
  //     imgUrl: 'tt',
  //     status: 'enable',
  //   },
  //   {
  //     name: '台灣國際專業展',
  //     imgUrl: 'tts',
  //     status: 'enable',
  //   },
  //   {
  //     name: '採洽易',
  //     imgUrl: 'isourcing',
  //     status: 'enable',
  //   },
  //   {
  //     name: '活動匯',
  //     imgUrl: 'tt',
  //     status: 'disable',
  //   },
  //   {
  //     name: '新南向',
  //     imgUrl: 'newsouth',
  //     status: 'enable',
  //   },

  // ]

  test() {
    alert("hahahahaah")
  }


}
