var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { DeviceService } from "../../services/device.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { ModalController, ViewController, Button } from "ionic-angular";
import { AuthorizationService } from "../../services/authorization.service";
import { ToastService } from "../../services/toast.service";
var rememberMeUserKey = "rememberMeUser"; //dont change this unless you want to change the other one is user-signup
var UserProfileComponent = (function () {
    function UserProfileComponent(deviceService, viewController, modalCtrl, viewCtrl, authService, toastService) {
        this.deviceService = deviceService;
        this.viewController = viewController;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastService = toastService;
        this.emailDisabled = true;
        this.editButtonText = "edit";
        this.userEmail = this.authService.fireAuth.auth.currentUser.email;
        this.firstName = this.authService.currentUser.firstName;
    }
    UserProfileComponent.prototype.goTouserSignUpScreen = function () { };
    UserProfileComponent.prototype.toggleEdit = function () {
        var _this = this;
        if (this.emailDisabled) {
            this.emailDisabled = false;
            this.editButtonText = "save";
        }
        else {
            if (this.authService.fireAuth.auth.currentUser.email != this.userEmail) {
                this.authService.fireAuth.auth.currentUser.updateEmail(this.userEmail).then(function () {
                    _this.toastService.showReadableToast("Cool, email is updated");
                }).catch(function (reason) {
                    _this.toastService.showReadableToast("Email not updated: " + reason);
                });
            }
            if (this.authService.currentUser.firstName != this.firstName) {
                var currUser = Object.assign({}, this.authService.currentUser);
                currUser.firstName = this.firstName;
                this.authService.updateUserInDatabase(currUser).then(function () {
                    _this.toastService.showReadableToast("Cool, user name is updated");
                }).catch(function (reason) {
                    _this.toastService.showReadableToast("User not updated: " + reason);
                });
            }
            this.emailDisabled = true;
            this.editButtonText = "edit";
        }
    };
    UserProfileComponent.prototype.logout = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                _this.deviceService.putSetting(rememberMeUserKey, false);
                _this.viewController.setSignUpView();
                _this.viewCtrl.dismiss();
            }
        });
        toast.present();
    };
    UserProfileComponent.prototype.closeProfile = function () {
        this.viewCtrl.dismiss();
    };
    UserProfileComponent.prototype.resetPassword = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to reset your password?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                var currentEmail = _this.authService.fireAuth.auth.currentUser.email;
                if (currentEmail) {
                    _this.authService.checkUserSignInMethods(currentEmail).then(function (methods) {
                        if (methods.length > 0) {
                            _this.authService.fireAuth.auth.sendPasswordResetEmail(currentEmail).then(function () {
                                _this.toastService.showReadableToast("Cool, a reset link was sent to your email.");
                            }).catch(function (reason) {
                                _this.toastService.showReadableToast("Sorry, couldn't send you a reset link because: " + reason);
                            });
                        }
                        else
                            _this.toastService.showReadableToast("We don't have that email signed up. Please sign up!");
                    });
                }
                else {
                    _this.toastService.showReadableToast("Are you logged in? Please contact support");
                }
            }
        });
        toast.present();
    };
    __decorate([
        ViewChild('editButton'),
        __metadata("design:type", Button)
    ], UserProfileComponent.prototype, "editButton", void 0);
    UserProfileComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="closeProfile()" class="close-modal-button" ion-button icon-only>\n    <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n</button>\n\n<button (click)="logout()" class="signout-button" ion-button icon-only>\n    <ion-icon ios="md-log-out" md="md-log-out"></ion-icon>\n</button>\n\n<ion-content>\n    <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input [disabled]="emailDisabled" [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [disabled]="emailDisabled" type="email" [(ngModel)]="userEmail"></ion-input>\n    </ion-item>\n    \n    <button (click)="toggleEdit()" class="reset-button" ion-button>\n        {{editButtonText}}\n    </button>\n    \n    <button (click)="resetPassword()" class="reset-button" outline ion-button>\n        reset password\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
            selector: 'user-profile',
            styleUrls: ['/user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [DeviceService, ViewControllerService,
            ModalController, ViewController,
            AuthorizationService, ToastService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map