import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciesPageRoutingModule } from './exercies-routing.module';

import { ExerciesPage } from './exercies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciesPageRoutingModule
  ],
  declarations: [ExerciesPage]
})
export class ExerciesPageModule {}
