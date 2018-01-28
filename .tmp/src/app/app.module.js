var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                    links: []
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map