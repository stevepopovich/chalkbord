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
import { Validators, FormBuilder } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { GSUser, UserType } from '../../types/user.type';
import { ToastController } from "ionic-angular";
var UserSignUpComponent = (function () {
    function UserSignUpComponent(formBuilder, auth, viewControl, toastCtrl) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.viewControl = viewControl;
        this.toastCtrl = toastCtrl;
        this.signingUp = false;
        this.isRest = false;
        this.attemptingSignup = false;
        this.userFormGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            isRestuarant: [''],
        });
    }
    UserSignUpComponent.prototype.signUp = function () {
        var _this = this;
        if (!this.signingUp) {
            this.signingUp = true;
        }
        else if (this.userFormGroup.valid) {
            var email_1 = this.userFormGroup.get("email").value;
            var password_1 = this.userFormGroup.get("password").value;
            var confrimPassword = this.userFormGroup.get("password").value;
            if (password_1 == confrimPassword) {
                var userType;
                if (this.userFormGroup.get("isRestuarant").value)
                    userType = UserType.Restaurant;
                else
                    userType = UserType.Consumer;
                this.auth.checkUserSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUpUser(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1, true).then(function () {
                                var newUser = new GSUser(_this.auth.auth.auth.currentUser.uid, userType);
                                _this.auth.currentUser = newUser;
                                _this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());
                                _this.setAppropiateView();
                            }).catch(function (reason) {
                                _this.showToast("Sorry, that didn't work beacuase " + reason);
                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch(function (reason) {
                            _this.showToast("Sorry, that didn't work beacause " + reason);
                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else {
                        _this.showToast("Sorry, that email is already signed up.");
                        console.error("User account already exists"); //user account already exists
                    }
                }).catch(function (reason) {
                    _this.showToast("Sorry, that didn't work, please contact support.");
                    console.error("Sign up failed because: " + reason);
                });
            }
            else {
                this.showToast("Please make sure your passwords match.");
                console.error("Passwords do not match");
            }
        }
        else {
            var display = "";
            if (this.userFormGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userFormGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";
            this.showToast(display);
            console.error("Fields are invalid");
        }
    };
    UserSignUpComponent.prototype.login = function () {
        var _this = this;
        if (this.userFormGroup.valid) {
            var email_2 = this.userFormGroup.get("email").value;
            this.auth.checkUserSignInMethods(email_2).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.signIn(email_2, _this.userFormGroup.get("password").value, false).then(function () {
                        _this.setAppropiateView();
                    });
                }
                else {
                    _this.showToast("Sorry, we dont have that username signed up. Please sign up.");
                    console.error("User does not exist!");
                }
            });
        }
    };
    UserSignUpComponent.prototype.setAppropiateView = function () {
        if (this.auth.checkUserType() == UserType.Restaurant)
            this.viewControl.setDealMakerView();
        else
            this.viewControl.setConsumerView();
    };
    UserSignUpComponent.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: "bottom"
        });
        toast.present();
    };
    UserSignUpComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/'<ion-list>\n    <form [formGroup]="userFormGroup">\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email"  formControlName="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <ion-item [hidden]="!signingUp">\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n    \n        <ion-item [hidden]="!signingUp">\n            <ion-label>Restaurant User</ion-label>\n            <ion-checkbox formControlName="isRestuarant" [(ngModel)]="isRest" checked="false"></ion-checkbox>\n        </ion-item>\n    </form>\n</ion-list>\n\n<div class="button-group">\n    <button ion-button (click)="login()">\n        Login\n    </button>\n\n    <button ion-button (click)="signUp()">\n        <div *ngIf="!attemptingSignup">Sign Up</div>\n        <ion-spinner *ngIf="attemptingSignup"></ion-spinner>\n    </button>\n</div>\n    '/*ion-inline-end:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/,
            selector: 'user-signup',
            styleUrls: ['/user-signup.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthorizationService, ViewControllerService, ToastController])
    ], UserSignUpComponent);
    return UserSignUpComponent;
}());
export { UserSignUpComponent };
//# sourceMappingURL=user-signup.component.js.map