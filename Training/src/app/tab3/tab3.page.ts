import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateCustomWokroutModalPage } from '../create-custom-wokrout-modal/create-custom-wokrout-modal.page'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private currentModal = null;

  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateCustomWokroutModalPage,
      cssClass: 'my-custom-class'
    });

    this.currentModal = modal;
    return await modal.present();
  }

  dismissModal() {
    if (this.currentModal) {
      this.currentModal.dismiss().then(() => { this.currentModal = null; });
    }
  }
}
