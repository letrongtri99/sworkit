import { WorkoutDetailsComponent } from './../components/workout-details/workout-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCustomWokroutModalPageRoutingModule } from './create-custom-wokrout-modal-routing.module';

import { CreateCustomWokroutModalPage } from './create-custom-wokrout-modal.page';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule,
    CreateCustomWokroutModalPageRoutingModule
  ],
  declarations: [CreateCustomWokroutModalPage, WorkoutDetailsComponent]
})
export class CreateCustomWokroutModalPageModule {}
