var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { velocity: 1.3, threshold: 20 } // override default settings
        };
        return _this;
    }
    return MyHammerConfig;
}(HammerGestureConfig));
export { MyHammerConfig };
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                    links: []
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map