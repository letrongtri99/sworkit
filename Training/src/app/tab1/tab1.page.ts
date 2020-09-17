import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import Timeout from 'await-timeout';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public essentials = [
    {
      name: "STRENGTH",
      img: 5,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7
        },
      ]
    },
    {
      name: "CARDIO",
      img: 9,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7
        },
      ]
    },
    {
      name: "YOGA",
      img: 10,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7
        },
      ]
    },
    {
      name: "STRETCHING",
      img: 11,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7
        },
      ]
    },
  ]
  public workoutCollections = [
    {name: "Couch to Fit: 6 Week Plan", 
    img: 1,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ] 
    },
    {name: "Quiet Home Workouts", 
    img: 2,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ] 
    },
    {name: "Flexibility Challenge", 
    img: 3,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ] 
    },
    {name: "Dumbbell Workouts", 
    img: 4,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ] 
    },
    {name: "Kettlebell Workouts", 
    img: 5, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "Resistance Band Workouts", 
    img: 6, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "Quick Workouts", 
    img: 7, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "Better for Beginners", 
    img: 8, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "At-Home Gym-Build Muscle", 
    img: 9, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "Foam Rolling", 
    img: 10, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    },
    {name: "Cycle Series", 
    img: 11, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7
      },
    ]
    }

  ]
  constructor(public actionSheetController: ActionSheetController, public modalController: ModalController) {}

  async showAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Want to change what you see here?',
      cssClass: 'my-custom-class',
      buttons: [
      {
        text: 'Get Recommended Workout Plan',
        icon: 'person-circle-outline',
        handler: () => {
          console.log(1);
        }
      },
      {
        text: 'Workout of the Day',
        icon: 'calendar-outline',
        handler: () => {
          console.log(1);
        }
      },  
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log(1);
        }
      }]
    });
    return await actionSheet.present();
    
  }

  async presentModal() {
    // const modal = await this.modalController.create({
    //   component: ModalPage,
    //   cssClass: 'my-custom-class',
    //   componentProps: {
    //     'firstName': 'Douglas',
    //     'lastName': 'Adams',
    //     'middleInitial': 'N'
    //   }
    // });
    // return await modal.present();

  }

  async presentModalTest(x: any) {
    const timer = new Timeout();
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': x.name,
        'img': x.img,
        'content': x.content ? x.content : "",
        'exercises': x.exercises
      }
    });
    timer.set(600)
    .then(() =>  modal.present());

  }


}
