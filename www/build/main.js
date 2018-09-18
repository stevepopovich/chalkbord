webpackJsonp([0],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowserHomeComponent = (function () {
    function BrowserHomeComponent(viewController) {
        this.viewController = viewController;
    }
    BrowserHomeComponent.prototype.showOrganizationPortal = function () {
        this.viewController.setOrganizationPortal();
    };
    BrowserHomeComponent.prototype.contact = function () {
    };
    BrowserHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="browser-home-photo">\n\n</div>\n<div class="home-nav-bar">\n    <button class="home-nav-button" (click)="showOrganizationPortal()" ion-button>\n        <ion-icon name="restaurant"></ion-icon> Organizations\n    </button>\n    <!-- <button click="contact()" class="home-nav-button" ion-button>\n        <ion-icon name="send"></ion-icon> Contact\n    </button> -->\n</div>\n\n<div class="center-home-text">Chalkbord</div>\n\n<div class="center-about-text">\n    Chalkbord is a real time deal creation mobile and web application for restaurants and thier patrons. \n    See us on your app store!\n</div>\n\n<div class="center-about-text-lower">\n    For support and business inquries, contact us at support@chalkbord.com.\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__["a" /* ViewControllerService */]])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}());

//# sourceMappingURL=browser-home.component.js.map

/***/ }),

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types_user_login_form_group_type__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__organization_signup_organization_signup_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(247);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OrganizationLandingComponent = (function (_super) {
    __extends(OrganizationLandingComponent, _super);
    function OrganizationLandingComponent(formBuilder, loginService, rememberMeService, toastService, alert, currentUserService, userService, auth, organizationService, facebook) {
        var _this = _super.call(this, toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook) || this;
        _this.rememberMeLogIn = false;
        _this.rememberMeSignUp = false;
        _this.userLogInGroup = new __WEBPACK_IMPORTED_MODULE_7__types_user_login_form_group_type__["a" /* UserLoginFormGroup */](_this.formBuilder);
        _this.rememberMeService.loginFromRememberMe(_this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_5__types_user_type__["b" /* UserType */].Organization);
        return _this;
    }
    OrganizationLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.signUpCard.nativeElement.scrollIntoView(true);
    };
    OrganizationLandingComponent.prototype.loginHandler = function () {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_5__types_user_type__["b" /* UserType */].Organization);
        this.loginService.login(this.userLogInGroup);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('signUpCard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], OrganizationLandingComponent.prototype, "signUpCard", void 0);
    OrganizationLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">Chalkbord</div>\n    <div class="small-rest-center-text">Organizations</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email" formControlName="email"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Stay signed in</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card #signUpCard class="sign-up-card">\n        <ion-list>\n            <form [formGroup]="signUpGroup">\n                <ion-item class="padding-right">\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make\n                    sure your email is formatted correctly.</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Password</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make\n                    sure your password is at least eight characters long</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Confirm Password</ion-label>\n                    <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                </ion-item>\n                <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Organization Name</ion-label>\n                    <ion-input formControlName="name"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant\n                    name is required</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Restaurant Phone Number</ion-label>\n                    <ion-input type="number" formControlName="phoneNumber"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'phoneNumber\').errors && signUpGroup.get(\'phoneNumber\').dirty" class="error-message">Restaurant\n                    phone number is required and needs to be 10 numbers</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Restaurant Website</ion-label>\n                    <ion-input formControlName="website"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'website\').errors && signUpGroup.get(\'website\').dirty" class="error-message">Restaurant\n                    website is required and needs to be a valid website</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Address </ion-label>\n                    <ion-input formControlName="address"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address\n                    is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>City</ion-label>\n                    <ion-input formControlName="city"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City\n                    is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>State</ion-label>\n                    <ion-input formControlName="state"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State\n                    is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>Zipcode</ion-label>\n                    <ion-input formControlName="zipcode"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode\n                    is required</p>\n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Stay signed in</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/,
            selector: 'organization-landing',
            styleUrls: ['/organization-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__["a" /* RememberMeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */]])
    ], OrganizationLandingComponent);
    return OrganizationLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_12__organization_signup_organization_signup_component__["a" /* OrganizationSignupComponent */]));

//# sourceMappingURL=organization-landing.component.js.map

/***/ }),

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleIconButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleIconButtonComponent = (function () {
    function ToggleIconButtonComponent() {
        this.enabledChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToggleIconButtonComponent.prototype, "iconName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToggleIconButtonComponent.prototype, "enabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToggleIconButtonComponent.prototype, "enabledChanged", void 0);
    ToggleIconButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/toggle-icon-button/toggle-icon-button.component.html"*/''/*ion-inline-end:"/Users/Contence/locale/src/components/toggle-icon-button/toggle-icon-button.component.html"*/,
            selector: 'toggle-icon-button',
            styleUrls: ['/toggle-icon-button.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ToggleIconButtonComponent);
    return ToggleIconButtonComponent;
}());

//# sourceMappingURL=toggle-icon-button.component.js.map

/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeVertical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Class for the SwipeVertical directive (attribute (swipe) is only horizontal).

  In order to use it you must add swipe-vertical attribute to the component.
  The directives for binding functions are [swipeUp] and [swipeDown].

  IMPORTANT:
  [swipeUp] and [swipeDown] MUST be added in a component which
  already has "swipe-vertical".
*/
var SwipeVertical = (function () {
    function SwipeVertical(el) {
        this.el = el.nativeElement;
    }
    SwipeVertical.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipeup', function () {
            if (_this.actionUp)
                _this.actionUp();
        });
        this.swipeGesture.on('swipedown', function () {
            if (_this.actionDown)
                _this.actionDown();
        });
    };
    SwipeVertical.prototype.ngOnDestroy = function () {
        this.swipeGesture.destroy();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('swipeUp'),
        __metadata("design:type", Object)
    ], SwipeVertical.prototype, "actionUp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('swipeDown'),
        __metadata("design:type", Object)
    ], SwipeVertical.prototype, "actionDown", void 0);
    SwipeVertical = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[swipe-vertical]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SwipeVertical);
    return SwipeVertical;
}());

//# sourceMappingURL=swipe-listener.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserType; });
var LocaleUser = (function () {
    function LocaleUser(uid, userType, firstName) {
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
    }
    LocaleUser.prototype.getAsPlainObject = function () {
        return Object.assign({}, this);
    };
    return LocaleUser;
}());

var UserType;
(function (UserType) {
    UserType[UserType["Consumer"] = 0] = "Consumer";
    UserType[UserType["Organization"] = 1] = "Organization";
    UserType[UserType["User"] = 2] = "User"; //signifies both consumer and organization
})(UserType || (UserType = {}));
//# sourceMappingURL=user.type.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicPlatform; });
//describes what device ionic is running on
//see https://ionicframework.com/docs/api/platform/Platform/#is
var IonicPlatform;
(function (IonicPlatform) {
    IonicPlatform["Android"] = "android";
    IonicPlatform["Cordova"] = "cordova";
    IonicPlatform["Core"] = "core";
    IonicPlatform["Ios"] = "ios";
    IonicPlatform["Ipad"] = "Ipad";
    IonicPlatform["Iphone"] = "Iphone";
    IonicPlatform["Mobile"] = "Mobile";
    IonicPlatform["MobileWeb"] = "mobileweb";
    IonicPlatform["Phablet"] = "phablet";
    IonicPlatform["Tablet"] = "tablet";
    IonicPlatform["Windows"] = "windows";
})(IonicPlatform || (IonicPlatform = {}));
//# sourceMappingURL=ionic-platform.enum.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardDataService = (function () {
    function CardDataService(database) {
        this.database = database;
        this.cardDoc = this.database.collection("cards");
    }
    CardDataService.prototype.getAll = function () {
        return this.cardDoc.valueChanges();
    };
    CardDataService.prototype.get = function (id) {
        return this.database.collection("cards", function (ref) { return ref.where("id", "==", id); }).valueChanges();
    };
    CardDataService.prototype.getMulti = function (ids, getDeleted) {
        if (ids && ids.length > 0) {
            var observables = [];
            var _loop_1 = function (id) {
                if (getDeleted)
                    observables.push(this_1.database.collection("cards", function (ref) { return ref.where("id", "==", id); }).valueChanges());
                else
                    observables.push(this_1.database.collection("cards", function (ref) { return ref.where("id", "==", id).where("deleted", "==", false); }).valueChanges());
            };
            var this_1 = this;
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                _loop_1(id);
            }
            var allCardsObservableMerged = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"], observables); //so if you just pass it an array
            //you get an Observable<Observable<>> but if you add ... it passes each observable seperately giving a single observable out
            return allCardsObservableMerged;
        }
        else
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of([]);
    };
    CardDataService.prototype.setMutli = function (models) {
        var _this = this;
        var cards = models.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(card);
        });
    };
    CardDataService.prototype.set = function (model) {
        var assignedCard;
        if (model.getAsPlainObject)
            assignedCard = Object.assign({}, model.getAsPlainObject());
        else
            assignedCard = Object.assign({}, model);
        delete (assignedCard.imageURL);
        return this.cardDoc.doc(model.id).set(assignedCard);
    };
    CardDataService.prototype.delete = function (id) {
        return this.cardDoc.doc(id).delete();
    };
    //gets all cards in the collection within the radius passed
    //TODO: actaully test this, I am not sure these calculations make any sense
    CardDataService.prototype.getCardsByLatLng = function (location, radiusInKM) {
        var distanceInKMAverageBetweenLatitudes = 111.045;
        var latitudeRadiusLength = radiusInKM / distanceInKMAverageBetweenLatitudes;
        var radiusOfEarthInKM = 6371; //arguable, the earth isn't perfactable sphereical
        var bearingClockwiseFromNorthInRadians = 1.5708; //90 degrees
        var distanceOverRadius = radiusInKM / radiusOfEarthInKM;
        var newLat = Math.asin(Math.sin(location.lat) * Math.cos(distanceOverRadius) +
            Math.cos(location.lat) * Math.sin(distanceOverRadius) * Math.cos(bearingClockwiseFromNorthInRadians));
        var newLng = location.lng + Math.atan2(Math.sin(bearingClockwiseFromNorthInRadians) * Math.sin(distanceOverRadius) * Math.cos(location.lat), Math.cos(distanceOverRadius) - Math.sin(location.lat) * Math.sin(newLat)); //this is some famous calculation
        //that takes a LatLng, bearing and distance and gives you a new LatLng
        var changeInLng = Math.abs(newLng - location.lng);
        //get two different deal chains because firebase can't .where across different properties in a collection
        var latDeals = this.database.collection("cards", function (ref) { return ref.where("organization.location.lat", "<=", (location.lat + latitudeRadiusLength))
            .where("organization.location.lat", ">=", (location.lat - latitudeRadiusLength))
            .where("deleted", "==", false); })
            .valueChanges();
        var lngDeals = this.database.collection("cards", function (ref) { return ref.where("organization.location.lng", "<=", (location.lng + changeInLng))
            .where("organization.location.lng", ">=", (location.lng - changeInLng))
            .where("deleted", "==", false); })
            .valueChanges();
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].merge(latDeals, lngDeals);
    };
    CardDataService.prototype.filterNonDuplicateDeals = function (cards) {
        var filteredDeals = [];
        var _loop_2 = function (currentCard) {
            if (cards.findIndex(function (card) { return card.id == currentCard.id; }) > -1 &&
                filteredDeals.findIndex(function (card) { return card.id == currentCard.id; }) < 0)
                filteredDeals.push(currentCard);
        };
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var currentCard = cards_1[_i];
            _loop_2(currentCard);
        }
        return filteredDeals;
    };
    // Firebase helper commands that are not meant to be called in normal production
    CardDataService.prototype.setAllCardsToNotDeleted = function () {
        var _this = this;
        this.cardDoc.valueChanges().subscribe(function (cards) {
            __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.map(cards, function (card) {
                card.deleted = false;
                _this.set(card);
            });
        });
    };
    CardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CardDataService);
    return CardDataService;
}());

//# sourceMappingURL=card-data.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganizationService = (function () {
    function OrganizationService(database) {
        this.database = database;
        this.organizationCollection = this.database.collection("organizations");
    }
    OrganizationService.prototype.getCurrent = function (uid) {
        return this.database.collection("organizations", function (ref) { return ref.where("uid", "==", uid); }).valueChanges();
    };
    OrganizationService.prototype.set = function (model) {
        return this.organizationCollection.doc(model.uid).set(model.getAsPlainObject());
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OrganizationService);
    return OrganizationService;
}());

//# sourceMappingURL=organization-service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* unused harmony export EmailPasswordTuple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceService = (function () {
    function DeviceService(uniqueDeviceID, storage, platform) {
        var _this = this;
        this.uniqueDeviceID = uniqueDeviceID;
        this.storage = storage;
        this.platform = platform;
        if (this.platform.is(__WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__["a" /* IonicPlatform */].Cordova)) {
            this.uniqueDeviceID.get().then(function (id) {
                _this.deviceId = id;
            });
        }
    }
    DeviceService.prototype.putUserEmailPasswordToLocalStorage = function (key, email, password) {
        this.storage.set(key, new EmailPasswordTuple(email, password));
    };
    DeviceService.prototype.putBooleanSetting = function (key, setting) {
        return this.storage.set(key, setting);
    };
    DeviceService.prototype.getSetting = function (key) {
        return this.storage.get(key);
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */]])
    ], DeviceService);
    return DeviceService;
}());

var EmailPasswordTuple = (function () {
    function EmailPasswordTuple(email, password) {
        this.email = email;
        this.password = password;
    }
    return EmailPasswordTuple;
}());

