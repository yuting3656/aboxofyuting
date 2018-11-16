import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-edit-member-page',
  templateUrl: './edit-member-page.component.html',
  styleUrls: ['./edit-member-page.component.scss']
})
export class EditMemberPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  
  goback(){
    this._location.back();
  }

}
