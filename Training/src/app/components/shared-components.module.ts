import { IonicModule } from '@ionic/angular';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ModalBaseComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ModalBaseComponent]
})
export class SharedComponentsModule { }
