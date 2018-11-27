import { NgModule } from '@angular/core';

import { TaitraRoutingModule } from './taitra-routing.module';


// ngx Module 
import { ThemeModule } from '../@theme/theme.module';
import { TaitraDashboardModule } from './taitra-dashboard/taitra-dashboard.module';

// import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';

// ngx Componenet 
import { TaitraComponent } from './taitra.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './shared/spinner/spinner.service';
import { NbSpinnerModule } from '@nebular/theme/components/spinner/spinner.module';
import { TaitraCompanyFakeDataService } from './shared/data/taitra-company-fake-data.service';


const Taitra_COMPONENTS = [
    TaitraComponent,
  ];

@NgModule({
    imports: [
        TaitraRoutingModule,
        TaitraDashboardModule,
        ThemeModule,
        // ECommerceModule,
        // MiscellaneousModule,
        NbSpinnerModule
    ],
    declarations: [
        ...Taitra_COMPONENTS,
        SpinnerComponent,
        
    ],
    providers: [
        SpinnerService,
        TaitraCompanyFakeDataService,
        
    ],
})

export class TaitraModule {}