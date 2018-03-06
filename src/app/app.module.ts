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

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 1.3, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    LocaleApp,
    ConsumerComponent,
    RestaurantDealMakerComponent,
    DealEditorComponent,
    FilterDealComponent,
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
    RestaurantDealMakerComponent,
    DealEditorComponent,
    FilterDealComponent
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
    LaunchNavigator
  ]
})
export class AppModule { }