//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_firestore_collection_user_service__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        if (this.currentUserService.getCurrentUser().userType == __WEBPACK_IMPORTED_MODULE_4__types_user_type__["b" /* UserType */].Organization)
            this.viewControllerService.setOrganizationHome();
        else
            this.viewControllerService.setConsumerView();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3__firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_0__current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_5__view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_6__firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageService = (function () {
    function ImageService(storage) {
        this.storage = storage;
    }
    ImageService.prototype.setDealImageURL = function (dealModel) {
        this.storage.ref("locale-deal-photos/" + dealModel.id).getDownloadURL().subscribe(function (URL) {
            dealModel.imageURL = URL;
        });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], ImageService);
    return ImageService;
}());

//# sourceMappingURL=image-service.service.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuilderHelper; });
/* unused harmony export MomentHelper */
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

var FormBuilderHelper = (function () {
    function FormBuilderHelper() {
    }
    /**
    * Marks all controls in a form group as touched
    * @param formGroup - The group to caress..hah
    *
    * https://stackoverflow.com/a/44150793
    */
    FormBuilderHelper.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            control.markAsDirty();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    FormBuilderHelper.markFormGroupUntouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsPristine();
            control.markAsUntouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    return FormBuilderHelper;
}());

var MomentHelper = (function () {
    function MomentHelper() {
    }
    return MomentHelper;
}());

//# sourceMappingURL=utils.type.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleLocation; });
var LocaleLocation = (function () {
    function LocaleLocation(googleLocation) {
        if (googleLocation) {
            this.lat = googleLocation.lat();
            this.lng = googleLocation.lng();
        }
    }
    LocaleLocation.prototype.getAsPlainObject = function () {
        return Object.assign({}, this);
    };
    return LocaleLocation;
}());

//# sourceMappingURL=location.type.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberMeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_keys_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RememberMeService = (function () {
    function RememberMeService(deviceService, loginService) {
        this.deviceService = deviceService;
        this.loginService = loginService;
        this.loginService;
    }
    RememberMeService.prototype.loginFromRememberMe = function (formGroup, userType) {
        var _this = this;
        var keys = this.setKeys(userType);
        this.deviceService.getSetting(keys.deviceKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getSetting(keys.tupleKey).then(function (emailPasswordTup) {
                    if (emailPasswordTup) {
                        formGroup.get("email").setValue(emailPasswordTup.email);
                        formGroup.get("password").setValue(emailPasswordTup.password);
                        _this.loginService.login(formGroup);
                    }
                });
            }
        });
    };
    RememberMeService.prototype.handleRememberMeSetting = function (formGroup, userType) {
        var rememberMe = formGroup.get("rememberMe").value;
        var keys = this.setKeys(userType);
        this.deviceService.putBooleanSetting(keys.deviceKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(keys.tupleKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    RememberMeService.prototype.setKeys = function (userType) {
        if (userType == __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Organization)
            return { deviceKey: __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeys */].rememberMeRestKey, tupleKey: __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeys */].restEmailPasswordComboKey };
        else if (userType == __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Consumer)
            return { deviceKey: __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, tupleKey: __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeys */].userEmailPasswordComboKey };
    };
    RememberMeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], RememberMeService);
    return RememberMeService;
}());

//# sourceMappingURL=remember-me.service.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginKeys; });
var LoginKeys = (function () {
    function LoginKeys() {
    }
    LoginKeys.rememberMeUserKey = "rememberMeUser"; //dont change this unless you want to change the other one is user-signup
    LoginKeys.rememberMeRestKey = "rememberMeRest"; //this either
    LoginKeys.userEmailPasswordComboKey = "userEmailCombo";
    LoginKeys.restEmailPasswordComboKey = "restEmailCombo";
    return LoginKeys;
}());

//# sourceMappingURL=login-keys.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DealEditorService = (function () {
    function DealEditorService() {
        this.currentDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.deleteDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.addDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.updateDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    DealEditorService.prototype.setCurrentDeal = function (deal) {
        this.currentDealBeingEdited = deal;
        this.currentDealSubject.next(deal);
    };
    DealEditorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DealEditorService);
    return DealEditorService;
}());

//# sourceMappingURL=deal-editing.service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreCardInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_launch_navigator__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MoreCardInfoComponent = (function () {
    function MoreCardInfoComponent(navParams, ionicViewController, callNumber, launchNavigator, currentUserService, userService) {
        this.navParams = navParams;
        this.ionicViewController = ionicViewController;
        this.callNumber = callNumber;
        this.launchNavigator = launchNavigator;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.card = this.navParams.get("card");
        this.isCardList = this.navParams.get("isCardList");
        this.dealType = __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealType */][this.card.dealType.valueOf()];
    }
    MoreCardInfoComponent.prototype.goToWebsite = function () {
        if (this.card.organization.website.startsWith("http"))
            window.open(this.card.organization.website, '_system');
        else
            window.open("http://" + this.card.organization.website, '_system');
    };
    MoreCardInfoComponent.prototype.goToLocation = function () {
        this.launchNavigator.navigate(this.card.organization.address);
    };
    MoreCardInfoComponent.prototype.callPhoneNumber = function () {
        this.callNumber.callNumber(this.card.organization.phoneNumber.toString(), true);
    };
    MoreCardInfoComponent.prototype.getMomentFormatted = function (dateTime, format) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(dateTime).format(format);
    };
    MoreCardInfoComponent.prototype.getPhoneFormatted = function (phoneNumber) {
        var areaCode = phoneNumber.toString().substring(0, 3);
        var firstThree = phoneNumber.toString().substring(3, 6);
        var lastFour = phoneNumber.toString().substring(6, 10);
        return "(" + areaCode + ")" + firstThree + "-" + lastFour;
    };
    MoreCardInfoComponent.prototype.getDealTypeIcon = function () {
        if (this.card.dealType == __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealType */].Drinks)
            return "beer";
        else if (this.card.dealType == __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealType */].Food)
            return "pizza";
    };
    MoreCardInfoComponent.prototype.swipeGesture = function () {
        this.ionicViewController.dismiss();
    };
    MoreCardInfoComponent.prototype.claim = function () {
        this.currentUserService.addClaimedId(this.card.id);
        this.userService.set(this.currentUserService.getCurrentUser());
    };
    MoreCardInfoComponent.prototype.canClaim = function () {
        return !__WEBPACK_IMPORTED_MODULE_7_underscore___default.a.contains(this.currentUserService.getCurrentUser().claimedCards, this.card.id);
    };
    MoreCardInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/'<ion-header>\n    <modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n</ion-header>\n<ion-content>\n    <button *ngIf="getDealTypeIcon() != null" class="top-right-icon" color="black" ion-button icon-only round>\n        <ion-icon name="{{getDealTypeIcon()}}">\n        </ion-icon>\n    </button>\n\n    <img *ngIf="card" class="present-card-image fill" src="{{card.imageURL}}" />\n    <div text-wrap style="padding-right: 16px;">\n        <ion-item>\n            <h1 class="app-text">{{card.organization.name}} </h1>\n            <p (click)="goToLocation()" class="address-text app-text">\n                <ion-icon class="icon-margin" name="navigate"></ion-icon> {{card.organization.address}}\n            </p>\n            <p *ngIf="card.organization.website" (click)="goToWebsite()" class="clickable-text app-text">\n                <ion-icon class="icon-margin" name="globe"></ion-icon> {{card.organization.website}}\n            </p>\n            <p *ngIf="card.organization.phoneNumber" (click)="callPhoneNumber()" class="phone-text app-text">\n                <ion-icon class="icon-margin" name="call"></ion-icon>\n                {{getPhoneFormatted(card.organization.phoneNumber)}}\n            </p>\n        </ion-item>\n        <ion-item>\n            <h2>{{card.dealDescription}}\n            </h2>\n            <p>{{getMomentFormatted(card.dealStart, "MMMM Do, YYYY")}}</p>\n            <p>{{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-item>\n        <ion-item *ngIf="card.numberOfDeals > 0">\n            <h2 class="app-text red-text">There are only {{card.numberOfDeals}} cards available for this\n                deal!</h2>\n        </ion-item>\n        <ion-item *ngIf="card.longDealDescrption">\n            {{card.longDealDescrption}}\n        </ion-item>\n        <ion-item *ngIf="card.isVegan || card.isVegetarian">\n            <button *ngIf="card.isVegan" class="deal-type-icon" color="black" ion-button icon-only round>\n                Vegan\n                <ion-icon name="leaf">\n                </ion-icon>\n            </button>\n            <button *ngIf="card.isVegetarian" class="deal-type-icon" color="black" ion-button icon-only round>\n                Vegetarian\n                <ion-icon name="nutrition">\n                </ion-icon>\n            </button>\n        </ion-item>\n    </div>\n    <button *ngIf="isCardList" [disabled]="!canClaim()" class="claim-button" ion-button (click)="claim()">\n        <div *ngIf="canClaim()">claim</div>\n        <div *ngIf="!canClaim()">claimed</div>\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/,
            selector: 'more-card-info',
            styleUrls: ['/more-card-info.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_6__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], MoreCardInfoComponent);
    return MoreCardInfoComponent;
}());

//# sourceMappingURL=more-card-info.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 299;

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 360;

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_organization_type__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_location_type__ = __webpack_require__(242);





