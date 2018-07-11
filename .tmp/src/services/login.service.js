var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CurrentUserService } from './current-user.service';
import { ToastService } from './toast.service';
import { Injectable } from "@angular/core";
import { AuthorizationService } from './firebase/authorization.service';
import { UserType } from '../types/user.type';
import { ViewControllerService } from './view-controller.service';
import { UserService } from './firebase/firestore-collection/user.service';
var LoginService = (function () {
    function LoginService(toastService, authService, currentUserService, viewControllerService, userService) {
        this.toastService = toastService;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.viewControllerService = viewControllerService;
        this.userService = userService;
    }
    LoginService.prototype.login = function (formGroup) {
        var _this = this;
        if (formGroup.valid) {
            this.toastService.showReadableToast("Logging you in...welcome back!");
            var email_1 = formGroup.get("email").value;
            this.authService.checkSignInMethods(email_1).then(function (methods) {
                if (methods.length > 0) {
                    _this.authService.signIn(email_1, formGroup.get("password").value).then(function () {
                        _this.userService.get(_this.authService.getCurrentUserUID()).subscribe(function (users) {
                            if (!_this.currentUserService.hasCurrentUser()) {
                                _this.currentUserService.setCurrentUser(users[0]); //there SHOULD be only one
                                _this.setAppropiateView();
                            }
                        });
                    }).catch(function (reason) {
                        _this.toastService.showReadableToast("Double check your password");
                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else {
                    _this.toastService.showReadableToast("Sorry, we dont have that username signed up. Please sign up.");
                    console.error("User does not exist!");
                }
            }).catch(function (reason) {
                _this.toastService.showReadableToast("Sign in didn't work because: " + reason);
                console.error("User does not exist!");
            });
        }
        else {
            var display = "";
            if (formGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (formGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    LoginService.prototype.setAppropiateView = function () {
        if (this.currentUserService.getCurrentUser().userType == UserType.Organization)
            this.viewControllerService.setOrganizationHome();
        else
            this.viewControllerService.setConsumerView();
    };
    LoginService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ToastService, AuthorizationService,
            CurrentUserService, ViewControllerService,
            UserService])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map