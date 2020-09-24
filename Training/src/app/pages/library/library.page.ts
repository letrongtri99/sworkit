import { ExerciesPage } from './../exercies/exercies.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  detailExercise = ExerciesPage
  constructor() { }

  ngOnInit() {
  }

}
