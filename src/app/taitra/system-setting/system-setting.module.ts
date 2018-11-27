import { NgModule } from '@angular/core';
import { SystemSettingComponent } from './system-setting.component';
import { ThemeModule } from '../../@theme/theme.module';
import { EditSystemAdminComponent } from './edit-system-admin/edit-system-admin.component';
import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { EditAdminListRolesComponent } from './edit-admin-list-roles/edit-admin-list-roles.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EditSystemAdminButtonRenderComponent } from './edit-system-admin/edit-system-admin-button-render/edit-system-admin-button-render.component';
import { EditSystemAdminPageComponent } from './edit-system-admin/edit-system-admin-page/edit-system-admin-page.component';
import { AddSystemAdminPageComponent } from './edit-system-admin/add-system-admin-page/add-system-admin-page.component';
import { EditSystemPasswordPageComponent } from './edit-system-admin/edit-system-password-page/edit-system-password-page.component';
import { EditAdminListRolesButtonRenderComponent } from './edit-admin-list-roles/edit-admin-list-roles-button-render/edit-admin-list-roles-button-render.component';
import { EditAdminListRolePageComponent } from './edit-admin-list-roles/edit-admin-list-role-page/edit-admin-list-role-page.component';
import { DigLoginLogComponent } from '../dig-log/dig-login-log/dig-login-log.component';
import { AdminLoginLogComponent } from './admin-login-log/admin-login-log.component';
import { SystemDataEditLogComponent } from './system-data-edit-log/system-data-edit-log.component';
import { SystemDataEditLogButtonRenderComponent } from './system-data-edit-log/system-data-edit-log-button-render/system-data-edit-log-button-render.component';
import { SystemDataEditLogPageComponent } from './system-data-edit-log/system-data-edit-log-page/system-data-edit-log-page.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { EmailTemplateEditorComponent } from './email-template-editor/email-template-editor.component';
import { EmailTmplatePageComponent } from './email-template-editor/email-tmplate-page/email-tmplate-page.component';
import { EmailTemplateEditorLinkRenderComponent } from './email-template-editor/email-template-editor-link-render/email-template-editor-link-render.component';

@NgModule({
    imports:[
        ThemeModule,
        SystemSettingRoutingModule,
        Ng2SmartTableModule,
        CKEditorModule
        
            
    ],
    declarations:[
        SystemSettingComponent,
        EditSystemAdminComponent,
        EditAdminListRolesComponent,
        EditSystemAdminButtonRenderComponent,
        EditSystemAdminPageComponent,
        AddSystemAdminPageComponent,
        EditSystemPasswordPageComponent,
        EditAdminListRolesButtonRenderComponent,
        EditAdminListRolePageComponent,
        AdminLoginLogComponent,
        SystemDataEditLogComponent,
        SystemDataEditLogButtonRenderComponent,
        SystemDataEditLogPageComponent,
        EmailTemplateEditorComponent,
        EmailTmplatePageComponent,
        EmailTemplateEditorLinkRenderComponent,
        
    ],
    providers:[],
    entryComponents:[
        EditSystemAdminButtonRenderComponent,
        EditAdminListRolesButtonRenderComponent,
        SystemDataEditLogButtonRenderComponent,
        // email template 的超連結
        EmailTemplateEditorLinkRenderComponent,
    ],
})

export class SystemSettingModule {}