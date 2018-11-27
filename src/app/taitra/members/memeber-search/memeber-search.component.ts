import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-memeber-search',
  templateUrl: './memeber-search.component.html',
  styleUrls: ['./memeber-search.component.scss']
})
export class MemeberSearchComponent implements OnInit {

  // toggle button attribute
  show:boolean = false;
  buttonName: string = '進階';


  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      contry: {
        title: '國別',
        type: 'number',
        filter: false,
      },
      name: {
        title: '姓名',
        type: 'string',
        filter: false,
      },
      memberStatus:{
        title: '會員類型',
        type: 'string',
        filter: false,
      },
      tellphone: {
        title: '行動電話',
        type: 'string',
        filter: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false,
      },
      phone: {
        title: '連絡電話',
        type: 'number',
        filter: false,
      },
      createDate: {
        title: '註冊時間',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableService,
    private router: Router,
  ) {
    const data = this.service.getData();
    this.source.load(data);
   }

  ngOnInit() {
  }

  HomeMadeToggle(){
    this.show = ! this.show;
    // chamge buttom name 
    if (this.show) {
      this.buttonName = '縮回'
    } else {
　　　this.buttonName = '進階'
    }
  }


}