var OrganizationSignupComponent = (function () {
    function OrganizationSignupComponent(toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook) {
        this.toastService = toastService;
        this.alert = alert;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.organizationService = organizationService;
        this.loginService = loginService;
        this.rememberMeService = rememberMeService;
        this.facebook = facebook;
        this.signUpGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(8)])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)])],
            website: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.URLValidator])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])],
            rememberMe: ['']
        });
    }
    OrganizationSignupComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
    OrganizationSignupComponent.prototype.passwordsMatch = function () {
        if (this.signUpGroup.get("password").dirty
            && this.signUpGroup.get("confirmPassword").dirty)
            return this.signUpGroup.get("password").value === this.signUpGroup.get("confirmPassword").value;
        else
            return true;
    };
    OrganizationSignupComponent.prototype.signUp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0__types_utils_type__["a" /* FormBuilderHelper */].markFormGroupTouched(this.signUpGroup);
        if (this.signUpGroup.valid && this.passwordsMatch()) {
            var address = this.signUpGroup.get("address").value;
            var city = this.signUpGroup.get("city").value;
            var state = this.signUpGroup.get("state").value;
            var zipcode = this.signUpGroup.get("zipcode").value;
            var googleMapsPlacesService = new google.maps.places.PlacesService(this.map);
            var textSearchRequest = {
                query: this.concatStringsWithSpaces(address, city, state, zipcode)
            };
            googleMapsPlacesService.textSearch(textSearchRequest, function (results) {
                if (results.length < 0) {
                    _this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");
                    console.error("Address not found");
                }
                else
                    _this.presentVerifyAddressAlert(results, 0);
            });
        }
    };
    OrganizationSignupComponent.prototype.concatStringsWithSpaces = function () {
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
    OrganizationSignupComponent.prototype.presentVerifyAddressAlert = function (places, placesIndex) {
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
    OrganizationSignupComponent.prototype.finishSignUpFlow = function (place) {
        var _this = this;
        var email = this.signUpGroup.get("email").value;
        var password = this.signUpGroup.get("password").value;
        var confrimPassword = this.signUpGroup.get("confirmPassword").value;
        var organizationName = this.signUpGroup.get("name").value;
        var phoneNumber = this.signUpGroup.get("phoneNumber").value;
        var website = this.signUpGroup.get("website").value;
        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then(function (methods) {
                if (!methods || methods.length < 1) {
                    _this.auth.signUp(email, password).then(function () {
                        _this.auth.signIn(email, password).then(function () {
                            _this.rememberMeService.handleRememberMeSetting(_this.signUpGroup, __WEBPACK_IMPORTED_MODULE_2__types_user_type__["b" /* UserType */].Organization);
                            var newUser = new __WEBPACK_IMPORTED_MODULE_2__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), __WEBPACK_IMPORTED_MODULE_2__types_user_type__["b" /* UserType */].Organization, organizationName);
                            var newOrganziationModel = new __WEBPACK_IMPORTED_MODULE_3__types_organization_type__["a" /* Organization */](_this.auth.getCurrentUserUID(), organizationName, place.formatted_address, phoneNumber, website, "", new __WEBPACK_IMPORTED_MODULE_4__types_location_type__["a" /* LocaleLocation */](place.geometry.location));
                            _this.currentUserService.setCurrentUser(newUser);
                            _this.organizationService.set(newOrganziationModel);
                            _this.userService.set(newUser);
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
    };
    OrganizationSignupComponent.prototype.URLValidator = function (control) {
        var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        return regexp.test(control.value) ? null : {
            'invalidUrl': {
                valid: false
            }
        };
    };
    return OrganizationSignupComponent;
}());

//# sourceMappingURL=organization-signup.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organization; });
var Organization = (function () {
    function Organization(uid, name, address, phoneNumber, website, imageSource, location) {
        this.uid = uid;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.imageSource = imageSource;
        this.location = location;
    }
    Organization.prototype.getAsPlainObject = function () {
        this.location = Object.assign({}, this.location);
        return Object.assign({}, this);
    };
    return Organization;
}());

//# sourceMappingURL=organization.type.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remember_me_form_group_type__ = __webpack_require__(954);
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


var UserLoginFormGroup = (function (_super) {
    __extends(UserLoginFormGroup, _super);
    function UserLoginFormGroup(formBuilder) {
        var _this = _super.call(this, formBuilder) || this;
        _this.addControl('email', _this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required])));
        _this.addControl('password', _this.formBuilder.control('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].maxLength(64)])));
        return _this;
    }
    return UserLoginFormGroup;
}(__WEBPACK_IMPORTED_MODULE_1__remember_me_form_group_type__["a" /* RememberMeFormGroup */]));

//# sourceMappingURL=user-login-form-group.type.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_deal_editing_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enums_ionic_screen_sizes_enum__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var DealEditorComponent = (function () {
    function DealEditorComponent(cardService, formBuilder, uploader, dealEditorService, userService, toastService, platform, actionSheetCtrl, imageService, currentUserService, cameraService, loadingController) {
        var _this = this;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.dealEditorService = dealEditorService;
        this.userService = userService;
        this.toastService = toastService;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imageService = imageService;
        this.currentUserService = currentUserService;
        this.cameraService = cameraService;
        this.loadingController = loadingController;
        this.limitDealNumber = false;
        this.isVegetarian = false;
        this.isVegan = false;
        this.fileReader = new FileReader();
        this.saving = false;
        this.now = __WEBPACK_IMPORTED_MODULE_15_moment__().toISOString();
        this.max = __WEBPACK_IMPORTED_MODULE_15_moment__().year(__WEBPACK_IMPORTED_MODULE_15_moment__().year() + 4).toISOString();
        this.dealEditorFormGroup = this.formBuilder.group({
            dealDescription: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            longDealDescription: [''],
            numberOfDeals: [''],
            limitedDealNumber: [''],
            dealDay: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            dealStart: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            dealEnd: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            dealType: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            isVegetarian: [''],
            isVegan: ['']
        });
        this.previewCard = __WEBPACK_IMPORTED_MODULE_4__types_deals_type__["b" /* LocaleCard */].getBlankCard();
        this.dealEditorFormGroup.valueChanges.subscribe(function () {
            if (_this.currentOrganization) {
                _this.previewCard.dealDescription = _this.dealEditorFormGroup.get("dealDescription").value || "";
                _this.previewCard.organization = _this.currentOrganization;
                var startDate = _this.dealEditorFormGroup.get("dealDay").value;
                var startTime = _this.dealEditorFormGroup.get("dealStart").value;
                var endTime = _this.dealEditorFormGroup.get("dealEnd").value;
                if (startDate) {
                    _this.previewCard.dealStart = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + startTime).toObject();
                    _this.previewCard.dealEnd = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + endTime).toObject();
                }
            }
        });
        this.currentUserService.getCurrentOrganization().subscribe(function (orgs) {
            if (orgs && orgs.length > 0)
                _this.currentOrganization = orgs[0];
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.clearFields();
            _this.setCurrentCardBeingEdited(deal);
        });
        this.platform.ready().then(function () {
            _this.platformReady = true;
        });
        this.fileReader.onloadend = function () {
            _this.imageDataForPreview = _this.fileReader.result;
        };
    }
    DealEditorComponent.prototype.setImageData = function (event) {
        this.imageDataForUploadDesktop = event.srcElement.files[0];
        this.fileReader.readAsDataURL(this.imageDataForUploadDesktop);
    };
    DealEditorComponent.prototype.delete = function () {
        this.dealEditorService.currentDealBeingEdited.deleted = true;
        this.cardService.set(this.dealEditorService.currentDealBeingEdited);
        this.dealEditorService.deleteDealSubject.next(this.dealEditorService.currentDealBeingEdited);
        this.dealEditorService.currentDealBeingEdited = null;
        this.dealEditorService.currentDealSubject.next();
        this.imageDataForPreview = null;
        this.imageDataForUploadDesktop = null;
        this.imageDataForUploadMobile = null;
    };
    DealEditorComponent.prototype.add = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__types_utils_type__["a" /* FormBuilderHelper */].markFormGroupTouched(this.dealEditorFormGroup);
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.imageDataForUploadDesktop) {
            if (this.dealEditorFormGroup.valid) {
                if (this.vaildateDealEnd()) {
                    var deal_1 = this.getDealFromFields();
                    deal_1.organization = this.currentOrganization;
                    var loadingPopover_1 = this.loadingController.create({
                        content: 'Saving your deal...'
                    });
                    loadingPopover_1.present();
                    Promise.all([this.cardService.set(deal_1),
                        this.currentUserService.addCardId(deal_1.id),
                        this.userService.set(this.currentUserService.getCurrentUser()),
                        this.uploader.uploadDealBlobPhoto(this.imageDataForUploadDesktop, deal_1.id, false)]).then(function () {
                        _this.cleanUpImageData();
                        _this.clearFields();
                        //basically done; assuming the below promises resolve faster set state to saved
                        _this.dealEditorService.addDealSubject.next(deal_1); //add to list and make currents
                        loadingPopover_1.dismiss();
                    }).catch(function (error) {
                        _this.toastService.showReadableToast("There was an error " + error);
                    });
                }
                else
                    this.toastService.showReadableToast("The deal end must be after the deal start");
            }
        }
        else if (this.imageDataForUploadMobile) {
            if (this.dealEditorFormGroup.valid) {
                if (this.vaildateDealEnd()) {
                    var deal_2 = this.getDealFromFields();
                    deal_2.organization = this.currentOrganization;
                    var loadingPopover_2 = this.loadingController.create({
                        content: 'Saving your deal...'
                    });
                    loadingPopover_2.present();
                    Promise.all([this.cardService.set(deal_2),
                        this.currentUserService.addCardId(deal_2.id),
                        this.userService.set(this.currentUserService.getCurrentUser()),
                        this.uploader.uploadDealBase64Photo(this.imageDataForUploadMobile, deal_2.id, false)]).then(function () {
                        _this.cleanUpImageData();
                        _this.clearFields();
                        //basically done; assuming the below promises resolve faster set state to saved
                        _this.dealEditorService.addDealSubject.next(deal_2); //add to list and make currents
                        loadingPopover_2.dismiss();
                    }).catch(function (error) {
                        _this.toastService.showReadableToast("There was an error " + error);
                    });
                }
                else
                    this.toastService.showReadableToast("The deal end must be after the deal start");
            }
        }
        else
            this.toastService.showReadableToast("Please add a photo for this deal!");
    };
    DealEditorComponent.prototype.save = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__types_utils_type__["a" /* FormBuilderHelper */].markFormGroupTouched(this.dealEditorFormGroup);
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.dealEditorFormGroup.valid && this.cardIsEdited()) {
            var deal = this.getDealFromFields();
            deal.id = this.dealEditorService.currentDealBeingEdited.id;
            var loadingPopover_3 = this.loadingController.create({
                spinner: 'dots',
                content: 'Saving your deal...'
            });
            loadingPopover_3.present();
            if (this.imageDataForUploadDesktop) {
                Promise.all([this.uploader.uploadDealBlobPhoto(this.imageDataForUploadDesktop, deal.id, true),
                    this.cardService.set(deal)])
                    .then(function () {
                    _this.cleanUpImageData();
                    _this.imageService.setDealImageURL(_this.dealEditorService.currentDealBeingEdited);
                    _this.dealEditorService.updateDealSubject.next(deal);
                    loadingPopover_3.dismiss();
                });
            }
            else if (this.imageDataForUploadMobile) {
                Promise.all([this.uploader.uploadDealBase64Photo(this.imageDataForUploadMobile, deal.id, true),
                    this.cardService.set(deal)])
                    .then(function () {
                    _this.cleanUpImageData();
                    _this.imageService.setDealImageURL(_this.dealEditorService.currentDealBeingEdited);
                    _this.dealEditorService.updateDealSubject.next(deal);
                    loadingPopover_3.dismiss();
                });
            }
            else {
                this.cardService.set(deal)
                    .then(function () {
                    _this.cleanUpImageData();
                    _this.imageService.setDealImageURL(_this.dealEditorService.currentDealBeingEdited);
                    _this.dealEditorService.updateDealSubject.next(deal);
                    loadingPopover_3.dismiss();
                });
            }
            this.uneditedDeal = deal;
        }
    };
    DealEditorComponent.prototype.setCurrentCardBeingEdited = function (deal) {
        var _this = this;
        if (deal) {
            this.uneditedDeal = Object.assign({}, deal);
            this.editingDeal = true;
            Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
                if (key != "dealDay" && key != "dealStart" && key != "dealEnd")
                    _this.dealEditorFormGroup.get(key).setValue(deal[key]);
            });
            this.dealEditorFormGroup.get("dealDay").setValue(__WEBPACK_IMPORTED_MODULE_15_moment__(deal.dealStart).format('YYYY-MM-DD'));
            this.dealEditorFormGroup.get("dealStart").setValue(__WEBPACK_IMPORTED_MODULE_15_moment__(deal.dealStart).format('HH:mm'));
            this.dealEditorFormGroup.get("dealEnd").setValue(__WEBPACK_IMPORTED_MODULE_15_moment__(deal.dealEnd).format('HH:mm'));
            this.dealEditorFormGroup.get("limitedDealNumber").setValue(deal.numberOfDeals > 0);
            this.previewCard.imageURL = undefined;
            this.previewCard.id = deal.id;
            this.imageService.setDealImageURL(this.previewCard);
        }
        else
            this.clearFields();
    };
    DealEditorComponent.prototype.cancel = function () {
        this.dealEditorService.setCurrentDeal(null);
        this.clearFields();
    };
    DealEditorComponent.prototype.clearFields = function () {
        var _this = this;
        this.uneditedDeal = null;
        this.editingDeal = false;
        this.previewCard = __WEBPACK_IMPORTED_MODULE_4__types_deals_type__["b" /* LocaleCard */].getBlankCard();
        this.cleanUpImageData();
        Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
            _this.dealEditorFormGroup.get(key).setValue(null);
        });
        __WEBPACK_IMPORTED_MODULE_1__types_utils_type__["a" /* FormBuilderHelper */].markFormGroupUntouched(this.dealEditorFormGroup);
    };
    DealEditorComponent.prototype.getDealFromFields = function () {
        var startDate = this.dealEditorFormGroup.get("dealDay").value;
        var startTime = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + this.dealEditorFormGroup.get("dealStart").value);
        var endTime = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + this.dealEditorFormGroup.get("dealEnd").value);
        var deal;
        if (!this.limitDealNumber) {
            deal = new __WEBPACK_IMPORTED_MODULE_4__types_deals_type__["b" /* LocaleCard */](this.dealEditorFormGroup.get("dealDescription").value, this.dealEditorFormGroup.get("longDealDescription").value || "", startTime.toObject(), endTime.toObject(), -1, //no deal limit
            this.dealEditorFormGroup.get("dealType").value, this.dealEditorFormGroup.get("isVegetarian").value, this.dealEditorFormGroup.get("isVegan").value, false);
            deal.organization = this.currentOrganization;
        }
        else {
            deal = new __WEBPACK_IMPORTED_MODULE_4__types_deals_type__["b" /* LocaleCard */](this.dealEditorFormGroup.get("dealDescription").value, this.dealEditorFormGroup.get("longDealDescription").value || "", startTime.toObject(), endTime.toObject(), this.dealEditorFormGroup.get("numberOfDeals").value, this.dealEditorFormGroup.get("dealType").value, this.dealEditorFormGroup.get("isVegetarian").value, this.dealEditorFormGroup.get("isVegan").value, false);
            deal.organization = this.currentOrganization;
        }
        return deal;
    };
    DealEditorComponent.prototype.getDeviceIsSmall = function () {
        if (this.platformReady)
            return this.platform.width() < __WEBPACK_IMPORTED_MODULE_9__enums_ionic_screen_sizes_enum__["a" /* IonicScreenSize */].Lg;
    };
    DealEditorComponent.prototype.editPhotoData = function () {
        var _this = this;
        if (this.isDesktop()) {
            this.uploadDesktopImage();
        }
        else {
            this.actionSheetCtrl.create({
                title: 'Upload type',
                buttons: [
                    {
                        text: 'Camera',
                        icon: !this.platform.is('ios') ? 'camera' : null,
                        handler: function () {
                            _this.cameraUpload(__WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["b" /* PictureSourceType */].CAMERA);
                        }
                    }, {
                        text: 'Photo Library',
                        icon: !this.platform.is('ios') ? 'images' : null,
                        handler: function () {
                            _this.cameraUpload(__WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["b" /* PictureSourceType */].PHOTOLIBRARY);
                        }
                    },
                ]
            }).present();
        }
    };
    DealEditorComponent.prototype.cameraUpload = function (sourceType) {
        var _this = this;
        var options = {
            quality: 25,
            sourceType: sourceType,
            destinationType: this.cameraService.DestinationType.DATA_URL,
            encodingType: this.cameraService.EncodingType.JPEG,
            mediaType: this.cameraService.MediaType.PICTURE,
            saveToPhotoAlbum: false,
            allowEdit: true,
        };
        this.cameraService.getPicture(options).then(function (photoData) {
            _this.imageDataForPreview = 'data:image/jpeg;base64,' + photoData;
            _this.imageDataForUploadMobile = photoData;
        });
    };
    DealEditorComponent.prototype.isDesktop = function () {
        return this.platform.is(__WEBPACK_IMPORTED_MODULE_10__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core);
    };
    DealEditorComponent.prototype.uploadDesktopImage = function () {
        this.hiddenFileInput.nativeElement.click();
    };
    DealEditorComponent.prototype.cardIsEdited = function () {
        return !__WEBPACK_IMPORTED_MODULE_4__types_deals_type__["b" /* LocaleCard */].cardsAreLogicallyEqual(this.getDealFromFields(), this.uneditedDeal) || this.imageDataForUploadDesktop || this.imageDataForUploadMobile;
    };
    DealEditorComponent.prototype.cleanUpImageData = function () {
        this.imageDataForPreview = null;
        this.imageDataForUploadDesktop = null;
        this.imageDataForUploadMobile = null;
        this.fileReader.abort();
    };
    DealEditorComponent.prototype.vaildateDealEnd = function () {
        var dealStart = this.dealEditorFormGroup.get("dealStart").value;
        var dealEndValue = this.dealEditorFormGroup.get("dealEnd").value;
        if (dealStart && dealEndValue) {
            var startDate = this.dealEditorFormGroup.get("dealDay").value;
            var parsedDealStart = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + this.dealEditorFormGroup.get("dealStart").value);
            var parsedDealEnd = __WEBPACK_IMPORTED_MODULE_15_moment__(startDate + " " + this.dealEditorFormGroup.get("dealEnd").value);
            return parsedDealStart.isBefore(parsedDealEnd);
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('hiddenFileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], DealEditorComponent.prototype, "hiddenFileInput", void 0);
    DealEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button style="color: white;" ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big" style="text-align: right;">Chalkbord Organizations</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <ion-col col-12 col-sm-6 style="padding: 0px;">\n                        <ion-item>\n                            <ion-label floating>Deal description</ion-label>\n                            <ion-input formControlName="dealDescription"></ion-input>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDescription\').errors && dealEditorFormGroup.get(\'dealDescription\').dirty" class="error-message">Deal description is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Long deal description</ion-label>\n                            <ion-textarea formControlName="longDealDescription"></ion-textarea>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Deal date</ion-label>\n                            <ion-datetime displayFormat="MMMM DD, YYYY" min="{{now}}" max="{{max}}" formControlName="dealDay"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDay\').errors && dealEditorFormGroup.get(\'dealDay\').dirty" class="error-message">Deal date is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Start time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealStart\').errors && dealEditorFormGroup.get(\'dealStart\').dirty" class="error-message">Deal start time is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>End time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealEnd\').errors && dealEditorFormGroup.get(\'dealEnd\').dirty" class="error-message">Deal end time is required.</p>\n\n                        <!-- <ion-item>\n                            <ion-label>Limited deal number</ion-label>\n                            <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item *ngIf="limitDealNumber">\n                            <ion-label floating>Deal Number</ion-label>\n                            <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n                        </ion-item> -->\n\n                        <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                            Deal Type\n                            <ion-item>\n                                <ion-label>Drinks</ion-label>\n                                <ion-radio value="0"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Food</ion-label>\n                                <ion-radio value="1"></ion-radio>\n                            </ion-item>\n                            <!-- <ion-item>\n                                <ion-label>Both</ion-label>\n                                <ion-radio value="2"></ion-radio>\n                            </ion-item> -->\n                        </ion-list>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealType\').errors && dealEditorFormGroup.get(\'dealType\').dirty" class="error-message">Deal type is required.</p>\n\n                        <ion-item>\n                            <ion-label>Deal is vegetarian</ion-label>\n                            <ion-checkbox formControlName="isVegetarian" [(ngModel)]="isVegetarian" checked="false"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Deal is vegan</ion-label>\n                            <ion-checkbox formControlName="isVegan" [(ngModel)]="isVegan" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col (click)="editPhotoData()" style="padding: 0px; min-width: 285px; min-height: 450px;">\n                        <gs-card [card]="previewCard" [imageSrc]="imageDataForPreview"></gs-card>\n                        <div *ngIf="uneditedDeal" class="editing-status">\n                            <ion-badge>\n                                <div *ngIf="!cardIsEdited()" style="color: green">Deal saved</div>\n                                <div *ngIf="cardIsEdited()" style="color: yellow">Your changes are unsaved</div>\n                            </ion-badge>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </form>\n    </ion-list>\n\n    <div class="button-group center-content">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="delete()">\n            Delete\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n\n<input #hiddenFileInput type="file" (change)="setImageData($event)" accept="image/*" style="visibility: hidden;" />'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_7__services_deal_editing_service__["a" /* DealEditorService */], __WEBPACK_IMPORTED_MODULE_13__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* LoadingController */]])
    ], DealEditorComponent);
    return DealEditorComponent;
}());

