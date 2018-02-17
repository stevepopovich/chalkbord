import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IonicStorageModule } from '@ionic/storage';

import { LocaleApp } from './app.component';
import { ConsumerComponent } from '../components/consumer/consumer.component';
import { RestaurantCardComponent } from '../components/restaurant-card/restaurant-card.component';

import { SwingModule } from 'angular2-swing';

import { Dialogs } from '@ionic-native/dialogs';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 1.3, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    LocaleApp,
    ConsumerComponent,
    RestaurantCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    AngularDraggableModule,
    IonicModule.forRoot(LocaleApp, {}, {
      links: [
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
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
    },
    Dialogs
  ]
})
export class AppModule { }
