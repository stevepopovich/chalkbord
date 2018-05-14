var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { GSUser, UserType } from '../../types/user.type';
import { ToastController } from "ionic-angular";
import { DeviceService } from "../../services/device.service";
var UserSignUpComponent = (function () {
    function UserSignUpComponent(formBuilder, auth, viewControl, toastCtrl, deviceService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.viewControl = viewControl;
        this.toastCtrl = toastCtrl;
        this.deviceService = deviceService;
        this.signingUp = true;
        this.isRest = false;
        this.attemptingSignup = false;
        this.attemptingLogin = false;
        this.remembered = false;
        this.userSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });
        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });
        this.deviceService.getRememberMeSetting().then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getUserEmailPasswordFromLocalStorage().then(function (emailPasswordTup) {
                    if (emailPasswordTup) {
                        _this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
                        _this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
                        _this.login();
                    }
                });
            }
        });
    }
    UserSignUpComponent.prototype.ngAfterViewInit = function () {
        if (this.auth.checkUserIsLoggedIn()) {
            this.auth.userSignOut();
        }
    };
    UserSignUpComponent.prototype.signUp = function () {
        var _this = this;
        if (this.userSignUpGroup.valid) {
            this.showReadableToast("Signing you up...welcome!");
            var email_1 = this.userSignUpGroup.get("email").value;
            var password_1 = this.userSignUpGroup.get("password").value;
            var confrimPassword = this.userSignUpGroup.get("confirmPassword").value;
            if (password_1 == confrimPassword) {
                var userType = UserType.Consumer;
                this.auth.checkUserSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUpUser(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1).then(function () {
                                _this.handleRememberMe(_this.userSignUpGroup);
                                var newUser = new GSUser(_this.auth.fireAuth.auth.currentUser.uid, userType);
                                _this.auth.currentUser = newUser;
                                _this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());
                                _this.setAppropiateView();
                            }).catch(function (reason) {
                                _this.showReadableToast("Sorry, that didn't work beacuase " + reason);
                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch(function (reason) {
                            _this.showReadableToast("Sorry, that didn't work beacause " + reason);
                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else {
                        _this.showReadableToast("Sorry, that email is already signed up.");
                        console.error("User account already exists"); //user account already exists
                    }
                }).catch(function (reason) {
                    _this.showReadableToast("Sorry, that didn't work, please contact support.");
                    console.error("Sign up failed because: " + reason);
                });
            }
            else {
                this.showReadableToast("Please make sure your passwords match.");
                console.error("Passwords do not match");
            }
        }
        else {
            var display = "";
            if (this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";
            this.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    UserSignUpComponent.prototype.loginHandler = function () {
        this.handleRememberMe(this.userLogInGroup);
        this.login();
    };
    UserSignUpComponent.prototype.login = function () {
        var _this = this;
        if (this.userLogInGroup.valid) {
            this.showReadableToast("Logging you in...welcome back!");
            var email_2 = this.userLogInGroup.get("email").value;
            this.auth.checkUserSignInMethods(email_2).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.signIn(email_2, _this.userLogInGroup.get("password").value).then(function () {
                        _this.auth.getCurrentUserData();
                        _this.setAppropiateView();
                    }).catch(function (reason) {
                        _this.showReadableToast("Double check your password");
                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else {
                    _this.showReadableToast("Sorry, we dont have that username signed up. Please sign up.");
                    console.error("User does not exist!");
                }
            }).catch(function (reason) {
                _this.showReadableToast("Sign in didn't work because: " + reason);
                console.error("User does not exist!");
            });
        }
        else {
            var display = "";
            if (this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";
            this.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    UserSignUpComponent.prototype.setAppropiateView = function () {
        var _this = this;
        if (this.auth.checkUserType()) {
            this.auth.checkUserType().subscribe(function (users) {
                if (users[0].userType == UserType.Restaurant)
                    _this.viewControl.setDealMakerView();
                else
                    _this.viewControl.setConsumerView();
            });
        }
    };
    UserSignUpComponent.prototype.showReadableToast = function (message) {
        var wordCount = message.split(" ").length;
        var wordsPerMinute = 210; //resonable words per minute someone can read on a computer
        var wordTime = ((wordCount / wordsPerMinute) *
            (60 * 1000)) +
            1500; //delay to see the notification toast;
        var toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom"
        });
        toast.present();
    };
    UserSignUpComponent.prototype.handleRememberMe = function (formGroup) {
        var rememberMe = formGroup.get("rememberMe").value;
        this.deviceService.putRememberMeSetting(rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(formGroup.get("email").value, formGroup.get("password").value);
    };
    /**
     * Ugly css animations
     */
    UserSignUpComponent.prototype.goToUserSignUpScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.userSignUpScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    UserSignUpComponent.prototype.goToLoginScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.logInScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    UserSignUpComponent.prototype.goBackAScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "0%";
        this.logInScreen.nativeElement.style['left'] = "100%";
        this.userSignUpScreen.nativeElement.style['left'] = "100%";
        this.goBackButton.nativeElement.style['bottom'] = "-10%";
    };
    __decorate([
        ViewChild('welcomeScreen'),
        __metadata("design:type", ElementRef)
    ], UserSignUpComponent.prototype, "welcomeScreen", void 0);
    __decorate([
        ViewChild('logInScreen'),
        __metadata("design:type", ElementRef)
    ], UserSignUpComponent.prototype, "logInScreen", void 0);
    __decorate([
        ViewChild('userSignUpFields'),
        __metadata("design:type", ElementRef)
    ], UserSignUpComponent.prototype, "userSignUpScreen", void 0);
    __decorate([
        ViewChild('goBackButton'),
        __metadata("design:type", Object)
    ], UserSignUpComponent.prototype, "goBackButton", void 0);
    UserSignUpComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/'<!-- <ion-list>\n    <form [formGroup]="userFormGroup">\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email"  formControlName="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <ion-item [hidden]="!signingUp">\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n        </ion-item>\n    \n        <ion-item [hidden]="!signingUp">\n            <ion-label>Restaurant User</ion-label>\n            <ion-checkbox formControlName="isRestuarant" [(ngModel)]="isRest" checked="false"></ion-checkbox>\n        </ion-item>\n    </form>\n</ion-list>\n\n<div class="button-group">\n    <button ion-button (click)="login()">\n        Login\n    </button>\n\n    <button ion-button (click)="signUp()">\n        Sign Up\n    </button>\n</div> -->\n\n<div class="background-photo">\n\n</div>\n\n<div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n    <div class="center-text">grabsome</div>\n    <div class="button-area">\n        <button class="welcome-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n        <div class="or-text">or</div>\n        <button class="welcome-button" ion-button outline (click)="goToLoginScreen()">\n            login\n        </button>\n    </div>\n</div>\n\n<div #logInScreen class="animate-form offset-form">\n    <ion-card>              \n        <ion-card-content>\n            <ion-list class="centered-form ">\n                    <form [formGroup]="userLogInGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email"  formControlName="email"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label>Remember Me</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n        </ion-card-content>\n    </ion-card>\n    \n    <button class="welcome-button" ion-button outline (click)="loginHandler()">\n        login\n    </button>\n</div>\n\n<div #userSignUpFields class="animate-form offset-form">\n    <ion-card>              \n        <ion-card-content>\n            <ion-list class="centered-form">\n                <form [formGroup]="userSignUpGroup">\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Remember Me</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <button ion-button class="welcome-button" outline (click)="signUp()">\n        sign up\n    </button>\n</div>\n\n<div #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>\n\n<!-- <div #restaurantSignUpFields>\n    <ion-list>\n        <form [formGroup]="userFormGroup">\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="email"  formControlName="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" formControlName="password"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password" formControlName="confirmPassword"></ion-input>\n            </ion-item>\n        </form>\n    </ion-list>\n\n</div> -->\n\n<!-- <div #userTypeChoice class="animate-form offset-form">\n    <div class="user-type-button-area">\n        <button class="welcome-button" ion-button (click)="signUpConsumer()">\n           consumer\n        </button>\n        <div class="or-text">or</div>\n        <button class="welcome-button" ion-button outline (click)="signUpRestaurant()">\n            business\n        </button>\n    </div>\n</div> -->\n    '/*ion-inline-end:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/,
            selector: 'user-signup',
            styleUrls: ['/user-signup.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthorizationService, ViewControllerService, ToastController, DeviceService])
    ], UserSignUpComponent);
    return UserSignUpComponent;
}());
export { UserSignUpComponent };
//# sourceMappingURL=user-signup.component.js.map