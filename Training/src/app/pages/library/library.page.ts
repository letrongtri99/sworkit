import { ExerciesPage } from './../exercies/exercies.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  valueWork = '';
  selectedWork = [];
  workout = [
     {
         id: 1,
         title: '180 jumps',
         subtitle: 'Swort Kids',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/180-jump-kids.jpg'
     },
     {
         id: 2,
         title: 'Active Assisted Shoulder',
         subtitle: 'Rehab & Care',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/active-assisted-shoulder-flexion-left.jpg'
     },
     {
         id: 3,
         title: 'Air Plane Pose',
         subtitle: 'Swort Kids',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/airplane-pose-right-kids.jpg'
     }
  ]
  constructor() { }

  ngOnInit() {
      this.selectedWork = this.workout;
  }
  
  getWorkOut() {
    var searchKey = this.valueWork.toLowerCase();
    var found = this.workout.filter(function(element) {
      return element.title.toLowerCase().includes(searchKey);
    });
    this.selectedWork = found;
  }
}
