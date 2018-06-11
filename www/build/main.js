webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* unused harmony export EmailPasswordTuple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_unique_device_id__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(59);
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
        if (this.platform.is("cordova")) {
            this.uniqueDeviceID.get().then(function (id) {
                _this.deviceId = id;
            });
        }
    }
    DeviceService.prototype.putUserEmailPasswordToLocalStorage = function (key, email, password) {
        this.storage.set(key, new EmailPasswordTuple(email, password));
    };
    DeviceService.prototype.getUserEmailPasswordFromLocalStorage = function (key) {
        return this.storage.get(key);
    };
    DeviceService.prototype.putSetting = function (key, rememberMe) {
        return this.storage.set(key, rememberMe);
    };
    DeviceService.prototype.getSetting = function (key) {
        return this.storage.get(key);
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */]])
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(14);
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
    CardDataService.prototype.getCards = function () {
        return this.cards;
    };
    CardDataService.prototype.setCards = function (data) {
        var _this = this;
        var cards = data.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(Object.assign({}, card));
        });
    };
    CardDataService.prototype.addCard = function (data) {
        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    };
    CardDataService.prototype.getCardsById = function (ids) {
        var observables = [];
        var _loop_1 = function (id) {
            observables.push(this_1.database.collection("cards", function (ref) { return ref.where("id", "==", id); }).valueChanges());
        };
        var this_1 = this;
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            _loop_1(id);
        }
        var allCardsObservableMerged = Object(__WEBPACK_IMPORTED_MODULE_2_rxjs__["merge"])(observables);
        return allCardsObservableMerged;
    };
    CardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CardDataService);
    return CardDataService;
}());

//# sourceMappingURL=card-data.service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_type__ = __webpack_require__(389);


var Deal = (function () {
    function Deal(restaurantUid, dealDescription, dealStart, dealEnd, numberOfDeals, dealType, location, obj) {
        this.restaurantUid = restaurantUid;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.location = location;
        this.id = __WEBPACK_IMPORTED_MODULE_0__utils_type__["a" /* Guid */].newGuid();
        if (obj) {
            var newLoc = new __WEBPACK_IMPORTED_MODULE_1__location_type__["a" /* GSLocation */]();
            newLoc.lat = obj.location.lat;
            newLoc.lng = obj.location.lng;
            this.restaurantUid = obj.restaurantUid;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
            this.location = newLoc;
        }
    }
    Deal.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return Deal;
}());

var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DealEditorService = (function () {
    function DealEditorService() {
        this.currentDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
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

/***/ 281:
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
webpackEmptyAsyncContext.id = 281;

/***/ }),

/***/ 324:
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
webpackEmptyAsyncContext.id = 324;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSLocation; });
var GSLocation = (function () {
    function GSLocation(googleLocation) {
        if (googleLocation) {
            this.lat = googleLocation.lat();
            this.lng = googleLocation.lng();
        }
    }
    GSLocation.prototype.getAsPlainObject = function () {
        return Object.assign({}, this);
    };
    return GSLocation;
}());

//# sourceMappingURL=location.type.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDealComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
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
    function FilterDealComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FilterDealComponent.prototype.closePopover = function (model) {
        this.viewCtrl.dismiss(model);
    };
    FilterDealComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/'<ion-list radio-group [(ngModel)]="dealType" (ngModelChange)="closePopover($event)">\n  <ion-item>\n    <ion-label>Deal Type</ion-label>  \n  </ion-item>  \n    <ion-item>\n      <ion-label>Drinks</ion-label>\n      <ion-radio value="Drinks"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Food</ion-label>\n      <ion-radio value="Food"></ion-radio>\n    </ion-item>\n    <!-- <ion-item>\n        <ion-label>Both</ion-label>\n        <ion-radio value="Both"></ion-radio>\n    </ion-item> -->\n    <ion-item>\n        <ion-label>All</ion-label>\n        <ion-radio value="null"></ion-radio>\n    </ion-item>\n  </ion-list>'/*ion-inline-end:"/Users/Contence/locale/src/components/filter-deals/filter-deal.component.html"*/,
            selector: 'filter-deal',
            styleUrls: ['/filter-deal.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], FilterDealComponent);
    return FilterDealComponent;
}());

