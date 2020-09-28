import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlanStrongerPageRoutingModule } from './my-plan-stronger-routing.module';

import { MyPlanStrongerPage } from './my-plan-stronger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPlanStrongerPageRoutingModule
  ],
  declarations: [MyPlanStrongerPage]
})
export class MyPlanStrongerPageModule {}
