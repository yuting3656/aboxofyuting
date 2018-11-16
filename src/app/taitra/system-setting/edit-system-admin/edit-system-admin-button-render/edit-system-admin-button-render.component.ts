import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/spinner/spinner.service';

@Component({
   selector: 'edit-system-admin-button-render',
   templateUrl: './edit-system-admin-button-render.html'
})

export class EditSystemAdminButtonRenderComponent implements OnInit {
  
  @Input() Value;

  constructor( 
    private router: Router,
    private spinner: SpinnerService
    ){

  }

  ngOnInit(){  
  }  

  // 導入編輯頁面 
  goEdit(){
    // 先loading 
    this.spinner.showSpinner();
    
    // X 秒後loading 完成
    setTimeout( () => {
     this.router.navigate(['taitra/system-setting/edit-system-admin/edit-system-admin-page'])
     this.spinner.hideSpinner()
    }, 1500)
    
      // this.spinner.hideSpinner();
  }
  
  // 導入修改密碼頁面
  goUpdatePassword(){
         // 先loading 
    this.spinner.showSpinner();
    
    // X 秒後loading 完成
    setTimeout( () => {
     this.router.navigate(['taitra/system-setting/edit-system-admin/edit-system-password-page'])
     this.spinner.hideSpinner()
    }, 500)

  }
}