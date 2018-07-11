import { IonicPlatform } from './../enums/ionic-platform.enum';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthorizationService } from '../services/firebase/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.template.html'
})
export class LocaleApp {

  constructor(private statusBar: StatusBar, private auth: AuthorizationService, 
    public viewControl: ViewControllerService, private platform: Platform) {

    if(this.platform.is(IonicPlatform.Core)){
      this.viewControl.setBrowserHome();
    } else {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByName("black");
  
      if(!this.auth.checkLoggedIn()){
        this.viewControl.setSignUpView();
      }
    }
  }
}
