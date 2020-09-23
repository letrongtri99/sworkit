import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Timeout from 'await-timeout';
import { MiniModalPage } from '../mini-modal/mini-modal.page'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {
  public header;
  @Input() name: any;
  @Input() img: any;
  @Input() content: any;
  @Input() exercises: any;

  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }

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

  async presentModal(x: any) {
    const timer = new Timeout();
    const modal = await this.modalCtrl.create({
      component: MiniModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': x.nameEx,
        'img': x.imgEx,
        'content': x.miniContentEx,
        'exercises': x.miniEx
      }
    });
    timer.set(300)
      .then(() => modal.present());
  }

  lastX: any;
  logScrolling(event) {
    // if(event.detail.scrollTop > Math.max(0, this.lastX)) {
    //   this.renderer.setStyle(this.header, 'height', `${this.header.clientHeight - event.detail.startY}px`);
    //   if(this.header.clientHeight < 60) {
    //     document.getElementById("test").addEventListener("transitionend", function() {
    //       document.getElementById("hehe").setAttribute("slot", "fixed")
    //     })
    //   }
      
    // }
    // else {
    //   this.renderer.setStyle(this.header, 'height', `${this.header.clientHeight + event.detail.startY}px`);
    //   this.renderer.setStyle(this.header, 'transition', 'height 400ms');

    // }
    // this.lastX = event.detail.scrollTop
  }

  scrollStart() {
    this.header = document.getElementById("test");
  }

  logScrollEnd() {
    
  }

}


