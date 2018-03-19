var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
var LocaleApp = (function () {
    function LocaleApp(statusBar) {
        this.statusBar = statusBar;
        this.dealMaker = false;
        this.consumer = true;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByName("black");
    }
    LocaleApp.prototype.changeView = function () {
        if (this.dealMaker) {
            this.consumer = true;
            this.dealMaker = false;
        }
        else if (this.consumer) {
            this.dealMaker = true;
            this.consumer = false;
        }
    };
    LocaleApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n            <button (click)="changeView()" class="button-left" ion-button icon-only>\n                <ion-icon ios="md-sync" md="md-sync"></ion-icon>\n            </button>\n            <ion-title class="title-big">dealway</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<consumer *ngIf="consumer"></consumer>\n<restaurant-deal-maker *ngIf="dealMaker"></restaurant-deal-maker>'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [StatusBar])
    ], LocaleApp);
    return LocaleApp;
}());
export { LocaleApp };
//# sourceMappingURL=app.component.js.map