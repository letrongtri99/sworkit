import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAccountPageRoutingModule } from './modal-account-routing.module';

import { ModalAccountPage } from './modal-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAccountPageRoutingModule
  ],
  declarations: [ModalAccountPage]
})
export class ModalAccountPageModule {}