//# sourceMappingURL=deal-editor.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_firestore_collection_organization_service__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentUserService = (function () {
    function CurrentUserService(cardService, organizationService) {
        this.cardService = cardService;
        this.organizationService = organizationService;
    }
    CurrentUserService.prototype.setCurrentUser = function (user) {
        if (user != null)
            this.currentUser = user;
    };
    CurrentUserService.prototype.getCurrentUser = function () {
        return Object.assign({}, this.currentUser);
    };
    CurrentUserService.prototype.getNotDeletedCards = function () {
        return this.cardService.getMulti(this.currentUser.cardIds, false);
    };
    CurrentUserService.prototype.getAllCards = function () {
        return this.cardService.getMulti(this.currentUser.cardIds, true);
    };
    CurrentUserService.prototype.hasCurrentUser = function () {
        return this.currentUser != null;
    };
    CurrentUserService.prototype.removeCurrentUser = function () {
        this.currentUser = null;
    };
    CurrentUserService.prototype.addCardId = function (cardId) {
        if (this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];
        this.currentUser.cardIds.push(cardId);
    };
    CurrentUserService.prototype.addClaimedId = function (cardId) {
        if (this.currentUser.claimedCards == null)
            this.currentUser.claimedCards = [];
        this.currentUser.claimedCards.push(cardId);
    };
    CurrentUserService.prototype.getCurrentOrganization = function () {
        return this.organizationService.getCurrent(this.currentUser.uid);
    };
    CurrentUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_2__firebase_firestore_collection_organization_service__["a" /* OrganizationService */]])
    ], CurrentUserService);
    return CurrentUserService;
}());

