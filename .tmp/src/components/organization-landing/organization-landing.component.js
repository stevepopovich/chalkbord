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
import { FormBuilder, Validators } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { DeviceService } from "../../services/device.service";
import { ToastService } from "../../services/toast.service";
import { GSUser, UserType } from "../../types/user.type";
import { AlertController } from "ionic-angular";
import { Restaurant } from "../../types/restaurant.type";
import { GSLocation } from "../../types/location.type";
import { RestaurantService } from "../../services/restaurant-service";
import { CurrentUserService } from "../../services/current-user.service";
import { UserService } from "../../services/user.service";
import { LoginService } from "../../services/login.service";
import { LoginKeys } from "../../services/login-keys.service";
var OrganizationLandingComponent = (function () {
    function OrganizationLandingComponent(formBuilder, auth, deviceService, loginService, toastService, alert, restaurantService, currentUserService, userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.deviceService = deviceService;
        this.loginService = loginService;
        this.toastService = toastService;
        this.alert = alert;
        this.restaurantService = restaurantService;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.rememberMeLogIn = false;
        this.rememberMeSignUp = false;
        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])],
            rememberMe: ['']
        });
        this.restSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])],
            address: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            zipcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')])],
            name: ['', Validators.compose([Validators.required])],
            rememberMe: ['']
        });
        this.deviceService.getSetting(LoginKeys.rememberMeRestKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getUserEmailPasswordFromLocalStorage(LoginKeys.restEmailPasswordComboKey).then(function (emailPasswordTup) {
                    if (emailPasswordTup) {
                        _this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
                        _this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
                        _this.loginService.login(_this.userLogInGroup);
                    }
                });
            }
        });
    }
    OrganizationLandingComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
    OrganizationLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.signUpCard.nativeElement.scrollIntoView(true);
    };
    OrganizationLandingComponent.prototype.loginHandler = function () {
        this.handleRememberMe(this.userLogInGroup);
        this.loginService.login(this.userLogInGroup);
    };
    OrganizationLandingComponent.prototype.handleRememberMe = function (formGroup) {
        var rememberMe = formGroup.get("rememberMe").value;
        this.deviceService.putSetting(LoginKeys.rememberMeRestKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(LoginKeys.restEmailPasswordComboKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    OrganizationLandingComponent.prototype.signUp = function () {
        var _this = this;
        if (this.restSignUpGroup.valid) {
            //this.toastService.showReadableToast("Signing you up...welcome!");
            var address = this.restSignUpGroup.get("address").value;
            var city = this.restSignUpGroup.get("city").value;
            var state = this.restSignUpGroup.get("state").value;
            var zipcode = this.restSignUpGroup.get("zipcode").value;
            var service = new google.maps.places.PlacesService(this.map);
            var textSearchRequest = {
                query: this.concatStringsWithSpaces(address, city, state, zipcode)
            };
            service.textSearch(textSearchRequest, function (results) {
                if (results.length < 0) {
                    _this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");
                    console.error("Address not found");
                }
                else
                    _this.presentVerifyAddressAlert(results, 0);
            });
        }
        else {
            var display = "";
            display = "One or more of your fields are messed up!"; //TODO
            // if(this.restSignUpGroup.get("email").invalid)//TODO
            //     display += "Please be sure your email is formatted correctly. ";
            // if(this.restSignUpGroup.get("password").invalid)
            //     display += "Please be sure your password is at least eight characters long and both passwords match. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    OrganizationLandingComponent.prototype.concatStringsWithSpaces = function () {
        var words = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            words[_i] = arguments[_i];
        }
        var spaceSeperatedWords = [];
        for (var _a = 0, words_1 = words; _a < words_1.length; _a++) {
            var word = words_1[_a];
            var wordsOfWords = word.split(" ");
            for (var _b = 0, wordsOfWords_1 = wordsOfWords; _b < wordsOfWords_1.length; _b++) {
                var wordOfWords = wordsOfWords_1[_b];
                spaceSeperatedWords.push(wordOfWords);
            }
        }
        var query = spaceSeperatedWords.join(" ");
        return query;
    };
    OrganizationLandingComponent.prototype.presentVerifyAddressAlert = function (places, placesIndex) {
        var _this = this;
        if (placesIndex < places.length) {
            this.alert.create({
                buttons: [
                    {
                        text: 'Yes',
                        role: 'yes',
                        handler: function () {
                            _this.finishSignUpFlow(places[placesIndex]);
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () {
                            placesIndex += 1;
                            _this.presentVerifyAddressAlert(places, placesIndex);
                        }
                    },
                ],
                title: "First...",
                message: "Verify your business address: " + places[placesIndex].formatted_address
            }).present();
        }
        else
            this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");
    };
    OrganizationLandingComponent.prototype.finishSignUpFlow = function (place) {
        var _this = this;
        var email = this.restSignUpGroup.get("email").value;
        var password = this.restSignUpGroup.get("password").value;
        var confrimPassword = this.restSignUpGroup.get("confirmPassword").value;
        var restaurantName = this.restSignUpGroup.get("name").value;
        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then(function (methods) {
                if (!methods || methods.length < 1) {
                    _this.auth.signUp(email, password).then(function () {
                        _this.auth.signIn(email, password).then(function () {
                            _this.handleRememberMe(_this.restSignUpGroup);
                            var newUser = new GSUser(_this.auth.getCurrentUserUID(), UserType.Restaurant, restaurantName);
                            var newRestaurantModel = new Restaurant(_this.auth.getCurrentUserUID(), restaurantName, place.formatted_address, "", new GSLocation(place.geometry.location));
                            newUser.restaurant = newRestaurantModel;
                            _this.currentUserService.setCurrentUser(newUser);
                            _this.restaurantService.restaurantCollection.doc(_this.auth.getCurrentUserUID()).set(newRestaurantModel.getAsPlainObject());
                            _this.userService.updateUserInDatabase(newUser);
                            //this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());
                            _this.loginService.setAppropiateView();
                        }).catch(function (reason) {
                            _this.toastService.showReadableToast("Sorry, that didn't work beacuase " + reason);
                            console.error("Sign up failed because: " + reason);
                        });
                    }).catch(function (reason) {
                        _this.toastService.showReadableToast("Sorry, that didn't work beacause " + reason);
                        console.error("Sign up failed because: " + reason);
                    });
                }
                else {
                    _this.toastService.showReadableToast("Sorry, that email is already signed up.");
                    console.error("User account already exists"); //user account already exists
                }
            }).catch(function (reason) {
                _this.toastService.showReadableToast("Sorry, that didn't work, please contact support.");
                console.error("Sign up failed because: " + reason);
            });
        }
        else {
            this.toastService.showReadableToast("Please make sure your passwords match.");
            console.error("Passwords do not match");
        }
    };
    __decorate([
        ViewChild('signUpCard'),
        __metadata("design:type", ElementRef)
    ], OrganizationLandingComponent.prototype, "signUpCard", void 0);
    OrganizationLandingComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">grabsome</div>\n    <div class="small-rest-center-text">Restaurants</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email"  formControlName="email"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Remember Me</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card #signUpCard class="sign-up-card">\n            <ion-list>\n                <form [formGroup]="restSignUpGroup">\n                    <ion-item class="padding-right">\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                    </ion-item>\n        \n                    <ion-item class="padding-right">\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Restaurant Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Address </ion-label>\n                        <ion-input formControlName="address"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>City</ion-label>\n                        <ion-input formControlName="city"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>State</ion-label>\n                        <ion-input formControlName="state"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>Zipcode</ion-label>\n                        <ion-input formControlName="zipcode"></ion-input>\n                    </ion-item>\n                </form>\n            </ion-list>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/,
            selector: 'organization-landing',
            styleUrls: ['/organization-landing.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthorizationService,
            DeviceService, LoginService,
            ToastService, AlertController, RestaurantService,
            CurrentUserService, UserService])
    ], OrganizationLandingComponent);
    return OrganizationLandingComponent;
}());
export { OrganizationLandingComponent };
//# sourceMappingURL=organization-landing.component.js.map