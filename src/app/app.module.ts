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
import { StatusBar } from '@ionic-native/status-bar';
import { RestaurantDealMakerComponent } from '../components/restaurant-deal-maker/restaurant-deal-maker.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 1.3, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    LocaleApp,
    ConsumerComponent,
    RestaurantCardComponent,
    RestaurantDealMakerComponent
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
    RestaurantCardComponent,
    RestaurantDealMakerComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
    },
    Dialogs,
    StatusBar
  ]
})
export class AppModule { }
