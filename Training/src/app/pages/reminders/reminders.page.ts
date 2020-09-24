import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {
  daily = false;
  inactivy = false;
  next = false;
  alert = '';
  myDate: String = new Date().toISOString();
  myDateTime: String = new Date().toISOString();
  myDateNext: String = new Date().toISOString();
  customPopoverOptions: any = {
    
  };
  constructor(public toastController: ToastController) { }

  async presentToast() {
    const datePipe = new DatePipe('en-US');
    if(this.alert == 'daily') {
      const myFormattedDate = datePipe.transform(this.myDate, 'h:mm a');
      const toast = await this.toastController.create({
        message: 'Swortout reminder set for ' + myFormattedDate + '!',
        duration: 1000
      });
      toast.present();
    } else {
      const myFormattedDate = datePipe.transform(this.myDateNext, 'h:mm a');
      const toast = await this.toastController.create({
        message: 'Swortout reminder set for ' + myFormattedDate + '!',
        duration: 1000
      });
      toast.present();
    }
    
  }

  ngOnInit() {
    
  }

  myChange(text) {
    this.alert = text;
    if((this.daily == true && this.alert == 'daily') || (this.next == true && this.alert == 'next')) {
       this.presentToast();
    }
  }
  myChangeDaily(text) {
    this.alert = text;
    if((this.daily == true && this.alert == 'daily') || (this.next == true && this.alert == 'next')) {
       this.presentToast();
    }
  }

}
