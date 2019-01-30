webpackJsonp([0],{

/***/ 102:
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

/***/ 104:
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
    function OrganizationService(database, firebaseEnvironmentService) {
        this.database = database;
        this.firebaseEnvironmentService = firebaseEnvironmentService;
    }
    OrganizationService.prototype.getCurrent = function (uid) {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "organizations", function (ref) { return ref.where("uid", "==", uid); }).valueChanges();
    };
    OrganizationService.prototype.set = function (model) {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "organizations").doc(model.uid).set(model.getAsPlainObject());
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_0__environment_service__["b" /* FirebaseEnvironmentService */]])
    ], OrganizationService);
    return OrganizationService;
}());

//# sourceMappingURL=organization-service.js.map

/***/ }),

/***/ 134:
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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_user_type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_controller_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_firestore_collection_user_service__ = __webpack_require__(54);
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
    function LoginService(toastService, authService, currentUserService, viewControllerService, userService, splashScreen) {
        this.toastService = toastService;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.viewControllerService = viewControllerService;
        this.userService = userService;
        this.splashScreen = splashScreen;
    }
    LoginService.prototype.login = function (formGroup) {
        var _this = this;
        if (formGroup.valid) {
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
                        _this.splashScreen.hide();
                        _this.toastService.showReadableToast("Double check your password");
                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else {
                    _this.splashScreen.hide();
                    _this.toastService.showReadableToast("Sorry, we dont have that username signed up. Please sign up.");
                    console.error("User does not exist!");
                }
            }).catch(function (reason) {
                _this.splashScreen.hide();
                _this.toastService.showReadableToast("Sign in didn't work because: " + reason);
                console.error("User does not exist!");
            });
        }
        else {
            this.splashScreen.hide();
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
        if (this.currentUserService.getCurrentUser().userType == __WEBPACK_IMPORTED_MODULE_5__types_user_type__["b" /* UserType */].Organization)
            this.viewControllerService.setOrganizationHome();
        else
            this.viewControllerService.setConsumerView();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_1__current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_6__view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_7__firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["AngularFireStorage"]])
    ], ImageService);
    return ImageService;
}());

//# sourceMappingURL=image-service.service.js.map

/***/ }),

/***/ 227:
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

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberMeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_keys_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_user_type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(135);
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
    function RememberMeService(deviceService, loginService, splashScreen) {
        this.deviceService = deviceService;
        this.loginService = loginService;
        this.splashScreen = splashScreen;
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
            else {
                _this.delay(300).then(function () {
                    _this.splashScreen.hide();
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
        if (userType == __WEBPACK_IMPORTED_MODULE_4__types_user_type__["b" /* UserType */].Organization)
            return { deviceKey: __WEBPACK_IMPORTED_MODULE_3__login_keys_service__["a" /* LoginKeys */].rememberMeRestKey, tupleKey: __WEBPACK_IMPORTED_MODULE_3__login_keys_service__["a" /* LoginKeys */].restEmailPasswordComboKey };
        else if (userType == __WEBPACK_IMPORTED_MODULE_4__types_user_type__["b" /* UserType */].Consumer)
            return { deviceKey: __WEBPACK_IMPORTED_MODULE_3__login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, tupleKey: __WEBPACK_IMPORTED_MODULE_3__login_keys_service__["a" /* LoginKeys */].userEmailPasswordComboKey };
    };
    RememberMeService.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    RememberMeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], RememberMeService);
    return RememberMeService;
}());

//# sourceMappingURL=remember-me.service.js.map

/***/ }),

/***/ 229:
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(13);
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

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreCardInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_launch_navigator__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_deals_type__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationCardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_location_type__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocationCardsService = (function () {
    function LocationCardsService() {
    }
    LocationCardsService.prototype.setUpCurrentLocationCards = function (geolocation, cardService, currentLocation) {
        return new Promise(function (resolve) {
            if (currentLocation) {
                cardService.getCardsByLatLng(currentLocation, 100000000).subscribe(function (cardModels) {
                    return resolve(cardModels);
                });
            }
            geolocation.watchPosition().subscribe(function (resp) {
                currentLocation = new __WEBPACK_IMPORTED_MODULE_1__types_location_type__["a" /* LocaleLocation */]();
                currentLocation.lat = resp.coords.latitude;
                currentLocation.lng = resp.coords.longitude;
                cardService.getCardsByLatLng(currentLocation, 100000000).subscribe(function (cardModels) {
                    return resolve(cardModels);
                });
            });
        });
    };
    LocationCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LocationCardsService);
    return LocationCardsService;
}());

//# sourceMappingURL=location-cards.service.js.map

/***/ }),

/***/ 271:
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
webpackEmptyAsyncContext.id = 271;

/***/ }),

/***/ 326:
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
webpackEmptyAsyncContext.id = 326;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_firestore_collection_organization_service__ = __webpack_require__(117);
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

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_utils_type__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_user_type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_organization_type__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_location_type__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(13);







var OrganizationSignupComponent = (function () {
    function OrganizationSignupComponent(toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook, firebaseEnvironmentService, deviceService, statusBar) {
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
        this.firebaseEnvironmentService = firebaseEnvironmentService;
        this.deviceService = deviceService;
        this.statusBar = statusBar;
        this.titleClickSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.titleClickObervable = this.titleClickSubject.asObservable();
        this.signUpGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)])],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/[0-9\+\-\ ]/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(13)])],
            website: [''],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            rememberMe: ['']
        });
    }
    OrganizationSignupComponent.prototype.passwordsMatch = function () {
        if (this.signUpGroup.get("password").dirty
            && this.signUpGroup.get("confirmPassword").dirty)
            return this.signUpGroup.get("password").value === this.signUpGroup.get("confirmPassword").value;
        else
            return true;
    };
    OrganizationSignupComponent.prototype.signUp = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__types_utils_type__["a" /* FormBuilderHelper */].markFormGroupTouched(this.signUpGroup);
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
    OrganizationSignupComponent.prototype.iterateEnvironment = function (key) {
        var newEnvironment = __WEBPACK_IMPORTED_MODULE_0__services_firebase_environment_service__["a" /* FirebaseEnvironment */][this.firebaseEnvironmentService.iterateEnvironment()];
        this.toastService.showToast(newEnvironment, 100);
        this.deviceService.putToLocalStorage(key, this.firebaseEnvironmentService.getCurrentEnvironment());
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
                            _this.rememberMeService.handleRememberMeSetting(_this.signUpGroup, __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Organization);
                            var newUser = new __WEBPACK_IMPORTED_MODULE_3__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Organization, organizationName);
                            var newOrganziationModel = new __WEBPACK_IMPORTED_MODULE_4__types_organization_type__["a" /* Organization */](_this.auth.getCurrentUserUID(), organizationName, place.formatted_address, phoneNumber, website, "", new __WEBPACK_IMPORTED_MODULE_5__types_location_type__["a" /* LocaleLocation */](place.geometry.location));
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

/***/ 368:
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

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__remember_me_form_group_type__ = __webpack_require__(870);
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_utils_type__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_deals_type__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_deal_editing_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enums_ionic_screen_sizes_enum__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enums_ionic_platform_enum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(503);
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
    function DealEditorComponent(cardService, formBuilder, uploader, dealEditorService, userService, toastService, platform, actionSheetCtrl, imageService, currentUserService, cameraService, loadingController, alert) {
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
        this.alert = alert;
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
        var _this = this;
        var deleteAlert = this.alert.create({
            buttons: [
                {
                    text: 'Yes',
                    role: 'yes',
                    handler: function () {
                        _this.deleteCurrentDealAndClearFields();
                    }
                },
                {
                    text: 'No',
                    role: 'close',
                }
            ],
            title: "Are you sure?",
            message: "Are you want to delete this deal? Deleting can not be undone."
        });
        deleteAlert.present();
    };
    DealEditorComponent.prototype.deleteCurrentDealAndClearFields = function () {
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
        var _this = this;
        if (this.cardIsEdited()) {
            var likeAlert = this.alert.create({
                buttons: [
                    {
                        text: 'Yes',
                        role: 'yes',
                        handler: function () {
                            _this.newDeal();
                        }
                    },
                    {
                        text: 'No',
                        role: 'close',
                    }
                ],
                title: "Are you sure?",
                message: "Are you want to create a new deal? Changes to this deal will be lost"
            });
            likeAlert.present();
        }
        else
            this.newDeal();
    };
    DealEditorComponent.prototype.newDeal = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button style="color: white;" ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big" style="text-align: right;">Your chalkbord</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <ion-col col-12 col-sm-6 style="padding: 0px; padding-right: 1em;">\n                        <ion-item>\n                            <ion-label floating>Deal description</ion-label>\n                            <ion-input formControlName="dealDescription"></ion-input>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDescription\').errors && dealEditorFormGroup.get(\'dealDescription\').dirty"\n                            class="error-message">Deal description is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Long deal description</ion-label>\n                            <ion-input formControlName="longDealDescription"></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>Deal date</ion-label>\n                            <ion-datetime displayFormat="MMMM DD, YYYY" min="{{now}}" max="{{max}}" formControlName="dealDay"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealDay\').errors && dealEditorFormGroup.get(\'dealDay\').dirty"\n                            class="error-message">Deal date is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>Start time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealStart\').errors && dealEditorFormGroup.get(\'dealStart\').dirty"\n                            class="error-message">Deal start time is required.</p>\n\n                        <ion-item>\n                            <ion-label floating>End time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n                        </ion-item>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealEnd\').errors && dealEditorFormGroup.get(\'dealEnd\').dirty"\n                            class="error-message">Deal end time is required.</p>\n\n                        <!-- <ion-item>\n                            <ion-label>Limited deal number</ion-label>\n                            <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item *ngIf="limitDealNumber">\n                            <ion-label floating>Deal Number</ion-label>\n                            <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n                        </ion-item> -->\n\n                        <div class="deal-type-text">Deal Type</div>\n                        <ion-list style="padding: 1em; padding-right: 0;" radio-group formControlName="dealType">\n                            <ion-item>\n                                <ion-label>Drinks</ion-label>\n                                <ion-radio value="0"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Food</ion-label>\n                                <ion-radio value="1"></ion-radio>\n                            </ion-item>\n                            <!-- <ion-item>\n                                <ion-label>Both</ion-label>\n                                <ion-radio value="2"></ion-radio>\n                            </ion-item> -->\n                        </ion-list>\n                        <p *ngIf="dealEditorFormGroup.get(\'dealType\').errors && dealEditorFormGroup.get(\'dealType\').dirty"\n                            class="error-message">Deal type is required.</p>\n\n                        <ion-item>\n                            <ion-label>Deal is vegetarian</ion-label>\n                            <ion-checkbox formControlName="isVegetarian" [(ngModel)]="isVegetarian" checked="false"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Deal is vegan</ion-label>\n                            <ion-checkbox formControlName="isVegan" [(ngModel)]="isVegan" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col (click)="editPhotoData()" style="padding: 0px; min-width: 285px; min-height: 450px;">\n                        <gs-card [card]="previewCard" [imageSrc]="imageDataForPreview"></gs-card>\n                        <div *ngIf="uneditedDeal" class="editing-status">\n                            <ion-badge>\n                                <div *ngIf="!cardIsEdited()" style="color: green">Deal saved</div>\n                                <div *ngIf="cardIsEdited()" style="color: yellow">Your changes are unsaved</div>\n                            </ion-badge>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </form>\n    </ion-list>\n\n    <div class="button-group center-content">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="delete()">\n            Delete\n        </button>\n\n        <button ion-button (click)="cancel()">\n            New\n        </button>\n    </div>\n</ion-content>\n\n<input #hiddenFileInput type="file" (change)="setImageData($event)" accept="image/*" style="visibility: hidden;" />'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__services_uploader_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_7__services_deal_editing_service__["a" /* DealEditorService */], __WEBPACK_IMPORTED_MODULE_13__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* AlertController */]])
    ], DealEditorComponent);
    return DealEditorComponent;
}());

