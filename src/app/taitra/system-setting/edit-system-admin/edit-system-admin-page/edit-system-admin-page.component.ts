import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-edit-system-admin-page',
  templateUrl: './edit-system-admin-page.component.html',
  styleUrls: ['./edit-system-admin-page.component.scss']
})
export class EditSystemAdminPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goback(){
    this._location.back();
  }


}
