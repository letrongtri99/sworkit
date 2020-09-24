import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiniModalPageRoutingModule } from './mini-modal-routing.module';

import { MiniModalPage } from './mini-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiniModalPageRoutingModule
  ],
  declarations: [MiniModalPage]
})
export class MiniModalPageModule {}
