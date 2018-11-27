import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { EditMembersButtonRenderComponent } from './edit-members-button-render/edit-members-button-render.component';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.scss']
})

export class EditMembersComponent implements OnInit {

  // toggle button attribute
  show:boolean = false;
  buttonName: string = '進階';

  ngOnInit(){
    
  }

  settings = { 
    mode: 'click-to-edit',

    selectMode: 'multi', // single | multi  
    actions: false,
    // 可以把多的　row 隱藏~~~
    hideSubHeader: true,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {

      contry: {
        title: '國別',
        type: 'number',
        filter: false,
        // 客製化選單
        // editor:{
        //   type: 'list',
        //   config:{
        //     list: [{
        //       title: 'Taiwan',
        //       value: 'taiwan'
        //     }, {
        //       title: 'Japan',
        //       value: 'japan'
        //     }, {
        //       title: 'USA',
        //       value: 'usa',
        //     }, {
        //       title: 'Korea',
        //       value: 'korea'
        //     }]
        //   },
        // }
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
      // lastName: {
      //   title: 'Last Name',
      //   type: 'string',
      // },
      tellphone: {
        title: '行動電話',
        type: 'string',
        filter: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false,
        // width: '15%',
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
      edit: {
        title: '維護',
        type: 'custom',
        filter: false,
        renderComponent: EditMembersButtonRenderComponent,
        valuePrepareFunction: (cell, row) => {
          console.log(row),
          console.log(cell)
        },
        // onComponentInitFunction: (instance) => {
        //   console.log(instance)
        // }
        // 調整寬度而~
        // width: '10%',
      }
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  test(event): void {
    if ( window.confirm("你確定要送出?")){
        event.confirm.resolve();
    } else {
        event.confirm.reject();
    }
  }

  HomeMadeToggle(){
    this.show  = !this.show;
    // chamge buttom name 
    if (this.show) {
      this.buttonName = '縮回'
    } else {
　　　this.buttonName = '進階'
    }
  }


  onRowSelect(row: any){
    console.log(row)    
  }

  batchAdd(){
    this.router.navigate(['/taitra/members/edit-members/memeber-batch-update-page'])
  }


}
