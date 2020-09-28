import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCustomWokroutModalPage } from './create-custom-wokrout-modal.page';
import { Tab3Page } from '../tab3/tab3.page'

const routes: Routes = [
  {
    path: '',
    component: CreateCustomWokroutModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCustomWokroutModalPageRoutingModule {}
