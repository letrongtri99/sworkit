import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlanFitterPageRoutingModule } from './my-plan-fitter-routing.module';

import { MyPlanFitterPage } from './my-plan-fitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPlanFitterPageRoutingModule
  ],
  declarations: [MyPlanFitterPage]
})
export class MyPlanFitterPageModule {}
