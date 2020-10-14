import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};
const now = new Date();

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @ViewChild('mySlider') slides: IonSlides;
  private disablePrevBtn = true;
  private disableNextBtn = false;
  
  // Initial for showing table 
  private isShowCalendarBtn = true;
  private isShowStatsBtn = false;

  cal = now;
  header = now;
  nonForm = now;
  external = now;
  private myAvatar = 'https://img.freepik.com/free-photo/old-grunge-cement-wall-backgrounds_34552-195.jpg?size=626&ext=jpg'

  constructor(private actionSheetController: ActionSheetController,
              private photoLibrary: PhotoLibrary,
              private camera: Camera) { }

  ngOnInit() {
  }
  
  showStats(){
    this.isShowCalendarBtn = true;
    this.isShowStatsBtn = false;
    document.getElementById("slides").style.display = 'block';
    document.getElementById("calendar").style.display = 'none';
  }
  
  showCalendar(){
    this.isShowCalendarBtn = false;
    this.isShowStatsBtn = true;
    document.getElementById("calendar").style.display = 'block';
    document.getElementById("slides").style.display = 'none';
  }

  calSettings: MbscCalendarOptions = {
      display: 'inline'
  };

  headerSettings: MbscCalendarOptions = {
      display: 'bubble',
      headerText: '{value}'
  };

  nonFormSettings: MbscCalendarOptions = {
      display: 'bubble'
  };

  externalSettings: MbscCalendarOptions = {
      display: 'bubble',
      showOnTap: false,
      showOnFocus: false
  };
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Choose from Library',
        handler: () => {
          this.takePhotoFromLibrary()
        }
      }, {
        text: 'Take Photo',
        handler: () => {
          this.takePhoto()
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myAvatar = base64Image;
     }, (err) => {
      // Handle error
     });
  }

  takePhotoFromLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myAvatar = base64Image;
     }, (err) => {
      // Handle error
     });
  }

  swipeNext() {
    this.slides.slideNext();
  }

  swipePrev() {
    this.slides.slidePrev();
  }

  doCheck() {
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();

    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }
}
