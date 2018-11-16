import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { SpinnerService } from '../../../shared/spinner/spinner.service';

@Component({
   selector: 'edit-memeber-button-render',
   templateUrl: './edit-members-button-render.html'
})

export class EditMembersButtonRenderComponent implements OnInit {
  
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
     this.router.navigate(['taitra/members/edit-members/edit-member-page'])
     this.spinner.hideSpinner()
    }, 1500)
    
      // this.spinner.hideSpinner();
  }
}