//# sourceMappingURL=current-user.service.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = (function () {
    function UploadService(storage) {
        this.storage = storage;
    }
    UploadService.prototype.uploadDealBlobPhoto = function (imageData, fileName, updatePicture) {
        if (updatePicture && this.storage.ref("/locale-deal-photos/" + fileName))
            this.storage.ref("/locale-deal-photos/" + fileName);
        return this.storage.upload("/locale-deal-photos/" + fileName, imageData);
    };
    UploadService.prototype.uploadDealBase64Photo = function (imageData, fileName, updatePicture) {
        if (updatePicture && this.storage.ref("/locale-deal-photos/" + fileName))
            this.storage.ref("/locale-deal-photos/" + fileName);
        return this.storage.ref("/locale-deal-photos/" + fileName).putString(imageData, 'base64');
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=uploader.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.showReadableToast = function (message) {
        var wordTime = this.calculateReadTime(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom"
        });
        toast.present();
    };
    ToastService.prototype.showReadableAndAnswerableOkayToast = function (message) {
        var wordTime = this.calculateReadTime(message);
        wordTime *= 2;
        var toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom",
            showCloseButton: true,
            closeButtonText: "OK"
        });
        return toast;
    };
    ToastService.prototype.calculateReadTime = function (message) {
        var wordCount = message.split(" ").length;
        var wordsPerMinute = 210; //resonable words per minute someone can read on a computer
        var wordTime = ((wordCount / wordsPerMinute) *
            (60 * 1000)) +
            1500; //delay to see the notification toast;
        return wordTime;
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDealComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterDealComponent = (function () {
    function FilterDealComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.boolValues = {
            vegetarian: false,
            vegan: false,
            food: false,
            drink: false,
            meal: false
        };
        var appliedFilterOptions = this.navParams.data;
        console.log(this.navParams.data);
        this.setDealType(appliedFilterOptions.dealTypes);
        this.boolValues.vegetarian = appliedFilterOptions.onlyVegetarian;
        this.boolValues.vegan = appliedFilterOptions.onlyVegan;
    }
    FilterDealComponent.prototype.applyFilters = function () {
        var returnData = {
            onlyVegetarian: this.boolValues.vegetarian,
            onlyVegan: this.boolValues.vegan,
            dealTypes: this.getDealTypesValue()
        };
        this.viewCtrl.dismiss(returnData);
    };
    FilterDealComponent.prototype.toggle = function (boolName) {
        this.boolValues[boolName] = !this.boolValues[boolName];
    };
    FilterDealComponent.prototype.getColor = function (boolName) {
        return this.boolValues[boolName] ? "black" : "light-grey";
    };
    FilterDealComponent.prototype.getDealTypesValue = function () {
        var dealTypes = [];
        if (this.boolValues.drink)
            dealTypes.push(__WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Drinks);
        if (this.boolValues.food)
            dealTypes.push(__WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Food);
        if (this.boolValues.meal)
            dealTypes.push(__WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Meal);
        return dealTypes;
    };
    FilterDealComponent.prototype.setDealType = function (dealTypes) {
        var _this = this;
        dealTypes.forEach(function (dealType) {
            switch (dealType) {
                case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Meal: {
                    _this.boolValues.meal = true;
                    break;
                }
                case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Drinks: {
                    _this.boolValues.drink = true;
                    break;
                }
                case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Food: {
                    _this.boolValues.food = true;
                    break;
                }
            }
        });
    };
    FilterDealComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="title">I am looking for...</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Drinks</div>\n        <button (click)="toggle(\'drink\')" outline ion-button icon-only round>\n          <ion-icon name="beer" color="{{getColor(\'drink\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Food</div>\n        <button (click)="toggle(\'food\')" outline ion-button icon-only round>\n          <ion-icon name="pizza" color="{{getColor(\'food\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="title">My Preferences are...</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Vegan</div>\n        <button (click)="toggle(\'vegan\')" outline ion-button icon-only round>\n          <ion-icon name="leaf" color="{{getColor(\'vegan\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Vegetarian</div>\n        <button (click)="toggle(\'vegetarian\')" outline ion-button icon-only round>\n          <ion-icon name="nutrition" color="{{getColor(\'vegetarian\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button style="width: 100%;" ion-button (click)="applyFilters()">Apply</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/,
            selector: 'filter-deal',
            styleUrls: ['/filter-deal.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FilterDealComponent);
    return FilterDealComponent;
}());

//# sourceMappingURL=filter-deal.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Used in modal with orgs and consumers
var UserProfileComponent = (function () {
    function UserProfileComponent(viewCtrl, authService, toastService, params, currentUserService, userService) {
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastService = toastService;
        this.params = params;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.emailDisabled = true;
        this.editButtonText = "edit";
        this.isOrganization = this.params.get("isOrganization");
        this.userEmail = this.authService.getCurrentUserEmail();
        this.firstName = this.currentUserService.getCurrentUser().firstName;
    }
    UserProfileComponent.prototype.toggleEdit = function () {
        var _this = this;
        if (!this.isOrganization) {
            if (this.emailDisabled) {
                this.emailDisabled = false;
                this.editButtonText = "save";
            }
            else {
                if (this.authService.getCurrentUserEmail() != this.userEmail) {
                    this.authService.updateCurrentUserEmail(this.userEmail).then(function () {
                        _this.toastService.showReadableToast("Cool, email is updated");
                    }).catch(function (reason) {
                        _this.toastService.showReadableToast("Email not updated: " + reason);
                    });
                }
                if (this.currentUserService.getCurrentUser().firstName != this.firstName) {
                    var currUser = this.currentUserService.getCurrentUser();
                    currUser.firstName = this.firstName;
                    this.userService.set(currUser).then(function () {
                        _this.toastService.showReadableToast("Cool, user name is updated");
                    }).catch(function (reason) {
                        _this.toastService.showReadableToast("User not updated: " + reason);
                    });
                }
                this.emailDisabled = true;
                this.editButtonText = "edit";
            }
        }
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
                var currentEmail = _this.authService.getCurrentUserEmail(); //fireAuth.auth.currentUser.email;
                if (currentEmail) {
                    _this.authService.checkSignInMethods(currentEmail).then(function (methods) {
                        if (methods.length > 0) {
                            _this.authService.sendPasswordResetEmail(currentEmail).then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('editButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Button */])
    ], UserProfileComponent.prototype, "editButton", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<ion-content>\n    <modal-navbar [organizationModal]="isOrganization" [profileModal]="true"></modal-navbar>\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>First Name</ion-label>\n        <ion-input [disabled]="emailDisabled" [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>Email</ion-label>\n        <ion-input [disabled]="emailDisabled" type="email" [(ngModel)]="userEmail"></ion-input>\n    </ion-item>\n\n    <button *ngIf="!isOrganization" (click)="toggleEdit()" class="reset-button" ion-button>\n        {{editButtonText}}\n    </button>\n\n    <!-- <button (click)="resetPassword()" class="reset-button" outline ion-button>\n        reset password\n    </button> -->\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
            selector: 'user-profile',
            styleUrls: ['/user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerCardList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_card_info_more_card_info_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_image_service_service__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsumerCardList = (function () {
    function ConsumerCardList(currentUserService, modalCtrl, imageService) {
        var _this = this;
        this.currentUserService = currentUserService;
        this.modalCtrl = modalCtrl;
        this.imageService = imageService;
        this.cardList = [];
        this.cardClass = "user-card-list";
        this.currentUserService.getAllCards().subscribe(function (deals) {
            var currentDeals = [];
            deals.forEach(function (card) {
                // if (moment(card.dealEnd).isAfter(moment())) {
                //     currentDeals.push(card);
                //     this.imageService.setDealImageURL(card); //TODO
                // }
                currentDeals.push(card);
                _this.imageService.setDealImageURL(card);
            });
            __WEBPACK_IMPORTED_MODULE_1__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(currentDeals, _this.cardList);
        });
    }
    ConsumerCardList.prototype.moreInfo = function (card) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */], { card: card, isCardList: true }).present();
    };
    ConsumerCardList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/'<ion-header>\n    <modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n</ion-header>\n<ion-content>\n    <gs-card *ngFor="let currCard of cardList;" (click)="moreInfo(currCard)" [card]="currCard" [inputClass]="cardClass"></gs-card>\n    <div class="no-claimed-cards-text" *ngIf="cardList.length == 0">\n        Swipe right to add to your claimed deals!\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/,
            selector: 'consumer-card-list',
            styleUrls: ['/consumer-card-list.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_firebase_image_service_service__["a" /* ImageService */]])
    ], ConsumerCardList);
    return ConsumerCardList;
}());

//# sourceMappingURL=consumer-card-list.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(database, toastService) {
        this.database = database;
        this.toastService = toastService;
        this.userCollection = this.database.collection("users");
    }
    /**
     *
     * organization users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     *
     * Why are we leaving the Organization with the user when it is saved elsewhere?
     * Great question! The orgs can't be edited so they won't get out of sync and it so much easier to do
     * it this way for now. Subject to change for sure....
     *
     * We can talk about if we really want to use a toast here TODO
     * @param user
     */
    UserService.prototype.set = function (user) {
        if (this.userCollection) {
            var assignedUser;
            if (user.getAsPlainObject)
                assignedUser = Object.assign({}, user.getAsPlainObject());
            else
                assignedUser = Object.assign({}, user);
            return this.userCollection.doc(user.uid).set(assignedUser);
        }
        else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");
        return Promise.reject("Something is very wrong! User not updated!");
    };
    UserService.prototype.get = function (uid) {
        return this.database.collection("users", function (ref) { return ref.where("uid", '==', uid); }).valueChanges(); //this.fireAuth.auth.currentUser.uid
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(832);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* unused harmony export SignUpReturnCode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorizationService = (function () {
    function AuthorizationService(fireAuth) {
        this.fireAuth = fireAuth;
    }
    AuthorizationService.prototype.checkLoggedIn = function () {
        return this.fireAuth.auth.currentUser != null;
    };
    AuthorizationService.prototype.getCurrentUserUID = function () {
        return this.fireAuth.auth.currentUser.uid;
    };
    AuthorizationService.prototype.getCurrentUserEmail = function () {
        return this.fireAuth.auth.currentUser.email;
    };
    AuthorizationService.prototype.updateCurrentUserEmail = function (email) {
        return this.fireAuth.auth.currentUser.updateEmail(email);
    };
    AuthorizationService.prototype.sendPasswordResetEmail = function (email) {
        return this.fireAuth.auth.sendPasswordResetEmail(email);
    };
    // public signOut() {
    //     //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
    //                                     //this won't affect functionality but should be here for security
    // }
    AuthorizationService.prototype.signIn = function (email, password) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUp = function (email, password) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.checkSignInMethods = function (email) {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthorizationService);
    return AuthorizationService;
}());

var SignUpReturnCode;
(function (SignUpReturnCode) {
    SignUpReturnCode[SignUpReturnCode["UserAlreadySignedUp"] = 0] = "UserAlreadySignedUp";
    SignUpReturnCode[SignUpReturnCode["Success"] = 1] = "Success";
    SignUpReturnCode[SignUpReturnCode["Failure"] = 2] = "Failure";
})(SignUpReturnCode || (SignUpReturnCode = {}));
//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocaleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_type__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_type__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);




var LocaleCard = (function () {
    function LocaleCard(dealDescription, longDealDescription, dealStart, dealEnd, numberOfDeals, dealType, isVegetarian, isVegan, deleted, obj) {
        this.dealDescription = dealDescription;
        this.longDealDescription = longDealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.isVegetarian = isVegetarian;
        this.isVegan = isVegan;
        this.deleted = deleted;
        this.id = __WEBPACK_IMPORTED_MODULE_0__utils_type__["b" /* Guid */].newGuid();
        if (obj) {
            this.id = obj.id;
            this.organization = obj.organization;
            this.dealDescription = obj.dealDescription;
            this.longDealDescription = obj.longDealDescription;
            this.dealStart = obj.dealStart;
            this.dealEnd = obj.dealEnd;
            this.numberOfDeals = obj.numberOfDeals;
            this.isVegetarian = obj.isVegetarian;
            this.isVegan = obj.isVegan;
            this.dealType = obj.dealType;
            this.deleted = obj.deleted;
        }
    }
    LocaleCard.prototype.getAsPlainObject = function () {
        this.organization = Object.assign({}, this.organization);
        return Object.assign({}, this);
    };
    LocaleCard.getBlankCard = function () {
        var blankCard = new LocaleCard(null, null, __WEBPACK_IMPORTED_MODULE_3_moment__().toObject(), __WEBPACK_IMPORTED_MODULE_3_moment__().toObject(), -1, DealType.Drinks, false, false, false, null);
        blankCard.organization = new __WEBPACK_IMPORTED_MODULE_2__organization_type__["a" /* Organization */]("", "", "", 0, "", "", new __WEBPACK_IMPORTED_MODULE_1__location_type__["a" /* LocaleLocation */]());
        return blankCard;
    };
    LocaleCard.updateDealModel = function (objectToUpdate, updatedObject) {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.longDealDescription = updatedObject.longDealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.isVegetarian = updatedObject.isVegetarian;
        objectToUpdate.isVegan = updatedObject.isVegan;
        objectToUpdate.organization = updatedObject.organization;
    };
    LocaleCard.findAndUpdateCards = function (incomingCards, cardsToManipulate) {
        incomingCards.forEach(function (dealModel) {
            var foundCard = cardsToManipulate[cardsToManipulate.findIndex(function (c) { return c.id == dealModel.id; })];
            if (foundCard)
                LocaleCard.updateDealModel(foundCard, dealModel);
            else
                cardsToManipulate.push(dealModel);
        });
    };
    LocaleCard.cardsAreLogicallyEqual = function (obj1, obj2) {
        if (obj1 && obj2) {
            return obj1.dealDescription === obj2.dealDescription
                && __WEBPACK_IMPORTED_MODULE_3_moment__(obj1.dealEnd).isSame(__WEBPACK_IMPORTED_MODULE_3_moment__(obj2.dealEnd))
                && __WEBPACK_IMPORTED_MODULE_3_moment__(obj1.dealStart).isSame(__WEBPACK_IMPORTED_MODULE_3_moment__(obj2.dealStart))
                && obj1.dealType === obj2.dealType
                && obj1.isVegan === obj2.isVegan
                && obj1.isVegetarian === obj2.isVegetarian
                && obj1.longDealDescription === obj2.longDealDescription
                && obj1.numberOfDeals === obj2.numberOfDeals;
        }
        else
            return false;
    };
    return LocaleCard;
}());

var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Meal"] = 2] = "Meal";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_consumer_landing_consumer_landing_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_organization_deals_home_organization_deals_home_component__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_organization_deal_list_organization_deal_list_component__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_more_card_info_more_card_info_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_card_card_component__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_consumer_consumer_component__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_deal_editor_deal_editor_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_filter_deals_filter_deal_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_launch_navigator__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_uploader_service__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_unique_device_id__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_profile_user_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_browser_home_browser_home_component__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_deal_editing_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_organization_landing_organization_landing_component__ = __webpack_require__(1057);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_remember_me_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_consumer_card_list_consumer_card_list_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_facebook__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_toggle_icon_button_toggle_icon_button_component__ = __webpack_require__(1058);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_swipe_listener_service__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_call_number__ = __webpack_require__(546);
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



















































var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { velocity: 1.3, threshold: 20 },
            'pinch': { enabled: false },
            'rotate': { enabled: false },
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["d" /* HammerGestureConfig */]));

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_17__components_consumer_consumer_component__["a" /* ConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_organization_deal_list_organization_deal_list_component__["a" /* OrganizationDealListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_filter_deals_filter_deal_component__["a" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_consumer_landing_consumer_landing_component__["a" /* ConsumerLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_organization_deals_home_organization_deals_home_component__["a" /* OrganizationDealsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_card_card_component__["a" /* LocaleCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */],
                __WEBPACK_IMPORTED_MODULE_48__components_toggle_icon_button_toggle_icon_button_component__["a" /* ToggleIconButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_49__services_swipe_listener_service__["a" /* SwipeVertical */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* LocaleApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCbyIgW7iO9OrPoK9Ozr6EsOGrdN8v9HKo",
                    authDomain: "locale-4112a.firebaseapp.com",
                    databaseURL: "https://locale-4112a.firebaseio.com",
                    projectId: "locale-4112a",
                    storageBucket: "locale-4112a.appspot.com",
                    messagingSenderId: "9042973249"
                }),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_17__components_consumer_consumer_component__["a" /* ConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_organization_deal_list_organization_deal_list_component__["a" /* OrganizationDealListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_filter_deals_filter_deal_component__["a" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_consumer_landing_consumer_landing_component__["a" /* ConsumerLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_organization_deals_home_organization_deals_home_component__["a" /* OrganizationDealsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_card_card_component__["a" /* LocaleCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */],
                __WEBPACK_IMPORTED_MODULE_48__components_toggle_icon_button_toggle_icon_button_component__["a" /* ToggleIconButtonComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_44__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */],
                __WEBPACK_IMPORTED_MODULE_29__services_firebase_authorization_service__["a" /* AuthorizationService */],
                __WEBPACK_IMPORTED_MODULE_30__services_firebase_image_service_service__["a" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_32__services_uploader_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_33__services_view_controller_service__["a" /* ViewControllerService */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_35__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_37__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_40__services_deal_editing_service__["a" /* DealEditorService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */],
                __WEBPACK_IMPORTED_MODULE_45__services_firebase_firestore_collection_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__["a" /* CurrentUserService */],
                __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_43__services_remember_me_service__["a" /* RememberMeService */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_call_number__["a" /* CallNumber */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organization_signup_organization_signup_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remember_me_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_user_login_form_group_type__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_organization_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(247);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var ConsumerLandingComponent = (function (_super) {
    __extends(ConsumerLandingComponent, _super);
    function ConsumerLandingComponent(formBuilder, auth, rememberMeService, alert, organizationService, toastService, currentUserService, userService, loginService, facebook) {
        var _this = _super.call(this, toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook) || this;
        _this.signingUp = true;
        _this.isOrg = false;
        _this.attemptingSignup = false;
        _this.attemptingLogin = false;
        _this.remembered = false;
        _this.userSignUpGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required],
            rememberMe: ['']
        });
        _this.userLogInGroup = new __WEBPACK_IMPORTED_MODULE_3__types_user_login_form_group_type__["a" /* UserLoginFormGroup */](_this.formBuilder);
        return _this;
    }
    ConsumerLandingComponent.prototype.ngAfterViewInit = function () {
        this.rememberMeService.loginFromRememberMe(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_9__types_user_type__["b" /* UserType */].Consumer);
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
    ConsumerLandingComponent.prototype.facebookSignUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.login(['email'])];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === "connected")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.facebook.api("/me?fields=first_name,email", [])];
                    case 2:
                        userInfo = _a.sent();
                        this.userSignUpGroup.get("email").setValue(userInfo.email);
                        this.userSignUpGroup.get("password").setValue(userInfo.id);
                        this.userSignUpGroup.get("confirmPassword").setValue(userInfo.id);
                        this.userSignUpGroup.get("name").setValue(userInfo.first_name);
                        this.userSignUpGroup.get("rememberMe").setValue(true);
                        this.signUpUser();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ConsumerLandingComponent.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.login(['email'])];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === "connected")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.facebook.api("/me?fields=first_name,email", [])];
                    case 2:
                        userInfo = _a.sent();
                        this.userLogInGroup.get("email").setValue(userInfo.email);
                        this.userLogInGroup.get("password").setValue(userInfo.id);
                        this.loginService.login(this.userLogInGroup);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ConsumerLandingComponent.prototype.signUpUser = function () {
        var _this = this;
        if (this.userSignUpGroup.valid) {
            this.toastService.showReadableToast("Signing you up...welcome!");
            var email_1 = this.userSignUpGroup.get("email").value;
            var password_1 = this.userSignUpGroup.get("password").value;
            var confrimPassword = this.userSignUpGroup.get("confirmPassword").value;
            var firstName_1 = this.userSignUpGroup.get("name").value;
            if (password_1 == confrimPassword) {
                var userType = __WEBPACK_IMPORTED_MODULE_9__types_user_type__["b" /* UserType */].Consumer;
                this.auth.checkSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUp(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1).then(function () {
                                _this.rememberMeService.handleRememberMeSetting(_this.userSignUpGroup, __WEBPACK_IMPORTED_MODULE_9__types_user_type__["b" /* UserType */].Consumer);
                                var newUser = new __WEBPACK_IMPORTED_MODULE_9__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), userType, firstName_1);
                                _this.currentUserService.setCurrentUser(newUser);
                                _this.userService.set(newUser);
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
        }
        else {
            var display = "";
            if (this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    ConsumerLandingComponent.prototype.loginHandler = function () {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_9__types_user_type__["b" /* UserType */].Consumer);
        this.loginService.login(this.userLogInGroup);
    };
    ConsumerLandingComponent.prototype.resetPassword = function () {
        var _this = this;
        var emailControl = this.userLogInGroup.get("email");
        if (emailControl.valid) {
            this.auth.checkSignInMethods(emailControl.value).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.sendPasswordResetEmail(emailControl.value).then(function () {
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
            this.toastService.showReadableToast("Please check your email is valid");
        }
    };
    /**
     * Ugly css animations
     *
     * This can be seriously improved but works fine
     */
    ConsumerLandingComponent.prototype.goBackAScreen = function () {
        if (this.userTypeChoiceFields.nativeElement.style['left'] == "0%") {
            this.welcomeScreen.nativeElement.style['left'] = "0%";
            this.userTypeChoiceFields.nativeElement.style['left'] = "100%";
            this.goBackButton.nativeElement.style['bottom'] = "-10%";
        }
        else if (this.logInScreen.nativeElement.style['left'] == "0%") {
            this.welcomeScreen.nativeElement.style['left'] = "0%";
            this.logInScreen.nativeElement.style['left'] = "100%";
            this.goBackButton.nativeElement.style['bottom'] = "-10%";
        }
        else if (this.userSignUpScreen.nativeElement.style['left'] == "0%") {
            this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
            this.userSignUpScreen.nativeElement.style['left'] = "100%";
        }
        else if (this.restaurantSignUpFields.nativeElement.style['left'] == "0%") {
            this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
            this.restaurantSignUpFields.nativeElement.style['left'] = "100%";
        }
    };
    ConsumerLandingComponent.prototype.goToLoginScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.logInScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    ConsumerLandingComponent.prototype.goToUserTypeScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    ConsumerLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.userTypeChoiceFields.nativeElement.style['left'] = "-100%";
        this.userSignUpScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    ConsumerLandingComponent.prototype.goToRestaurantSignUpScreen = function () {
        this.userTypeChoiceFields.nativeElement.style['left'] = "-100%";
        this.restaurantSignUpFields.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('welcomeScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "welcomeScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('logInScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "logInScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('userSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "userSignUpScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('goBackButton'),
        __metadata("design:type", Object)
    ], ConsumerLandingComponent.prototype, "goBackButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('userTypeChoiceFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "userTypeChoiceFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('restaurantSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "restaurantSignUpFields", void 0);
    ConsumerLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/'<div class="background-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content>\n    <div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n        <div class="center-text">Chalkbord</div>\n        <div class="button-area">\n            <button class="welcome-button" ion-button (click)="goToUserTypeScreen()">\n                sign up\n            </button>\n            <div class="or-text">or</div>\n            <button class="welcome-button" ion-button outline (click)="goToLoginScreen()">\n                login\n            </button>\n        </div>\n    </div>\n\n    <div #logInScreen class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form ">\n                    <form [formGroup]="userLogInGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n\n        <button class="welcome-button" ion-button (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookLogin()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n\n        <button class="welcome-button" ion-button outline (click)="resetPassword()">\n            reset password\n        </button>\n    </div>\n\n    <div #userTypeChoiceFields class="animate-form offset-form" style="height: 100%;">\n        <ion-grid style="height: 100%">\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="consumer-type-button" ion-button (click)="goToUserSignUpScreen()">\n                        <ion-icon name="contact"></ion-icon> personal\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content or-text">\n                    or\n                </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="restaurant-type-button" ion-button outline (click)="goToRestaurantSignUpScreen()">\n                        <ion-icon name="restaurant"></ion-icon> restaurant\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div #userSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="userSignUpGroup">\n                        <ion-item>\n                            <ion-label floating>First Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUpUser()">\n            sign up\n        </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookSignUp()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n    </div>\n\n    <div #restaurantSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="signUpGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make\n                            sure your email is formatted correctly.</p>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make\n                            sure your password is at least eight characters long</p>\n\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n                        <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n\n                        <ion-item>\n                            <ion-label floating>Organization Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant\n                            name is required</p>\n                        <ion-item class="padding-right">\n                            <ion-label floating>Restaurant Phone Number</ion-label>\n                            <ion-input type="number" formControlName="phoneNumber"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'phoneNumber\').errors && signUpGroup.get(\'phoneNumber\').dirty" class="error-message">Restaurant\n                            phone number is required and needs to be 10 numbers</p>\n\n                        <ion-item class="padding-right">\n                            <ion-label floating>Restaurant Website</ion-label>\n                            <ion-input formControlName="website"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'website\').errors && signUpGroup.get(\'website\').dirty" class="error-message">Restaurant\n                            website is required and needs to be a valid website</p>\n\n                        <ion-item>\n                            <ion-label floating>Address </ion-label>\n                            <ion-input formControlName="address"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>City</ion-label>\n                            <ion-input formControlName="city"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>State</ion-label>\n                            <ion-input formControlName="state"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>Zipcode</ion-label>\n                            <ion-input formControlName="zipcode"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode\n                            is required</p>\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUp()">\n            sign up\n        </button>\n    </div>\n</ion-content>\n\n<div #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/,
            selector: 'consumer-landing',
            styleUrls: ['/consumer-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_remember_me_service__["a" /* RememberMeService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */]])
    ], ConsumerLandingComponent);
    return ConsumerLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_1__organization_signup_organization_signup_component__["a" /* OrganizationSignupComponent */]));

//# sourceMappingURL=consumer-landing.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewControllerService = (function () {
    function ViewControllerService() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    }
    ViewControllerService.prototype.setConsumerView = function () {
        this.consumer = true;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setSignUpView = function () {
        this.consumer = false;
        this.userLanding = true;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setBrowserHome = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = true;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setOrganizationPortal = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = true;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setOrganizationHome = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = true;
    };
    ViewControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ViewControllerService);
    return ViewControllerService;
}());

//# sourceMappingURL=view-controller.service.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberMeFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
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

var RememberMeFormGroup = (function (_super) {
    __extends(RememberMeFormGroup, _super);
    function RememberMeFormGroup(formBuilder) {
        var _this = _super.call(this, {}) || this;
        _this.formBuilder = formBuilder;
        _this.addControl('rememberMe', _this.formBuilder.control(''));
        return _this;
    }
    return RememberMeFormGroup;
}(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormGroup */]));

