import { OrganizationService } from './../services/firebase/firestore-collection/organization-service';
import { ConsumerLandingComponent } from './../components/consumer-landing/consumer-landing.component';
import { OrganizationDealsHomeComponent } from './../components/organization-deals-home/organization-deals-home.component';
import { OrganizationDealListComponent } from './../components/organization-deal-list/organization-deal-list.component';
import { LoginService } from './../services/login.service';
import { CurrentUserService } from './../services/current-user.service';
import { ModalNavbarComponent } from './../components/modal-navbar/modal-navbar.component';
import { MoreCardInfoComponent } from '../components/more-card-info/more-card-info.component';
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
import { DealEditorComponent } from '../components/deal-editor/deal-editor.component';
import { FilterDealComponent } from '../components/filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthorizationService } from '../services/firebase/authorization.service';
import { ImageService } from '../services/firebase/image-service.service';
import { Camera } from '@ionic-native/camera';
import { UploadService } from '../services/uploader.service';
import { ViewControllerService } from '../services/view-controller.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { DeviceService } from '../services/device.service';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { ToastService } from '../services/toast.service';
import { BrowserHomeComponent } from '../components/browser-home/browser-home.component';
import { HttpClientModule } from '@angular/common/http';
import { DealEditorService } from '../services/deal-editing.service';
import { Geolocation as IonLocation } from '@ionic-native/geolocation';
import { OrganizationLandingComponent } from '../components/organization-landing/organization-landing.component';
import { RememberMeService } from '../services/remember-me.service';
import { CardDataService } from '../services/firebase/firestore-collection/card-data.service';
import { UserService } from '../services/firebase/firestore-collection/user.service';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 1.3, threshold: 20 } // override default settings,
  }
}

@NgModule({
  declarations: [
    LocaleApp,
    ConsumerComponent,
    OrganizationDealListComponent,
    DealEditorComponent,
    FilterDealComponent,
    ConsumerLandingComponent,
    UserProfileComponent,
    BrowserHomeComponent,
    OrganizationLandingComponent,
    OrganizationDealsHomeComponent,
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
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LocaleApp,
    ConsumerComponent,
    OrganizationDealListComponent,
    DealEditorComponent,
    FilterDealComponent,
    ConsumerLandingComponent,
    UserProfileComponent,
    BrowserHomeComponent,
    OrganizationLandingComponent,
    OrganizationDealsHomeComponent,
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
    ViewControllerService, //
    UniqueDeviceID,
    DeviceService,
    ToastService,
    DealEditorService,
    IonLocation,
    OrganizationService,
    UserService,
    CurrentUserService,
    LoginService,
    RememberMeService
  ]
})
export class AppModule { }
