import { ExerciesPageModule } from './../exercies/exercies.module';
import { Routes,RouterModule } from '@angular/router';
import { ExerciesPage } from './../exercies/exercies.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
    ExerciesPageModule
  ],
  declarations: [LibraryPage],
  entryComponents : [ExerciesPage]
})
export class LibraryPageModule {}
