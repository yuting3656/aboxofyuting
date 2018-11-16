import { NgModule } from '@angular/core';
import { DigLogRoutingModule } from './dig-log-routing.module';
import { DigLoginLogComponent } from './dig-login-log/dig-login-log.component';

import { DigLogComponent } from './dig-log.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
    imports:[
        DigLogRoutingModule,
        ThemeModule,
        Ng2SmartTableModule,
    ],
    declarations:[
        DigLoginLogComponent,
        DigLogComponent
    ],
    providers:[]
})

export class DigLogModule{}