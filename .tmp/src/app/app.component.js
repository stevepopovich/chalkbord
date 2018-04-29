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
import { AuthorizationService } from '../services/authorization.service';
import { ViewControllerService } from '../services/view-controller.service';
var LocaleApp = (function () {
    function LocaleApp(statusBar, auth, viewControl) {
        this.statusBar = statusBar;
        this.auth = auth;
        this.viewControl = viewControl;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByName("black");
        if (!this.auth.checkUserIsLoggedIn()) {
            this.viewControl.signUp = true;
        }
    }
    LocaleApp.prototype.changeView = function () {
        if (this.viewControl.dealMaker) {
            this.viewControl.consumer = true;
            this.viewControl.dealMaker = false;
            this.viewControl.signUp = false;
        }
        else if (this.viewControl.consumer) {
            this.viewControl.dealMaker = true;
            this.viewControl.consumer = false;
            this.viewControl.signUp = false;
        }
    };
    LocaleApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n            <button (click)="changeView()" class="button-left" ion-button icon-only>\n                <ion-icon ios="md-sync" md="md-sync"></ion-icon>\n            </button>\n            <ion-title class="title-big">GrabSome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<div *ngIf="viewControl">\n    <consumer *ngIf="viewControl.consumer"></consumer>\n    <restaurant-deal-maker *ngIf="viewControl.dealMaker"></restaurant-deal-maker>\n    <user-signup *ngIf="viewControl.signUp"></user-signup>\n</div>\n'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [StatusBar, AuthorizationService, ViewControllerService])
    ], LocaleApp);
    return LocaleApp;
}());
export { LocaleApp };
//# sourceMappingURL=app.component.js.map