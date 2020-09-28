import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleLeanerBaselinePage } from './example-leaner-baseline.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleLeanerBaselinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleLeanerBaselinePageRoutingModule {}
