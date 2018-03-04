import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  templateUrl: 'app.template.html'
})

export class LocaleApp {
  public dealMaker: boolean = false;
  public consumer: boolean = true;

  constructor(private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByName("black");
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
