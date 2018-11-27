import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { SettingPasswordRuleComponent } from './setting-password-rule/setting-password-rule.component';
import { RuleSettingRoutingModule } from './rule-setting-routing.module';
import { RuleSettingComponent } from './rule-setting.component';

@NgModule({
    imports:[
        ThemeModule,
        RuleSettingRoutingModule

    ],
    declarations:[
        SettingPasswordRuleComponent,
        RuleSettingComponent,
    ],
    providers:[

    ],
})
export class RuleSettingModule {}