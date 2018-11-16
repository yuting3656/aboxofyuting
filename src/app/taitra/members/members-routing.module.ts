import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditMembersComponent } from './edit-members/edit-members.component';
import { MembersComponent } from './members.component';
import { EditMemberPageComponent } from './edit-members/edit-member-page/edit-member-page.component';

const routes: Routes = [{  
  path: '', 
  component: MembersComponent, 
  children:[
    { 
      path: 'edit-members', 
      component: EditMembersComponent,
    },
    {
      path: 'edit-members/edit-member-page',
      component: EditMemberPageComponent,
    },
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