import { Component, ElementRef, HostListener, NgModule, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-example-leaner-baseline',
  templateUrl: './example-leaner-baseline.page.html',
  styleUrls: ['./example-leaner-baseline.page.scss'],
})
export class ExampleLeanerBaselinePage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController) { }
  
  async openActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();

  }

  async openActionCustomize() {
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Copy and Edit Workout',
          icon:'copy-outline',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon:'close-outline',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  ngOnInit() {
  }


}