//# sourceMappingURL=filter-deal.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(234);
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
        this.storage.ref(dealModel.imageSource).getDownloadURL().subscribe(function (URL) {
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Button */])
    ], UserProfileComponent.prototype, "editButton", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="closeProfile()" class="close-modal-button" ion-button icon-only>\n    <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n</button>\n\n<button (click)="logout()" class="signout-button" ion-button icon-only>\n    <ion-icon ios="md-log-out" md="md-log-out"></ion-icon>\n</button>\n\n<ion-content>\n    <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input [disabled]="emailDisabled" [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [disabled]="emailDisabled" type="email" [(ngModel)]="userEmail"></ion-input>\n    </ion-item>\n    \n    <button (click)="toggleEdit()" class="reset-button" ion-button>\n        {{editButtonText}}\n    </button>\n    \n    <button (click)="resetPassword()" class="reset-button" outline ion-button>\n        reset password\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
            selector: 'user-profile',
            styleUrls: ['/user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_2__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_deals_type__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_card_data_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uploader_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_deal_editing_service__ = __webpack_require__(239);
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
    function DealEditorComponent(cardService, formBuilder, uploader, authService, dealEditorService) {
        var _this = this;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.authService = authService;
        this.dealEditorService = dealEditorService;
        this.limitDealNumber = false;
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(9999), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            numberOfDeals: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(1000), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealDay: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealStart: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealEnd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.setCurrentCardBeingEdited(deal);
        });
    }
    DealEditorComponent.prototype.setImageData = function (event) {
        this.imageData = event.srcElement.files[0];
    };
    DealEditorComponent.prototype.save = function () {
    };
    DealEditorComponent.prototype.add = function () {
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.dealEditorFormGroup.valid && this.imageData) {
            var startDate = this.dealEditorFormGroup.get("dealDay").value;
            var startDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealStart").value, startDate);
            var endDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealEnd").value, startDate);
            var deal = void 0;
            if (!this.limitDealNumber) {
                deal = new __WEBPACK_IMPORTED_MODULE_1__types_deals_type__["a" /* Deal */](this.authService.currentUser.restaurant.uid, this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, -1, //no deal limit
                this.dealEditorFormGroup.get("dealType").value, this.authService.currentUser.restaurant.location);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            else {
                deal = new __WEBPACK_IMPORTED_MODULE_1__types_deals_type__["a" /* Deal */](this.authService.currentUser.restaurant.uid, this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, this.dealEditorFormGroup.get("numberOfDeals").value, this.dealEditorFormGroup.get("dealType").value, this.authService.currentUser.restaurant.location);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            this.uploader.uploadDealPhoto(this.imageData, deal.id);
            this.cardService.addCard(deal);
            this.authService.addCardIdToCurrentUser(deal.id);
        }
    };
    DealEditorComponent.prototype.setCurrentCardBeingEdited = function (deal) {
        var _this = this;
        if (deal) {
            this.uneditedDeal = deal;
            this.editingDeal = true;
            Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
                if (key != "dealDay" && key != "dealStart" && key != "dealEnd")
                    _this.dealEditorFormGroup.get(key).setValue(deal[key]);
            });
            this.dealEditorFormGroup.get("dealDay").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealStart").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealEnd").setValue(deal.dealEnd.toISOString());
            this.dealEditorFormGroup.get("limitedDealNumber").setValue(deal.numberOfDeals > 0);
        }
        else
            this.clearFields();
    };
    DealEditorComponent.prototype.getCombinedTime = function (time, date) {
        var combinedTime = new Date(date);
        var timeDateObj = new Date('1970-01-01T' + time); //use abitrary stuff date here to make parsing happen
        var timeOffsetInHours = timeDateObj.getTimezoneOffset() / 60;
        combinedTime.setHours(timeDateObj.getHours() - timeOffsetInHours + 1); //add one bc combinedTime is one hour off?? GMT-400???
        combinedTime.setMinutes(timeDateObj.getMinutes()); //idk but this should be watched
        return combinedTime;
    };
    DealEditorComponent.prototype.cancel = function () {
        this.dealEditorService.setCurrentDeal(null);
        this.clearFields();
    };
    DealEditorComponent.prototype.clearFields = function () {
        var _this = this;
        this.uneditedDeal = null;
        this.editingDeal = false;
        Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
            _this.dealEditorFormGroup.get(key).setValue(null);
        });
    };
    DealEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-item>\n                <ion-label floating>Deal Description</ion-label>\n                <ion-input formControlName="dealDescription"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Deal date</ion-label>\n                <ion-datetime displayFormat="MMMM DD, YYYY" formControlName="dealDay"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Start time</ion-label>\n                <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>End time</ion-label>\n                <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Limited deal number</ion-label>\n                <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n            </ion-item>\n        \n            <ion-item *ngIf="limitDealNumber">\n                <ion-label floating>Deal Number</ion-label>\n                <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n            </ion-item>\n\n            <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                Deal Type\n                <ion-item>\n                    <ion-label>Drinks</ion-label>\n                    <ion-radio value="0"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Food</ion-label>\n                    <ion-radio value="1"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Both</ion-label>\n                    <ion-radio value="2"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n            <ion-item>\n                <input type="file" (change)="setImageData($event)" accept="image/*"/>\n            </ion-item>\n        </form>\n    </ion-list>\n    <div class="button-group">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_card_data_service__["a" /* CardDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_card_data_service__["a" /* CardDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_uploader_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_uploader_service__["a" /* UploadService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_deal_editing_service__["a" /* DealEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_deal_editing_service__["a" /* DealEditorService */]) === "function" && _e || Object])
    ], DealEditorComponent);
    return DealEditorComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=deal-editor.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(413);
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
    function UploadService(storage, camera) {
        this.storage = storage;
        this.camera = camera;
    }
    // Our methods will go here...
    UploadService.prototype.captureImage = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        return this.camera.getPicture(options); //returns image data base 64 as string
    };
    UploadService.prototype.uploadDealPhoto = function (imageData, fileName) {
        console.log(imageData);
        this.storage.upload("/locale-deal-photos/" + fileName, imageData);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], UploadService);
    return UploadService;
}());

