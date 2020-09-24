import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniModalPage } from './mini-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MiniModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniModalPageRoutingModule {}
