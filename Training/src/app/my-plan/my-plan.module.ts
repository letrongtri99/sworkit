import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlanPageRoutingModule } from './my-plan-routing.module';

import { MyPlanPage } from './my-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPlanPageRoutingModule
  ],
  declarations: [MyPlanPage]
})
export class MyPlanPageModule {}
