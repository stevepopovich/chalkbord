import { ModalNavbarComponent } from './../components/modal-navbar/modal-navbar.component';
import { MoreCardInfoComponent } from '../components/more-card-info/more-card-info.component';
import { RestaurantService } from './../services/restaurant-service';
import { GSCardComponent } from './../components/card/card.component';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicStorageModule } from '@ionic/storage';

import { LocaleApp } from './app.component';
import { ConsumerComponent } from '../components/consumer/consumer.component';

import { SwingModule } from 'angular2-swing';

import { Dialogs } from '@ionic-native/dialogs';
import { StatusBar } from '@ionic-native/status-bar';
import { RestaurantDealMakerComponent } from '../components/restaurant-deal-maker/restaurant-deal-maker.component';
import { DealEditorComponent } from '../components/deal-editor/deal-editor.component';
import { FilterDealComponent } from '../components/filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CardDataService } from '../services/card-data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthorizationService } from '../services/authorization.service';
import { ImageService } from '../services/image-service.service';
import { Camera } from '@ionic-native/camera';
import { UploadService } from '../services/uploader.service';
import { UserSignUpComponent } from '../components/user-signup/user-signup.component';
import { ViewControllerService } from '../services/view-controller.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { DeviceService } from '../services/device.service';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { ToastService } from '../services/toast.service';
import { BrowserHomeComponent } from '../components/browser-home/browser-home.component';
import { RestaurantLandingComponent } from '../components/restaurant-landing/restaurant-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantProfileComponent } from '../components/restaurant-profile/restaurant-profile.component';
import { DealEditorService } from '../services/deal-editing.service';
import { Geolocation as IonLocation } from '@ionic-native/geolocation';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 1.3, threshold: 20} // override default settings,
  }
}

@NgModule({ 
  declarations: [
    LocaleApp,
    ConsumerComponent,
    RestaurantDealMakerComponent,
    DealEditorComponent,
    FilterDealComponent,
    UserSignUpComponent,
    UserProfileComponent,
    BrowserHomeComponent,
    RestaurantLandingComponent,
    RestaurantProfileComponent,
    GSCardComponent,
    MoreCardInfoComponent,
    ModalNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    AngularDraggableModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(LocaleApp, {}, {
      links: [
      ]
    }),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCbyIgW7iO9OrPoK9Ozr6EsOGrdN8v9HKo",
      authDomain: "locale-4112a.firebaseapp.com",
      databaseURL: "https://locale-4112a.firebaseio.com",
      projectId: "locale-4112a",
      storageBucket: "locale-4112a.appspot.com",
      messagingSenderId: "9042973249"
    }),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,     
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LocaleApp,
    RestaurantDealMakerComponent,
    DealEditorComponent,
    FilterDealComponent,
    UserSignUpComponent,
    UserProfileComponent,
    BrowserHomeComponent,
    RestaurantLandingComponent,
    RestaurantProfileComponent,
    GSCardComponent,
    MoreCardInfoComponent,
    ModalNavbarComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
    },
    Dialogs,
    StatusBar,
    LaunchNavigator,
    CardDataService,
    AuthorizationService,
    ImageService,
    Camera,
    UploadService,
    ViewControllerService,
    UniqueDeviceID,
    DeviceService,
    ToastService,
    DealEditorService,
    IonLocation,
    RestaurantService
  ]
})
export class AppModule { }