//# sourceMappingURL=remember-me-form-group.type.js.map

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_keys_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrganizationDealsHomeComponent = (function () {
    function OrganizationDealsHomeComponent(toastService, deviceService, platform, viewControllerService, currentUserService) {
        this.toastService = toastService;
        this.deviceService = deviceService;
        this.platform = platform;
        this.viewControllerService = viewControllerService;
        this.currentUserService = currentUserService;
        this.root = __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__["a" /* DealEditorComponent */];
    }
    OrganizationDealsHomeComponent.prototype.logout = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_3__services_login_keys_service__["a" /* LoginKeys */].rememberMeRestKey, false);
                _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_3__services_login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, false);
                if (_this.platform.is(__WEBPACK_IMPORTED_MODULE_4__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core))
                    _this.viewControllerService.setBrowserHome();
                else
                    _this.viewControllerService.setSignUpView();
                _this.currentUserService.removeCurrentUser();
            }
        });
        toast.present();
    };
    OrganizationDealsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n                <button (click)="logout()" ion-button icon-only menuToggle right>\n                    <ion-icon style="color: white;" name="log-out"></ion-icon>\n                </button>\n            </ion-toolbar>\n        </ion-header>\n        <organization-deal-list></organization-deal-list>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/,
            selector: 'organization-deals-home',
            styleUrls: ['/organization-deals-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_6__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__["a" /* CurrentUserService */]])
    ], OrganizationDealsHomeComponent);
    return OrganizationDealsHomeComponent;
}());

//# sourceMappingURL=organization-deals-home.component.js.map

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 412,
	"./af.js": 412,
	"./ar": 413,
	"./ar-dz": 414,
	"./ar-dz.js": 414,
	"./ar-kw": 415,
	"./ar-kw.js": 415,
	"./ar-ly": 416,
	"./ar-ly.js": 416,
	"./ar-ma": 417,
	"./ar-ma.js": 417,
	"./ar-sa": 418,
	"./ar-sa.js": 418,
	"./ar-tn": 419,
	"./ar-tn.js": 419,
	"./ar.js": 413,
	"./az": 420,
	"./az.js": 420,
	"./be": 421,
	"./be.js": 421,
	"./bg": 422,
	"./bg.js": 422,
	"./bm": 423,
	"./bm.js": 423,
	"./bn": 424,
	"./bn.js": 424,
	"./bo": 425,
	"./bo.js": 425,
	"./br": 426,
	"./br.js": 426,
	"./bs": 427,
	"./bs.js": 427,
	"./ca": 428,
	"./ca.js": 428,
	"./cs": 429,
	"./cs.js": 429,
	"./cv": 430,
	"./cv.js": 430,
	"./cy": 431,
	"./cy.js": 431,
	"./da": 432,
	"./da.js": 432,
	"./de": 433,
	"./de-at": 434,
	"./de-at.js": 434,
	"./de-ch": 435,
	"./de-ch.js": 435,
	"./de.js": 433,
	"./dv": 436,
	"./dv.js": 436,
	"./el": 437,
	"./el.js": 437,
	"./en-au": 438,
	"./en-au.js": 438,
	"./en-ca": 439,
	"./en-ca.js": 439,
	"./en-gb": 440,
	"./en-gb.js": 440,
	"./en-ie": 441,
	"./en-ie.js": 441,
	"./en-il": 442,
	"./en-il.js": 442,
	"./en-nz": 443,
	"./en-nz.js": 443,
	"./eo": 444,
	"./eo.js": 444,
	"./es": 445,
	"./es-do": 446,
	"./es-do.js": 446,
	"./es-us": 447,
	"./es-us.js": 447,
	"./es.js": 445,
	"./et": 448,
	"./et.js": 448,
	"./eu": 449,
	"./eu.js": 449,
	"./fa": 450,
	"./fa.js": 450,
	"./fi": 451,
	"./fi.js": 451,
	"./fo": 452,
	"./fo.js": 452,
	"./fr": 453,
	"./fr-ca": 454,
	"./fr-ca.js": 454,
	"./fr-ch": 455,
	"./fr-ch.js": 455,
	"./fr.js": 453,
	"./fy": 456,
	"./fy.js": 456,
	"./gd": 457,
	"./gd.js": 457,
	"./gl": 458,
	"./gl.js": 458,
	"./gom-latn": 459,
	"./gom-latn.js": 459,
	"./gu": 460,
	"./gu.js": 460,
	"./he": 461,
	"./he.js": 461,
	"./hi": 462,
	"./hi.js": 462,
	"./hr": 463,
	"./hr.js": 463,
	"./hu": 464,
	"./hu.js": 464,
	"./hy-am": 465,
	"./hy-am.js": 465,
	"./id": 466,
	"./id.js": 466,
	"./is": 467,
	"./is.js": 467,
	"./it": 468,
	"./it.js": 468,
	"./ja": 469,
	"./ja.js": 469,
	"./jv": 470,
	"./jv.js": 470,
	"./ka": 471,
	"./ka.js": 471,
	"./kk": 472,
	"./kk.js": 472,
	"./km": 473,
	"./km.js": 473,
	"./kn": 474,
	"./kn.js": 474,
	"./ko": 475,
	"./ko.js": 475,
	"./ky": 476,
	"./ky.js": 476,
	"./lb": 477,
	"./lb.js": 477,
	"./lo": 478,
	"./lo.js": 478,
	"./lt": 479,
	"./lt.js": 479,
	"./lv": 480,
	"./lv.js": 480,
	"./me": 481,
	"./me.js": 481,
	"./mi": 482,
	"./mi.js": 482,
	"./mk": 483,
	"./mk.js": 483,
	"./ml": 484,
	"./ml.js": 484,
	"./mn": 485,
	"./mn.js": 485,
	"./mr": 486,
	"./mr.js": 486,
	"./ms": 487,
	"./ms-my": 488,
	"./ms-my.js": 488,
	"./ms.js": 487,
	"./mt": 489,
	"./mt.js": 489,
	"./my": 490,
	"./my.js": 490,
	"./nb": 491,
	"./nb.js": 491,
	"./ne": 492,
	"./ne.js": 492,
	"./nl": 493,
	"./nl-be": 494,
	"./nl-be.js": 494,
	"./nl.js": 493,
	"./nn": 495,
	"./nn.js": 495,
	"./pa-in": 496,
	"./pa-in.js": 496,
	"./pl": 497,
	"./pl.js": 497,
	"./pt": 498,
	"./pt-br": 499,
	"./pt-br.js": 499,
	"./pt.js": 498,
	"./ro": 500,
	"./ro.js": 500,
	"./ru": 501,
	"./ru.js": 501,
	"./sd": 502,
	"./sd.js": 502,
	"./se": 503,
	"./se.js": 503,
	"./si": 504,
	"./si.js": 504,
	"./sk": 505,
	"./sk.js": 505,
	"./sl": 506,
	"./sl.js": 506,
	"./sq": 507,
	"./sq.js": 507,
	"./sr": 508,
	"./sr-cyrl": 509,
	"./sr-cyrl.js": 509,
	"./sr.js": 508,
	"./ss": 510,
	"./ss.js": 510,
	"./sv": 511,
	"./sv.js": 511,
	"./sw": 512,
	"./sw.js": 512,
	"./ta": 513,
	"./ta.js": 513,
	"./te": 514,
	"./te.js": 514,
	"./tet": 515,
	"./tet.js": 515,
	"./tg": 516,
	"./tg.js": 516,
	"./th": 517,
	"./th.js": 517,
	"./tl-ph": 518,
	"./tl-ph.js": 518,
	"./tlh": 519,
	"./tlh.js": 519,
	"./tr": 520,
	"./tr.js": 520,
	"./tzl": 521,
	"./tzl.js": 521,
	"./tzm": 522,
	"./tzm-latn": 523,
	"./tzm-latn.js": 523,
	"./tzm.js": 522,
	"./ug-cn": 524,
	"./ug-cn.js": 524,
	"./uk": 525,
	"./uk.js": 525,
	"./ur": 526,
	"./ur.js": 526,
	"./uz": 527,
	"./uz-latn": 528,
	"./uz-latn.js": 528,
	"./uz.js": 527,
	"./vi": 529,
	"./vi.js": 529,
	"./x-pseudo": 530,
	"./x-pseudo.js": 530,
	"./yo": 531,
	"./yo.js": 531,
	"./zh-cn": 532,
	"./zh-cn.js": 532,
	"./zh-hk": 533,
	"./zh-hk.js": 533,
	"./zh-tw": 534,
	"./zh-tw.js": 534
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 956;

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicScreenSize; });
//Ionic screen sizes by pixel size
//See https://ionicframework.com/docs/api/components/grid/Grid/
var IonicScreenSize;
(function (IonicScreenSize) {
    IonicScreenSize[IonicScreenSize["Xs"] = 0] = "Xs";
    IonicScreenSize[IonicScreenSize["Sm"] = 576] = "Sm";
    IonicScreenSize[IonicScreenSize["Md"] = 768] = "Md";
    IonicScreenSize[IonicScreenSize["Lg"] = 992] = "Lg";
    IonicScreenSize[IonicScreenSize["Xl"] = 1200] = "Xl";
})(IonicScreenSize || (IonicScreenSize = {}));
//# sourceMappingURL=ionic-screen-sizes.enum.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_deal_editing_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_deals_type__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganizationDealListComponent = (function () {
    function OrganizationDealListComponent(dealEditorService, cardService, currentUserService) {
        var _this = this;
        this.dealEditorService = dealEditorService;
        this.cardService = cardService;
        this.currentUserService = currentUserService;
        this.cardList = [];
        this.currentUserService.getNotDeletedCards().subscribe(function (deals) {
            __WEBPACK_IMPORTED_MODULE_5__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(deals, _this.cardList);
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.currentCard = deal;
        });
        this.dealEditorService.deleteDealSubject.subscribe(function (deal) {
            _this.cardList.splice(_this.cardList.indexOf(deal), 1);
        });
        this.dealEditorService.updateDealSubject.subscribe(function (deal) {
            __WEBPACK_IMPORTED_MODULE_5__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards([deal], _this.cardList);
        });
        this.dealEditorService.addDealSubject.subscribe(function (deal) {
            _this.cardStream = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["merge"])(_this.cardStream, _this.cardService.get(deal.id));
            _this.cardList.push(deal);
            _this.currentCard = deal;
            _this.dealEditorService.setCurrentDeal(deal);
        });
    }
    OrganizationDealListComponent.prototype.hasCards = function () {
        return this.cardList.length > 0;
    };
    OrganizationDealListComponent.prototype.setCurrentCard = function (deal) {
        if (this.currentCard != deal && deal != null) {
            this.currentCard = deal;
            this.dealEditorService.setCurrentDeal(this.currentCard);
        }
        else {
            this.currentCard = null;
            this.dealEditorService.setCurrentDeal(null);
        }
    };
    OrganizationDealListComponent.prototype.getBackground = function (deal) {
        if (this.currentCard && deal.id == this.currentCard.id)
            return "selected-item";
        else
            return "selectable-item";
    };
    OrganizationDealListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/'<ion-content>\n    <ion-list radio-group [(ngModel)]="currentCard" *ngIf="hasCards()" class="push-list-under-menu-bar">\n        <ion-item *ngFor="let deal of cardList" (click)="setCurrentCard(deal)" [ngClass]="getBackground(deal)">\n            <ion-label>{{ deal.dealDescription }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!hasCards()" class="push-list-under-menu-bar no-cards-text">\n        Add some deals and see them here!\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/,
            selector: 'organization-deal-list',
            styleUrls: ['/organization-deal-list.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_deal_editing_service__["a" /* DealEditorService */], __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__["a" /* CurrentUserService */]])
    ], OrganizationDealListComponent);
    return OrganizationDealListComponent;
}());

