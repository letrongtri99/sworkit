import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-account',
  templateUrl: './modal-account.page.html',
  styleUrls: ['./modal-account.page.scss'],
})
export class ModalAccountPage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  constructor(public modalCtrl: ModalController) { }
  firstNameAccount = '';
  ngOnInit() {
     this.firstNameAccount = this.firstName
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'firstName': this.firstName
    });
  }
  dismissSave(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'firstName': this.firstNameAccount
    });
  }
}
