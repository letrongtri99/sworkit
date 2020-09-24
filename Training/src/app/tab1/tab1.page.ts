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
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
      ]
    },
    {
      name: "CARDIO",
      img: 9,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
      ]
    },
    {
      name: "YOGA",
      img: 10,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
      ]
    },
    {
      name: "STRETCHING",
      img: 11,
      exercises: [
        {nameEx: "No Gym, No Problem: Leg Day",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "No Gym, No Problem: Arm Day",
        imgEx: 6,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
        imgEx: 1,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Quick Sweat at Home No Jumping",
        imgEx: 2,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Small Space Dumbell Workout",
        imgEx: 8,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Tiny Room, Big Hit",
        imgEx: 9,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
        },
        {nameEx: "Don't Wake the Baby: A Workout for Mom",
        imgEx: 7,
        miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
        miniEx: [
          {miniIcon: 123, nameEx: "Squats"},
          {miniIcon: 123, nameEx: "Single Leg Squats"},
          {miniIcon: 123, nameEx: "Foward Lunges"},
          {miniIcon: 123, nameEx: "Rear Lunges"},
          {miniIcon: 123, nameEx: "Front Kicks"},
          {miniIcon: 123, nameEx: "Reverse V Lunges"},
          {miniIcon: 123, nameEx: "Calf Raises"},
          {miniIcon: 123, nameEx: "Step Ups"},
          {miniIcon: 123, nameEx: "Wide Squats"},
          {miniIcon: 123, nameEx: "Side Squat"}
        ]
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
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]  
      },
    ] 
    },
    {name: "Quiet Home Workouts", 
    img: 2,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ] 
    },
    {name: "Flexibility Challenge", 
    img: 3,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ] 
    },
    {name: "Dumbbell Workouts", 
    img: 4,
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ] 
    },
    {name: "Kettlebell Workouts", 
    img: 5, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "Resistance Band Workouts", 
    img: 6, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "Quick Workouts", 
    img: 7, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "Better for Beginners", 
    img: 8, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "At-Home Gym-Build Muscle", 
    img: 9, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "Foam Rolling", 
    img: 10, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
    ]
    },
    {name: "Cycle Series", 
    img: 11, 
    content: "These workouts are designed to keep your neighbors happy with less jumping and to accommodate small spaces",
    exercises: [
      {nameEx: "No Gym, No Problem: Leg Day",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "No Gym, No Problem: Arm Day",
      imgEx: 6,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Six-Pack Challenge: Quiet Neighbor Edition",
      imgEx: 1,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Quick Sweat at Home No Jumping",
      imgEx: 2,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Small Space Dumbell Workout",
      imgEx: 8,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Tiny Room, Big Hit",
      imgEx: 9,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
      },
      {nameEx: "Don't Wake the Baby: A Workout for Mom",
      imgEx: 7,
      miniContentEx: "Build tone muscle in your legs with these strength and cardio exercises WITHOUT the gym",
      miniEx: [
        {miniIcon: 123, nameEx: "Squats"},
        {miniIcon: 123, nameEx: "Single Leg Squats"},
        {miniIcon: 123, nameEx: "Foward Lunges"},
        {miniIcon: 123, nameEx: "Rear Lunges"},
        {miniIcon: 123, nameEx: "Front Kicks"},
        {miniIcon: 123, nameEx: "Reverse V Lunges"},
        {miniIcon: 123, nameEx: "Calf Raises"},
        {miniIcon: 123, nameEx: "Step Ups"},
        {miniIcon: 123, nameEx: "Wide Squats"},
        {miniIcon: 123, nameEx: "Side Squat"}
      ]
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
