import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-edit-system-password-page',
  templateUrl: './edit-system-password-page.component.html',
  styleUrls: ['./edit-system-password-page.component.scss']
})
export class EditSystemPasswordPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goback(){
    this._location.back();
  }

}
