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

@NgModule({
    imports:[
        ThemeModule,
        SystemSettingRoutingModule,
        Ng2SmartTableModule
        
        
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
        EditAdminListRolePageComponent
    ],
    providers:[],
    entryComponents:[
        EditSystemAdminButtonRenderComponent,
        EditAdminListRolesButtonRenderComponent
    ],
})

export class SystemSettingModule {}