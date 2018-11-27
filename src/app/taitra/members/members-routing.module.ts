import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { MembersComponent } from './members.component';
import { EditMemberPageComponent } from './edit-members/edit-member-page/edit-member-page.component';
import { MemberLoginLogComponent } from './member-login-log/member-login-log.component';
import { MemeberSearchComponent } from './memeber-search/memeber-search.component';
import { MemberBatchUpdatePageComponent } from './edit-members/member-batch-update-page/member-batch-update-page.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { MemberUpdateLogComponent } from './member-update-log/member-update-log.component';

const routes: Routes = [{  
  path: '', 
  component: MembersComponent, 
  children:[
    { 
      // 1. 可檢視、查詢，所有的會員資料 
      // 2. 寄送 團發 email ! 
      // 3. 點人名的時候 會進到 下面的 連結 edit-members/edit-member-page
      path: 'edit-members', 
      component: EditMembersComponent,
    },
    {
      path: 'edit-members/edit-member-page',
      component: EditMemberPageComponent,
    },
    {
      // 被移到　統計查詢下面　要注意唷！！
      path: 'member-login-log',
      component: MemberLoginLogComponent
    },
    {
      // 只有查詢的功能唷～～～　
      path:'member-search',
      component: MemeberSearchComponent,
    },
    {
      // 批次上傳面
      path: 'edit-members/memeber-batch-update-page',
      component:　MemberBatchUpdatePageComponent,
    },
    {
      // 查看公司的連結　特別注意　url 不一樣唷～
      path: 'companies/company-search',
      component: CompanySearchComponent
    },
    {
      // 會員資料異動紀錄
      path: 'member-update-log',
      component: MemberUpdateLogComponent
    }
  ],  
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ], 

})

export class MembersRoutingModule {}