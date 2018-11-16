import { Component } from '@angular/core';

import { MENU_ITEMS } from './taitra-menu';

@Component({
  selector: 'ngx-taitra',
  template: `

    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet><ngx-spinner></ngx-spinner></router-outlet>
    </ngx-sample-layout>
  `,
})
export class TaitraComponent {
  menu = MENU_ITEMS;
}