//# sourceMappingURL=uploader.service.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GSUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserType; });
var GSUser = (function () {
    function GSUser(uid, userType, firstName) {
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
    }
    GSUser.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return GSUser;
}());

var UserType;
(function (UserType) {
    UserType[UserType["Consumer"] = 0] = "Consumer";
    UserType[UserType["Restaurant"] = 1] = "Restaurant";
})(UserType || (UserType = {}));
//# sourceMappingURL=user.type.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(566);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_consumer_consumer_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_dialogs__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_restaurant_deal_maker_restaurant_deal_maker_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_deal_editor_deal_editor_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_filter_deals_filter_deal_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_card_data_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_image_service_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_uploader_service__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_signup_user_signup_component__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_unique_device_id__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_user_profile_user_profile_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_toast_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_browser_home_browser_home_component__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_restaurant_landing_restaurant_landing_component__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_common_http__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_restaurant_profile_restaurant_profile_component__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_deal_editing_service__ = __webpack_require__(239);
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
            'swipe': { velocity: 1.3, threshold: 20 } // override default settings
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HammerGestureConfig */]));

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_8__components_consumer_consumer_component__["a" /* ConsumerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_restaurant_deal_maker_restaurant_deal_maker_component__["a" /* RestaurantDealMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_filter_deals_filter_deal_component__["a" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_user_signup_user_signup_component__["a" /* UserSignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_restaurant_landing_restaurant_landing_component__["a" /* RestaurantLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_restaurant_profile_restaurant_profile_component__["a" /* RestaurantProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCbyIgW7iO9OrPoK9Ozr6EsOGrdN8v9HKo",
                    authDomain: "locale-4112a.firebaseapp.com",
                    databaseURL: "https://locale-4112a.firebaseio.com",
                    projectId: "locale-4112a",
                    storageBucket: "locale-4112a.appspot.com",
                    messagingSenderId: "9042973249"
                }),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_common_http__["a" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_12__components_restaurant_deal_maker_restaurant_deal_maker_component__["a" /* RestaurantDealMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_filter_deals_filter_deal_component__["a" /* FilterDealComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_user_signup_user_signup_component__["a" /* UserSignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_restaurant_landing_restaurant_landing_component__["a" /* RestaurantLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_restaurant_profile_restaurant_profile_component__["a" /* RestaurantProfileComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_dialogs__["a" /* Dialogs */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_16__services_card_data_service__["a" /* CardDataService */],
                __WEBPACK_IMPORTED_MODULE_22__services_authorization_service__["a" /* AuthorizationService */],
                __WEBPACK_IMPORTED_MODULE_23__services_image_service_service__["a" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_25__services_uploader_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_27__services_view_controller_service__["a" /* ViewControllerService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_29__services_device_service__["a" /* DeviceService */],
                __WEBPACK_IMPORTED_MODULE_31__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_36__services_deal_editing_service__["a" /* DealEditorService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(59);
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
        if (this.platform.is("core")) {
            this.viewControl.setBrowserHome();
        }
        else {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByName("black");
            if (!this.auth.checkUserIsLoggedIn()) {
                this.viewControl.setSignUpView();
            }
        }
    }
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<div *ngIf="viewControl">\n    <consumer *ngIf="viewControl.consumer"></consumer>\n    <restaurant-deal-maker *ngIf="viewControl.dealMaker"></restaurant-deal-maker>\n    <user-signup *ngIf="viewControl.signUp"></user-signup>\n    <browser-home *ngIf="viewControl.browserHome"></browser-home>\n    <restaurant-landing *ngIf="viewControl.restaurantLanding"></restaurant-landing>\n    <restaurant-profile *ngIf="viewControl.restaurantHome"></restaurant-profile>\n</div>\n'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Platform */]])
    ], LocaleApp);
    return LocaleApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* unused harmony export SignUpReturnCode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_data_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_deals_type__ = __webpack_require__(231);
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
    function AuthorizationService(fireAuth, database, toastService, cardService) {
        this.fireAuth = fireAuth;
        this.database = database;
        this.toastService = toastService;
        this.cardService = cardService;
        this.userCollection = this.database.collection("users");
        this.restaurantCollection = this.database.collection("restaurants");
    }
    AuthorizationService.prototype.checkCurrentUserType = function () {
        var _this = this;
        if (this.currentUser) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next([_this.currentUser]);
                observer.complete();
            });
        }
        else if (this.fireAuth.auth.currentUser)
            return this.getCurrentUserData();
        else
            return null;
    };
    AuthorizationService.prototype.checkUserIsLoggedIn = function () {
        if (this.currentUser && this.fireAuth.auth.currentUser)
            return true;
        else
            return false;
    };
    AuthorizationService.prototype.userSignOut = function () {
        this.currentUser = null;
        //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
        //this won't affect functionality but should be here for security
    };
    AuthorizationService.prototype.signIn = function (email, password) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUpUser = function (email, password) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.checkUserSignInMethods = function (email) {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    };
    AuthorizationService.prototype.getCurrentUserData = function () {
        var _this = this;
        return this.database.collection("users", function (ref) { return ref.where("uid", '==', _this.fireAuth.auth.currentUser.uid); }).valueChanges();
    };
    /**
     * Only use this when passing a user you don't care about
     * Data in the user will be changed for worse!
     *
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     *
     * Restaurant users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     * @param user
     */
    AuthorizationService.prototype.updateUserInDatabase = function (user) {
        if (this.checkUserIsLoggedIn() && this.userCollection) {
            user.cards = null;
            if (user.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(user.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(user);
        }
        else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");
        return null;
    };
    AuthorizationService.prototype.getCurrentRestaurantData = function (restId) {
        return this.database.collection("restaurants", function (ref) { return ref.where("id", '==', restId); }).valueChanges(); //TODO
    };
    AuthorizationService.prototype.addCardIdToCurrentUser = function (cardId) {
        var _this = this;
        if (this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];
        this.currentUser.cardIds.push(cardId);
        this.updateUserInDatabase(Object.assign({}, this.currentUser)).then(function () {
            _this.generateCardsFromIds();
        });
    };
    AuthorizationService.prototype.generateCardsFromIds = function () {
        var _this = this;
        if (!this.currentUser.cards) {
            this.currentUser.cards = [];
            this.cardService.getCardsById(this.currentUser.cardIds).subscribe(function (obDeal) {
                obDeal.subscribe(function (deals) {
                    for (var _i = 0, deals_1 = deals; _i < deals_1.length; _i++) {
                        var deal = deals_1[_i];
                        _this.currentUser.cards.push(new __WEBPACK_IMPORTED_MODULE_6__types_deals_type__["a" /* Deal */](null, null, null, null, null, null, null, deal));
                    }
                });
            });
        }
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_5__card_data_service__["a" /* CardDataService */]])
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

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
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

//# sourceMappingURL=utils.type.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_deals_filter_deal_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_card_data_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_image_service_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types_deals_type__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__(410);
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
    function ConsumerComponent(alert, popoverCtrl, launchNavigator, cardService, authService, imageService, deviceService, viewContoller, modalCtrl) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.launchNavigator = launchNavigator;
        this.cardService = cardService;
        this.authService = authService;
        this.imageService = imageService;
        this.deviceService = deviceService;
        this.viewContoller = viewContoller;
        this.modalCtrl = modalCtrl;
        this.transitionString = "";
        this.numberOfCards = 3;
        this.destoryingCard = false;
        this.moveCardIndex = 0;
        this.likingCard = false;
        this.animatingCard = false;
        this.currentFilter = null;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                offsetY;
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2.5), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 200;
            }
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkUserIsLoggedIn) {
            this.cardSubscription = this.cardService.getCards().subscribe(function (cardModels) {
                if (!_this.cards) {
                    _this.cards = cardModels;
                    _this.filterCards(_this.currentFilter);
                }
                else {
                    _this.findAndUpdateCards(cardModels);
                }
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
    ConsumerComponent.prototype.voteUp = function (like) {
        if (this.restaurantViewCards.length > 0) {
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
    ConsumerComponent.prototype.clickLike = function () {
        var _this = this;
        if (this.restaurantViewCards.length > 0 && !this.likingCard && !this.animatingCard) {
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
        if (this.restaurantViewCards.length > 0 && !this.animatingCard) {
            this.transitionString = "all 0.75s";
            this.animatingCard = true;
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)";
            this.delay(300).then(function () {
                _this.handleCard(false);
                _this.animatingCard = false;
            });
        }
    };
    ConsumerComponent.prototype.openDealTypePopover = function (event) {
        var _this = this;
        var filterPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filter_deals_filter_deal_component__["a" /* FilterDealComponent */]);
        filterPopover.onDidDismiss(function (data) {
            _this.currentFilter = __WEBPACK_IMPORTED_MODULE_8__types_deals_type__["b" /* DealType */][data];
            _this.filterCards(__WEBPACK_IMPORTED_MODULE_8__types_deals_type__["b" /* DealType */][data]);
        });
        filterPopover.present({
            ev: event,
        });
    };
    ConsumerComponent.prototype.handleCard = function (like) {
        if (like)
            this.popLikeAlert(this.popCard());
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
                        _this.launchNavigator.navigate(card.restaurant.address);
                    }
                },
                {
                    text: 'Ok',
                    role: 'close',
                }
            ],
            title: "You are going to " + card.restaurant.name + "!",
            subTitle: "Your deal code is: " + this.randomNumber(),
            message: "Bring this code to " + card.restaurant.name + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });
        likeAlert.present().then(function () {
            _this.likingCard = false;
        });
    };
    ConsumerComponent.prototype.popCard = function () {
        var poppedCard = this.restaurantViewCards.shift();
        this.addCardToStack();
        return poppedCard;
    };
    ConsumerComponent.prototype.filterCards = function (type) {
        var _this = this;
        this.restaurantViewCards = new Array();
        this.filteredCards = new Array();
        if (type || type == 0) {
            this.filteredCards = this.cards.filter(function (card) {
                return card.dealType == type;
            });
        }
        else
            this.filteredCards = this.cards;
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
            this.restaurantViewCards.push(nextCard);
            this.viewCardIndex++;
            for (var i = 0; i < this.swingCards.toArray.length; i++) {
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
            }
        }
    };
    ConsumerComponent.prototype.setUpViewCards = function () {
        this.viewCardIndex = this.numberOfCards;
        for (var i = 0; i < this.numberOfCards; i++) {
            this.imageService.setDealImageURL(this.filteredCards[i]);
            this.restaurantViewCards.push(this.filteredCards[i]);
        }
    };
    ConsumerComponent.prototype.findAndUpdateCards = function (dealModels) {
        var _this = this;
        dealModels.forEach(function (dealModel) {
            var foundCard = _this.filteredCards[_this.filteredCards.findIndex(function (c) { return c.id == dealModel.id; })];
            if (foundCard) {
                _this.updateDealModel(foundCard, dealModel);
                var foundViewCard = _this.restaurantViewCards[_this.restaurantViewCards.findIndex(function (c) { return c.id == dealModel.id; })];
                if (foundViewCard)
                    _this.updateDealModel(foundViewCard, dealModel);
            }
        });
    };
    //used simply to async wait for something
    ConsumerComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ConsumerComponent.prototype.randomNumber = function () {
        return String(Math.floor(1000 + Math.random() * 9000));
    };
    //looks at differences in properties between objects
    ConsumerComponent.prototype.updateDealModel = function (objectToUpdate, updatedObject) {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.restaurant = updatedObject.restaurant;
        if (objectToUpdate.imageSource != updatedObject.imageSource) {
            objectToUpdate.imageSource = updatedObject.imageSource;
            this.imageService.setDealImageURL(objectToUpdate);
        }
    };
    ConsumerComponent.prototype.openProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */]).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_swing__["SwingStackComponent"])
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="openDealTypePopover($event)" class="button-top" ion-button icon-only>\n    <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n</button>\n\n<button (click)="openProfile()" class="button-top-left" ion-button icon-only>\n    <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n</button>\n\n<div class="loading-div">\n    <ion-spinner class="loading-spinner"></ion-spinner>\n    <h2 ion-text style="text-align: center">Getting your local deals!</h2>\n</div>\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack" [style.zIindex] = "-1000">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantViewCards; let i = index;" [style.zIndex]="-1*i" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restaurant.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" ios="md-heart" md="md-heart"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_5__services_card_data_service__["a" /* CardDataService */],
            __WEBPACK_IMPORTED_MODULE_6__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_7__services_image_service_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_9__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_10__services_view_controller_service__["a" /* ViewControllerService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());

//# sourceMappingURL=consumer.component.js.map

/***/ }),

