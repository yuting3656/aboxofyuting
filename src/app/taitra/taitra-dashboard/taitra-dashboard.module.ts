import { NgModule } from '@angular/core';

import { TaitraDashboardComponent } from './taitra-dashboard.component';

// cards  
import { StatusCardComponent } from './status-card/status-card.component';

// import nebular
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';

// charts  
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ECommerceLegendChartComponent } from '../../pages/e-commerce/legend-chart/legend-chart.component';


// service 
import { OrdersChartService } from '../../@core/data/orders-chart.service';
import { LayoutService } from '../../@core/data/layout.service';
import { OrdersProfitChartService } from '../../@core/data/orders-profit-chart.service';

@NgModule({
    imports:[
      ThemeModule,
      NgxEchartsModule,
    ],
    declarations:[
      TaitraDashboardComponent,
      StatusCardComponent,
    //   ECommerceChartsPanelComponent,
    //   ChartPanelSummaryComponent,
    //   ChartPanelHeaderComponent,
    //   ECommerceLegendChartComponent,
    ],
     providers: [
    //     OrdersChartService,
    //     LayoutService,
    //     OrdersProfitChartService
    ],
})

export class TaitraDashboardModule {}