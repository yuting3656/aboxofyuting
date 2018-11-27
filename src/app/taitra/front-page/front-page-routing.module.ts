import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrontPageComponent } from './front-page.component';
import { FrontPageOverviewComponent } from './front-page-overview/front-page-overview.component';
import { FrontPageEditPageComponent } from './front-page-edit-page/front-page-edit-page.component';

const routes: Routes =[{
    path: '',
    component: FrontPageComponent,
    children:[
      {
        path: 'front-page-overview',
        component: FrontPageOverviewComponent,
      },
        // 點超連結後　會導傳　
      {
        path: 'front-page-overview/front-page-edit-page/:id',
        component: FrontPageEditPageComponent
      },
  ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FrontPageRoutingModule {}