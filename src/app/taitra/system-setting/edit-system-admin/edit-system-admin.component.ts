import { Component, OnInit } from '@angular/core';
import { SmartTableAdminService } from '../../../@core/data/smart-table-admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { EditSystemAdminButtonRenderComponent } from './edit-system-admin-button-render/edit-system-admin-button-render.component';
import { SpinnerService } from '../../shared/spinner/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-system-admin',
  templateUrl: './edit-system-admin.component.html',
  styleUrls: ['./edit-system-admin.component.scss']
})
export class EditSystemAdminComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      account:{
        title: '帳號',
        type: 'string',
        filter: false,
      },
      name:{
        title: '姓名',
        type: 'string',
        filter: false,
      },
      email:{
        title: 'E-mail',
        type: 'string',
        filter: false,
      },
      phone:{
        title: '電話',
        type: 'string',
        filter: false,
      },
      edit:{
        title: '維護',
        type: 'custom',
        filter: false,
        renderComponent: EditSystemAdminButtonRenderComponent,
      }
    }
  }

  
  constructor( 
    private router: Router,
    private service: SmartTableAdminService,
    private spinner: SpinnerService
    ) { 
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
  }

  addAdmin(){
    this.spinner.showSpinner();

    setTimeout( () => {
    this.router.navigate(['taitra/system-setting/edit-system-admin/add-system-admin-page'])
    this.spinner.hideSpinner()
    }, 800)
  }

}
