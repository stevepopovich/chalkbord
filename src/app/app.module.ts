import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
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

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
  ]
})
export class AppModule { }
