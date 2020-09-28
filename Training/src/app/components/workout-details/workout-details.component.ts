import { Tab3Page } from './../../tab3/tab3.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.scss'],
})
export class WorkoutDetailsComponent implements OnInit {
  private selectedExercises;
  private callback: Function;
  rootPage = Tab3Page
  advancedTiming = false;

  constructor(private navParams: NavParams,
              private modalCtrl: ModalController,
              private loadingController: LoadingController,
              private router: Router) {
    this.selectedExercises = this.navParams.get('selectedExercise');
    this.callback = navParams.get('callback'); 
  }

  ngOnInit() {
    
  }

  deleteExercise(keyId) {
    this.selectedExercises = this.selectedExercises.filter(e => e.keyId != keyId)
    this.returnData(this.selectedExercises)
  }

  returnData(selectedExercises): void {
    this.callback(selectedExercises);
    // document.querySelector('ion-nav').pop();
  }

  async saveWorkout() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 2000,
    });
    
    loading.present();

    setTimeout(() => {
        this.modalCtrl.dismiss({
          'dismissed': true
        })
    }, 2000)
  }
}
