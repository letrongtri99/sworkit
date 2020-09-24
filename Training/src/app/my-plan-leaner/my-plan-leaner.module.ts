import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPlanLeanerPageRoutingModule } from './my-plan-leaner-routing.module';

import { MyPlanLeanerPage } from './my-plan-leaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPlanLeanerPageRoutingModule
  ],
  declarations: [MyPlanLeanerPage]
})
export class MyPlanLeanerPageModule {}
