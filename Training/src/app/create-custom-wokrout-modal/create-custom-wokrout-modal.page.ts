import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-custom-wokrout-modal',
  templateUrl: './create-custom-wokrout-modal.page.html',
  styleUrls: ['./create-custom-wokrout-modal.page.scss'],
})
export class CreateCustomWokroutModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
