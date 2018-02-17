import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  templateUrl: 'app.template.html'
})

export class LocaleApp {
  constructor(private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByName("black");
  }
}
