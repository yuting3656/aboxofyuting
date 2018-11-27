import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageOverviewComponent } from './front-page-overview/front-page-overview.component';
import { FrontPageComponent } from './front-page.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TaitraServicesFakeDataService } from '../shared/data/taitra-services-fake-data.service';
import { FrontPageEditPageComponent } from './front-page-edit-page/front-page-edit-page.component';
import { FrontPageHyperlinkRenderComponent } from './front-page-hyperlink-render/front-page-hyperlink-render.component';

@NgModule({
    imports:[
        ThemeModule,
        FrontPageRoutingModule,
        Ng2SmartTableModule

    ],
    declarations:[
    FrontPageOverviewComponent,
    FrontPageComponent,
    FrontPageEditPageComponent,
    FrontPageHyperlinkRenderComponent
    ],
    providers:[
        TaitraServicesFakeDataService
    ],
    entryComponents: [
        FrontPageHyperlinkRenderComponent,
    ]
})
export class FrontPageModule {}