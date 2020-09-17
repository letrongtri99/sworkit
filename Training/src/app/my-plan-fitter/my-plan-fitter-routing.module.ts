import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlanFitterPage } from './my-plan-fitter.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlanFitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlanFitterPageRoutingModule {}
