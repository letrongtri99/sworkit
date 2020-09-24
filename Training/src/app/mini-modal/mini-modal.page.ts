import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mini-modal',
  templateUrl: './mini-modal.page.html',
  styleUrls: ['./mini-modal.page.scss'],
})
export class MiniModalPage implements OnInit {
  @Input() name: any;
  @Input() img: any;
  @Input() content: any;
  @Input() exercises: any;
  constructor(private modalCtrl: ModalController, public actionSheetController: ActionSheetController, public toastController: ToastController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async showAction() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
      {
        text: 'Copy',
        icon: 'copy',
        handler: () => {
          console.log(1);
        }
      },
      {
        text: 'Share on Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log(1);
        }
      }, 
      {
        text: 'Share on Facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log(1);
        }
      },  
      {
        text: 'Email a friend about Sworkit',
        icon: 'mail',
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      cssClass: 'my-custom-class',
      header: 'Toast header',
      message: 'Workout added to My Favorites',
      position: 'middle',
      duration: 2000,
      color: "light"
    });
    toast.present();
  }

  changeHeart() {
    var x = document.getElementById("heart");
    if(x.getAttribute("name") == "heart-outline") {
      x.setAttribute("name", "heart");
      this.presentToastWithOptions();
    }
    else {
      x.setAttribute("name", "heart-outline");
    }
  }

}
