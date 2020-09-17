import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCustomWokroutModalPageRoutingModule } from './create-custom-wokrout-modal-routing.module';

import { CreateCustomWokroutModalPage } from './create-custom-wokrout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCustomWokroutModalPageRoutingModule
  ],
  declarations: [CreateCustomWokroutModalPage]
})
export class CreateCustomWokroutModalPageModule {}
