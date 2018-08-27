webpackJsonp([0],{

/***/ 1049:
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
    BrowserHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="home-nav-bar">\n    <button class="home-nav-button" (click)="showOrganizationPortal()" ion-button>\n        <ion-icon name="restaurant"></ion-icon> Organizations\n    </button>\n    <button class="home-nav-button" ion-button>\n        <ion-icon name="send"></ion-icon> Contact\n    </button>\n</div>\n\n<div class="browser-home-photo">\n    <!-- <ion-card>\n        <ion-card-content>\n            <div class="flute-photo">\n            </div>\n        </ion-card-content>\n    </ion-card> -->\n</div>\n\n<div class="center-home-text">Chalkbord</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__["a" /* ViewControllerService */]])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}());

//# sourceMappingURL=browser-home.component.js.map

/***/ }),

/***/ 1056:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types_user_login_form_group_type__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__organization_signup_organization_signup_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(246);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">Chalkbord</div>\n    <div class="small-rest-center-text">Organizations</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email" formControlName="email"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Stay signed in</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card #signUpCard class="sign-up-card">\n        <ion-list>\n            <form [formGroup]="signUpGroup">\n                <ion-item class="padding-right">\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make sure your email is formatted correctly.</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Password</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make sure your password is at least eight characters long</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Confirm Password</ion-label>\n                    <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                </ion-item>\n                <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Organization Name</ion-label>\n                    <ion-input formControlName="name"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant name is required</p>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Address </ion-label>\n                    <ion-input formControlName="address"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>City</ion-label>\n                    <ion-input formControlName="city"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>State</ion-label>\n                    <ion-input formControlName="state"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State is required</p>\n                <ion-item class="padding-right">\n                    <ion-label floating>Zipcode</ion-label>\n                    <ion-input formControlName="zipcode"></ion-input>\n                </ion-item>\n                <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode is required</p>\n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Stay signed in</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/,
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

/***/ 1057:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(403);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(402);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_firestore_collection_user_service__ = __webpack_require__(77);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(247);
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

/***/ 252:
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreCardInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
    function MoreCardInfoComponent(navParams, iab) {
        this.navParams = navParams;
        this.iab = iab;
        this.card = this.navParams.get("card");
        this.dealType = __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["a" /* DealType */][this.card.dealType.valueOf()];
    }
    MoreCardInfoComponent.prototype.goToLocation = function () {
        this.iab.create("http://www.google.com/search?q=" + this.card.organization.name);
        //this.launchNavigator.navigate(this.card.organization.address);
    };
    MoreCardInfoComponent.prototype.getMomentFormatted = function (dateTime, format) {
        return __WEBPACK_IMPORTED_MODULE_4_moment__(dateTime).format(format);
    };
    MoreCardInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/'<ion-content>\n    <modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n    <img *ngIf="card" class="present-card-image fill" src="{{card.imageURL}}" />\n    <div text-wrap style="padding-right: 16px;">\n        <ion-item (click)="goToLocation()">\n            <h1 class="app-text">{{card.organization.name}}</h1>\n            <p class="app-text">{{card.organization.address}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>{{card.dealDescription}}</h2>\n            <p>{{getMomentFormatted(card.dealStart, "MMMM Do, YYYY")}}</p>\n            <p>{{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd, "hh:mm a")}}</p>\n        </ion-item>\n        <ion-item *ngIf="card.numberOfDeals > 0">\n            <h2 class="app-text red-text">There are only {{card.numberOfDeals}} cards available for this deal!</h2>\n        </ion-item>\n        <ion-item *ngIf="card.longDealDescrption">\n            {{card.longDealDescrption}}\n        </ion-item>\n        <ion-item>\n            <p>Deal type: {{dealType}}</p>\n            <div *ngIf="card.isVegetarian">VT</div>\n            <div *ngIf="card.isVegan">VG</div>\n        </ion-item>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/,
            selector: 'more-card-info',
            styleUrls: ['/more-card-info.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MoreCardInfoComponent);
    return MoreCardInfoComponent;
}());

//# sourceMappingURL=more-card-info.component.js.map

/***/ }),

/***/ 297:
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
webpackEmptyAsyncContext.id = 297;

/***/ }),

/***/ 358:
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
webpackEmptyAsyncContext.id = 358;

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_organization_type__ = __webpack_require__(399);
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
        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then(function (methods) {
                if (!methods || methods.length < 1) {
                    _this.auth.signUp(email, password).then(function () {
                        _this.auth.signIn(email, password).then(function () {
                            _this.rememberMeService.handleRememberMeSetting(_this.signUpGroup, __WEBPACK_IMPORTED_MODULE_2__types_user_type__["b" /* UserType */].Organization);
                            var newUser = new __WEBPACK_IMPORTED_MODULE_2__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), __WEBPACK_IMPORTED_MODULE_2__types_user_type__["b" /* UserType */].Organization, organizationName);
                            var newOrganziationModel = new __WEBPACK_IMPORTED_MODULE_3__types_organization_type__["a" /* Organization */](_this.auth.getCurrentUserUID(), organizationName, place.formatted_address, "", new __WEBPACK_IMPORTED_MODULE_4__types_location_type__["a" /* LocaleLocation */](place.geometry.location));
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
    return OrganizationSignupComponent;
}());

//# sourceMappingURL=organization-signup.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organization; });
var Organization = (function () {
    function Organization(uid, name, address, imageSource, location) {
        this.uid = uid;
        this.name = name;
        this.address = address;
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remember_me_form_group_type__ = __webpack_require__(955);
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

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_deals_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_deal_editing_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enums_ionic_screen_sizes_enum__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(543);
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
    DealEditorComponent.prototype.updateDealContentType = function (changeVegetarianOption) {
        if (changeVegetarianOption) {
            if (!this.isVegetarian)
                this.isVegan = false;
        }
        else {
            if (this.isVegan)
                this.isVegetarian = true;
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button style="color: white;" ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big" style="text-align: right;">Chalkbord Organizations</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <ion-col col-12 col-sm-6 style="padding: 0px;">\n                        <ion-item>\n                            <ion-label floating>Deal description</ion-label>\n                            <ion-input formControlName="dealDescription"></ion-input>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDescription\').errors && dealEditorFormGroup.get(\'dealDescription\').dirty" class="error-message">Deal description is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Long deal description</ion-label>\n                            <ion-textarea formControlName="longDealDescription"></ion-textarea>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Deal date</ion-label>\n                            <ion-datetime displayFormat="MMMM DD, YYYY" min="{{now}}" max="{{max}}" formControlName="dealDay"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDay\').errors && dealEditorFormGroup.get(\'dealDay\').dirty" class="error-message">Deal date is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Start time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealStart\').errors && dealEditorFormGroup.get(\'dealStart\').dirty" class="error-message">Deal start time is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>End time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealEnd\').errors && dealEditorFormGroup.get(\'dealEnd\').dirty" class="error-message">Deal end time is required.</p>\n\n                        <!-- <ion-item>\n                            <ion-label>Limited deal number</ion-label>\n                            <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item *ngIf="limitDealNumber">\n                            <ion-label floating>Deal Number</ion-label>\n                            <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n                        </ion-item> -->\n\n                        <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                            Deal Type\n                            <ion-item>\n                                <ion-label>Drinks</ion-label>\n                                <ion-radio value="0"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Food</ion-label>\n                                <ion-radio value="1"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Both</ion-label>\n                                <ion-radio value="2"></ion-radio>\n                            </ion-item>\n                        </ion-list>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealType\').errors && dealEditorFormGroup.get(\'dealType\').dirty" class="error-message">Deal type is required.</p>\n\n                        <ion-item>\n                            <ion-label>Deal is vegetarian</ion-label>\n                            <ion-checkbox formControlName="isVegetarian" [(ngModel)]="isVegetarian" checked="false" (ionChange)="updateDealContentType(true)"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Deal is vegan</ion-label>\n                            <ion-checkbox formControlName="isVegan" [(ngModel)]="isVegan" checked="false" (ionChange)="updateDealContentType(false)"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col (click)="editPhotoData()" style="padding: 0px; min-width: 285px; min-height: 450px;">\n                        <gs-card [card]="previewCard" [imageSrc]="imageDataForPreview"></gs-card>\n                        <div *ngIf="uneditedDeal" class="editing-status">\n                            <ion-badge>\n                                <div *ngIf="!cardIsEdited()" style="color: green">Deal saved</div>\n                                <div *ngIf="cardIsEdited()" style="color: yellow">Your changes are unsaved</div>\n                            </ion-badge>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </form>\n    </ion-list>\n\n    <div class="button-group center-content">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="delete()">\n            Delete\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n\n<input #hiddenFileInput type="file" (change)="setImageData($event)" accept="image/*" style="visibility: hidden;" />'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
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

/***/ 53:
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

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(247);
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

/***/ 676:
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
        this.setDealType(appliedFilterOptions.dealType);
        this.boolValues.vegetarian = appliedFilterOptions.onlyVegetarian;
        this.boolValues.vegan = appliedFilterOptions.onlyVegan;
    }
    FilterDealComponent.prototype.applyFilters = function () {
        var returnData = {
            onlyVegetarian: this.boolValues.vegetarian,
            onlyVegan: this.boolValues.vegan,
            dealType: this.getDealTypeValue()
        };
        console.log(returnData);
        this.viewCtrl.dismiss(returnData);
    };
    FilterDealComponent.prototype.toggle = function (boolName) {
        this.boolValues[boolName] = !this.boolValues[boolName];
        if (boolName == 'vegan' || boolName == 'vegetarian')
            this.updateVeganVegValues(boolName);
        else
            this.updateDealTypeValues(boolName);
    };
    FilterDealComponent.prototype.getColor = function (boolName) {
        return this.boolValues[boolName] ? "black" : "light-grey";
    };
    FilterDealComponent.prototype.updateVeganVegValues = function (boolName) {
        if (boolName == 'vegetarian') {
            if (!this.boolValues.vegetarian)
                this.boolValues.vegan = false;
        }
        else {
            if (this.boolValues.vegan)
                this.boolValues.vegetarian = true;
        }
    };
    FilterDealComponent.prototype.updateDealTypeValues = function (boolName) {
        if (this.boolValues[boolName]) {
            this.boolValues.drink = false;
            this.boolValues.food = false;
            this.boolValues.meal = false;
            this.boolValues[boolName] = true;
        }
    };
    FilterDealComponent.prototype.getDealTypeValue = function () {
        if (this.boolValues.drink)
            return __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Drinks;
        if (this.boolValues.food)
            return __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Food;
        if (this.boolValues.meal)
            return __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Meal;
    };
    FilterDealComponent.prototype.setDealType = function (dealType) {
        switch (dealType) {
            case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Meal: {
                this.boolValues.meal = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Drinks: {
                this.boolValues.drink = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */].Food: {
                this.boolValues.food = true;
                break;
            }
        }
    };
    FilterDealComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="title">Deal Type</div>\n      </ion-col>\n      <ion-col>\n        <div class="title">Vegan/Vegetarian</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Drinks</div>\n        <button (click)="toggle(\'drink\')" outline ion-button icon-only round>\n          <ion-icon name="beer" color="{{getColor(\'drink\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Vegetarian</div>\n        <button (click)="toggle(\'vegetarian\')" outline ion-button icon-only round>\n          <ion-icon name="nutrition" color="{{getColor(\'vegetarian\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Foods</div>\n        <button (click)="toggle(\'food\')" outline ion-button icon-only round>\n          <ion-icon name="pizza" color="{{getColor(\'food\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Vegan</div>\n        <button (click)="toggle(\'vegan\')" outline ion-button icon-only round>\n          <ion-icon name="leaf" color="{{getColor(\'vegan\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Meal</div>\n        <button (click)="toggle(\'meal\')" outline ion-button icon-only round>\n          <ion-icon name="wine" color="{{getColor(\'meal\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button style="width: 100%;" ion-button (click)="applyFilters()">Apply</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_card_info_more_card_info_component__ = __webpack_require__(253);
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
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */], { card: card }).present();
    };
    ConsumerCardList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/'<ion-header>\n    <modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n</ion-header>\n<ion-content>\n    <gs-card *ngFor="let currCard of cardList;" (click)="moreInfo(currCard)" [card]="currCard" [inputClass]="cardClass"></gs-card>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/,
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

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(832);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* unused harmony export SignUpReturnCode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(404);
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

/***/ 77:
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocaleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_type__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_type__ = __webpack_require__(399);
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
        blankCard.organization = new __WEBPACK_IMPORTED_MODULE_2__organization_type__["a" /* Organization */]("", "", "", "", new __WEBPACK_IMPORTED_MODULE_1__location_type__["a" /* LocaleLocation */]());
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_organization_deals_home_organization_deals_home_component__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_organization_deal_list_organization_deal_list_component__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_more_card_info_more_card_info_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_card_card_component__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_consumer_consumer_component__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_deal_editor_deal_editor_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_filter_deals_filter_deal_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_launch_navigator__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_uploader_service__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_unique_device_id__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_profile_user_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_browser_home_browser_home_component__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_deal_editing_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_organization_landing_organization_landing_component__ = __webpack_require__(1056);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_remember_me_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_consumer_card_list_consumer_card_list_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_facebook__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_toggle_icon_button_toggle_icon_button_component__ = __webpack_require__(1057);
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
            'swipe': { velocity: 1.3, threshold: 20 } // override default settings,
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
                __WEBPACK_IMPORTED_MODULE_48__components_toggle_icon_button_toggle_icon_button_component__["a" /* ToggleIconButtonComponent */]
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
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_facebook__["a" /* Facebook */]
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__organization_signup_organization_signup_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remember_me_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_user_login_form_group_type__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types_user_type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_organization_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(246);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/'<div class="background-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content>\n    <div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n        <div class="center-text">Chalkbord</div>\n        <div class="button-area">\n            <button class="welcome-button" ion-button (click)="goToUserTypeScreen()">\n                sign up\n            </button>\n            <div class="or-text">or</div>\n            <button class="welcome-button" ion-button outline (click)="goToLoginScreen()">\n                login\n            </button>\n        </div>\n    </div>\n\n    <div #logInScreen class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form ">\n                    <form [formGroup]="userLogInGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n\n        <button class="welcome-button" ion-button (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookLogin()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n\n        <button class="welcome-button" ion-button outline (click)="resetPassword()">\n            reset password\n        </button>\n    </div>\n\n    <div #userTypeChoiceFields class="animate-form offset-form" style="height: 100%;">\n        <ion-grid style="height: 100%">\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="consumer-type-button" ion-button (click)="goToUserSignUpScreen()">\n                        <ion-icon name="contact"></ion-icon> personal\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content or-text">\n                    or\n                </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="restaurant-type-button" ion-button outline (click)="goToRestaurantSignUpScreen()">\n                        <ion-icon name="restaurant"></ion-icon> restaurant\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <div #userSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="userSignUpGroup">\n                        <ion-item>\n                            <ion-label floating>First Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUpUser()">\n            sign up\n        </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookSignUp()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n    </div>\n\n    <div #restaurantSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="signUpGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make sure your email is formatted correctly.</p>\n\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make sure your password is at least eight characters long</p>\n\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n                        <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n\n                        <ion-item>\n                            <ion-label floating>Organization Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant name is required</p>\n\n                        <ion-item>\n                            <ion-label floating>Address </ion-label>\n                            <ion-input formControlName="address"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address is required</p>\n                        <ion-item>\n                            <ion-label floating>City</ion-label>\n                            <ion-input formControlName="city"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City is required</p>\n                        <ion-item>\n                            <ion-label floating>State</ion-label>\n                            <ion-input formControlName="state"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State is required</p>\n                        <ion-item>\n                            <ion-label floating>Zipcode</ion-label>\n                            <ion-input formControlName="zipcode"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode is required</p>\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUp()">\n            sign up\n        </button>\n    </div>\n</ion-content>\n\n<div #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/,
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

/***/ 955:
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

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_keys_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_device_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(53);
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

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 410,
	"./af.js": 410,
	"./ar": 411,
	"./ar-dz": 412,
	"./ar-dz.js": 412,
	"./ar-kw": 413,
	"./ar-kw.js": 413,
	"./ar-ly": 414,
	"./ar-ly.js": 414,
	"./ar-ma": 415,
	"./ar-ma.js": 415,
	"./ar-sa": 416,
	"./ar-sa.js": 416,
	"./ar-tn": 417,
	"./ar-tn.js": 417,
	"./ar.js": 411,
	"./az": 418,
	"./az.js": 418,
	"./be": 419,
	"./be.js": 419,
	"./bg": 420,
	"./bg.js": 420,
	"./bm": 421,
	"./bm.js": 421,
	"./bn": 422,
	"./bn.js": 422,
	"./bo": 423,
	"./bo.js": 423,
	"./br": 424,
	"./br.js": 424,
	"./bs": 425,
	"./bs.js": 425,
	"./ca": 426,
	"./ca.js": 426,
	"./cs": 427,
	"./cs.js": 427,
	"./cv": 428,
	"./cv.js": 428,
	"./cy": 429,
	"./cy.js": 429,
	"./da": 430,
	"./da.js": 430,
	"./de": 431,
	"./de-at": 432,
	"./de-at.js": 432,
	"./de-ch": 433,
	"./de-ch.js": 433,
	"./de.js": 431,
	"./dv": 434,
	"./dv.js": 434,
	"./el": 435,
	"./el.js": 435,
	"./en-au": 436,
	"./en-au.js": 436,
	"./en-ca": 437,
	"./en-ca.js": 437,
	"./en-gb": 438,
	"./en-gb.js": 438,
	"./en-ie": 439,
	"./en-ie.js": 439,
	"./en-il": 440,
	"./en-il.js": 440,
	"./en-nz": 441,
	"./en-nz.js": 441,
	"./eo": 442,
	"./eo.js": 442,
	"./es": 443,
	"./es-do": 444,
	"./es-do.js": 444,
	"./es-us": 445,
	"./es-us.js": 445,
	"./es.js": 443,
	"./et": 446,
	"./et.js": 446,
	"./eu": 447,
	"./eu.js": 447,
	"./fa": 448,
	"./fa.js": 448,
	"./fi": 449,
	"./fi.js": 449,
	"./fo": 450,
	"./fo.js": 450,
	"./fr": 451,
	"./fr-ca": 452,
	"./fr-ca.js": 452,
	"./fr-ch": 453,
	"./fr-ch.js": 453,
	"./fr.js": 451,
	"./fy": 454,
	"./fy.js": 454,
	"./gd": 455,
	"./gd.js": 455,
	"./gl": 456,
	"./gl.js": 456,
	"./gom-latn": 457,
	"./gom-latn.js": 457,
	"./gu": 458,
	"./gu.js": 458,
	"./he": 459,
	"./he.js": 459,
	"./hi": 460,
	"./hi.js": 460,
	"./hr": 461,
	"./hr.js": 461,
	"./hu": 462,
	"./hu.js": 462,
	"./hy-am": 463,
	"./hy-am.js": 463,
	"./id": 464,
	"./id.js": 464,
	"./is": 465,
	"./is.js": 465,
	"./it": 466,
	"./it.js": 466,
	"./ja": 467,
	"./ja.js": 467,
	"./jv": 468,
	"./jv.js": 468,
	"./ka": 469,
	"./ka.js": 469,
	"./kk": 470,
	"./kk.js": 470,
	"./km": 471,
	"./km.js": 471,
	"./kn": 472,
	"./kn.js": 472,
	"./ko": 473,
	"./ko.js": 473,
	"./ky": 474,
	"./ky.js": 474,
	"./lb": 475,
	"./lb.js": 475,
	"./lo": 476,
	"./lo.js": 476,
	"./lt": 477,
	"./lt.js": 477,
	"./lv": 478,
	"./lv.js": 478,
	"./me": 479,
	"./me.js": 479,
	"./mi": 480,
	"./mi.js": 480,
	"./mk": 481,
	"./mk.js": 481,
	"./ml": 482,
	"./ml.js": 482,
	"./mn": 483,
	"./mn.js": 483,
	"./mr": 484,
	"./mr.js": 484,
	"./ms": 485,
	"./ms-my": 486,
	"./ms-my.js": 486,
	"./ms.js": 485,
	"./mt": 487,
	"./mt.js": 487,
	"./my": 488,
	"./my.js": 488,
	"./nb": 489,
	"./nb.js": 489,
	"./ne": 490,
	"./ne.js": 490,
	"./nl": 491,
	"./nl-be": 492,
	"./nl-be.js": 492,
	"./nl.js": 491,
	"./nn": 493,
	"./nn.js": 493,
	"./pa-in": 494,
	"./pa-in.js": 494,
	"./pl": 495,
	"./pl.js": 495,
	"./pt": 496,
	"./pt-br": 497,
	"./pt-br.js": 497,
	"./pt.js": 496,
	"./ro": 498,
	"./ro.js": 498,
	"./ru": 499,
	"./ru.js": 499,
	"./sd": 500,
	"./sd.js": 500,
	"./se": 501,
	"./se.js": 501,
	"./si": 502,
	"./si.js": 502,
	"./sk": 503,
	"./sk.js": 503,
	"./sl": 504,
	"./sl.js": 504,
	"./sq": 505,
	"./sq.js": 505,
	"./sr": 506,
	"./sr-cyrl": 507,
	"./sr-cyrl.js": 507,
	"./sr.js": 506,
	"./ss": 508,
	"./ss.js": 508,
	"./sv": 509,
	"./sv.js": 509,
	"./sw": 510,
	"./sw.js": 510,
	"./ta": 511,
	"./ta.js": 511,
	"./te": 512,
	"./te.js": 512,
	"./tet": 513,
	"./tet.js": 513,
	"./tg": 514,
	"./tg.js": 514,
	"./th": 515,
	"./th.js": 515,
	"./tl-ph": 516,
	"./tl-ph.js": 516,
	"./tlh": 517,
	"./tlh.js": 517,
	"./tr": 518,
	"./tr.js": 518,
	"./tzl": 519,
	"./tzl.js": 519,
	"./tzm": 520,
	"./tzm-latn": 521,
	"./tzm-latn.js": 521,
	"./tzm.js": 520,
	"./ug-cn": 522,
	"./ug-cn.js": 522,
	"./uk": 523,
	"./uk.js": 523,
	"./ur": 524,
	"./ur.js": 524,
	"./uz": 525,
	"./uz-latn": 526,
	"./uz-latn.js": 526,
	"./uz.js": 525,
	"./vi": 527,
	"./vi.js": 527,
	"./x-pseudo": 528,
	"./x-pseudo.js": 528,
	"./yo": 529,
	"./yo.js": 529,
	"./zh-cn": 530,
	"./zh-cn.js": 530,
	"./zh-hk": 531,
	"./zh-hk.js": 531,
	"./zh-tw": 532,
	"./zh-tw.js": 532
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
webpackContext.id = 957;

/***/ }),

/***/ 976:
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

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_deal_editing_service__ = __webpack_require__(252);
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

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(53);
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

/***/ 979:
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<div [style.zIindex]="-1000">\n    <ion-card class="{{inputClass}}">\n        <div *ngIf="_card && !_card.imageURL" class="non-draggable-card-image fill">Tap here to upload a photo</div>\n        <img *ngIf="_card && _card.imageURL" class="non-draggable-card-image fill" src="{{_card.imageURL}}" />\n\n        <ion-card-content *ngIf="card.dealDescription && (_card || showCardText)" class="card-text">\n            <ion-card-title class="locale-card-title">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n            <p *ngIf="card.dealDescription" class="locale-card-time">{{getMomentFormatted(card.dealStart, "MM/DD")}} {{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LocaleCardComponent);
    return LocaleCardComponent;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 545,
	"./af.js": 545,
	"./ar": 546,
	"./ar-dz": 547,
	"./ar-dz.js": 547,
	"./ar-kw": 548,
	"./ar-kw.js": 548,
	"./ar-ly": 549,
	"./ar-ly.js": 549,
	"./ar-ma": 550,
	"./ar-ma.js": 550,
	"./ar-sa": 551,
	"./ar-sa.js": 551,
	"./ar-tn": 552,
	"./ar-tn.js": 552,
	"./ar.js": 546,
	"./az": 553,
	"./az.js": 553,
	"./be": 554,
	"./be.js": 554,
	"./bg": 555,
	"./bg.js": 555,
	"./bm": 556,
	"./bm.js": 556,
	"./bn": 557,
	"./bn.js": 557,
	"./bo": 558,
	"./bo.js": 558,
	"./br": 559,
	"./br.js": 559,
	"./bs": 560,
	"./bs.js": 560,
	"./ca": 561,
	"./ca.js": 561,
	"./cs": 562,
	"./cs.js": 562,
	"./cv": 563,
	"./cv.js": 563,
	"./cy": 564,
	"./cy.js": 564,
	"./da": 565,
	"./da.js": 565,
	"./de": 566,
	"./de-at": 567,
	"./de-at.js": 567,
	"./de-ch": 568,
	"./de-ch.js": 568,
	"./de.js": 566,
	"./dv": 569,
	"./dv.js": 569,
	"./el": 570,
	"./el.js": 570,
	"./en-au": 571,
	"./en-au.js": 571,
	"./en-ca": 572,
	"./en-ca.js": 572,
	"./en-gb": 573,
	"./en-gb.js": 573,
	"./en-ie": 574,
	"./en-ie.js": 574,
	"./en-il": 575,
	"./en-il.js": 575,
	"./en-nz": 576,
	"./en-nz.js": 576,
	"./eo": 577,
	"./eo.js": 577,
	"./es": 578,
	"./es-do": 579,
	"./es-do.js": 579,
	"./es-us": 580,
	"./es-us.js": 580,
	"./es.js": 578,
	"./et": 581,
	"./et.js": 581,
	"./eu": 582,
	"./eu.js": 582,
	"./fa": 583,
	"./fa.js": 583,
	"./fi": 584,
	"./fi.js": 584,
	"./fo": 585,
	"./fo.js": 585,
	"./fr": 586,
	"./fr-ca": 587,
	"./fr-ca.js": 587,
	"./fr-ch": 588,
	"./fr-ch.js": 588,
	"./fr.js": 586,
	"./fy": 589,
	"./fy.js": 589,
	"./gd": 590,
	"./gd.js": 590,
	"./gl": 591,
	"./gl.js": 591,
	"./gom-latn": 592,
	"./gom-latn.js": 592,
	"./gu": 593,
	"./gu.js": 593,
	"./he": 594,
	"./he.js": 594,
	"./hi": 595,
	"./hi.js": 595,
	"./hr": 596,
	"./hr.js": 596,
	"./hu": 597,
	"./hu.js": 597,
	"./hy-am": 598,
	"./hy-am.js": 598,
	"./id": 599,
	"./id.js": 599,
	"./is": 600,
	"./is.js": 600,
	"./it": 601,
	"./it.js": 601,
	"./ja": 602,
	"./ja.js": 602,
	"./jv": 603,
	"./jv.js": 603,
	"./ka": 604,
	"./ka.js": 604,
	"./kk": 605,
	"./kk.js": 605,
	"./km": 606,
	"./km.js": 606,
	"./kn": 607,
	"./kn.js": 607,
	"./ko": 608,
	"./ko.js": 608,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 610,
	"./lb.js": 610,
	"./lo": 611,
	"./lo.js": 611,
	"./lt": 612,
	"./lt.js": 612,
	"./lv": 613,
	"./lv.js": 613,
	"./me": 614,
	"./me.js": 614,
	"./mi": 615,
	"./mi.js": 615,
	"./mk": 616,
	"./mk.js": 616,
	"./ml": 617,
	"./ml.js": 617,
	"./mn": 618,
	"./mn.js": 618,
	"./mr": 619,
	"./mr.js": 619,
	"./ms": 620,
	"./ms-my": 621,
	"./ms-my.js": 621,
	"./ms.js": 620,
	"./mt": 622,
	"./mt.js": 622,
	"./my": 623,
	"./my.js": 623,
	"./nb": 624,
	"./nb.js": 624,
	"./ne": 625,
	"./ne.js": 625,
	"./nl": 626,
	"./nl-be": 627,
	"./nl-be.js": 627,
	"./nl.js": 626,
	"./nn": 628,
	"./nn.js": 628,
	"./pa-in": 629,
	"./pa-in.js": 629,
	"./pl": 630,
	"./pl.js": 630,
	"./pt": 631,
	"./pt-br": 632,
	"./pt-br.js": 632,
	"./pt.js": 631,
	"./ro": 633,
	"./ro.js": 633,
	"./ru": 634,
	"./ru.js": 634,
	"./sd": 635,
	"./sd.js": 635,
	"./se": 636,
	"./se.js": 636,
	"./si": 637,
	"./si.js": 637,
	"./sk": 638,
	"./sk.js": 638,
	"./sl": 639,
	"./sl.js": 639,
	"./sq": 640,
	"./sq.js": 640,
	"./sr": 641,
	"./sr-cyrl": 642,
	"./sr-cyrl.js": 642,
	"./sr.js": 641,
	"./ss": 643,
	"./ss.js": 643,
	"./sv": 644,
	"./sv.js": 644,
	"./sw": 645,
	"./sw.js": 645,
	"./ta": 646,
	"./ta.js": 646,
	"./te": 647,
	"./te.js": 647,
	"./tet": 648,
	"./tet.js": 648,
	"./tg": 649,
	"./tg.js": 649,
	"./th": 650,
	"./th.js": 650,
	"./tl-ph": 651,
	"./tl-ph.js": 651,
	"./tlh": 652,
	"./tlh.js": 652,
	"./tr": 653,
	"./tr.js": 653,
	"./tzl": 654,
	"./tzl.js": 654,
	"./tzm": 655,
	"./tzm-latn": 656,
	"./tzm-latn.js": 656,
	"./tzm.js": 655,
	"./ug-cn": 657,
	"./ug-cn.js": 657,
	"./uk": 658,
	"./uk.js": 658,
	"./ur": 659,
	"./ur.js": 659,
	"./uz": 660,
	"./uz-latn": 661,
	"./uz-latn.js": 661,
	"./uz.js": 660,
	"./vi": 662,
	"./vi.js": 662,
	"./x-pseudo": 663,
	"./x-pseudo.js": 663,
	"./yo": 664,
	"./yo.js": 664,
	"./zh-cn": 665,
	"./zh-cn.js": 665,
	"./zh-hk": 666,
	"./zh-hk.js": 666,
	"./zh-tw": 667,
	"./zh-tw.js": 667
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
webpackContext.id = 980;

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
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
    function LocaleApp(statusBar, auth, viewControl, platform) {
        this.statusBar = statusBar;
        this.auth = auth;
        this.viewControl = viewControl;
        this.platform = platform;
        if (this.platform.is(__WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core)) {
            this.viewControl.setBrowserHome();
        }
        else {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByName("black");
            if (!this.auth.checkLoggedIn()) {
                this.viewControl.setSignUpView();
            }
        }
    }
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<div *ngIf="viewControl">\n    <consumer *ngIf="viewControl.consumer"></consumer>\n    <consumer-landing *ngIf="viewControl.userLanding"></consumer-landing>\n    <browser-home *ngIf="viewControl.browserHome"></browser-home>\n    <organization-landing *ngIf="viewControl.organizationLanding"></organization-landing>\n    <organization-deals-home *ngIf="viewControl.organizationDealsHome"></organization-deals-home>\n</div>\n'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_user_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_location_type__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_deals_filter_deal_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toast_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore__ = __webpack_require__(403);
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
        this.destoryingCard = false;
        this.moveCardIndex = 0;
        this.likingCard = false;
        this.animatingCard = false;
        this.currentFilter = { dealType: null, onlyVegan: false, onlyVegetarian: false };
        this.currentLocation = new __WEBPACK_IMPORTED_MODULE_2__types_location_type__["a" /* LocaleLocation */]();
        this.initialLoading = true;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                var throwoutHorizontal = Math.abs(offsetX) / (element.offsetWidth / 2.75);
                var throwoutVertical = Math.abs(offsetY) / (element.offsetHeight / 4.5);
                return Math.min(1, Math.sqrt((throwoutHorizontal * throwoutHorizontal) + (throwoutVertical * throwoutVertical))); //pythag
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 50;
            },
            allowedDirections: [__WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].UP, __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].LEFT, __WEBPACK_IMPORTED_MODULE_4_angular2_swing__["Direction"].RIGHT],
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkLoggedIn) {
            this.geolocation.watchPosition().subscribe(function (resp) {
                _this.currentLocation.lat = resp.coords.latitude;
                _this.currentLocation.lng = resp.coords.longitude;
                _this.cardSubscription = _this.cardService.getCardsByLatLng(_this.currentLocation, 100000000).subscribe(function (cardModels) {
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
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    ConsumerComponent.prototype.openConsumerCardList = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */]).present();
    };
    ConsumerComponent.prototype.voteUp = function (like) {
        if (this.organizationViewCards.length > 0) {
            this.transitionString = "all 0.25s";
            if (like) {
                if (!this.likingCard) {
                    this.likingCard = true;
                    this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)";
                    this.handleCard(like);
                }
            }
            else {
                this.handleCard(like);
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-1100px, 0px) rotate(40deg)";
            }
        }
    };
    ConsumerComponent.prototype.moreInfo = function () {
        var _this = this;
        var cardSwipedUp = this.organizationViewCards.shift();
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */], { card: cardSwipedUp }).present().then(function () {
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
                console.log(data);
                _this.currentFilter = data;
                console.log(_this.currentFilter);
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
            subTitle: "Your deal code is: " + this.randomNumber(),
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
        this.filteredCards = this.cards;
        if (filterOptions.dealType || filterOptions.dealType == 0) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return card.dealType == filterOptions.dealType;
            });
        }
        if (filterOptions.onlyVegan) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return card.isVegan && card.isVegetarian;
            });
        }
        else if (filterOptions.onlyVegetarian) {
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
    ConsumerComponent.prototype.randomNumber = function () {
        return String(Math.floor(1000 + Math.random() * 9000));
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-content>\n    <div class="loading-div">\n        <ion-spinner class="ion-spinner-consumer"></ion-spinner>\n        <h2 ion-text style="text-align: center; color: white;">Getting your local deals!</h2>\n    </div>\n\n    <ion-toolbar style="min-height: 56px;">\n        <button (click)="openProfile()" class="button-nav-bar" ion-button menuToggle icon-only>\n            <ion-icon name="contact"></ion-icon>\n        </button>\n        <ion-title style="font-family: Baumans">chalkbord</ion-title>\n        <button (click)="openConsumerCardList()" class="button-nav-bar" ion-button icon-only menuToggle right>\n            <ion-icon name="logo-buffer"></ion-icon>\n        </button>\n    </ion-toolbar>\n\n    <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" (throwoutup)="moreInfo()"\n        id="card-stack" [style.zIindex]="-1000 ">\n        <ion-card #mycards1 swing-card *ngFor="let card of organizationViewCards; let i=index;" [style.zIndex]="-1*i" [ngStyle]="{\'transition\':transitionString}">\n            <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n            <ion-card-content class="card-text">\n                <ion-card-title class="locale-card-title">\n                    {{card.organization.name}}\n                </ion-card-title>\n                {{card.dealDescription}}\n                <p class="locale-card-time">{{getMomentFormatted(card.dealStart, "MM/DD")}} {{getMomentFormatted(card.dealStart, "hh:mm a")}} - {{getMomentFormatted(card.dealEnd,\n                    "hh:mm a")}}</p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n    <ion-grid class="bottom-grid">\n        <ion-row style="height: 100%">\n            <ion-col class="center-content-column" col-2>\n                <button class="transparent-button bottom-button outside-button" ion-button icon-only round>\n                    <ion-icon name="help"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col class="center-content-column" col-4>\n                <button (click)="clickNo()" class="transparent-button bottom-button middle-button" ion-button icon-only round>\n                    <img class="x-button" src="assets/images/x-chalk.png" />\n                </button>\n            </ion-col>\n            <ion-col class="center-content-column" col-4>\n                <button (click)="clickLike()" class="transparent-button bottom-button middle-button" ion-button icon-only round>\n                    <img class="heart-button" src="assets/images/heart-chalk.png" />\n                </button>\n            </ion-col>\n            <ion-col class="center-content-column" col-2>\n                <button (click)="openFilterPopover($event)" class="transparent-button bottom-button outside-button" ion-button icon-only\n                    round>\n                    <ion-icon name="funnel"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
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