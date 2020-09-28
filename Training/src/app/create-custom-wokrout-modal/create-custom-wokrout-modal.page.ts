import { Component, OnInit, ViewChild, NgZone  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonSlides} from '@ionic/angular';
import { WorkoutDetailsComponent } from '../components/workout-details/workout-details.component';
@Component({
  selector: 'app-create-custom-wokrout-modal',
  templateUrl: './create-custom-wokrout-modal.page.html',
  styleUrls: ['./create-custom-wokrout-modal.page.scss'],
})
export class CreateCustomWokroutModalPage implements OnInit {
  @ViewChild('#customWorkoutSlide')  slides: IonSlides;
  settingPage = WorkoutDetailsComponent

  private exercises = [
    {
      id: 1,
      title: '180 jumps',
      subtitle: 'Sworkit Kid',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 2,
      title: 'Airplane Pose Khasd asdjasd IQJDwqd JSDhKJ(Left)',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 3,
      title: 'Ankle ABCs',
      subtitle: 'Sworkit Kid',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 4,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 5,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 6,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
  ]

  private filterExercises = [
    {
      id: 1,
      title: '180 jumps',
      subtitle: 'Sworkit Kid',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 2,
      title: 'Airplane Pose Khasd asdjasd IQJDwqd JSDhKJ(Left)',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 3,
      title: 'Ankle ABCs',
      subtitle: 'Sworkit Kid',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 4,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 5,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
    {
      id: 6,
      title: 'Ankle BCDs',
      subtitle: 'Rehab & Care',
      img: 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/squat-jack.jpg',
    },
  ]

  private selectedExercise = []

  private blankExercises = []

  constructor(private modalCtrl: ModalController,
              private zone: NgZone) { }

  ngOnInit() {
    if(this.blankExercises.length == 0) {
      while(this.blankExercises.length < 5) {
        this.blankExercises.push(
          {
            title: '',
            subtitle: '',
            img: 'https://img.wallpapersafari.com/desktop/1536/864/49/62/dIDXKG.jpg'
          }
        )
      }
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  gotoWorkoutDetails() {
    document.querySelector('ion-nav').push(this.settingPage, {selectedExercise: this.selectedExercise,  callback: (data)=> {this.zone.run(() => this.selectedExercise = data)}})
  }

  addExercise(id) {
    let index = this.exercises.findIndex(e => e.id == id)
    
    let keyId = Math.random().toString(36).substring(7);
    // this.exercises[index].keyId = `${this.selectedExercise.length}_${id}`
    this.selectedExercise.push(
      {
        id: this.exercises[index].id,
        title: this.exercises[index].title,
        subtitle: this.exercises[index].subtitle,
        img: this.exercises[index].img,
        keyId: keyId
      }
    )

    if(this.blankExercises.length > 5) {
      this.blankExercises.pop()
    }
  }

  deleteExercise(keyId) {
    this.selectedExercise = this.selectedExercise.filter(e => e.keyId != keyId)
  }

  onInput(key) {
      this.filterExercises = this.exercises.filter(e => e.title.includes(key))
  }

  onCancel() {
    this.filterExercises = this.exercises
  }

  slideOpt ={
    direction: 'horizontal',
    slidesPerView: 3.5,
  }
}