//# sourceMappingURL=deal-editor.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FirebaseEnvironmentService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseEnvironment; });
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

var FirebaseEnvironmentService = (function () {
    function FirebaseEnvironmentService() {
        this.currentEnvironment = FirebaseEnvironment.Production;
    }
    FirebaseEnvironmentService.prototype.setCurrentEnvironment = function (environment) {
        this.currentEnvironment = environment;
    };
    FirebaseEnvironmentService.prototype.getCurrentEnvironment = function () {
        return this.currentEnvironment;
    };
    FirebaseEnvironmentService.prototype.getCurrentEnvironmentPrefix = function () {
        return FirebaseEnvironment[this.currentEnvironment].toLowerCase() + "\\";
    };
    FirebaseEnvironmentService.prototype.iterateEnvironment = function () {
        if (this.currentEnvironment == FirebaseEnvironment.Production)
            this.currentEnvironment = FirebaseEnvironment.Demo;
        else if (this.currentEnvironment == FirebaseEnvironment.Demo)
            this.currentEnvironment = FirebaseEnvironment.Development;
        else if (this.currentEnvironment == FirebaseEnvironment.Development)
            this.currentEnvironment = FirebaseEnvironment.Production;
        return this.currentEnvironment;
    };
    FirebaseEnvironmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FirebaseEnvironmentService);
    return FirebaseEnvironmentService;
}());

