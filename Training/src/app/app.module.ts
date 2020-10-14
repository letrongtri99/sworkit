import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { SharedComponentsModule } from './components/shared-components.module';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomWokroutModalPageModule } from './create-custom-wokrout-modal/create-custom-wokrout-modal.module';
import { ExpandableHeaderDirective } from './directives/expandable-header.directive';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent, ExpandableHeaderDirective],
  entryComponents: [],
  imports: [ 
    FormsModule,  
    MbscModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedComponentsModule, CreateCustomWokroutModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    File,
    Camera,
    Geolocation,
    PhotoLibrary,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
