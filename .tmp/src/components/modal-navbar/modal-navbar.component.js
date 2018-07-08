var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { ToastService } from "../../services/toast.service";
import { DeviceService } from "../../services/device.service";
import { ViewController } from "ionic-angular";
import { ViewControllerService } from '../../services/view-controller.service';
import { LoginKeys } from '../../services/login-keys.service';
var ModalNavbarComponent = (function () {
    function ModalNavbarComponent(toastService, ionicViewController, deviceService, viewControllerService) {
        this.toastService = toastService;
        this.ionicViewController = ionicViewController;
        this.deviceService = deviceService;
        this.viewControllerService = viewControllerService;
    }
    ModalNavbarComponent.prototype.logout = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                if (_this.restaurntModal) {
                    _this.deviceService.putSetting(LoginKeys.rememberMeRestKey, false);
                    _this.viewControllerService.setBrowserHome();
                }
                else {
                    _this.deviceService.putSetting(LoginKeys.rememberMeUserKey, false);
                    _this.viewControllerService.setSignUpView();
                }
                _this.ionicViewController.dismiss();
            }
        });
        toast.present();
    };
    ModalNavbarComponent.prototype.closeProfile = function () {
        this.ionicViewController.dismiss();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "profileModal", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "restaurntModal", void 0);
    ModalNavbarComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="closeProfile()" class="close-modal-button" ion-button icon-only>\n    <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n</button>\n\n<button *ngIf="profileModal" (click)="logout()" class="signout-button" ion-button icon-only>\n    <ion-icon ios="md-log-out" md="md-log-out"></ion-icon>\n</button>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/,
            selector: 'modal-navbar',
            styleUrls: ['/modal-navbar.component.scss']
        }),
        __metadata("design:paramtypes", [ToastService, ViewController,
            DeviceService, ViewControllerService])
    ], ModalNavbarComponent);
    return ModalNavbarComponent;
}());
export { ModalNavbarComponent };
//# sourceMappingURL=modal-navbar.component.js.map