import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-add-system-admin-page',
  templateUrl: './add-system-admin-page.component.html',
  styleUrls: ['./add-system-admin-page.component.scss']
})
export class AddSystemAdminPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goback(){
    this._location.back();
  }

}
