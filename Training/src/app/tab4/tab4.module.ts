import { ExpandableHeaderDirective } from './../directives/expandable-header.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { StatsTableComponent } from '../components/stats-table/stats-table.component';
import { MonthlyStatsTableComponent } from '../components/monthly-stats-table/monthly-stats-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MbscModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, StatsTableComponent, MonthlyStatsTableComponent, ExpandableHeaderDirective]
})
export class Tab4PageModule {}
