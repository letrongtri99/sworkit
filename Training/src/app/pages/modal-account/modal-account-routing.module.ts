import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAccountPage } from './modal-account.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAccountPageRoutingModule {}