var FirebaseEnvironment;
(function (FirebaseEnvironment) {
    FirebaseEnvironment[FirebaseEnvironment["Demo"] = 0] = "Demo";
    FirebaseEnvironment[FirebaseEnvironment["Development"] = 1] = "Development";
    FirebaseEnvironment[FirebaseEnvironment["Production"] = 2] = "Production";
})(FirebaseEnvironment || (FirebaseEnvironment = {}));
//# sourceMappingURL=environment.service.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["AngularFireStorage"]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=uploader.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
    ToastService.prototype.showToast = function (message, timeInMS) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: timeInMS,
            position: "bottom"
        });
        toast.present();
    };
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
        wordTime *= 1.5;
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
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
    function UserService(database, firebaseEnvironmentService) {
        this.database = database;
        this.firebaseEnvironmentService = firebaseEnvironmentService;
    }
    /**
     * organization users have cards that they created, and consumer users have cards that have
     * "claimed" or intend to use
     *
     * Why are we leaving the Organization with the user when it is saved elsewhere?
     * Great question! The orgs can't be edited so they won't get out of sync and it so much easier to do
     * it this way for now. Subject to change for sure....
     * @param user
     */
    UserService.prototype.set = function (user) {
        var assignedUser;
        if (user.getAsPlainObject)
            assignedUser = Object.assign({}, user.getAsPlainObject());
        else
            assignedUser = Object.assign({}, user);
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "users").doc(user.uid).set(assignedUser);
    };
    UserService.prototype.get = function (uid) {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "users", function (ref) { return ref.where("uid", '==', uid); }).valueChanges(); //this.fireAuth.auth.currentUser.uid
    };
    //Firebase helper function, not intended for production code
    UserService.prototype.copyAllDataFromNonToDemo = function () {
        var _this = this;
        this.database.collection("cards").valueChanges().subscribe(function (cards) {
            for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                var card = cards_1[_i];
                _this.database.collection("demo\\cards").doc(card.id).set(card);
            }
        });
        this.database.collection("users").valueChanges().subscribe(function (users) {
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                _this.database.collection("demo\\users").doc(user.uid).set(user);
            }
        });
        this.database.collection("organizations").valueChanges().subscribe(function (orgs) {
            for (var _i = 0, orgs_1 = orgs; _i < orgs_1.length; _i++) {
                var org = orgs_1[_i];
                _this.database.collection("demo\\organizations").doc(org.uid).set(org);
            }
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_0__environment_service__["b" /* FirebaseEnvironmentService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_deals_type__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_location_type__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_swing__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_Moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__consumer_card_list_consumer_card_list_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_firebase_environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_location_cards_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(103);
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
    function ConsumerComponent(alert, popoverCtrl, launchNavigator, cardService, authService, imageService, modalCtrl, locationService, currentUserService, userService, geolocation, firebaseEnvironmentService, statusBar, splashScreen) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.launchNavigator = launchNavigator;
        this.cardService = cardService;
        this.authService = authService;
        this.imageService = imageService;
        this.modalCtrl = modalCtrl;
        this.locationService = locationService;
        this.currentUserService = currentUserService;
        this.userService = userService;
        this.geolocation = geolocation;
        this.firebaseEnvironmentService = firebaseEnvironmentService;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.transitionString = "";
        this.numberOfCardsToHaveInView = 3;
        this.moveCardIndex = 0;
        this.viewCardIndex = 0;
        this.likingCard = false;
        this.animatingCard = false;
        this.currentFilter = { dealTypes: [], onlyVegan: false, onlyVegetarian: false, dayFilter: __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["a" /* DayFilter */].anytime };
        this.currentLocation = new __WEBPACK_IMPORTED_MODULE_4__types_location_type__["a" /* LocaleLocation */]();
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
            allowedDirections: [__WEBPACK_IMPORTED_MODULE_6_angular2_swing__["Direction"].LEFT, __WEBPACK_IMPORTED_MODULE_6_angular2_swing__["Direction"].RIGHT],
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkLoggedIn) {
            if (this.locationService.cardModels && this.locationService.cardModels.length > 0) {
                this.setUpInitalViewCards(this.locationService.cardModels);
            }
            else {
                this.locationService.setUpCurrentLocationCards(this.geolocation, this.cardService, this.locationService.currentLocation).then(function (cardModels) {
                    _this.setUpInitalViewCards(cardModels);
                });
            }
        }
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
        this.delay(650).then(function () {
            _this.splashScreen.hide();
        });
        this.viewCardIndex = this.numberOfCardsToHaveInView;
    };
    ConsumerComponent.prototype.ionViewDidEnter = function () {
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
    };
    ConsumerComponent.prototype.ionViewDidLoad = function () {
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
    };
    ConsumerComponent.prototype.setUpInitalViewCards = function (cardModels) {
        var _this = this;
        this.initialLoading = false;
        if (cardModels.length > 0) {
            cardModels = cardModels.filter(function (card) {
                if (_this.firebaseEnvironmentService.getCurrentEnvironment() == __WEBPACK_IMPORTED_MODULE_19__services_firebase_environment_service__["a" /* FirebaseEnvironment */].Demo)
                    return !__WEBPACK_IMPORTED_MODULE_16_underscore___default.a.contains(_this.currentUserService.getCurrentUser().cardIds, card.id) && !card.deleted;
                else {
                    return !__WEBPACK_IMPORTED_MODULE_16_underscore___default.a.contains(_this.currentUserService.getCurrentUser().cardIds, card.id) &&
                        !card.deleted &&
                        __WEBPACK_IMPORTED_MODULE_17_Moment___default()(card.dealEnd).isAfter(__WEBPACK_IMPORTED_MODULE_17_Moment___default()());
                }
            });
            if (!this.cards) {
                this.cards = this.cardService.filterNonDuplicateDeals(cardModels);
                this.cards = this.cards.sort(function (a, b) {
                    if (__WEBPACK_IMPORTED_MODULE_17_Moment___default()(a.dealStart).isAfter(b.dealStart))
                        return 1;
                    else
                        return -1;
                });
                this.filterCards(this.currentFilter);
            }
            else
                __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(this.organizationViewCards, cardModels);
        }
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
        if (!this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '25';
        else
            return '0';
    };
    ConsumerComponent.prototype.getAuxHelpZ = function () {
        if (this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '25';
        else
            return '0';
    };
    ConsumerComponent.prototype.getBottomGridZ = function () {
        if (this.swipeHelpOverlayHidden && this.auxHelpOverlayHidden)
            return '-10';
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
        var filterPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["b" /* FilterDealComponent */], this.currentFilter, { cssClass: 'custom-popover' });
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
            message: "Click the button in the top right to use your deal at the restaurant. Have fun!"
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
        for (var i = this.viewCardIndex - this.numberOfCardsToHaveInView; i < this.cards.length; i++)
            this.filteredCards.push(this.cards[i]);
        if (filterOptions.dealTypes.length > 0) {
            this.filteredCards = this.filteredCards.filter(function (card) {
                return filterOptions.dealTypes.findIndex(function (x) { return x == card.dealType; }) >= 0 || card.dealType == __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["a" /* DealType */].Meal;
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
        if (filterOptions.dayFilter != __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["a" /* DayFilter */].anytime) {
            if (filterOptions.dayFilter == __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["a" /* DayFilter */].today) {
                this.filteredCards = this.filteredCards.filter(function (card) {
                    return __WEBPACK_IMPORTED_MODULE_17_Moment___default()().dayOfYear() == __WEBPACK_IMPORTED_MODULE_17_Moment___default()(card.dealStart).dayOfYear() &&
                        __WEBPACK_IMPORTED_MODULE_17_Moment___default()().year() == __WEBPACK_IMPORTED_MODULE_17_Moment___default()(card.dealStart).year();
                });
            }
            else if (filterOptions.dayFilter == __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["a" /* DayFilter */].thisWeek) {
                this.filteredCards = this.filteredCards.filter(function (card) {
                    return __WEBPACK_IMPORTED_MODULE_17_Moment___default()(card.dealStart).isBefore(__WEBPACK_IMPORTED_MODULE_17_Moment___default()().add('7', 'days')) &&
                        __WEBPACK_IMPORTED_MODULE_17_Moment___default()().year() == __WEBPACK_IMPORTED_MODULE_17_Moment___default()(card.dealStart).year();
                });
            }
        }
        this.filteredCards = this.filteredCards.sort(function (a, b) {
            if (__WEBPACK_IMPORTED_MODULE_17_Moment___default()(a.dealStart).isAfter(b.dealStart))
                return 1;
            else
                return -1;
        });
        this.setUpViewCards();
        this.delay(600).then(function () {
            var topCard = _this.swingCards.toArray()[0];
            if (topCard)
                topCard.getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
        });
    };
    ConsumerComponent.prototype.addCardToStack = function () {
        if (this.viewCardIndex < this.filteredCards.length && this.filteredCards[this.viewCardIndex] != null) {
            var nextCard = this.filteredCards[this.viewCardIndex];
            this.imageService.setDealImageURL(nextCard);
            this.organizationViewCards.push(nextCard);
            for (var i = 0; i < this.swingCards.toArray.length; i++) {
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
            }
        }
        this.viewCardIndex++;
    };
    ConsumerComponent.prototype.setUpViewCards = function () {
        for (var i = 0; i < this.numberOfCardsToHaveInView; i++) {
            if (this.filteredCards[i]) {
                this.imageService.setDealImageURL(this.filteredCards[i]);
                this.organizationViewCards.push(this.filteredCards[i]);
            }
        }
    };
    ConsumerComponent.prototype.filterIsApplied = function () {
        return (this.currentFilter.dealTypes && this.currentFilter.dealTypes.length > 0)
            || this.currentFilter.onlyVegan
            || this.currentFilter.onlyVegetarian
            || this.currentFilter.dayFilter != __WEBPACK_IMPORTED_MODULE_8__filter_deals_filter_deal_component__["a" /* DayFilter */].anytime;
    };
    //used simply to async wait for something
    ConsumerComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ConsumerComponent.prototype.openProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__user_profile_user_profile_component__["a" /* UserProfileComponent */], { isOrganization: false }).present();
    };
    ConsumerComponent.prototype.getMomentFormatted = function (dateTime, format) {
        return __WEBPACK_IMPORTED_MODULE_17_Moment___default()(dateTime).format(format);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular2_swing__["SwingStackComponent"])
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_core__["QueryList"])
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<div *ngIf="!swipeHelpOverlayHidden || !auxHelpOverlayHidden" class="help-overlay" (click)="hideHelpOverlay()" padding>\n    <div *ngIf="!swipeHelpOverlayHidden" class="help-text">\n        <img class="swipe-help-arrow" src="assets/images/straight-arrow-1.png" />\n        <img class="swipe-help-arrow" style="margin-bottom: 64px;" src="assets/images/straight-arrow-2.png" />\n        Swipe right or press the heart to claim a deal or swipe left or press the X to see the next deal.\n    </div>\n    <div *ngIf="!auxHelpOverlayHidden && swipeHelpOverlayHidden">\n        <img class="claimed-help-arrow" src="assets/images/arrow-3.png" />\n        <div class="claimed-help-text">\n            Tap here to see the deals you have claimed and use them\n        </div>\n        <img class="filter-help-arrow" src="assets/images/arrow-4.png" />\n        <div class="filter-help-text">\n            Tap here to filter for different types of deals\n        </div>\n    </div>\n</div>\n\n<div class="loading-div">\n    <div *ngIf="initialLoading">\n        <ion-spinner class="ion-spinner-consumer"></ion-spinner>\n        <h2 ion-text style="text-align: center; color: white;">Getting your local deals!</h2>\n    </div>\n    <div *ngIf="!initialLoading">\n        <h2 class="no-consumer-cards-text" ion-text>That\'s all the deals in your area.</h2>\n        <h2 *ngIf="filterIsApplied()" class="no-consumer-cards-text" style="margin-top: 0" ion-text>Try removing\n            filters.</h2>\n        <h2 class="bottom-no-consumer-card-text" ion-text>Check back later!</h2>\n    </div>\n</div>\n\n<ion-header no-border style="z-index: -20;">\n    <ion-toolbar style="min-height: 56px;" transparent>\n        <button (click)="openProfile()" class="button-nav-bar button-top-left" ion-button icon-only [clear]="true">\n            <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n        </button>\n        <img class="textured-name" src="assets/images/chalk-logo.png" />\n        <button class="button-top-right" (click)="openConsumerCardList()" ion-button icon-only [clear]="true">\n            <img class="card-stack-img" src="assets/images/card-stack.png" />\n        </button>\n    </ion-toolbar>\n</ion-header>\n\n<img *ngIf="getAuxHelpZ() == \'25\'" class="card-stack-img-help" src="assets/images/card-stack.png" />\n<!--I am sorry-->\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack"\n    [style.zIindex]="-1000 ">\n    <ion-card #mycards1 swing-card *ngFor="let card of organizationViewCards; let i=index;" [style.zIndex]="-1*i"\n        [ngStyle]="{\'transition\':transitionString}" (click)="moreInfo()">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n        <img class="gradient-on-card" src="assets/images/gradient.png" />\n\n        <ion-card-content class="card-text card-inner-shadow">\n            <ion-card-title class="locale-card-title">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n            <p class="locale-card-time">Available on {{getMomentFormatted(card.dealStart,\n                "MM/DD")}}\n                between {{getMomentFormatted(card.dealStart, "hh:mm a")}} -\n                {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<ion-grid class="bottom-grid" [ngStyle]="{\'z-index\':getBottomGridZ()}">\n    <ion-row style="height: 100%">\n        <ion-col class="center-content-column" col-2>\n            <button (click)="showHelpOverlay()" class="transparent-button bottom-button outside-button" ion-button\n                icon-only round>\n                <ion-icon name="help"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-4>\n            <button [ngStyle]="{\'z-index\':getSwipeHelpZ()}" (click)="clickNo()" class="transparent-button bottom-button middle-button"\n                ion-button icon-only round>\n                <img class="x-button" src="assets/images/x-chalk.png" />\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-4>\n            <button [ngStyle]="{\'z-index\':getSwipeHelpZ()}" (click)="clickLike()" class="transparent-button bottom-button middle-button"\n                ion-button icon-only round>\n                <img class="heart-button" src="assets/images/heart-chalk.png" />\n            </button>\n        </ion-col>\n        <ion-col class="center-content-column" col-2>\n            <button [ngStyle]="{\'z-index\':getAuxHelpZ()}" (click)="openFilterPopover($event)" class="transparent-button bottom-button outside-button aux-button"\n                ion-button icon-only round>\n                <ion-icon name="funnel"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_10__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_firebase_image_service_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_20__services_location_cards_service__["a" /* LocationCardsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_19__services_firebase_environment_service__["b" /* FirebaseEnvironmentService */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());

//# sourceMappingURL=consumer.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterDealComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
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
        this.setDealType(appliedFilterOptions.dealTypes);
        this.boolValues.vegetarian = appliedFilterOptions.onlyVegetarian;
        this.boolValues.vegan = appliedFilterOptions.onlyVegan;
        this.dayFilter = DayFilter[appliedFilterOptions.dayFilter];
    }
    FilterDealComponent.prototype.applyFilters = function () {
        var returnData = {
            onlyVegetarian: this.boolValues.vegetarian,
            onlyVegan: this.boolValues.vegan,
            dealTypes: this.getDealTypesValue(),
            dayFilter: DayFilter[this.dayFilter]
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class="title">I am looking for...</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Drinks</div>\n        <button (click)="toggle(\'drink\')" outline ion-button icon-only round>\n          <ion-icon name="beer" color="{{getColor(\'drink\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Food</div>\n        <button (click)="toggle(\'food\')" outline ion-button icon-only round>\n          <ion-icon name="pizza" color="{{getColor(\'food\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="title">My Preferences are...</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="label">Vegan</div>\n        <button (click)="toggle(\'vegan\')" outline ion-button icon-only round>\n          <ion-icon name="leaf" color="{{getColor(\'vegan\')}}"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <div class="label">Vegetarian</div>\n        <button (click)="toggle(\'vegetarian\')" outline ion-button icon-only round>\n          <ion-icon name="nutrition" color="{{getColor(\'vegetarian\')}}"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="title">I am looking for deals...</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-list style="width: 100%" radio-group [(ngModel)]="dayFilter">\n        <ion-item>\n          <ion-label>Today</ion-label>\n          <ion-radio value="today"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>In the next week</ion-label>\n          <ion-radio value="thisWeek"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Anytime</ion-label>\n          <ion-radio value="anytime"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button style="width: 100%;" ion-button (click)="applyFilters()">Apply\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/,
            selector: 'filter-deal',
            styleUrls: ['/filter-deal.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FilterDealComponent);
    return FilterDealComponent;
}());

var DayFilter;
(function (DayFilter) {
    DayFilter[DayFilter["today"] = 0] = "today";
    DayFilter[DayFilter["thisWeek"] = 1] = "thisWeek";
    DayFilter[DayFilter["anytime"] = 2] = "anytime";
})(DayFilter || (DayFilter = {}));
//# sourceMappingURL=filter-deal.component.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
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
        this.isOrganization = this.params.get("isOrganization");
        this.userEmail = this.authService.getCurrentUserEmail();
        this.firstName = this.currentUserService.getCurrentUser().firstName;
    }
    UserProfileComponent.prototype.save = function () {
        var _this = this;
        if (this.authService.getCurrentUserEmail() != this.userEmail) {
            this.authService.updateCurrentUserEmail(this.userEmail).then(function () {
                _this.toastService.showReadableToast("Email updated, use this email for future log ins");
            }).catch(function () {
                //this.toastService.showReadableToast("Email not updated: " + reason);
            });
        }
        if (this.currentUserService.getCurrentUser().firstName != this.firstName) {
            var currUser = this.currentUserService.getCurrentUser();
            currUser.firstName = this.firstName;
            this.userService.set(currUser).then(function () {
                _this.toastService.showReadableToast("First name updated");
            }).catch(function () {
                //this.toastService.showReadableToast("Firstser not updated: " + reason);
            });
        }
    };
    UserProfileComponent.prototype.valueChanged = function () {
        return this.authService.getCurrentUserEmail() != this.userEmail || this.currentUserService.getCurrentUser().firstName != this.firstName;
    };
    UserProfileComponent.prototype.closeProfile = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('editButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Button */])
    ], UserProfileComponent.prototype, "editButton", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<ion-content>\n    <modal-navbar [organizationModal]="isOrganization" [profileModal]="true"></modal-navbar>\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>First Name</ion-label>\n        <ion-input [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="userEmail"></ion-input>\n    </ion-item>\n    <button *ngIf="!isOrganization && valueChanged()" (click)="save()" class="reset-button" ion-button> save </button>\n    <div class="help-support-text"> For help, please contact us at <a href="mailto:support@chalkbord.com">support@chalkbord.com</a>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
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

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerCardList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_Moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_deals_type__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_card_info_more_card_info_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_image_service_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firebase_environment_service__ = __webpack_require__(42);
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
    function ConsumerCardList(currentUserService, modalCtrl, imageService, firebaseEnvironmentService) {
        var _this = this;
        this.currentUserService = currentUserService;
        this.modalCtrl = modalCtrl;
        this.imageService = imageService;
        this.firebaseEnvironmentService = firebaseEnvironmentService;
        this.cardList = [];
        this.cardClass = "user-card-list";
        this.currentUserService.getAllCards().subscribe(function (deals) {
            var currentDeals = [];
            deals.forEach(function (card) {
                _this.addNonDeletedCurrentCardsByEnvironment(card, currentDeals);
            });
            __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(currentDeals, _this.cardList);
        });
    }
    ConsumerCardList.prototype.moreInfo = function (card) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */], { card: card, isCardList: true }).present();
    };
    ConsumerCardList.prototype.addNonDeletedCurrentCardsByEnvironment = function (card, cardsToAddTo) {
        if (this.firebaseEnvironmentService.getCurrentEnvironment() == __WEBPACK_IMPORTED_MODULE_7__services_firebase_environment_service__["a" /* FirebaseEnvironment */].Demo) {
            if (!card.deleted) {
                cardsToAddTo.push(card);
                this.imageService.setDealImageURL(card);
            }
        }
        else {
            if (!card.deleted && __WEBPACK_IMPORTED_MODULE_0_Moment___default()(card.dealEnd).isAfter(__WEBPACK_IMPORTED_MODULE_0_Moment___default()())) {
                this.imageService.setDealImageURL(card);
                cardsToAddTo.push(card);
            }
        }
    };
    ConsumerCardList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/'<ion-header>\n    <modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n</ion-header>\n<ion-content>\n    <gs-card *ngFor="let currCard of cardList;" (click)="moreInfo(currCard)" [card]="currCard" [inputClass]="cardClass"></gs-card>\n    <div class="no-claimed-cards-text" *ngIf="cardList.length == 0">\n        Swipe right to add to your claimed deals!\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/,
            selector: 'consumer-card-list',
            styleUrls: ['/consumer-card-list.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__services_firebase_image_service_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_7__services_firebase_environment_service__["b" /* FirebaseEnvironmentService */]])
    ], ConsumerCardList);
    return ConsumerCardList;
}());

