import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
   selector: 'edit-api-setting-button-render',
   templateUrl: './edit-api-setting-button-render.html'
})

export class EditApiSettingButtonRenderComponent implements OnInit {
  renderValue: string;
  rendetCellValue;

  // 從smart table 送過來得～～
  @Input() rowData: any;

  constructor( 
    private router: Router,
    private spinner: SpinnerService
    ){

  }

  ngOnInit(){
    this.renderValue = this.rowData.email
  }  


  goEdit(){
    // 先loading 
    this.spinner.showSpinner();
    
    // X 秒後loading 完成
    setTimeout( () => {
     this.router.navigate(['taitra/api-setting/edit-api-setting/edit-api-setting-page'])
     this.spinner.hideSpinner()
    }, 1500)
    
      // this.spinner.hideSpinner();
  }
}