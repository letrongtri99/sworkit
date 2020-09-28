import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeanerBeginnerPageRoutingModule } from './leaner-beginner-routing.module';

import { LeanerBeginnerPage } from './leaner-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeanerBeginnerPageRoutingModule
  ],
  declarations: [LeanerBeginnerPage]
})
export class LeanerBeginnerPageModule {}
