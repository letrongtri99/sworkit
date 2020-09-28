import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlanStrongerPage } from './my-plan-stronger.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlanStrongerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlanStrongerPageRoutingModule {}
