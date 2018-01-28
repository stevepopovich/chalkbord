import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicStorageModule } from '@ionic/storage';

import { LocaleApp } from './app.component';
import { ConsumerComponent } from '../pages/consumer/consumer.component';
import { RestaurantCardComponent } from '../pages/restaurant-card/restaurant-card.component';

@NgModule({
  declarations: [
    LocaleApp,
    ConsumerComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularDraggableModule,
    IonicModule.forRoot(LocaleApp, {}, {
      links: [
        // { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        // { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        // { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        // { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        // { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        // { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        // { component: MapPage, name: 'Map', segment: 'map' },
        // { component: AboutPage, name: 'About', segment: 'about' },
        // { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        // { component: SupportPage, name: 'SupportPage', segment: 'support' },
        // { component: LoginPage, name: 'LoginPage', segment: 'login' },
        // { component: AccountPage, name: 'AccountPage', segment: 'account' },
        // { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LocaleApp,
    RestaurantCardComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    ]
})
export class AppModule { }