//# sourceMappingURL=consumer-card-list.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* unused harmony export SignUpReturnCode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
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

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(758);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocaleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_type__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_type__ = __webpack_require__(368);
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

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_chalkbord_website_info_chalkbord_website_info_component__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_privacy_policy_privacy_policy_component__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_firestore_collection_organization_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_consumer_landing_consumer_landing_component__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_organization_deals_home_organization_deals_home_component__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_organization_deal_list_organization_deal_list_component__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_modal_navbar_modal_navbar_component__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_more_card_info_more_card_info_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_draggable__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_consumer_consumer_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_swing__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_deal_editor_deal_editor_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_filter_deals_filter_deal_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_launch_navigator__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_storage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_firebase_image_service_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_uploader_service__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_view_controller_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_unique_device_id__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_user_profile_user_profile_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_browser_home_browser_home_component__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_common_http__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_deal_editing_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_organization_landing_organization_landing_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_remember_me_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_consumer_card_list_consumer_card_list_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_toggle_icon_button_toggle_icon_button_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_swipe_listener_service__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_call_number__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_consumer_container_consumer_container_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_location_cards_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_router__ = __webpack_require__(916);
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
}(__WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["d" /* HammerGestureConfig */]));

var appRoutes = [
    {
        path: 'policy', component: __WEBPACK_IMPORTED_MODULE_1__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_chalkbord_website_info_chalkbord_website_info_component__["a" /* ChalkbordWebsiteInfoComponent */]
    },
    {
        path: 'your-chalkbord', component: __WEBPACK_IMPORTED_MODULE_45__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */]
    },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_20__components_consumer_consumer_component__["a" /* ConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_organization_deal_list_organization_deal_list_component__["a" /* OrganizationDealListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_filter_deals_filter_deal_component__["b" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_consumer_landing_consumer_landing_component__["a" /* ConsumerLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_organization_deals_home_organization_deals_home_component__["a" /* OrganizationDealsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__["a" /* LocaleCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */],
                __WEBPACK_IMPORTED_MODULE_51__components_toggle_icon_button_toggle_icon_button_component__["a" /* ToggleIconButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_consumer_container_consumer_container_component__["a" /* ConsumerContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_52__services_swipe_listener_service__["a" /* SwipeVertical */],
                __WEBPACK_IMPORTED_MODULE_1__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_chalkbord_website_info_chalkbord_website_info_component__["a" /* ChalkbordWebsiteInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_57__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false }),
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_14_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* LocaleApp */], {
                    platforms: {
                        ios: {
                            statusbarPadding: true
                        }
                    }
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyCbyIgW7iO9OrPoK9Ozr6EsOGrdN8v9HKo",
                    authDomain: "locale-4112a.firebaseapp.com",
                    databaseURL: "https://locale-4112a.firebaseio.com",
                    projectId: "locale-4112a",
                    storageBucket: "locale-4112a.appspot.com",
                    messagingSenderId: "9042973249"
                }),
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_storage__["AngularFireStorageModule"],
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_42__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_20__components_consumer_consumer_component__["a" /* ConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_organization_deal_list_organization_deal_list_component__["a" /* OrganizationDealListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_filter_deals_filter_deal_component__["b" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_consumer_landing_consumer_landing_component__["a" /* ConsumerLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_organization_deals_home_organization_deals_home_component__["a" /* OrganizationDealsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__["a" /* LocaleCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_more_card_info_more_card_info_component__["a" /* MoreCardInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */],
                __WEBPACK_IMPORTED_MODULE_51__components_toggle_icon_button_toggle_icon_button_component__["a" /* ToggleIconButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_chalkbord_website_info_chalkbord_website_info_component__["a" /* ChalkbordWebsiteInfoComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_15__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_16_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                },
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_47__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */],
                __WEBPACK_IMPORTED_MODULE_32__services_firebase_authorization_service__["a" /* AuthorizationService */],
                __WEBPACK_IMPORTED_MODULE_33__services_firebase_image_service_service__["a" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_35__services_uploader_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_36__services_view_controller_service__["a" /* ViewControllerService */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_38__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_40__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_43__services_deal_editing_service__["a" /* DealEditorService */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_3__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */],
                __WEBPACK_IMPORTED_MODULE_48__services_firebase_firestore_collection_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__["a" /* CurrentUserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_46__services_remember_me_service__["a" /* RememberMeService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_2__services_firebase_environment_service__["b" /* FirebaseEnvironmentService */],
                __WEBPACK_IMPORTED_MODULE_55__services_location_cards_service__["a" /* LocationCardsService */],
                __WEBPACK_IMPORTED_MODULE_56__ionic_native_splash_screen__["a" /* SplashScreen */],
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChalkbordWebsiteInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChalkbordWebsiteInfoComponent = (function () {
    function ChalkbordWebsiteInfoComponent() {
    }
    ChalkbordWebsiteInfoComponent.prototype.goToGooglePlayStore = function () {
        window.open("https://play.google.com/store/apps/details?id=locale.alpha", '_system');
    };
    ChalkbordWebsiteInfoComponent.prototype.goToAppleAppStore = function () {
        window.open("https://itunes.apple.com/us/app/chalkbord/id1376925008?ls=1&mt=8", '_system');
    };
    ChalkbordWebsiteInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/chalkbord-website-info/chalkbord-website-info.component.html"*/'<div class="center-home-text">chalkbord</div>\n\n<ion-card class="centered-card">\n    <ion-card-content>\n        <div class="center-about-text">\n            chalkbord is a peer to peer deal application for getting you the latest restaurant deals.\n            Find us on your app store!\n        </div>\n\n        <div class="center-content cta-button-row">\n            <img (click)="goToAppleAppStore()" class="app-store-cta apple" src="assets/images/apple-app-store-cta.png" />\n            <img (click)="goToGooglePlayStore()" class="app-store-cta google-play" src="assets/images/googleplay-cta.png" />\n        </div>\n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/Contence/locale/src/components/chalkbord-website-info/chalkbord-website-info.component.html"*/,
            selector: 'chalkbord-website-info',
            styleUrls: ['/chalkbord-website-info.component.scss']
        })
    ], ChalkbordWebsiteInfoComponent);
    return ChalkbordWebsiteInfoComponent;
}());

