import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pages = {
     'home': true,
     'price' : false,
     'remind' : false,
     'library' : false,
     'account' : false,
     'music' : false,
     'guest' : false,
     'help' : false,
     'settings' : false
  }
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu : MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }
  toggleMenu(namePage) {
     var listKey = Object.keys(this.pages);
     listKey.forEach(element => {
         this.pages[element] = false;
     });
     this.pages[namePage] = true;
     this.menu.toggle();
  }
}
