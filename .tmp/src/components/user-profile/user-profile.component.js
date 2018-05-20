var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { DeviceService } from "../../services/device.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { ModalController, ViewController } from "ionic-angular";
var UserProfileComponent = (function () {
    function UserProfileComponent(deviceService, viewController, modalCtrl, viewCtrl) {
        this.deviceService = deviceService;
        this.viewController = viewController;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    UserProfileComponent.prototype.logout = function () {
        this.deviceService.putRememberMeSetting(false);
        this.viewController.setSignUpView();
    };
    UserProfileComponent.prototype.closeProfile = function () {
        this.viewCtrl.dismiss();
    };
    UserProfileComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">GrabSome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="closeProfile()" class="close-modal-button" ion-button icon-only>\n    <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n</button>\n\n<button (click)="logout()" class="signout-button" ion-button icon-only>\n    <ion-icon ios="md-log-out" md="md-log-out"></ion-icon>\n</button>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
            selector: 'user-profile',
            styleUrls: ['/user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [DeviceService, ViewControllerService, ModalController, ViewController])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map