//# sourceMappingURL=chalkbord-website-info.component.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/privacy-policy/privacy-policy.component.html"*/'<div class="center-home-text-abs">Privacy Policy and Terms of Use</div>\n\n<ion-card class="terms-policy center-policy">\n    <ion-card-content>\n        <iframe style="width: 100%; height: 575px;" src="https://docs.google.com/document/d/e/2PACX-1vSEtdVjG9Cvi8kfcplgDoQqVqB7lTjuVozk3f7SScQ6sh1daysrJI8e_OfJxop_BHN3Um4zsy3NIJ6u/pub?embedded=true"></iframe>\n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/Contence/locale/src/components/privacy-policy/privacy-policy.component.html"*/,
            selector: 'privacy-policy',
            styleUrls: ['/privacy-policy.component.scss']
        })
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());

//# sourceMappingURL=privacy-policy.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* unused harmony export EmailPasswordTuple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
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
    DeviceService.prototype.putToLocalStorage = function (key, value) {
        return this.storage.set(key, value);
    };
    DeviceService.prototype.getFromLocalStorage = function (key) {
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(13);
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
    function CardDataService(database, firebaseEnvironmentService) {
        this.database = database;
        this.firebaseEnvironmentService = firebaseEnvironmentService;
    }
    CardDataService.prototype.getAll = function () {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards").valueChanges();
    };
    CardDataService.prototype.get = function (id) {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards", function (ref) { return ref.where("id", "==", id); }).valueChanges();
    };
    CardDataService.prototype.getMulti = function (ids, getDeleted) {
        if (ids && ids.length > 0) {
            var observables = [];
            var _loop_1 = function (id) {
                if (getDeleted)
                    observables.push(this_1.database.collection(this_1.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards", function (ref) { return ref.where("id", "==", id); }).valueChanges());
                else
                    observables.push(this_1.database.collection(this_1.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards", function (ref) { return ref.where("id", "==", id).where("deleted", "==", false); }).valueChanges());
            };
            var this_1 = this;
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                _loop_1(id);
            }
            var allCardsObservableMerged = __WEBPACK_IMPORTED_MODULE_4_rxjs__["merge"].apply(void 0, observables); //so if you just pass it an array
            //you get an Observable<Observable<>> but if you add ... it passes each observable seperately giving a single observable out
            return allCardsObservableMerged;
        }
        else
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs__["of"])([]);
    };
    CardDataService.prototype.setMutli = function (models) {
        var _this = this;
        var cards = models.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.database.collection(_this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards").doc(card.id).set(card);
        });
    };
    CardDataService.prototype.set = function (model) {
        var assignedCard;
        if (model.getAsPlainObject)
            assignedCard = Object.assign({}, model.getAsPlainObject());
        else
            assignedCard = Object.assign({}, model);
        delete (assignedCard.imageURL);
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards").doc(model.id).set(assignedCard);
    };
    CardDataService.prototype.delete = function (id) {
        return this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards").doc(id).delete();
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
        var latDeals = this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards", function (ref) { return ref.where("organization.location.lat", "<=", (location.lat + latitudeRadiusLength))
            .where("organization.location.lat", ">=", (location.lat - latitudeRadiusLength))
            .where("deleted", "==", false); })
            .valueChanges();
        var lngDeals = this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards", function (ref) { return ref.where("organization.location.lng", "<=", (location.lng + changeInLng))
            .where("organization.location.lng", ">=", (location.lng - changeInLng))
            .where("deleted", "==", false); })
            .valueChanges();
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["merge"].apply(void 0, [latDeals, lngDeals]);
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
        this.database.collection(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "cards").valueChanges().subscribe(function (cards) {
            __WEBPACK_IMPORTED_MODULE_3_underscore___default.a.map(cards, function (card) {
                card.deleted = false;
                _this.set(card);
            });
        });
    };
    CardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_0__environment_service__["b" /* FirebaseEnvironmentService */]])
    ], CardDataService);
    return CardDataService;
}());

//# sourceMappingURL=card-data.service.js.map

/***/ }),

