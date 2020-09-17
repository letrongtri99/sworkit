import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() name: any;
  @Input() img: any;
  @Input() content: any;
  @Input() exercises: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  checkContent() {
    if(this.content) {
      return true;
    }
    return false;
  }

}
