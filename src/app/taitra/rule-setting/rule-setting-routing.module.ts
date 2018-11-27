import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RuleSettingComponent } from './rule-setting.component';
import { SettingPasswordRuleComponent } from './setting-password-rule/setting-password-rule.component';

const routes: Routes =[{
    path: '',
    component: RuleSettingComponent,
    children:[
      {
        path: 'setting-password-rule',
        component: SettingPasswordRuleComponent,
      },
      {

      },
  ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RuleSettingRoutingModule {}