/***/ 79:
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
        this.organizationDealsHome = false;
    }
    ViewControllerService.prototype.setConsumerView = function () {
        this.consumer = true;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setSignUpView = function () {
        this.consumer = false;
        this.userLanding = true;
        this.browserHome = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setBrowserHome = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = true;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setOrganizationPortal = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationDealsHome = false;
    };
    ViewControllerService.prototype.setOrganizationHome = function () {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
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

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__organization_signup_organization_signup_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_remember_me_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_user_login_form_group_type__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__types_user_type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_organization_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs__ = __webpack_require__(13);
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



















var lastConsumerEnvKey = "lastConsumerEnvKey";
var ConsumerLandingComponent = (function (_super) {
    __extends(ConsumerLandingComponent, _super);
    function ConsumerLandingComponent(formBuilder, auth, rememberMeService, alert, organizationService, toastService, currentUserService, deviceStorage, userService, loginService, facebook, firebaseEnvironmentService, statusBar) {
        var _this = _super.call(this, toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook, firebaseEnvironmentService, deviceStorage, statusBar) || this;
        _this.signingUp = true;
        _this.isOrg = false;
        _this.attemptingSignup = false;
        _this.attemptingLogin = false;
        _this.remembered = false;
        _this.hideGoBackButton = false;
        _this.userSignUpGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* Validators */].required],
            rememberMe: ['']
        });
        _this.userLogInGroup = new __WEBPACK_IMPORTED_MODULE_6__types_user_login_form_group_type__["a" /* UserLoginFormGroup */](_this.formBuilder);
        _this.deviceService.getSetting(lastConsumerEnvKey).then(function (lastEnvironment) {
            if (lastEnvironment || lastEnvironment == 0)
                _this.firebaseEnvironmentService.setCurrentEnvironment(lastEnvironment);
            console.log(_this.firebaseEnvironmentService.getCurrentEnvironment());
            _this.rememberMeService.loginFromRememberMe(_this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_12__types_user_type__["b" /* UserType */].Consumer);
        });
        _this.titleClickObervable.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["bufferCount"])(5)).subscribe(function () {
            _this.iterateEnvironment(lastConsumerEnvKey);
        });
        __WEBPACK_IMPORTED_MODULE_18_rxjs__["Observable"].fromEvent(window, 'keyboardWillShow').subscribe(function () {
            _this.hideGoBackButton = true;
            _this.goBackButton.nativeElement.style['bottom'] = "-18%";
        });
        __WEBPACK_IMPORTED_MODULE_18_rxjs__["Observable"].fromEvent(window, 'keyboardWillHide').subscribe(function () {
            _this.hideGoBackButton = false;
            _this.goBackButton.nativeElement.style['bottom'] = "2%";
        });
        return _this;
    }
    ConsumerLandingComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
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
                var userType = __WEBPACK_IMPORTED_MODULE_12__types_user_type__["b" /* UserType */].Consumer;
                this.auth.checkSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUp(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1).then(function () {
                                _this.rememberMeService.handleRememberMeSetting(_this.userSignUpGroup, __WEBPACK_IMPORTED_MODULE_12__types_user_type__["b" /* UserType */].Consumer);
                                var newUser = new __WEBPACK_IMPORTED_MODULE_12__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), userType, firstName_1);
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
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_12__types_user_type__["b" /* UserType */].Consumer);
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
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('welcomeScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "welcomeScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('logInScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "logInScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('userSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "userSignUpScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('goBackButton'),
        __metadata("design:type", Object)
    ], ConsumerLandingComponent.prototype, "goBackButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('userTypeChoiceFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "userTypeChoiceFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])('restaurantSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "restaurantSignUpFields", void 0);
    ConsumerLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/'<div id="map" name="map">\n</div>\n<div class="background-photo">\n</div>\n<ion-content style="background-color: transparent">\n    <div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n        <div (click)="titleClickSubject.next($event)" class="center-text">chalkbord</div>\n        <div class="button-area">\n            <button class="welcome-button" ion-button (click)="goToUserTypeScreen()"> sign up </button>\n            <div class="or-text">or</div>\n            <button class="welcome-button" ion-button outline (click)="goToLoginScreen()"> login </button>\n        </div>\n    </div>\n    <div #logInScreen class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form ">\n                    <form [formGroup]="userLogInGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button class="welcome-button" ion-button (click)="loginHandler()"> login </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookLogin()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n        <button class="welcome-button" ion-button outline (click)="resetPassword()"> reset password </button>\n    </div>\n    <div #userTypeChoiceFields class="animate-form offset-form" style="height: 100%;">\n        <ion-grid style="height: 100%">\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="consumer-type-button" ion-button (click)="goToUserSignUpScreen()">\n                        <ion-icon class="sign-up-icon" name="contact"></ion-icon> personal\n                    </button>\n                </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content or-text"> or </ion-col>\n            </ion-row>\n            <ion-row style="height: 33%">\n                <ion-col class="center-content">\n                    <button class="restaurant-type-button" ion-button outline (click)="goToRestaurantSignUpScreen()">\n                        <ion-icon class="sign-up-icon" name="restaurant"></ion-icon> restaurant\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div #userSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="userSignUpGroup">\n                        <ion-item>\n                            <ion-label floating>First Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUpUser()"> sign up </button>\n        <div class="or-text">or</div>\n        <button ion-button round class="welcome-button facebook-button" (click)="facebookSignUp()">\n            <ion-icon class="facebook-icon" name="logo-facebook"></ion-icon>facebook\n        </button>\n    </div>\n    <div #restaurantSignUpFields class="animate-form offset-form">\n        <ion-card>\n            <ion-card-content>\n                <ion-list class="centered-form">\n                    <form [formGroup]="signUpGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email" formControlName="email"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make\n                            sure your email is formatted correctly.</p>\n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make\n                            sure your password is at least eight characters long</p>\n                        <ion-item>\n                            <ion-label floating>Confirm Password</ion-label>\n                            <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                        </ion-item>\n                        <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n                        <ion-item>\n                            <ion-label floating>Organization Name</ion-label>\n                            <ion-input formControlName="name"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant\n                            name is required</p>\n                        <ion-item class="padding-right">\n                            <ion-label floating>Restaurant Phone Number</ion-label>\n                            <ion-input formControlName="phoneNumber"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'phoneNumber\').errors && signUpGroup.get(\'phoneNumber\').dirty" class="error-message">Restaurant\n                            phone number is required and needs to be 10 numbers</p>\n                        <ion-item class="padding-right">\n                            <ion-label floating>Restaurant Website</ion-label>\n                            <ion-input formControlName="website"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'website\').errors && signUpGroup.get(\'website\').dirty" class="error-message">Restaurant\n                            website is required and needs to be a valid website</p>\n                        <ion-item>\n                            <ion-label floating>Address </ion-label>\n                            <ion-input formControlName="address"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>City</ion-label>\n                            <ion-input formControlName="city"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>State</ion-label>\n                            <ion-input formControlName="state"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State\n                            is required</p>\n                        <ion-item>\n                            <ion-label floating>Zipcode</ion-label>\n                            <ion-input formControlName="zipcode"></ion-input>\n                        </ion-item>\n                        <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode\n                            is required</p>\n                        <ion-item>\n                            <ion-label>Stay signed in</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <button ion-button class="welcome-button" (click)="signUp()"> sign up </button>\n    </div>\n</ion-content>\n<div [hidden]="hideGoBackButton" #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/,
            selector: 'consumer-landing',
            styleUrls: ['/consumer-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_remember_me_service__["a" /* RememberMeService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_13__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_17__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2__services_firebase_environment_service__["b" /* FirebaseEnvironmentService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_status_bar__["a" /* StatusBar */]])
    ], ConsumerLandingComponent);
    return ConsumerLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_4__organization_signup_organization_signup_component__["a" /* OrganizationSignupComponent */]));

//# sourceMappingURL=consumer-landing.component.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberMeFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
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

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deal_editor_deal_editor_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_keys_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_ionic_platform_enum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_view_controller_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_current_user_service__ = __webpack_require__(34);
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
    function OrganizationDealsHomeComponent(toastService, deviceService, platform, viewControllerService, currentUserService, splashScreen) {
        this.toastService = toastService;
        this.deviceService = deviceService;
        this.platform = platform;
        this.viewControllerService = viewControllerService;
        this.currentUserService = currentUserService;
        this.splashScreen = splashScreen;
        this.root = __WEBPACK_IMPORTED_MODULE_2__deal_editor_deal_editor_component__["a" /* DealEditorComponent */];
    }
    OrganizationDealsHomeComponent.prototype.ngAfterViewInit = function () {
        this.splashScreen.hide();
    };
    OrganizationDealsHomeComponent.prototype.logout = function () {
        var _this = this;
        var toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");
        toast.onDidDismiss(function (data, dismissType) {
            data;
            if (dismissType == "close") {
                _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_4__services_login_keys_service__["a" /* LoginKeys */].rememberMeRestKey, false);
                _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_4__services_login_keys_service__["a" /* LoginKeys */].rememberMeUserKey, false);
                if (_this.platform.is(__WEBPACK_IMPORTED_MODULE_5__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core))
                    _this.viewControllerService.setBrowserHome();
                else
                    _this.viewControllerService.setSignUpView();
                _this.currentUserService.removeCurrentUser();
            }
        });
        toast.present();
    };
    OrganizationDealsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n                <button (click)="logout()" ion-button icon-only menuToggle right>\n                    <ion-icon style="color: white;" name="log-out"></ion-icon>\n                </button>\n            </ion-toolbar>\n        </ion-header>\n        <organization-deal-list></organization-deal-list>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/,
            selector: 'organization-deals-home',
            styleUrls: ['/organization-deals-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_7__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_9__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], OrganizationDealsHomeComponent);
    return OrganizationDealsHomeComponent;
}());

//# sourceMappingURL=organization-deals-home.component.js.map

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 376,
	"./ar-dz": 377,
	"./ar-dz.js": 377,
	"./ar-kw": 378,
	"./ar-kw.js": 378,
	"./ar-ly": 379,
	"./ar-ly.js": 379,
	"./ar-ma": 380,
	"./ar-ma.js": 380,
	"./ar-sa": 381,
	"./ar-sa.js": 381,
	"./ar-tn": 382,
	"./ar-tn.js": 382,
	"./ar.js": 376,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bm": 386,
	"./bm.js": 386,
	"./bn": 387,
	"./bn.js": 387,
	"./bo": 388,
	"./bo.js": 388,
	"./br": 389,
	"./br.js": 389,
	"./bs": 390,
	"./bs.js": 390,
	"./ca": 391,
	"./ca.js": 391,
	"./cs": 392,
	"./cs.js": 392,
	"./cv": 393,
	"./cv.js": 393,
	"./cy": 394,
	"./cy.js": 394,
	"./da": 395,
	"./da.js": 395,
	"./de": 396,
	"./de-at": 397,
	"./de-at.js": 397,
	"./de-ch": 398,
	"./de-ch.js": 398,
	"./de.js": 396,
	"./dv": 399,
	"./dv.js": 399,
	"./el": 400,
	"./el.js": 400,
	"./en-au": 401,
	"./en-au.js": 401,
	"./en-ca": 402,
	"./en-ca.js": 402,
	"./en-gb": 403,
	"./en-gb.js": 403,
	"./en-ie": 404,
	"./en-ie.js": 404,
	"./en-il": 405,
	"./en-il.js": 405,
	"./en-nz": 406,
	"./en-nz.js": 406,
	"./eo": 407,
	"./eo.js": 407,
	"./es": 408,
	"./es-do": 409,
	"./es-do.js": 409,
	"./es-us": 410,
	"./es-us.js": 410,
	"./es.js": 408,
	"./et": 411,
	"./et.js": 411,
	"./eu": 412,
	"./eu.js": 412,
	"./fa": 413,
	"./fa.js": 413,
	"./fi": 414,
	"./fi.js": 414,
	"./fo": 415,
	"./fo.js": 415,
	"./fr": 416,
	"./fr-ca": 417,
	"./fr-ca.js": 417,
	"./fr-ch": 418,
	"./fr-ch.js": 418,
	"./fr.js": 416,
	"./fy": 419,
	"./fy.js": 419,
	"./gd": 420,
	"./gd.js": 420,
	"./gl": 421,
	"./gl.js": 421,
	"./gom-latn": 422,
	"./gom-latn.js": 422,
	"./gu": 423,
	"./gu.js": 423,
	"./he": 424,
	"./he.js": 424,
	"./hi": 425,
	"./hi.js": 425,
	"./hr": 426,
	"./hr.js": 426,
	"./hu": 427,
	"./hu.js": 427,
	"./hy-am": 428,
	"./hy-am.js": 428,
	"./id": 429,
	"./id.js": 429,
	"./is": 430,
	"./is.js": 430,
	"./it": 431,
	"./it.js": 431,
	"./ja": 432,
	"./ja.js": 432,
	"./jv": 433,
	"./jv.js": 433,
	"./ka": 434,
	"./ka.js": 434,
	"./kk": 435,
	"./kk.js": 435,
	"./km": 436,
	"./km.js": 436,
	"./kn": 437,
	"./kn.js": 437,
	"./ko": 438,
	"./ko.js": 438,
	"./ky": 439,
	"./ky.js": 439,
	"./lb": 440,
	"./lb.js": 440,
	"./lo": 441,
	"./lo.js": 441,
	"./lt": 442,
	"./lt.js": 442,
	"./lv": 443,
	"./lv.js": 443,
	"./me": 444,
	"./me.js": 444,
	"./mi": 445,
	"./mi.js": 445,
	"./mk": 446,
	"./mk.js": 446,
	"./ml": 447,
	"./ml.js": 447,
	"./mn": 448,
	"./mn.js": 448,
	"./mr": 449,
	"./mr.js": 449,
	"./ms": 450,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 450,
	"./mt": 452,
	"./mt.js": 452,
	"./my": 453,
	"./my.js": 453,
	"./nb": 454,
	"./nb.js": 454,
	"./ne": 455,
	"./ne.js": 455,
	"./nl": 456,
	"./nl-be": 457,
	"./nl-be.js": 457,
	"./nl.js": 456,
	"./nn": 458,
	"./nn.js": 458,
	"./pa-in": 459,
	"./pa-in.js": 459,
	"./pl": 460,
	"./pl.js": 460,
	"./pt": 461,
	"./pt-br": 462,
	"./pt-br.js": 462,
	"./pt.js": 461,
	"./ro": 463,
	"./ro.js": 463,
	"./ru": 464,
	"./ru.js": 464,
	"./sd": 465,
	"./sd.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 471,
	"./sr-cyrl": 472,
	"./sr-cyrl.js": 472,
	"./sr.js": 471,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./tg": 479,
	"./tg.js": 479,
	"./th": 480,
	"./th.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-tw": 497,
	"./zh-tw.js": 497
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
webpackContext.id = 872;

