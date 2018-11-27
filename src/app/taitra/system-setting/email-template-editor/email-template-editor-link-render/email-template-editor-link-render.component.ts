import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/spinner/spinner.service';

@Component({
   selector: 'email-template-editor-link-render',
   templateUrl: './email-template-editor-link-render.html'
})

export class EmailTemplateEditorLinkRenderComponent implements OnInit {
  
  renderValue: any;

  @Input() rowData;

  constructor( 
    private router: Router,
    private spinner: SpinnerService
    ){

  }

  ngOnInit(){  
  }  

  goEdit(){
    // 先loading 
    this.spinner.showSpinner();
    
    // X 秒後loading 完成
    setTimeout( () => {
     this.router.navigate(['taitra/system-setting/edit-admin-list-roles/edit-admin-list-role-page'])
     this.spinner.hideSpinner()
    }, 1500)
    
      // this.spinner.hideSpinner();
  }
}