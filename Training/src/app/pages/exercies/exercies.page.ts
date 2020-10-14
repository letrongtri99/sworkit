import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-exercies',
  templateUrl: './exercies.page.html',
  styleUrls: ['./exercies.page.scss'],
})
export class ExerciesPage implements OnInit {
    selectedWork = {}
    workout = [
     {
         id: 1,
         title: '180 jumps',
         subtitle: 'Swort Kids',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/180-jump-kids.jpg',
         videoSrc: 'https://storage.googleapis.com/sworkit-assets/video/ios/180-jump-kids.mp4'
     },
     {
         id: 2,
         title: 'Active Assisted Shoulder',
         subtitle: 'Rehab & Care',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/active-assisted-shoulder-flexion-left.jpg',
         videoSrc: 'https://storage.googleapis.com/sworkit-assets/video/ios/active-assisted-shoulder-flexion-left.mp4'
     },
     {
         id: 3,
         title: 'Air Plane Pose',
         subtitle: 'Swort Kids',
         imgSrc : 'https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/airplane-pose-right-kids.jpg',
         videoSrc: 'https://storage.googleapis.com/sworkit-assets/video/ios/airplane-pose-left-kids.mp4'
     }
  ]

  constructor(private activatedRoute : ActivatedRoute, 
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {
      var id = this.activatedRoute.snapshot.paramMap.get('id');
      this.selectedWork = this.workout.find(e => e.id == Number(id))
  }
  playVideo(){
    let mainVideo: HTMLVideoElement = <HTMLVideoElement> document.getElementsByClassName('videoPlayer')[0];
    mainVideo.play();
    let playButton : HTMLVideoElement = <HTMLVideoElement> document.getElementsByClassName('playButton')[0]
    playButton.style.display = "none";
  }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        buttons: [{
          text: 'Copy',
          cssClass: 'EditionIcon',
          icon: 'copy',
          handler: () => {
        
          }
        }, {
          text: 'Share on Twitter',
          cssClass: 'EditionIcon',
          icon: 'logo-twitter',
          handler: () => {
      
          }
        }, {
          text: 'Share on Facebook',
          cssClass: 'EditionIcon',
          icon: 'logo-facebook',
          handler: () => {
    
          }
        }, {
          text: 'Email a friend about Sworkit',
          cssClass: 'EditionIcon',
          icon: 'mail',
          handler: () => {
            
          }
        }, {
          text: 'Cancel',
          cssClass: 'EditionIcon',
          icon: 'close',
          role: 'cancel',
          handler: () => {
        
          }
        }]
      });
      await actionSheet.present();
    }
}
