import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TaitraComponent } from './taitra.component';
import { EditMembersComponent } from './members/edit-members/edit-members.component';

import { MembersModule } from './members/members.module';
import { TaitraDashboardComponent } from './taitra-dashboard/taitra-dashboard.component';

export function loadMembersModule() { return MembersModule; }

const routes: Routes = [{ 
    path: '', 
    component: TaitraComponent,
    children: [{
      path: 'taitra-dashboard',
      component: TaitraDashboardComponent,
    }, { 
      path: 'members', 
      // component: EditMembersComponent,
      loadChildren: './members/members.module#MembersModule',
    }, {
      path: 'dig-log',
      loadChildren: './dig-log/dig-log.module#DigLogModule',
    },
    {
      path: 'system-setting',
      loadChildren: './system-setting/system-setting.module#SystemSettingModule'
    },
    {
      path:'rule-setting',
      loadChildren: './rule-setting/rule-setting.module#RuleSettingModule',
    },
    {
      path: 'front-page',
      loadChildren: './front-page/front-page.module#FrontPageModule'
    },
    {
      path: 'api-setting',
      loadChildren: './api-setting/api-setting.module#ApiSettingModule'
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaitraRoutingModule {
}
