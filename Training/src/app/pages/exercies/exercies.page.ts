import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-exercies',
  templateUrl: './exercies.page.html',
  styleUrls: ['./exercies.page.scss'],
})
export class ExerciesPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, 
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
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
            console.log('Delete clicked');
          }
        }, {
          text: 'Share on Twitter',
          cssClass: 'EditionIcon',
          icon: 'logo-twitter',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Share on Facebook',
          cssClass: 'EditionIcon',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Email a friend about Sworkit',
          cssClass: 'EditionIcon',
          icon: 'mail',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          cssClass: 'EditionIcon',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
}
