import { ModalAccountPage } from './../modal-account/modal-account.page';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  latitude: any;
  longitude: any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor(public actionSheetController: ActionSheetController, public imagePicker: ImagePicker ,public file: File, public camera: Camera, public geolocation: Geolocation, public modalController: ModalController) { }

  ngOnInit() {
  }
  firstName = 'Trong';
  lastName = 'Tri';
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalAccountPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': this.firstName,
        'lastName': this.lastName
      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.firstName = data.data.firstName;
    });
    return await modal.present();
  }
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      });
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      const icon = {
        path: 'M11 11l1.256 5 3.744-10-10 3.75 5 1.25zm1-11c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z',
        scale: 1,
        fillColor: '#4776a9'
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      // infoWindow.setPosition(pos);
      infoWindow.setContent('Location found');
      infoWindow.open(map,marker);
      map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  avatar = 'https://img.favpng.com/21/9/10/computer-icons-user-profile-google-account-png-favpng-dXFbNTwn0HmvS9QcrvPSrL4K3.jpg';
  chooseGallery() {
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
      this.avatar = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {

    });
  }
  takePhoto() {
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(options).then((imageData) => {
      this.avatar = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {

    });
  }
  async answerChoose() {
      const actionSheet = await this.actionSheetController.create({
        buttons: [{
          text: 'Choose from Library',
          cssClass: 'AccountIcon',
          handler: () => {
             this.chooseGallery();
          }
        }, {
          text: 'Take Photo',
          cssClass: 'AccountIcon',
          handler: () => {
             this.takePhoto();
          }
        },{
          text: 'Cancel',
          cssClass: 'AccountIcon',
          role: 'cancel',
          handler: () => {
            
          }
        }]
      });
      await actionSheet.present();
  }      
}
