import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciesPage } from './exercies.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciesPageRoutingModule {}
