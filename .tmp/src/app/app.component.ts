import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  templateUrl: 'app.template.html'
})

export class LocaleApp {
  public dealMaker: boolean = false;
  public consumer: boolean = false;
  public signUp: boolean = false;

  constructor(private statusBar: StatusBar, private auth: AuthorizationService) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByName("black");

    if(!this.auth.checkUserIsLoggedIn()){
      this.signUp = true;
    }
  }

  public changeView(){
    if(this.dealMaker){
      this.consumer = true;
      this.dealMaker = false;
    }
    else if(this.consumer){
      this.dealMaker = true;
      this.consumer= false;
    }
  }
}
