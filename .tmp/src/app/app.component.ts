import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthorizationService } from '../services/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.template.html'
})

export class LocaleApp {

  constructor(private statusBar: StatusBar, private auth: AuthorizationService, 
    private viewControl: ViewControllerService, public platform: Platform) {

    if(this.platform.is("core")){
      this.viewControl.setRestaurantLanding();
    }else{
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByName("black");
  
      if(!this.auth.checkUserIsLoggedIn()){
        this.viewControl.signUp = true;
      }
    }
  }
}
