import { Geolocation } from '@ionic-native/geolocation';
import { IonicPlatform } from './../enums/ionic-platform.enum';
import { Component } from '@angular/core';
import { AuthorizationService } from '../services/firebase/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LocationCardsService } from '../services/location-cards.service';
import { CardDataService } from '../services/firebase/firestore-collection/card-data.service';

@Component({
  templateUrl: 'app.template.html',
  styleUrls: ['/app.scss']
})
export class LocaleApp {

  constructor(private auth: AuthorizationService,
    public viewControl: ViewControllerService, private platform: Platform, private statusBar: StatusBar,
    private locationService: LocationCardsService, private geolocation: Geolocation, private cardService: CardDataService) {

    this.locationService.setUpCurrentLocationCards(this.geolocation, this.cardService, this.locationService.currentLocation).then((cardModels) => {
      this.locationService.cardModels = cardModels;
    });

    this.platform.ready().then(() => {
      this.statusBar.show();
      this.statusBar.overlaysWebView(false);

      if (this.platform.is(IonicPlatform.Core)) {
        this.viewControl.setBrowserHome();
      } else {
        if (!this.auth.checkLoggedIn())
          this.viewControl.setSignUpView();
      }
    });
  }
}
