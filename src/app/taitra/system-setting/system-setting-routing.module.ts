import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SystemSettingComponent } from './system-setting.component';
import { EditSystemAdminComponent } from './edit-system-admin/edit-system-admin.component';
import { EditAdminListRolesComponent } from './edit-admin-list-roles/edit-admin-list-roles.component';
import { EditSystemAdminPageComponent } from './edit-system-admin/edit-system-admin-page/edit-system-admin-page.component';
import { AddSystemAdminPageComponent } from './edit-system-admin/add-system-admin-page/add-system-admin-page.component';
import { EditSystemPasswordPageComponent } from './edit-system-admin/edit-system-password-page/edit-system-password-page.component';
import { EditAdminListRolePageComponent } from './edit-admin-list-roles/edit-admin-list-role-page/edit-admin-list-role-page.component';
import { AdminLoginLogComponent } from './admin-login-log/admin-login-log.component';
import { SystemDataEditLogComponent } from './system-data-edit-log/system-data-edit-log.component';
import { SystemDataEditLogPageComponent } from './system-data-edit-log/system-data-edit-log-page/system-data-edit-log-page.component';
import { EmailTemplateEditorComponent } from './email-template-editor/email-template-editor.component';
import { EmailTmplatePageComponent } from './email-template-editor/email-tmplate-page/email-tmplate-page.component';


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
      {
        // 系統帳號登入紀錄
        path: 'admin-login-log',
        component: AdminLoginLogComponent
      },
      {
        // 系統資料異動紀錄
        path: 'system-data-edit-log',
        component: SystemDataEditLogComponent,
      },
      {
        path: 'system-data-edit-log/system-data-edit-log-page',
        component: SystemDataEditLogPageComponent,
      },
      {
        // eamil 範本維護 list
        path: 'email-template-editor',
        component: EmailTemplateEditorComponent,
      },
      {
        // email 範本維護 頁面
        path: 'email-template-editr/email-template-page',
        component: EmailTmplatePageComponent,
      }


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