/***/ }),

/***/ 878:
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

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_deal_editing_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_deals_type__ = __webpack_require__(66);
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

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_view_controller_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_keys_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_ionic_platform_enum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(75);
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
    function ModalNavbarComponent(toastService, ionicViewController, deviceService, viewControllerService, currentUserService, platform, statusBar) {
        this.toastService = toastService;
        this.ionicViewController = ionicViewController;
        this.deviceService = deviceService;
        this.viewControllerService = viewControllerService;
        this.currentUserService = currentUserService;
        this.platform = platform;
        this.statusBar = statusBar;
    }
    ModalNavbarComponent.prototype.ionViewDidEnter = function () {
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/'<ion-toolbar class="modal-navbar">\n    <button style="color: white;" (click)="closeProfile()" ion-button icon-only menuToggle>\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <img class="textured-name" src="assets/images/chalk-logo.png" />\n    <button style="color: white; " *ngIf="profileModal" (click)="logout()" ion-button icon-only menuToggle right>\n        <ion-icon name="log-out"></ion-icon>\n    </button>\n</ion-toolbar>'/*ion-inline-end:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/,
            selector: 'modal-navbar',
            styleUrls: ['/modal-navbar.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_5__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */]])
    ], ModalNavbarComponent);
    return ModalNavbarComponent;
}());

//# sourceMappingURL=modal-navbar.component.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(66);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<div [style.zIindex]="-1000">\n    <ion-card class="{{inputClass}}">\n        <div *ngIf="_card && !_card.imageURL" class="centered-tap-text fill">Tap here to upload a photo</div>\n        <img *ngIf="_card && _card.imageURL" class="non-draggable-card-image fill" src="{{_card.imageURL}}" />\n        <img class="gradient-on-card" src="assets/images/gradient.png" />\n\n        <ion-card-content *ngIf="card.dealDescription && (_card || showCardText)" class="card-text">\n            <ion-card-title class="locale-card-title">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n            <p *ngIf="card.dealDescription" class="locale-card-time">Available on {{getMomentFormatted(card.dealStart,\n                "MM/DD")}}\n                between {{getMomentFormatted(card.dealStart, "hh:mm a")}} -\n                {{getMomentFormatted(card.dealEnd,\n                "hh:mm a")}}</p>\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LocaleCardComponent);
    return LocaleCardComponent;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 505,
	"./af.js": 505,
	"./ar": 506,
	"./ar-dz": 507,
	"./ar-dz.js": 507,
	"./ar-kw": 508,
	"./ar-kw.js": 508,
	"./ar-ly": 509,
	"./ar-ly.js": 509,
	"./ar-ma": 510,
	"./ar-ma.js": 510,
	"./ar-sa": 511,
	"./ar-sa.js": 511,
	"./ar-tn": 512,
	"./ar-tn.js": 512,
	"./ar.js": 506,
	"./az": 513,
	"./az.js": 513,
	"./be": 514,
	"./be.js": 514,
	"./bg": 515,
	"./bg.js": 515,
	"./bm": 516,
	"./bm.js": 516,
	"./bn": 517,
	"./bn.js": 517,
	"./bo": 518,
	"./bo.js": 518,
	"./br": 519,
	"./br.js": 519,
	"./bs": 520,
	"./bs.js": 520,
	"./ca": 521,
	"./ca.js": 521,
	"./cs": 522,
	"./cs.js": 522,
	"./cv": 523,
	"./cv.js": 523,
	"./cy": 524,
	"./cy.js": 524,
	"./da": 525,
	"./da.js": 525,
	"./de": 526,
	"./de-at": 527,
	"./de-at.js": 527,
	"./de-ch": 528,
	"./de-ch.js": 528,
	"./de.js": 526,
	"./dv": 529,
	"./dv.js": 529,
	"./el": 530,
	"./el.js": 530,
	"./en-au": 531,
	"./en-au.js": 531,
	"./en-ca": 532,
	"./en-ca.js": 532,
	"./en-gb": 533,
	"./en-gb.js": 533,
	"./en-ie": 534,
	"./en-ie.js": 534,
	"./en-il": 535,
	"./en-il.js": 535,
	"./en-nz": 536,
	"./en-nz.js": 536,
	"./eo": 537,
	"./eo.js": 537,
	"./es": 538,
	"./es-do": 539,
	"./es-do.js": 539,
	"./es-us": 540,
	"./es-us.js": 540,
	"./es.js": 538,
	"./et": 541,
	"./et.js": 541,
	"./eu": 542,
	"./eu.js": 542,
	"./fa": 543,
	"./fa.js": 543,
	"./fi": 544,
	"./fi.js": 544,
	"./fo": 545,
	"./fo.js": 545,
	"./fr": 546,
	"./fr-ca": 547,
	"./fr-ca.js": 547,
	"./fr-ch": 548,
	"./fr-ch.js": 548,
	"./fr.js": 546,
	"./fy": 549,
	"./fy.js": 549,
	"./gd": 550,
	"./gd.js": 550,
	"./gl": 551,
	"./gl.js": 551,
	"./gom-latn": 552,
	"./gom-latn.js": 552,
	"./gu": 553,
	"./gu.js": 553,
	"./he": 554,
	"./he.js": 554,
	"./hi": 555,
	"./hi.js": 555,
	"./hr": 556,
	"./hr.js": 556,
	"./hu": 557,
	"./hu.js": 557,
	"./hy-am": 558,
	"./hy-am.js": 558,
	"./id": 559,
	"./id.js": 559,
	"./is": 560,
	"./is.js": 560,
	"./it": 561,
	"./it.js": 561,
	"./ja": 562,
	"./ja.js": 562,
	"./jv": 563,
	"./jv.js": 563,
	"./ka": 564,
	"./ka.js": 564,
	"./kk": 565,
	"./kk.js": 565,
	"./km": 566,
	"./km.js": 566,
	"./kn": 567,
	"./kn.js": 567,
	"./ko": 568,
	"./ko.js": 568,
	"./ky": 569,
	"./ky.js": 569,
	"./lb": 570,
	"./lb.js": 570,
	"./lo": 571,
	"./lo.js": 571,
	"./lt": 572,
	"./lt.js": 572,
	"./lv": 573,
	"./lv.js": 573,
	"./me": 574,
	"./me.js": 574,
	"./mi": 575,
	"./mi.js": 575,
	"./mk": 576,
	"./mk.js": 576,
	"./ml": 577,
	"./ml.js": 577,
	"./mn": 578,
	"./mn.js": 578,
	"./mr": 579,
	"./mr.js": 579,
	"./ms": 580,
	"./ms-my": 581,
	"./ms-my.js": 581,
	"./ms.js": 580,
	"./mt": 582,
	"./mt.js": 582,
	"./my": 583,
	"./my.js": 583,
	"./nb": 584,
	"./nb.js": 584,
	"./ne": 585,
	"./ne.js": 585,
	"./nl": 586,
	"./nl-be": 587,
	"./nl-be.js": 587,
	"./nl.js": 586,
	"./nn": 588,
	"./nn.js": 588,
	"./pa-in": 589,
	"./pa-in.js": 589,
	"./pl": 590,
	"./pl.js": 590,
	"./pt": 591,
	"./pt-br": 592,
	"./pt-br.js": 592,
	"./pt.js": 591,
	"./ro": 593,
	"./ro.js": 593,
	"./ru": 594,
	"./ru.js": 594,
	"./sd": 595,
	"./sd.js": 595,
	"./se": 596,
	"./se.js": 596,
	"./si": 597,
	"./si.js": 597,
	"./sk": 598,
	"./sk.js": 598,
	"./sl": 599,
	"./sl.js": 599,
	"./sq": 600,
	"./sq.js": 600,
	"./sr": 601,
	"./sr-cyrl": 602,
	"./sr-cyrl.js": 602,
	"./sr.js": 601,
	"./ss": 603,
	"./ss.js": 603,
	"./sv": 604,
	"./sv.js": 604,
	"./sw": 605,
	"./sw.js": 605,
	"./ta": 606,
	"./ta.js": 606,
	"./te": 607,
	"./te.js": 607,
	"./tet": 608,
	"./tet.js": 608,
	"./tg": 609,
	"./tg.js": 609,
	"./th": 610,
	"./th.js": 610,
	"./tl-ph": 611,
	"./tl-ph.js": 611,
	"./tlh": 612,
	"./tlh.js": 612,
	"./tr": 613,
	"./tr.js": 613,
	"./tzl": 614,
	"./tzl.js": 614,
	"./tzm": 615,
	"./tzm-latn": 616,
	"./tzm-latn.js": 616,
	"./tzm.js": 615,
	"./ug-cn": 617,
	"./ug-cn.js": 617,
	"./uk": 618,
	"./uk.js": 618,
	"./ur": 619,
	"./ur.js": 619,
	"./uz": 620,
	"./uz-latn": 621,
	"./uz-latn.js": 621,
	"./uz.js": 620,
	"./vi": 622,
	"./vi.js": 622,
	"./x-pseudo": 623,
	"./x-pseudo.js": 623,
	"./yo": 624,
	"./yo.js": 624,
	"./zh-cn": 625,
	"./zh-cn.js": 625,
	"./zh-hk": 626,
	"./zh-hk.js": 626,
	"./zh-tw": 627,
	"./zh-tw.js": 627
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
webpackContext.id = 882;

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_ionic_platform_enum__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_location_cards_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(78);
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
    function LocaleApp(auth, viewControl, platform, statusBar, locationService, geolocation, cardService) {
        var _this = this;
        this.auth = auth;
        this.viewControl = viewControl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.locationService = locationService;
        this.geolocation = geolocation;
        this.cardService = cardService;
        this.locationService.setUpCurrentLocationCards(this.geolocation, this.cardService, this.locationService.currentLocation).then(function (cardModels) {
            _this.locationService.cardModels = cardModels;
        });
        this.platform.ready().then(function () {
            _this.statusBar.show();
            _this.statusBar.overlaysWebView(false);
            if (_this.platform.is(__WEBPACK_IMPORTED_MODULE_1__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core)) {
                _this.viewControl.setBrowserHome();
            }
            else {
                if (!_this.auth.checkLoggedIn())
                    _this.viewControl.setSignUpView();
            }
        });
    }
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<div class="main-area-container" *ngIf="viewControl">\n    <consumer-container *ngIf="viewControl.consumer"></consumer-container>\n    <consumer-landing *ngIf="viewControl.userLanding"></consumer-landing>\n    <browser-home *ngIf="viewControl.browserHome"></browser-home>\n    <organization-deals-home *ngIf="viewControl.organizationDealsHome"></organization-deals-home>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/,
            styleUrls: ['/app.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__services_location_cards_service__["a" /* LocationCardsService */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */]])
    ], LocaleApp);
    return LocaleApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__ = __webpack_require__(79);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="home-nav-bar">\n    <button class="home-nav-button" routerLink="/your-chalkbord" routerLinkActive="active" ion-button>\n        <ion-icon name="restaurant"></ion-icon> Organizations\n    </button>\n    <button routerLink="/policy" routerLinkActive="active" class="home-nav-button" ion-button>\n        <ion-icon name="document"></ion-icon> Terms of Use\n    </button>\n</div>\n<ion-content>\n    <div class="browser-home-photo"></div>\n    <router-outlet></router-outlet>\n</ion-content>\n<ion-footer>\n    <div class="center-about-text-lower"> For support and business inquiries, contact us at support@chalkbord.com.\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__["a" /* ViewControllerService */]])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}());

