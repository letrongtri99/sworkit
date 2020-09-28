import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeanerBeginnerPage } from './leaner-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: LeanerBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeanerBeginnerPageRoutingModule {}
