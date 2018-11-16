import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/spinner/spinner.service';

@Component({
   selector: 'edit-admin-list-roles-button-render',
   templateUrl: './edit-admin-list-roles-button-render.html'
})

export class EditAdminListRolesButtonRenderComponent implements OnInit {
  
  @Input() Value;

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