//# sourceMappingURL=browser-home.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types_user_type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types_user_login_form_group_type__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__organization_signup_organization_signup_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_environment_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_device_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operators__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(75);
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


















var lastEnvironmentKey = "lastOrgEnv";
var OrganizationLandingComponent = (function (_super) {
    __extends(OrganizationLandingComponent, _super);
    function OrganizationLandingComponent(formBuilder, loginService, rememberMeService, toastService, alert, currentUserService, userService, auth, organizationService, facebook, firebaseEnvironmentService, deviceService, statusBar) {
        var _this = _super.call(this, toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook, firebaseEnvironmentService, deviceService, statusBar) || this;
        _this.rememberMeLogIn = false;
        _this.rememberMeSignUp = false;
        _this.userLogInGroup = new __WEBPACK_IMPORTED_MODULE_7__types_user_login_form_group_type__["a" /* UserLoginFormGroup */](_this.formBuilder);
        _this.deviceService.getSetting(lastEnvironmentKey).then(function (lastEnvironment) {
            if (lastEnvironment)
                _this.firebaseEnvironmentService.setCurrentEnvironment(lastEnvironment);
            console.log(_this.firebaseEnvironmentService.getCurrentEnvironment());
            _this.rememberMeService.loginFromRememberMe(_this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_5__types_user_type__["b" /* UserType */].Organization);
        });
        _this.titleClickObervable.pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["bufferCount"])(5)).subscribe(function () {
            _this.iterateEnvironment(lastEnvironmentKey);
        });
        return _this;
    }
    OrganizationLandingComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="restrict-width">\n        <div (click)="titleClickSubject.next($event)" class="rest-center-text">chalkbord</div>\n        <div class="small-rest-center-text">Organizations</div>\n\n        <ion-card class="log-in-card">\n            <ion-list>\n                <form [formGroup]="userLogInGroup">\n                    <ion-item class="padding-right">\n                        <ion-label stacked>Email</ion-label>\n                        <ion-input placeholder="Business email" type="email" formControlName="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="padding-right">\n                        <ion-label stacked>Password</ion-label>\n                        <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="padding-bottom-checkbox">\n                        <ion-label>Stay signed in</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card>\n\n        <div class="rest-button-area">\n            <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n                login\n            </button>\n            <div class="or-text">or</div>\n            <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n                sign up\n            </button>\n        </div>\n\n        <ion-card #signUpCard class="sign-up-card">\n            <ion-list>\n                <form [formGroup]="signUpGroup">\n                    <ion-item class="padding-right">\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email" formControlName="email"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'email\').errors && signUpGroup.get(\'email\').dirty" class="error-message">Make\n                        sure your email is formatted correctly.</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'password\').errors && signUpGroup.get(\'password\').dirty" class="error-message">Make\n                        sure your password is at least eight characters long</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n                    <p *ngIf="!passwordsMatch()" class="error-message">Make sure your passwords match</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Organization Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'name\').errors && signUpGroup.get(\'name\').dirty" class="error-message">Restaurant\n                        name is required</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Restaurant Phone Number</ion-label>\n                        <ion-input formControlName="phoneNumber"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'phoneNumber\').errors && signUpGroup.get(\'phoneNumber\').dirty" class="error-message">Restaurant\n                        phone number is required and needs to be 10 numbers</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Restaurant Website</ion-label>\n                        <ion-input formControlName="website"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'website\').errors && signUpGroup.get(\'website\').dirty" class="error-message">Restaurant\n                        website is required and needs to be a valid website</p>\n\n                    <ion-item class="padding-right">\n                        <ion-label floating>Address </ion-label>\n                        <ion-input formControlName="address"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'address\').errors && signUpGroup.get(\'address\').dirty" class="error-message">Address\n                        is required</p>\n                    <ion-item class="padding-right">\n                        <ion-label floating>City</ion-label>\n                        <ion-input formControlName="city"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'city\').errors && signUpGroup.get(\'city\').dirty" class="error-message">City\n                        is required</p>\n                    <ion-item class="padding-right">\n                        <ion-label floating>State</ion-label>\n                        <ion-input formControlName="state"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'state\').errors && signUpGroup.get(\'state\').dirty" class="error-message">State\n                        is required</p>\n                    <ion-item class="padding-right">\n                        <ion-label floating>Zipcode</ion-label>\n                        <ion-input formControlName="zipcode"></ion-input>\n                    </ion-item>\n                    <p *ngIf="signUpGroup.get(\'zipcode\').errors && signUpGroup.get(\'zipcode\').dirty" class="error-message">Zipcode\n                        is required</p>\n                    <ion-item class="padding-bottom-checkbox">\n                        <ion-label>Stay signed in</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeSignUp" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n            <button class="rest-landing-button" ion-button (click)="signUp()">\n                sign up\n            </button>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/,
            selector: 'organization-landing',
            styleUrls: ['/organization-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__["a" /* RememberMeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_14__services_firebase_environment_service__["b" /* FirebaseEnvironmentService */],
            __WEBPACK_IMPORTED_MODULE_15__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */]])
    ], OrganizationLandingComponent);
    return OrganizationLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_12__organization_signup_organization_signup_component__["a" /* OrganizationSignupComponent */]));

//# sourceMappingURL=organization-landing.component.js.map

/***/ }),

/***/ 913:
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

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeVertical; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(362);
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

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consumer_consumer_component__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConsumerContainerComponent = (function () {
    function ConsumerContainerComponent() {
        this.root = __WEBPACK_IMPORTED_MODULE_1__consumer_consumer_component__["a" /* ConsumerComponent */];
    }
    ConsumerContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-container/consumer-container.component.html"*/'<ion-nav [root]="root" main #content></ion-nav>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-container/consumer-container.component.html"*/,
            selector: 'consumer-container',
        })
    ], ConsumerContainerComponent);
    return ConsumerContainerComponent;
}());

//# sourceMappingURL=consumer-container.component.js.map

/***/ })

},[651]);
//# sourceMappingURL=main.js.map