/***/ 72:
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
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    }
    ViewControllerService.prototype.setConsumerView = function () {
        this.dealMaker = false;
        this.consumer = true;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    };
    ViewControllerService.prototype.setDealMakerView = function () {
        this.dealMaker = true;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    };
    ViewControllerService.prototype.setSignUpView = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = true;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    };
    ViewControllerService.prototype.setBrowserHome = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = true;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    };
    ViewControllerService.prototype.setRestaurantPortal = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = true;
        this.restaurantHome = false;
    };
    ViewControllerService.prototype.setRestaurantHome = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = true;
    };
    ViewControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ViewControllerService);
    return ViewControllerService;
}());

//# sourceMappingURL=view-controller.service.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDealMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_deal_editing_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestaurantDealMakerComponent = (function () {
    function RestaurantDealMakerComponent(authService, dealEditorService) {
        var _this = this;
        this.authService = authService;
        this.dealEditorService = dealEditorService;
        this.authService.generateCardsFromIds();
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.currentCard = deal;
        });
    }
    RestaurantDealMakerComponent.prototype.hasCards = function () {
        return this.authService.currentUser
            && this.authService.currentUser.cards
            && this.authService.currentUser.cards.length > 0;
    };
    RestaurantDealMakerComponent.prototype.setCurrentCard = function (deal) {
        if (this.currentCard != deal && deal != null) {
            this.currentCard = deal;
            this.dealEditorService.setCurrentDeal(this.currentCard);
        }
        else {
            this.currentCard = null;
            this.dealEditorService.setCurrentDeal(null);
        }
    };
    RestaurantDealMakerComponent.prototype.getBackground = function (deal) {
        if (this.currentCard && deal.id == this.currentCard.id)
            return "selected-item";
        else
            return "selectable-item";
    };
    RestaurantDealMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/'<ion-content>\n    <ion-list radio-group [(ngModel)]="currentCard"  *ngIf="hasCards()" class="push-list-under-menu-bar">\n        <ion-item *ngFor="let deal of authService.currentUser.cards" (click)="setCurrentCard(deal)" [ngClass]="getBackground(deal)">\n            <ion-label>{{ deal.dealDescription }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!hasCards()" class="push-list-under-menu-bar">\n        Add some cards and see them here!\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/,
            selector: 'restaurant-deal-maker',
            styleUrls: ['/restaurant-deal-maker.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_deal_editing_service__["a" /* DealEditorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_deal_editing_service__["a" /* DealEditorService */]) === "function" && _b || Object])
    ], RestaurantDealMakerComponent);
    return RestaurantDealMakerComponent;
    var _a, _b;
}());

