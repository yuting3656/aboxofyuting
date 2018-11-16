import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableAdminService {

  data=[
    {
      account: 'sysadmin',
      name: 'hywebTest',
      email: 'hywebTest@hyweb.com.tw',
      password: 'sysadmin',
      phone: '0987587587',
    }, {
      account: 'yoyohyweb',
      name: 'yoyoting',
      email: 'yoyoting@hyweb.com.tw',
      password: 'yoyohyweb',
      phone: '0952766666',
    },
  ];

  getData() {
      return this.data
  }
}