//# sourceMappingURL=organization-deal-list.component.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_ionic_platform_enum__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalNavbarComponent = (function () {
    function ModalNavbarComponent(toastService, ionicViewController, deviceService, viewControllerService, currentUserService, platform) {
        this.toastService = toastService;
        this.ionicViewController = ionicViewController;
        this.deviceService = deviceService;
        this.viewControllerService = viewControllerService;
        this.currentUserService = currentUserService;
        this.platform = platform;
    }
    ModalNavbarComponent.prototype.logout = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                if (_this.organizationModal) {
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__["a" /* LoginKeys */].rememberMeRestKey, false);
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, false);
                    if (_this.platform.is(__WEBPACK_IMPORTED_MODULE_7__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core))
                        _this.viewControllerService.setBrowserHome();
                    else
                        _this.viewControllerService.setSignUpView();
                }
                else {
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, false);
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, false);
                    if (_this.platform.is(__WEBPACK_IMPORTED_MODULE_7__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core))
                        _this.viewControllerService.setBrowserHome();
                    else
                        _this.viewControllerService.setSignUpView();
                }
                _this.ionicViewController.dismiss();
                _this.currentUserService.removeCurrentUser();
            }
        });
        toast.present();
    };
    ModalNavbarComponent.prototype.closeProfile = function () {
        this.ionicViewController.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "profileModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "organizationModal", void 0);
    ModalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/'<ion-toolbar>\n    <button style="color: white;" (click)="closeProfile()" ion-button icon-only menuToggle>\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title style="font-family: Baumans">chalkbord</ion-title>\n    <button style="color: white; " *ngIf="profileModal" (click)="logout()" ion-button icon-only menuToggle right>\n        <ion-icon name="log-out"></ion-icon>\n    </button>\n</ion-toolbar>'/*ion-inline-end:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/,
            selector: 'modal-navbar',
            styleUrls: ['/modal-navbar.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_5__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */]])
    ], ModalNavbarComponent);
    return ModalNavbarComponent;
}());

