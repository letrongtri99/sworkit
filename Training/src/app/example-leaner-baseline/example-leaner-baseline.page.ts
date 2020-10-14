import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, HostListener, NgModule, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-example-leaner-baseline',
  templateUrl: './example-leaner-baseline.page.html',
  styleUrls: ['./example-leaner-baseline.page.scss'],
})
export class ExampleLeanerBaselinePage implements OnInit {
  visible: boolean;

  constructor( private actionSheetCtrl: ActionSheetController, private loadingController: LoadingController) { }
  

  async showLoading() {
    this.visible = !this.visible;
    if ( this.visible ) {
      let loading = await this.loadingController.create({
        message:"Added to your Favourite",
        duration: 3000,
        showBackdrop: true,
        spinner: null
      }); 
      
      loading.present();
      setTimeout(() => {
        loading.dismiss()
      }, 5000)
    }
  }

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
