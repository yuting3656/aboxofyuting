import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


// component
import { DigLoginLogComponent } from './dig-login-log/dig-login-log.component';
import { DigLogComponent } from './dig-log.component';


const routes: Routes = [{
    path:'',
    component: DigLogComponent,
    children:[
    {
      path: 'dig-login-log',
      component: DigLoginLogComponent
   },
   ],
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DigLogRoutingModule {}