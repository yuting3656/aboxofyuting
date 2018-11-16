import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SystemSettingComponent } from './system-setting.component';
import { EditSystemAdminComponent } from './edit-system-admin/edit-system-admin.component';
import { EditAdminListRolesComponent } from './edit-admin-list-roles/edit-admin-list-roles.component';
import { EditSystemAdminPageComponent } from './edit-system-admin/edit-system-admin-page/edit-system-admin-page.component';
import { AddSystemAdminPageComponent } from './edit-system-admin/add-system-admin-page/add-system-admin-page.component';
import { EditSystemPasswordPageComponent } from './edit-system-admin/edit-system-password-page/edit-system-password-page.component';
import { EditAdminListRolePageComponent } from './edit-admin-list-roles/edit-admin-list-role-page/edit-admin-list-role-page.component';


const routes: Routes = [{
    path:'',
    component: SystemSettingComponent,
    children: [
      {
        // 系統帳號維護
        path: 'edit-system-admin',
        component: EditSystemAdminComponent,
      },
      {
        // 系統帳號維護 / 編輯系統帳號
        path: 'edit-system-admin/edit-system-admin-page',
        component: EditSystemAdminPageComponent,
      },
      {
        // 系統帳號維護 / 新增系統帳號
        path: 'edit-system-admin/add-system-admin-page',
        component: AddSystemAdminPageComponent,    
      },
      {
        // 系統帳號維護 / 修改系統帳號
        path: 'edit-system-admin/edit-system-password-page',
        component: EditSystemPasswordPageComponent,
      },
      {
        // 權限角色維護
        path: 'edit-admin-list-roles',
        component: EditAdminListRolesComponent,
      },
      {
        // 權限角色維護 / 編輯權限角色
        path: 'edit-admin-list-roles/edit-admin-list-role-page',
        component: EditAdminListRolePageComponent,
      },

    ],
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ], 

})
export class SystemSettingRoutingModule {}