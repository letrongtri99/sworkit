import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPlanLeanerPage } from './my-plan-leaner.page';

const routes: Routes = [
  {
    path: '',
    component: MyPlanLeanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPlanLeanerPageRoutingModule {}
