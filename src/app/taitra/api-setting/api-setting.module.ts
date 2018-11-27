import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ApiSettingComponent } from './api-setting.component';
import { ApiSettingRoutingModule } from './api-setting-routing.module';
import { EditApiSettingComponent } from './edit-api-setting/edit-api-setting.component';
import { EditApiSettingButtonRenderComponent } from './edit-api-setting-button-render/edit-api-setting-button-render.component';
import { EditApiSettingPageComponent } from './edit-api-setting-page/edit-api-setting-page.component';
import { EditApiSettingHyperLinkRenderComponent } from './edit-api-setting-hyperlink-render/edit-api-setting-hyperlink-render.component';
import { TaitraApiFakeDataService } from '../shared/data/taitra-api-fake-data.service';
import { ApiUsageLogComponent } from './api-usage-log/api-usage-log.component';
import { ApiAuthLogComponent } from './api-auth-log/api-auth-log.component';
import { TaitaApiUsageFakeDataService } from '../shared/data/taitra-api-usage-fake-data.service';
import { TaitaApiAuthFakeDataService } from '../shared/data/taitra-api-auth-fake-data.service';



@NgModule({
    imports:[
        ThemeModule,
        Ng2SmartTableModule,
        ApiSettingRoutingModule,
    ],
    declarations:[
        ApiSettingComponent,
        EditApiSettingComponent,
        EditApiSettingButtonRenderComponent,
        EditApiSettingPageComponent,
        EditApiSettingHyperLinkRenderComponent,
        ApiUsageLogComponent,
        ApiAuthLogComponent,
    ],
    providers:[
        TaitraApiFakeDataService,
        TaitaApiUsageFakeDataService,
        TaitaApiAuthFakeDataService,
        
    ],
    entryComponents:[
        EditApiSettingButtonRenderComponent,
        EditApiSettingHyperLinkRenderComponent
    ]
})

export class ApiSettingModule{}