//# sourceMappingURL=restaurant-deal-maker.component.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_user_type__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_toast_service__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var userEmailPasswordComboKey = "userEmailCombo";
var rememberMeUserKey = "rememberMeUser";
var UserSignUpComponent = (function () {
    function UserSignUpComponent(formBuilder, auth, viewControl, deviceService, toastService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.viewControl = viewControl;
        this.deviceService = deviceService;
        this.toastService = toastService;
        this.signingUp = true;
        this.isRest = false;
        this.attemptingSignup = false;
        this.attemptingLogin = false;
        this.remembered = false;
        this.userSignUpGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            name: [''],
            rememberMe: ['']
        });
        this.userLogInGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });
        this.deviceService.getSetting(rememberMeUserKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getUserEmailPasswordFromLocalStorage(userEmailPasswordComboKey).then(function (emailPasswordTup) {
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
            this.toastService.showReadableToast("Signing you up...welcome!");
            var email_1 = this.userSignUpGroup.get("email").value;
            var password_1 = this.userSignUpGroup.get("password").value;
            var confrimPassword = this.userSignUpGroup.get("confirmPassword").value;
            var firstName_1 = this.userSignUpGroup.get("name").value;
            if (password_1 == confrimPassword) {
                var userType = __WEBPACK_IMPORTED_MODULE_4__types_user_type__["b" /* UserType */].Consumer;
                this.auth.checkUserSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUpUser(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1).then(function () {
                                _this.handleRememberMe(_this.userSignUpGroup);
                                var newUser = new __WEBPACK_IMPORTED_MODULE_4__types_user_type__["a" /* GSUser */](_this.auth.fireAuth.auth.currentUser.uid, userType, firstName_1);
                                _this.auth.currentUser = newUser;
                                _this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());
                                _this.setAppropiateView();
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
    UserSignUpComponent.prototype.loginHandler = function () {
        this.handleRememberMe(this.userLogInGroup);
        this.login();
    };
    UserSignUpComponent.prototype.login = function () {
        var _this = this;
        if (this.userLogInGroup.valid) {
            this.toastService.showReadableToast("Logging you in...welcome back!");
            var email_2 = this.userLogInGroup.get("email").value;
            this.auth.checkUserSignInMethods(email_2).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.signIn(email_2, _this.userLogInGroup.get("password").value).then(function () {
                        _this.auth.getCurrentUserData().subscribe(function (users) {
                            _this.handleRememberMe(_this.userLogInGroup);
                            _this.auth.currentUser = users[0]; //there SHOULD be only one
                            _this.setAppropiateView();
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
            if (this.userLogInGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userLogInGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    UserSignUpComponent.prototype.setAppropiateView = function () {
        var _this = this;
        if (this.auth.checkCurrentUserType()) {
            this.auth.checkCurrentUserType().subscribe(function (users) {
                if (users[0].userType == __WEBPACK_IMPORTED_MODULE_4__types_user_type__["b" /* UserType */].Restaurant)
                    _this.viewControl.setDealMakerView();
                else
                    _this.viewControl.setConsumerView();
            });
        }
    };
    UserSignUpComponent.prototype.handleRememberMe = function (formGroup) {
        var rememberMe = formGroup.get("rememberMe").value;
        this.deviceService.putSetting(rememberMeUserKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(userEmailPasswordComboKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    UserSignUpComponent.prototype.resetPassword = function () {
        var _this = this;
        var emailControl = this.userLogInGroup.get("email");
        if (emailControl.valid) {
            this.auth.checkUserSignInMethods(emailControl.value).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.fireAuth.auth.sendPasswordResetEmail(emailControl.value).then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('welcomeScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UserSignUpComponent.prototype, "welcomeScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('logInScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UserSignUpComponent.prototype, "logInScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UserSignUpComponent.prototype, "userSignUpScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('goBackButton'),
        __metadata("design:type", Object)
    ], UserSignUpComponent.prototype, "goBackButton", void 0);
    UserSignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/'<div class="background-photo">\n\n</div>\n\n<div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n    <div class="center-text">grabsome</div>\n    <div class="button-area">\n        <button class="welcome-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n        <div class="or-text">or</div>\n        <button class="welcome-button" ion-button outline (click)="goToLoginScreen()">\n            login\n        </button>\n    </div>\n</div>\n\n<div #logInScreen class="animate-form offset-form">\n    <ion-card>              \n        <ion-card-content>\n            <ion-list class="centered-form ">\n                    <form [formGroup]="userLogInGroup">\n                        <ion-item>\n                            <ion-label floating>Email</ion-label>\n                            <ion-input type="email"  formControlName="email"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Password</ion-label>\n                            <ion-input type="password" formControlName="password"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label>Remember Me</ion-label>\n                            <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                        </ion-item>\n                    </form>\n                </ion-list>\n        </ion-card-content>\n    </ion-card>\n    \n    <button class="welcome-button" ion-button outline (click)="loginHandler()">\n        login\n    </button>\n\n    <button class="welcome-button" ion-button outline (click)="resetPassword()">\n        reset password\n    </button>\n</div>\n\n<div #userSignUpFields class="animate-form offset-form">\n    <ion-card>              \n        <ion-card-content>\n            <ion-list class="centered-form">\n                <form [formGroup]="userSignUpGroup">\n                    <ion-item>\n                        <ion-label floating>First Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Remember Me</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <button ion-button class="welcome-button" outline (click)="signUp()">\n        sign up\n    </button>\n</div>\n\n<div #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>\n\n<!-- <div #restaurantSignUpFields>\n    <ion-list>\n        <form [formGroup]="userFormGroup">\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="email"  formControlName="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" formControlName="password"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Confirm Password</ion-label>\n                <ion-input type="password" formControlName="confirmPassword"></ion-input>\n            </ion-item>\n        </form>\n    </ion-list>\n\n</div> -->\n\n<!-- <div #userTypeChoice class="animate-form offset-form">\n    <div class="user-type-button-area">\n        <button class="welcome-button" ion-button (click)="signUpConsumer()">\n           consumer\n        </button>\n        <div class="or-text">or</div>\n        <button class="welcome-button" ion-button outline (click)="signUpRestaurant()">\n            business\n        </button>\n    </div>\n</div> -->\n    '/*ion-inline-end:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/,
            selector: 'user-signup',
            styleUrls: ['/user-signup.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_5__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_toast_service__["a" /* ToastService */]])
    ], UserSignUpComponent);
    return UserSignUpComponent;
}());

//# sourceMappingURL=user-signup.component.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__ = __webpack_require__(72);
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
    BrowserHomeComponent.prototype.showRestaurantPortal = function () {
        this.viewController.setRestaurantPortal();
    };
    BrowserHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="home-nav-bar">\n    <button class="home-nav-button" (click)="showRestaurantPortal()"ion-button>\n        <ion-icon name="restaurant"></ion-icon> Restaurants\n    </button>\n    <button class="home-nav-button" ion-button>\n        <ion-icon name="send"></ion-icon> Contact\n    </button>\n</div>\n\n<div class="browser-home-photo">\n    <!-- <ion-card>\n        <ion-card-content>\n            <div class="flute-photo">\n            </div>\n        </ion-card-content>\n    </ion-card> -->\n</div>\n\n<div class="center-home-text">grabsome</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__["a" /* ViewControllerService */]])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}());

//# sourceMappingURL=browser-home.component.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_device_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_user_type__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types_restaurant_type__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types_location_type__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var restEmailPasswordComboKey = "restEmailCombo";
var rememberMeRestKey = "rememberMeRest";
var RestaurantLandingComponent = (function () {
    function RestaurantLandingComponent(formBuilder, auth, viewControl, deviceService, toastService, alert) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.viewControl = viewControl;
        this.deviceService = deviceService;
        this.toastService = toastService;
        this.alert = alert;
        this.rememberMeLogIn = false;
        this.rememberMeSignUp = false;
        this.userLogInGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });
        this.restSignUpGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            rememberMe: ['']
        });
        this.deviceService.getSetting(rememberMeRestKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getUserEmailPasswordFromLocalStorage(restEmailPasswordComboKey).then(function (emailPasswordTup) {
                    if (emailPasswordTup) {
                        _this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
                        _this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
                        _this.login();
                    }
                });
            }
        });
    }
    ;
    RestaurantLandingComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
    RestaurantLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.signUpCard.nativeElement.scrollIntoView(true);
    };
    RestaurantLandingComponent.prototype.loginHandler = function () {
        this.handleRememberMe(this.userLogInGroup);
        this.login();
    };
    RestaurantLandingComponent.prototype.handleRememberMe = function (formGroup) {
        var rememberMe = formGroup.get("rememberMe").value;
        this.deviceService.putSetting(rememberMeRestKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(restEmailPasswordComboKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    RestaurantLandingComponent.prototype.login = function () {
        var _this = this;
        if (this.userLogInGroup.valid) {
            this.toastService.showReadableToast("Logging you in...welcome back!");
            var email_1 = this.userLogInGroup.get("email").value;
            this.auth.checkUserSignInMethods(email_1).then(function (methods) {
                if (methods.length > 0) {
                    _this.auth.signIn(email_1, _this.userLogInGroup.get("password").value).then(function () {
                        _this.auth.getCurrentUserData().subscribe(function (users) {
                            _this.auth.currentUser = users[0]; //there SHOULD be only one
                            _this.setAppropiateView();
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
            if (this.userLogInGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";
            if (this.userLogInGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    RestaurantLandingComponent.prototype.signUp = function () {
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
            display = "One or more of your fields are messed up!";
            // if(this.restSignUpGroup.get("email").invalid)//TODO
            //     display += "Please be sure your email is formatted correctly. ";
            // if(this.restSignUpGroup.get("password").invalid)
            //     display += "Please be sure your password is at least eight characters long and both passwords match. ";
            this.toastService.showReadableToast(display);
            console.error("Fields are invalid");
        }
    };
    RestaurantLandingComponent.prototype.concatStringsWithSpaces = function () {
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
    RestaurantLandingComponent.prototype.presentVerifyAddressAlert = function (places, placesIndex) {
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
    RestaurantLandingComponent.prototype.finishSignUpFlow = function (place) {
        var _this = this;
        var email = this.restSignUpGroup.get("email").value;
        var password = this.restSignUpGroup.get("password").value;
        var confrimPassword = this.restSignUpGroup.get("confirmPassword").value;
        var restaurantName = this.restSignUpGroup.get("name").value;
        if (password == confrimPassword) {
            this.auth.checkUserSignInMethods(email).then(function (methods) {
                if (!methods || methods.length < 1) {
                    _this.auth.signUpUser(email, password).then(function () {
                        _this.auth.signIn(email, password).then(function () {
                            _this.handleRememberMe(_this.restSignUpGroup);
                            var newUser = new __WEBPACK_IMPORTED_MODULE_6__types_user_type__["a" /* GSUser */](_this.auth.fireAuth.auth.currentUser.uid, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Restaurant, restaurantName);
                            var newRestaurantModel = new __WEBPACK_IMPORTED_MODULE_8__types_restaurant_type__["a" /* Restaurant */](_this.auth.fireAuth.auth.currentUser.uid, restaurantName, place.formatted_address, "", new __WEBPACK_IMPORTED_MODULE_9__types_location_type__["a" /* GSLocation */](place.geometry.location));
                            newUser.restaurant = newRestaurantModel;
                            _this.auth.currentUser = newUser;
                            _this.auth.restaurantCollection.doc(_this.auth.fireAuth.auth.currentUser.uid).set(newRestaurantModel.getAsPlainObject());
                            _this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());
                            _this.setAppropiateView();
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
    RestaurantLandingComponent.prototype.setAppropiateView = function () {
        if (this.auth.currentUser.userType == __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Restaurant)
            this.viewControl.setRestaurantHome();
        else
            this.viewControl.setConsumerView();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signUpCard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RestaurantLandingComponent.prototype, "signUpCard", void 0);
    RestaurantLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-landing/restaurant-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">grabsome</div>\n    <div class="small-rest-center-text">Restaurants</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email"  formControlName="email"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Remember Me</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card #signUpCard class="sign-up-card">\n            <ion-list>\n                <form [formGroup]="restSignUpGroup">\n                    <ion-item class="padding-right">\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                    </ion-item>\n        \n                    <ion-item class="padding-right">\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Restaurant Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label floating>Address </ion-label>\n                        <ion-input formControlName="address"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>City</ion-label>\n                        <ion-input formControlName="city"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>State</ion-label>\n                        <ion-input formControlName="state"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label floating>Zipcode</ion-label>\n                        <ion-input formControlName="zipcode"></ion-input>\n                    </ion-item>\n                </form>\n            </ion-list>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-landing/restaurant-landing.component.html"*/,
            selector: 'restaurant-landing',
            styleUrls: ['/restaurant-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_view_controller_service__["a" /* ViewControllerService */], __WEBPACK_IMPORTED_MODULE_4__services_device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */]])
    ], RestaurantLandingComponent);
    return RestaurantLandingComponent;
}());

//# sourceMappingURL=restaurant-landing.component.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
var Restaurant = (function () {
    function Restaurant(uid, name, address, imageSource, location) {
        this.uid = uid;
        this.name = name;
        this.address = address;
        this.imageSource = imageSource;
        this.location = location;
    }
    Restaurant.prototype.getAsPlainObject = function () {
        this.location = Object.assign({}, this.location);
        return Object.assign({}, this);
    };
    return Restaurant;
}());

//# sourceMappingURL=restaurant.type.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__ = __webpack_require__(411);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RestaurantProfileComponent = (function () {
    function RestaurantProfileComponent() {
        this.root = __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__["a" /* DealEditorComponent */];
    }
    RestaurantProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-profile/restaurant-profile.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <restaurant-deal-maker></restaurant-deal-maker>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-profile/restaurant-profile.component.html"*/,
            selector: 'restaurant-profile',
            styleUrls: ['/restaurant-profile.component.scss']
        })
    ], RestaurantProfileComponent);
    return RestaurantProfileComponent;
}());

//# sourceMappingURL=restaurant-profile.component.js.map

/***/ })

},[448]);
//# sourceMappingURL=main.js.map