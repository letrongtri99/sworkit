import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleLeanerBaselinePageRoutingModule } from './example-leaner-baseline-routing.module';

import { ExampleLeanerBaselinePage } from './example-leaner-baseline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleLeanerBaselinePageRoutingModule
  ],
  declarations: [ExampleLeanerBaselinePage]
})
export class ExampleLeanerBaselinePageModule {}
