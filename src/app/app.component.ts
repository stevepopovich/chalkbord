import { Geolocation } from '@ionic-native/geolocation';
import { IonicPlatform } from './../enums/ionic-platform.enum';
import { Component } from '@angular/core';
import { AuthorizationService } from '../services/firebase/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LocationCardsService } from '../services/location-cards.service';
import { CardDataService } from '../services/firebase/firestore-collection/card-data.service';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { LocaleLocation } from '../types/location.type';

const config: BackgroundGeolocationConfig = {
  desiredAccuracy: 100,
  stationaryRadius: 20,
  distanceFilter: 30,
  debug: false, //  enable this hear sounds for background-geolocation life-cycle.
  stopOnTerminate: false, // enable this to clear background location settings when the app terminates
  startOnBoot: true,
};

@Component({
  templateUrl: 'app.template.html',
  styleUrls: ['/app.scss']
})
export class LocaleApp {

  constructor(private auth: AuthorizationService,
    public viewControl: ViewControllerService, private platform: Platform, private statusBar: StatusBar,
    private locationService: LocationCardsService, private geolocation: Geolocation, private cardService: CardDataService,
    private backgroundGeolocation: BackgroundGeolocation) {

    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {
        this.locationService.currentLocation = new LocaleLocation();
        this.locationService.currentLocation.lat = location.latitude;
        this.locationService.currentLocation.lng = location.longitude;

        this.backgroundGeolocation.finish();
      });

    this.backgroundGeolocation.start();

    // this.backgroundGeolocation.isLocationEnabled().then((num) => {
    //   this.toast.showToast(String(num), 700);
    // })

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
