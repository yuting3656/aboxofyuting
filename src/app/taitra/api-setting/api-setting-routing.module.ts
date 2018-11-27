import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApiSettingComponent } from './api-setting.component';
import { EditApiSettingComponent } from './edit-api-setting/edit-api-setting.component';
import { EditApiSettingPageComponent } from './edit-api-setting-page/edit-api-setting-page.component';
import { ApiUsageLogComponent } from './api-usage-log/api-usage-log.component';
import { ApiAuthLogComponent } from './api-auth-log/api-auth-log.component';


// component


const routes: Routes = [{
    path:'',
    component: ApiSettingComponent,
    children:[
    {
      path: 'edit-api-setting',
      component:  EditApiSettingComponent
   },
   {
      path: 'edit-api-setting/edit-api-setting-page/:id',
      component: EditApiSettingPageComponent,
   },
   {  // api 介接紀錄
      path: 'api-usage-log',
      component: ApiUsageLogComponent,
   },
   {  // api 授權紀錄
      path: 'api-auth-log',
      component: ApiAuthLogComponent,
   },
   ],
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApiSettingRoutingModule {}