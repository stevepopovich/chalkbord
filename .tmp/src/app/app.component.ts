import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthorizationService } from '../services/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';

@Component({
  templateUrl: 'app.template.html'
})

export class LocaleApp {

  constructor(private statusBar: StatusBar, private auth: AuthorizationService, private viewControl: ViewControllerService) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByName("black");

    if(!this.auth.checkUserIsLoggedIn()){
      this.viewControl.signUp = true;
    }
  }

  public changeView(){
    if(this.viewControl.dealMaker){
      this.viewControl.consumer = true;
      this.viewControl.dealMaker = false;
      this.viewControl.signUp = false;
    }
    else if(this.viewControl.consumer){
      this.viewControl.dealMaker = true;
      this.viewControl.consumer= false;
      this.viewControl.signUp = false;
    }
  }
}