//# sourceMappingURL=modal-navbar.component.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocaleCardComponent = (function () {
    function LocaleCardComponent() {
        this.showCardText = true;
        this.inputClass = "default-class";
        this._card = __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].getBlankCard();
    }
    Object.defineProperty(LocaleCardComponent.prototype, "card", {
        get: function () {
            return this._card;
        },
        set: function (card) {
            if (card)
                this._card = card;
            else
                this._card = __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].getBlankCard();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleCardComponent.prototype, "imageSrc", {
        get: function () {
            return this._imageSrc;
        },
        set: function (imageSrc) {
            this._imageSrc = imageSrc;
            if (!this._card)
                this._card = __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].getBlankCard();
            this._card.imageURL = imageSrc;
        },
        enumerable: true,
        configurable: true
    });
    ;
    LocaleCardComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.inputClass);
    };
    LocaleCardComponent.prototype.getMomentFormatted = function (dateTime, format) {
        if (dateTime && format)
            return __WEBPACK_IMPORTED_MODULE_2_Moment___default()(dateTime).format(format);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */]])
    ], LocaleCardComponent.prototype, "card", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocaleCardComponent.prototype, "imageSrc", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LocaleCardComponent.prototype, "showCardText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LocaleCardComponent.prototype, "inputClass", void 0);
    LocaleCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<div [style.zIindex]="-1000">\n    <ion-card class="{{inputClass}}">\n        <div *ngIf="_card && !_card.imageURL" class="centered-tap-text fill">Tap here to upload a photo</div>\n        <img *ngIf="_card && _card.imageURL" class="non-draggable-card-image fill" src="{{_card.imageURL}}" />\n        <img class="gradient-on-card" src="assets/images/gradient.png" />\n\n        <ion-card-content *ngIf="card.dealDescription && (_card || showCardText)" class="card-text">\n            <ion-card-title class="locale-card-title">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n            <p *ngIf="card.dealDescription" class="locale-card-time">{{getMomentFormatted(card.dealStart, "MM/DD")}}\n                {{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LocaleCardComponent);
    return LocaleCardComponent;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 547,
	"./af.js": 547,
	"./ar": 548,
	"./ar-dz": 549,
	"./ar-dz.js": 549,
	"./ar-kw": 550,
	"./ar-kw.js": 550,
	"./ar-ly": 551,
	"./ar-ly.js": 551,
	"./ar-ma": 552,
	"./ar-ma.js": 552,
	"./ar-sa": 553,
	"./ar-sa.js": 553,
	"./ar-tn": 554,
	"./ar-tn.js": 554,
	"./ar.js": 548,
	"./az": 555,
	"./az.js": 555,
	"./be": 556,
	"./be.js": 556,
	"./bg": 557,
	"./bg.js": 557,
	"./bm": 558,
	"./bm.js": 558,
	"./bn": 559,
	"./bn.js": 559,
	"./bo": 560,
	"./bo.js": 560,
	"./br": 561,
	"./br.js": 561,
	"./bs": 562,
	"./bs.js": 562,
	"./ca": 563,
	"./ca.js": 563,
	"./cs": 564,
	"./cs.js": 564,
	"./cv": 565,
	"./cv.js": 565,
	"./cy": 566,
	"./cy.js": 566,
	"./da": 567,
	"./da.js": 567,
	"./de": 568,
	"./de-at": 569,
	"./de-at.js": 569,
	"./de-ch": 570,
	"./de-ch.js": 570,
	"./de.js": 568,
	"./dv": 571,
	"./dv.js": 571,
	"./el": 572,
	"./el.js": 572,
	"./en-au": 573,
	"./en-au.js": 573,
	"./en-ca": 574,
	"./en-ca.js": 574,
	"./en-gb": 575,
	"./en-gb.js": 575,
	"./en-ie": 576,
	"./en-ie.js": 576,
	"./en-il": 577,
	"./en-il.js": 577,
	"./en-nz": 578,
	"./en-nz.js": 578,
	"./eo": 579,
	"./eo.js": 579,
	"./es": 580,
	"./es-do": 581,
	"./es-do.js": 581,
	"./es-us": 582,
	"./es-us.js": 582,
	"./es.js": 580,
	"./et": 583,
	"./et.js": 583,
	"./eu": 584,
	"./eu.js": 584,
	"./fa": 585,
	"./fa.js": 585,
	"./fi": 586,
	"./fi.js": 586,
	"./fo": 587,
	"./fo.js": 587,
	"./fr": 588,
	"./fr-ca": 589,
	"./fr-ca.js": 589,
	"./fr-ch": 590,
	"./fr-ch.js": 590,
	"./fr.js": 588,
	"./fy": 591,
	"./fy.js": 591,
	"./gd": 592,
	"./gd.js": 592,
	"./gl": 593,
	"./gl.js": 593,
	"./gom-latn": 594,
	"./gom-latn.js": 594,
	"./gu": 595,
	"./gu.js": 595,
	"./he": 596,
	"./he.js": 596,
	"./hi": 597,
	"./hi.js": 597,
	"./hr": 598,
	"./hr.js": 598,
	"./hu": 599,
	"./hu.js": 599,
	"./hy-am": 600,
	"./hy-am.js": 600,
	"./id": 601,
	"./id.js": 601,
	"./is": 602,
	"./is.js": 602,
	"./it": 603,
	"./it.js": 603,
	"./ja": 604,
	"./ja.js": 604,
	"./jv": 605,
	"./jv.js": 605,
	"./ka": 606,
	"./ka.js": 606,
	"./kk": 607,
	"./kk.js": 607,
	"./km": 608,
	"./km.js": 608,
	"./kn": 609,
	"./kn.js": 609,
	"./ko": 610,
	"./ko.js": 610,
	"./ky": 611,
	"./ky.js": 611,
	"./lb": 612,
	"./lb.js": 612,
	"./lo": 613,
	"./lo.js": 613,
	"./lt": 614,
	"./lt.js": 614,
	"./lv": 615,
	"./lv.js": 615,
	"./me": 616,
	"./me.js": 616,
	"./mi": 617,
	"./mi.js": 617,
	"./mk": 618,
	"./mk.js": 618,
	"./ml": 619,
	"./ml.js": 619,
	"./mn": 620,
	"./mn.js": 620,
	"./mr": 621,
	"./mr.js": 621,
	"./ms": 622,
	"./ms-my": 623,
	"./ms-my.js": 623,
	"./ms.js": 622,
	"./mt": 624,
	"./mt.js": 624,
	"./my": 625,
	"./my.js": 625,
	"./nb": 626,
	"./nb.js": 626,
	"./ne": 627,
	"./ne.js": 627,
	"./nl": 628,
	"./nl-be": 629,
	"./nl-be.js": 629,
	"./nl.js": 628,
	"./nn": 630,
	"./nn.js": 630,
	"./pa-in": 631,
	"./pa-in.js": 631,
	"./pl": 632,
	"./pl.js": 632,
	"./pt": 633,
	"./pt-br": 634,
	"./pt-br.js": 634,
	"./pt.js": 633,
	"./ro": 635,
	"./ro.js": 635,
	"./ru": 636,
	"./ru.js": 636,
	"./sd": 637,
	"./sd.js": 637,
	"./se": 638,
	"./se.js": 638,
	"./si": 639,
	"./si.js": 639,
	"./sk": 640,
	"./sk.js": 640,
	"./sl": 641,
	"./sl.js": 641,
	"./sq": 642,
	"./sq.js": 642,
	"./sr": 643,
	"./sr-cyrl": 644,
	"./sr-cyrl.js": 644,
	"./sr.js": 643,
	"./ss": 645,
	"./ss.js": 645,
	"./sv": 646,
	"./sv.js": 646,
	"./sw": 647,
	"./sw.js": 647,
	"./ta": 648,
	"./ta.js": 648,
	"./te": 649,
	"./te.js": 649,
	"./tet": 650,
	"./tet.js": 650,
	"./tg": 651,
	"./tg.js": 651,
	"./th": 652,
	"./th.js": 652,
	"./tl-ph": 653,
	"./tl-ph.js": 653,
	"./tlh": 654,
	"./tlh.js": 654,
	"./tr": 655,
	"./tr.js": 655,
	"./tzl": 656,
	"./tzl.js": 656,
	"./tzm": 657,
	"./tzm-latn": 658,
	"./tzm-latn.js": 658,
	"./tzm.js": 657,
	"./ug-cn": 659,
	"./ug-cn.js": 659,
	"./uk": 660,
	"./uk.js": 660,
	"./ur": 661,
	"./ur.js": 661,
	"./uz": 662,
	"./uz-latn": 663,
	"./uz-latn.js": 663,
	"./uz.js": 662,
	"./vi": 664,
	"./vi.js": 664,
	"./x-pseudo": 665,
	"./x-pseudo.js": 665,
	"./yo": 666,
	"./yo.js": 666,
	"./zh-cn": 667,
	"./zh-cn.js": 667,
	"./zh-hk": 668,
	"./zh-hk.js": 668,
	"./zh-tw": 669,
	"./zh-tw.js": 669
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 979;

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocaleApp = (function () {
    function LocaleApp(auth, viewControl, platform) {
        this.auth = auth;
        this.viewControl = viewControl;
        this.platform = platform;
        if (this.platform.is(__WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core)) {
            this.viewControl.setBrowserHome();
        }
        else {
            if (!this.auth.checkLoggedIn()) {
                this.viewControl.setSignUpView();
            }
        }
    }
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<div *ngIf="viewControl">\n    <consumer *ngIf="viewControl.consumer"></consumer>\n    <consumer-landing *ngIf="viewControl.userLanding"></consumer-landing>\n    <browser-home *ngIf="viewControl.browserHome"></browser-home>\n    <organization-landing *ngIf="viewControl.organizationLanding"></organization-landing>\n    <organization-deals-home *ngIf="viewControl.organizationDealsHome"></organization-deals-home>\n</div>\n'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */]])
    ], LocaleApp);
    return LocaleApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_user_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_location_type__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_deals_filter_deal_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_Moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__consumer_card_list_consumer_card_list_component__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ConsumerComponent = (function () {
    function ConsumerComponent(alert, popoverCtrl, toastService, launchNavigator, cardService, authService, imageService, modalCtrl, geolocation, currentUserService, userService) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.toastService = toastService;
        this.launchNavigator = launchNavigator;
        this.cardService = cardService;
        this.authService = authService;
        this.imageService = imageService;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.transitionString = "";
        this.numberOfCardsToHaveInView = 3;
        this.moveCardIndex = 0;
        this.viewCardIndex = 0;
        this.likingCard = false;
        this.animatingCard = false;
        this.currentFilter = { dealTypes: [], onlyVegan: false, onlyVegetarian: false };
        this.currentLocation = new __WEBPACK_IMPORTED_MODULE_2__types_location_type__["a" /* LocaleLocation */]();
        this.initialLoading = true;
        this.swipeHelpOverlayHidden = true;
        this.auxHelpOverlayHidden = true;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                var throwoutHorizontal = Math.abs(offsetX) / (element.offsetWidth / 4.0);
                var throwoutVertical = Math.abs(offsetY) / (element.offsetHeight / 4.5);
                return Math.min(1, Math.sqrt((throwoutHorizontal * throwoutHorizontal) + (throwoutVertical * throwoutVertical))); //pythag
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 50;
            },
            allowedDirections: [__WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].LEFT, __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].RIGHT],
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkLoggedIn) {
            this.geolocation.watchPosition().subscribe(function (resp) {
                _this.currentLocation.lat = resp.coords.latitude;
                _this.currentLocation.lng = resp.coords.longitude;
                if (!_this.cardSubscription) {
                    _this.cardSubscription = _this.cardService.getCardsByLatLng(_this.currentLocation, 100000000).subscribe(function (cardModels) {
                        _this.initialLoading = false;
                        if (cardModels.length > 0) {
                            cardModels = cardModels.filter(function (card) {
                                return !__WEBPACK_IMPORTED_MODULE_16_underscore___default.a.contains(_this.currentUserService.getCurrentUser().cardIds, card.id);
                            });
                            if (!_this.cards) {
                                _this.cards = _this.cardService.filterNonDuplicateDeals(cardModels);
                                _this.filterCards(_this.currentFilter);
                            }
                            else
                                __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(_this.organizationViewCards, cardModels);
                        }
                    });
                }
            }, function (error) {
                _this.toastService.showReadableToast("We could not find your location, please contact support. " + error);
            });
        }
        else
            console.error("User not logged in when he should be!");
    };
    ConsumerComponent.prototype.ngOnDestroy = function () {
        this.cardSubscription.unsubscribe();
    };
    ConsumerComponent.prototype.onItemMove = function (element, x, y, r) {
        if (this.transitionString != "all 0.55s")
            element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    ConsumerComponent.prototype.openConsumerCardList = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */]).present();
    };
    ConsumerComponent.prototype.hideHelpOverlay = function () {
        if (!this.swipeHelpOverlayHidden)
            this.swipeHelpOverlayHidden = true;
        else if (!this.auxHelpOverlayHidden)
            this.auxHelpOverlayHidden = true;
    };
    ConsumerComponent.prototype.showHelpOverlay = function () {
        this.swipeHelpOverlayHidden = false;
        this.auxHelpOverlayHidden = false;
    };
    ConsumerComponent.prototype.getSwipeHelpZ = function () {
        if (!this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden) {
            console.log("return 25 for swipe help");
            return '25';
        }
        else
            return '';
    };
    ConsumerComponent.prototype.getAuxHelpZ = function () {
        if (this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '25';
        else if (!this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '0 !important;';
        else
            return '';
    };
    ConsumerComponent.prototype.voteUp = function (like) {
        var _this = this;
        if (this.organizationViewCards.length > 0) {
            this.transitionString = "all 0.55s";
            if (like) {
                if (!this.likingCard) {
                    this.likingCard = true;
                    this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)";
                    this.delay(300).then(function () {
                        _this.handleCard(like);
                    });
                }
            }
            else {
                this.delay(300).then(function () {
                    _this.handleCard(like);
                });
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)";
            }
        }
    };
    ConsumerComponent.prototype.moreInfo = function () {
        var _this = this;
        var cardSwipedUp = this.organizationViewCards.shift();
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */], { card: cardSwipedUp, isCardList: false }).present().then(function () {
            _this.organizationViewCards.unshift(cardSwipedUp);
        });
    };
    ConsumerComponent.prototype.clickLike = function () {
        var _this = this;
        if (this.organizationViewCards.length > 0 && !this.likingCard && !this.animatingCard) {
            this.transitionString = "all 0.75s";
            this.likingCard = true;
            this.animatingCard = true;
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)";
            this.delay(300).then(function () {
                _this.handleCard(true);
                _this.animatingCard = false;
            });
        }
    };
    ConsumerComponent.prototype.clickNo = function () {
        var _this = this;
        if (this.organizationViewCards.length > 0 && !this.animatingCard) {
            this.transitionString = "all 0.75s";
            this.animatingCard = true;
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)";
            this.delay(300).then(function () {
                _this.handleCard(false);
                _this.animatingCard = false;
            });
        }
    };
    ConsumerComponent.prototype.openFilterPopover = function (event) {
        var _this = this;
        var filterPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__filter_deals_filter_deal_component__["a" /* FilterDealComponent */], this.currentFilter);
        filterPopover.onDidDismiss(function (data) {
            if (data) {
                _this.currentFilter = data;
                _this.filterCards(data);
            }
        });
        filterPopover.present({
            ev: event,
        });
    };
    ConsumerComponent.prototype.handleCard = function (like) {
        if (like) {
            var poppedCard = this.popCard();
            this.popLikeAlert(poppedCard);
            this.currentUserService.addCardId(poppedCard.id);
            this.userService.set(this.currentUserService.getCurrentUser());
        }
        else
            this.popCard();
        this.transitionString = "";
    };
    ConsumerComponent.prototype.popLikeAlert = function (card) {
        var _this = this;
        var likeAlert = this.alert.create({
            buttons: [
                {
                    text: 'Share',
                    role: 'share',
                    handler: function () {
                        console.log('Share');
                    }
                },
                {
                    text: 'Go',
                    role: 'go',
                    handler: function () {
                        _this.launchNavigator.navigate(card.organization.address);
                    }
                },
                {
                    text: 'Ok',
                    role: 'close',
                }
            ],
            title: "You are going to " + card.organization.name + "!",
            message: "Bring this code to " + card.organization.name + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });
        likeAlert.present().then(function () {
            _this.likingCard = false;
        });
    };
    ConsumerComponent.prototype.popCard = function () {
        var poppedCard = this.organizationViewCards.shift();
        this.addCardToStack();
        return poppedCard;
    };
    ConsumerComponent.prototype.filterCards = function (filterOptions) {
        var _this = this;
        this.organizationViewCards = new Array();
        this.filteredCards = [];
        for (var i = this.viewCardIndex; i < this.cards.length; i++)
            this.filteredCards.push(this.cards[i]);
        if (filterOptions.dealTypes.length > 0) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return filterOptions.dealTypes.findIndex(function (x) { return x == card.dealType; }) >= 0 || card.dealType == __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Meal;
            });
        }
        if (filterOptions.onlyVegan) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return card.isVegan;
            });
        }
        if (filterOptions.onlyVegetarian) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return card.isVegetarian;
            });
        }
        this.setUpViewCards();
        this.delay(600).then(function () {
            var topCard = _this.swingCards.toArray()[0];
            if (topCard)
                topCard.getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
        });
    };
    ConsumerComponent.prototype.addCardToStack = function () {
        if (this.viewCardIndex < this.filteredCards.length) {
            var nextCard = this.filteredCards[this.viewCardIndex];
            this.imageService.setDealImageURL(nextCard);
            this.organizationViewCards.push(nextCard);
            this.viewCardIndex++;
            for (var i = 0; i < this.swingCards.toArray.length; i++) {
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
            }
        }
    };
    ConsumerComponent.prototype.setUpViewCards = function () {
        this.viewCardIndex = this.numberOfCardsToHaveInView;
        for (var i = 0; i < this.numberOfCardsToHaveInView; i++) {
            if (this.filteredCards[i]) {
                this.imageService.setDealImageURL(this.filteredCards[i]);
                this.organizationViewCards.push(this.filteredCards[i]);
            }
        }
    };
    //used simply to async wait for something
    ConsumerComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ConsumerComponent.prototype.openProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */], { isOrganization: false }).present();
    };
    ConsumerComponent.prototype.getMomentFormatted = function (dateTime, format) {
        return __WEBPACK_IMPORTED_MODULE_17_Moment___default()(dateTime).format(format);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["SwingStackComponent"])
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"])
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<div class="help-overlay" (click)="hideHelpOverlay()" padding [hidden]="swipeHelpOverlayHidden && auxHelpOverlayHidden">\n</div>\n\n<div class="loading-div">\n    <div *ngIf="initialLoading">\n        <ion-spinner class="ion-spinner-consumer"></ion-spinner>\n        <h2 ion-text style="text-align: center; color: white;">Getting your local deals!</h2>\n    </div>\n    <div *ngIf="!initialLoading">\n        <h2 class="no-consumer-cards-text" ion-text>That\'s all the deals in your area.</h2>\n        <h2 *ngIf="currentFilter.dealType != null || currentFilter.onlyVegan || currentFilter.onlyVegetarian" class="no-consumer-cards-text"\n            style="margin-top: 0" ion-text>Try removing filters.</h2>\n        <h2 class="bottom-no-consumer-card-text" ion-text>Check back later!</h2>\n    </div>\n</div>\n\n<ion-navbar style="min-height: 56px;">\n    <button (click)="openProfile()" class="button-nav-bar button-top-left" ion-button icon-only [clear]="true">\n        <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n    </button>\n    <img class="textured-name" src="assets/images/chalk-logo.png" />\n    <button (click)="openConsumerCardList()" class="button-nav-bar button-top-right aux-button" ion-button icon-only\n        [clear]="true">\n        <img class="card-stack-img" src="assets/images/card-stack.png" />\n    </button>\n</ion-navbar>\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack"\n    [style.zIindex]="-1000 ">\n    <ion-card #mycards1 swing-card *ngFor="let card of organizationViewCards; let i=index;" [style.zIndex]="-1*i"\n        [ngStyle]="{\'transition\':transitionString}" (click)="moreInfo()">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n        <img class="gradient-on-card" src="assets/images/gradient.png" />\n\n        <ion-card-content class="card-text card-inner-shadow">\n            <ion-card-title class="locale-card-title">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n            <p class="locale-card-time">{{getMomentFormatted(card.dealStart, "MM/DD")}}\n                {{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<ion-grid class="bottom-grid" [ngStyle]="{\'z-index\':getSwipeHelpZ()}">\n    <ion-row style="height: 100%">\n        <ion-col class="center-content-column" col-2>\n            <button class="transparent-button bottom-button outside-button" ion-button icon-only round>\n                <ion-icon name="help"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-4>\n            <button (click)="clickNo()" class="transparent-button bottom-button middle-button" ion-button icon-only\n                round>\n                <img class="x-button" src="assets/images/x-chalk.png" />\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-4>\n            <button (click)="clickLike()" class="transparent-button bottom-button middle-button" ion-button icon-only\n                round>\n                <img class="heart-button" src="assets/images/heart-chalk.png" />\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-2>\n            <button (click)="openFilterPopover($event)" class="transparent-button bottom-button outside-button aux-button"\n                ion-button icon-only round>\n                <ion-icon name="funnel"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_11__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());

//# sourceMappingURL=consumer.component.js.map

/***/ })

},[714]);
//# sourceMappingURL=main.js.map