import { NgModule } from '@angular/core';
import { MembersRoutingModule } from './members-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

// ngx Module 
// import { PagesRoutingModule } from '../../pages/pages-routing.module';

// import { ThemeModule } from '../../@theme/theme.module';
// import { DashboardModule } from '../../pages/dashboard/dashboard.module';
// import { ECommerceModule } from '../../pages/e-commerce/e-commerce.module';
// import { MiscellaneousModule } from '../../pages/miscellaneous/miscellaneous.module';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { MembersComponent } from './members.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAccordionModule } from '@nebular/theme';
import { EditMembersButtonRenderComponent } from './edit-members/edit-members-button-render/edit-members-button-render.component';
import { EditMemberPageComponent } from './edit-members/edit-member-page/edit-member-page.component';
import { MemberLoginLogComponent } from './member-login-log/member-login-log.component';
import { MemeberSearchComponent } from './memeber-search/memeber-search.component';
import { MemberBatchUpdatePageComponent } from './edit-members/member-batch-update-page/member-batch-update-page.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { TaitraCompanyFakeDataService } from '../shared/data/taitra-company-fake-data.service';
import { MemberUpdateLogComponent } from './member-update-log/member-update-log.component';
import { TaitraMemberUpdateLogFakeDataService } from '../shared/data/taitra-member-update-log-fake-data.service';
// import { NbAccordionModule } from '@nebular/theme/components/accordion/accordion.module';


// ngx Componenet 

@NgModule({
    imports: [
        ThemeModule,
        MembersRoutingModule,
        NbAccordionModule,
        // PagesRoutingModule,
        // ThemeModule,
        // DashboardModule,
        // ECommerceModule,
        // MiscellaneousModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        EditMembersComponent,
        MembersComponent,
        // smart table button render 
        EditMembersButtonRenderComponent,
        EditMemberPageComponent,
        MemberLoginLogComponent,
        MemeberSearchComponent,
        MemberBatchUpdatePageComponent,
        CompanySearchComponent,
        MemberUpdateLogComponent,
    ],
    providers: [
        TaitraCompanyFakeDataService,
        TaitraMemberUpdateLogFakeDataService
    ],
    entryComponents:[
        EditMembersButtonRenderComponent
    ]
})

export class MembersModule {}