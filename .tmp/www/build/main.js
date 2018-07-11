webpackJsonp([0],{

/***/ 109:
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
    ViewControllerService.prototype.setView = function (viewComponent) {
        viewComponent;
    };
    ViewControllerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ViewControllerService);
    return ViewControllerService;
}());

//# sourceMappingURL=view-controller.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleView; });
/* unused harmony export Views */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_consumer_landing_consumer_landing_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_consumer_consumer_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_browser_home_browser_home_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_organization_landing_organization_landing_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_organization_deals_home_organization_deals_home_component__ = __webpack_require__(427);





/**
 * This is to simply signify that a component is used as one of the main views of the app
 * and is manipulated by the view controller service
 */
var LocaleView = (function () {
    function LocaleView() {
    }
    return LocaleView;
}());

/**
 * All the classes below extends LocaleView above
 */
var Views = (function () {
    function Views() {
    }
    Views.views = {
        ConsumerComponent: __WEBPACK_IMPORTED_MODULE_1__components_consumer_consumer_component__["a" /* ConsumerComponent */],
        ConsumerLandingComponent: __WEBPACK_IMPORTED_MODULE_0__components_consumer_landing_consumer_landing_component__["a" /* ConsumerLandingComponent */],
        BrowserHomeComponent: __WEBPACK_IMPORTED_MODULE_2__components_browser_home_browser_home_component__["a" /* BrowserHomeComponent */],
        OrganizationLandingComponent: __WEBPACK_IMPORTED_MODULE_3__components_organization_landing_organization_landing_component__["a" /* OrganizationLandingComponent */],
        OrganizationDealsHomeComponent: __WEBPACK_IMPORTED_MODULE_4__components_organization_deals_home_organization_deals_home_component__["a" /* OrganizationDealsHomeComponent */]
    };
    return Views;
}());

//# sourceMappingURL=locale-view.type.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LocaleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_type__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organization_type__ = __webpack_require__(405);



var LocaleCard = (function () {
    function LocaleCard(dealDescription, dealStart, dealEnd, numberOfDeals, dealType, obj) {
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.id = __WEBPACK_IMPORTED_MODULE_0__utils_type__["a" /* Guid */].newGuid();
        if (obj) {
            this.id = obj.id;
            this.organization = obj.organization;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
        }
    }
    LocaleCard.prototype.getAsPlainObject = function () {
        this.organization = Object.assign({}, this.organization);
        return Object.assign({}, this);
    };
    LocaleCard.getBlankCard = function () {
        var blankCard = new LocaleCard(null, new Date(), new Date(), -1, DealType.Drinks, null);
        blankCard.organization = new __WEBPACK_IMPORTED_MODULE_2__organization_type__["a" /* Organization */]("", "", "", "", new __WEBPACK_IMPORTED_MODULE_1__location_type__["a" /* LocaleLocation */]());
        return blankCard;
    };
    LocaleCard.updateDealModel = function (objectToUpdate, updatedObject) {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
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
    return LocaleCard;
}());

var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map

/***/ }),

/***/ 143:
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
        this.organization = Object.assign({}, this.organization);
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_user_type__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_controller_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_firestore_collection_user_service__ = __webpack_require__(75);
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(126);
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
    CardDataService.prototype.get = function (id) {
        id;
        throw new Error("Method not implemented.");
    };
    CardDataService.prototype.getAll = function () {
        return this.cardDoc.valueChanges();
    };
    CardDataService.prototype.getMulti = function (ids) {
        if (ids && ids.length > 0) {
            var observables = [];
            var _loop_1 = function (id) {
                observables.push(this_1.database.collection("cards", function (ref) { return ref.where("id", "==", id); }).valueChanges());
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
    CardDataService.prototype.setMulti = function (models) {
        var _this = this;
        var cards = models.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(card);
        });
    };
    CardDataService.prototype.set = function (model) {
        var assignedCard = Object.assign({}, model.getAsPlainObject());
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
            .where("organization.location.lat", ">=", (location.lat - latitudeRadiusLength)); }).valueChanges();
        var lngDeals = this.database.collection("cards", function (ref) { return ref.where("organization.location.lng", "<=", (location.lng + changeInLng))
            .where("organization.location.lng", ">=", (location.lng - changeInLng)); }).valueChanges();
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
    CardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CardDataService);
    return CardDataService;
}());

//# sourceMappingURL=card-data.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(244);
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
            console.log(URL);
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberMeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_keys_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_user_type__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(144);
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
    }
    RememberMeService.prototype.loginFromRememberMe = function (formGroup, userType) {
        var _this = this;
        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);
        this.deviceService.getSetting(deviceKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getSetting(tupleKey).then(function (emailPasswordTup) {
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
        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);
        this.deviceService.putBooleanSetting(deviceKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(tupleKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    RememberMeService.prototype.setKeys = function (userType, deviceKey, tupleKey) {
        if (userType == __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Organization) {
            deviceKey = __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeyss */].rememberMeRestKey;
            tupleKey = __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeyss */].restEmailPasswordComboKey;
        }
        else if (userType == __WEBPACK_IMPORTED_MODULE_3__types_user_type__["b" /* UserType */].Consumer) {
            deviceKey = __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeyss */].rememberMeUserKey;
            tupleKey = __WEBPACK_IMPORTED_MODULE_2__login_keys_service__["a" /* LoginKeyss */].userEmailPasswordComboKey;
        }
    };
    RememberMeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]])
    ], RememberMeService);
    return RememberMeService;
}());

//# sourceMappingURL=remember-me.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* unused harmony export EmailPasswordTuple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(41);
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

/***/ 195:
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

/***/ 240:
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consumer_card_list_consumer_card_list_component__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
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
    function UserProfileComponent(viewCtrl, authService, toastService, params, navCtrl, currentUserService, userService) {
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastService = toastService;
        this.params = params;
        this.navCtrl = navCtrl;
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
    UserProfileComponent.prototype.yourCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__consumer_card_list_consumer_card_list_component__["a" /* ConsumerCardList */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('editButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Button */])
    ], UserProfileComponent.prototype, "editButton", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/'<modal-navbar [organizationModal]="isOrganization" [profileModal]="true"></modal-navbar>\n\n<ion-content style="margin-top: 4em">\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>First Name</ion-label>\n        <ion-input [disabled]="emailDisabled" [(ngModel)]="firstName"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!isOrganization">\n        <ion-label floating>Email</ion-label>\n        <ion-input [disabled]="emailDisabled" type="email" [(ngModel)]="userEmail"></ion-input>\n    </ion-item>\n\n    <button *ngIf="!isOrganization" (click)="toggleEdit()" class="reset-button" ion-button>\n        {{editButtonText}}\n    </button>\n\n    <button (click)="resetPassword()" class="reset-button" outline ion-button>\n        reset password\n    </button>\n\n    <button *ngIf="!isOrganization" (click)="yourCards()" class="reset-button" outline ion-button>\n        your cards\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/user-profile/user-profile.component.html"*/,
            selector: 'user-profile',
            styleUrls: ['/user-profile.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_4__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ 250:
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
        this.deleteDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.addDealSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
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

/***/ 292:
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
webpackEmptyAsyncContext.id = 292;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(126);
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
        this.organizationCollection = this.database.collection("organization");
    }
    OrganizationService.prototype.get = function (id) {
        return this.database.collection("organization", function (ref) { return ref.where("id", '==', id); }).valueChanges();
    };
    OrganizationService.prototype.set = function (model) {
        return this.organizationCollection.doc(model.uid).set(model);
    };
    OrganizationService.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.getMulti = function (ids) {
        ids;
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.setMulti = function (models) {
        models;
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.delete = function (id) {
        id;
        throw new Error("Method not implemented.");
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OrganizationService);
    return OrganizationService;
}());

//# sourceMappingURL=organization-service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_remember_me_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_user_type__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__types_locale_view_type__ = __webpack_require__(110);
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










///PLAN
//Make a field component that takes a name and error message????
//First figure out overload then good validation then navigation and then we in this bitch 
var ConsumerLandingComponent = (function (_super) {
    __extends(ConsumerLandingComponent, _super);
    function ConsumerLandingComponent(formBuilder, auth, rememberMeService, toastService, currentUserService, userService, loginService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.auth = auth;
        _this.rememberMeService = rememberMeService;
        _this.toastService = toastService;
        _this.currentUserService = currentUserService;
        _this.userService = userService;
        _this.loginService = loginService;
        _this.signingUp = true;
        _this.isOrg = false;
        _this.attemptingSignup = false;
        _this.attemptingLogin = false;
        _this.remembered = false;
        _this.userSignUpGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            rememberMe: ['']
        });
        _this.userLogInGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        }); //new UserLoginFormGroup(this.formBuilder);
        return _this;
    }
    ConsumerLandingComponent.prototype.ngAfterViewInit = function () {
        this.rememberMeService.loginFromRememberMe(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Organization);
    };
    ConsumerLandingComponent.prototype.signUp = function () {
        var _this = this;
        if (this.userSignUpGroup.valid) {
            this.toastService.showReadableToast("Signing you up...welcome!");
            var email_1 = this.userSignUpGroup.get("email").value;
            var password_1 = this.userSignUpGroup.get("password").value;
            var confrimPassword = this.userSignUpGroup.get("confirmPassword").value;
            var firstName_1 = this.userSignUpGroup.get("name").value;
            if (password_1 == confrimPassword) {
                var userType = __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Consumer;
                this.auth.checkSignInMethods(email_1).then(function (methods) {
                    if (!methods || methods.length < 1) {
                        _this.attemptingSignup = true;
                        _this.auth.signUp(email_1, password_1).then(function () {
                            _this.auth.signIn(email_1, password_1).then(function () {
                                _this.rememberMeService.handleRememberMeSetting(_this.userSignUpGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Consumer);
                                var newUser = new __WEBPACK_IMPORTED_MODULE_6__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), userType, firstName_1);
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
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Consumer);
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
     */
    ConsumerLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.userSignUpScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    ConsumerLandingComponent.prototype.goToLoginScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.logInScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    };
    ConsumerLandingComponent.prototype.goBackAScreen = function () {
        this.welcomeScreen.nativeElement.style['left'] = "0%";
        this.logInScreen.nativeElement.style['left'] = "100%";
        this.userSignUpScreen.nativeElement.style['left'] = "100%";
        this.goBackButton.nativeElement.style['bottom'] = "-10%";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('welcomeScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "welcomeScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('logInScreen'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "logInScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('userSignUpFields'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], ConsumerLandingComponent.prototype, "userSignUpScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('goBackButton'),
        __metadata("design:type", Object)
    ], ConsumerLandingComponent.prototype, "goBackButton", void 0);
    ConsumerLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/'<div class="background-photo">\n\n</div>\n\n<div #welcomeScreen class="gs-font animate-form" style="left: 0%">\n    <div class="center-text">Chalkbord</div>\n    <div class="button-area">\n        <button class="welcome-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n        <div class="or-text">or</div>\n        <button class="welcome-button" ion-button outline (click)="goToLoginScreen()">\n            login\n        </button>\n    </div>\n</div>\n\n<div #logInScreen class="animate-form offset-form">\n    <ion-card>\n        <ion-card-content>\n            <ion-list class="centered-form ">\n                <form [formGroup]="userLogInGroup">\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email" formControlName="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Remember Me</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n    <button class="welcome-button" ion-button outline (click)="loginHandler()">\n        login\n    </button>\n\n    <button class="welcome-button" ion-button outline (click)="resetPassword()">\n        reset password\n    </button>\n</div>\n\n<div #userSignUpFields class="animate-form offset-form">\n    <ion-card>\n        <ion-card-content>\n            <ion-list class="centered-form">\n                <form [formGroup]="userSignUpGroup">\n                    <ion-item>\n                        <ion-label floating>First Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Email</ion-label>\n                        <ion-input type="email" formControlName="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label floating>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Remember Me</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <button ion-button class="welcome-button" outline (click)="signUp()">\n        sign up\n    </button>\n</div>\n\n<div #goBackButton class="go-back-button">\n    <button ion-fab (click)="goBackAScreen()">\n        <ion-icon name="arrow-back"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-landing/consumer-landing.component.html"*/,
            selector: 'consumer-landing',
            styleUrls: ['/consumer-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_0__services_remember_me_service__["a" /* RememberMeService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_2__services_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]])
    ], ConsumerLandingComponent);
    return ConsumerLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_9__types_locale_view_type__["a" /* LocaleView */]));

//# sourceMappingURL=consumer-landing.component.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginKeyss; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginKeyss = (function () {
    function LoginKeyss() {
    }
    LoginKeyss.rememberMeUserKey = "rememberMeUser"; //dont change this unless you want to change the other one is user-signup
    LoginKeyss.rememberMeRestKey = "rememberMeRest"; //this either
    LoginKeyss.userEmailPasswordComboKey = "userEmailCombo";
    LoginKeyss.restEmailPasswordComboKey = "restEmailCombo";
    LoginKeyss = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginKeyss);
    return LoginKeyss;
}());

//# sourceMappingURL=login-keys.service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_location_type__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_deals_filter_deal_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__more_card_info_more_card_info_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__types_utils_type__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__types_locale_view_type__ = __webpack_require__(110);
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


















var ConsumerComponent = (function (_super) {
    __extends(ConsumerComponent, _super);
    function ConsumerComponent(alert, popoverCtrl, toastService, launchNavigator, cardService, authService, imageService, modalCtrl, geolocation, currentUserService, userService) {
        var _this = _super.call(this) || this;
        _this.alert = alert;
        _this.popoverCtrl = popoverCtrl;
        _this.toastService = toastService;
        _this.launchNavigator = launchNavigator;
        _this.cardService = cardService;
        _this.authService = authService;
        _this.imageService = imageService;
        _this.modalCtrl = modalCtrl;
        _this.geolocation = geolocation;
        _this.currentUserService = currentUserService;
        _this.userService = userService;
        _this.transitionString = "";
        _this.numberOfCards = 3;
        _this.destoryingCard = false;
        _this.moveCardIndex = 0;
        _this.likingCard = false;
        _this.animatingCard = false;
        _this.currentFilter = null;
        _this.currentLocation = new __WEBPACK_IMPORTED_MODULE_2__types_location_type__["a" /* LocaleLocation */]();
        _this.stackConfig = {
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
        return _this;
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkLoggedIn()) {
            this.geolocation.watchPosition().subscribe(function (resp) {
                _this.currentLocation.lat = resp.coords.latitude;
                _this.currentLocation.lng = resp.coords.longitude;
                _this.cardSubscription = _this.cardService.getCardsByLatLng(_this.currentLocation, 1000000).subscribe(function (cardModels) {
                    if (cardModels.length > 0) {
                        if (!_this.cards) {
                            _this.cards = _this.cardService.filterNonDuplicateDeals(cardModels);
                            _this.filterCards(_this.currentFilter);
                        }
                        else
                            __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(_this.organizationViewCards, cardModels);
                    }
                });
            }, function (error) {
                _this.toastService.showReadableToast("We could not find you location, please contact support. " + error);
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
    ConsumerComponent.prototype.swipeCard = function (like) {
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
            __WEBPACK_IMPORTED_MODULE_16__types_utils_type__["b" /* Util */].delay(300).then(function () {
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
            __WEBPACK_IMPORTED_MODULE_16__types_utils_type__["b" /* Util */].delay(300).then(function () {
                _this.handleCard(false);
                _this.animatingCard = false;
            });
        }
    };
    ConsumerComponent.prototype.openDealTypePopover = function (event) {
        var _this = this;
        var filterPopover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__filter_deals_filter_deal_component__["a" /* FilterDealComponent */]);
        filterPopover.onDidDismiss(function (data) {
            _this.currentFilter = __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */][data];
            _this.filterCards(__WEBPACK_IMPORTED_MODULE_0__types_deals_type__["a" /* DealType */][data]);
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
            subTitle: "Your deal code is: " + __WEBPACK_IMPORTED_MODULE_16__types_utils_type__["b" /* Util */].randomNumber(1000, 9000),
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
    ConsumerComponent.prototype.filterCards = function (type) {
        var _this = this;
        this.organizationViewCards = new Array();
        this.filteredCards = new Array();
        if (type || type == 0) {
            this.filteredCards = this.cards.filter(function (card) {
                return card.dealType == type;
            });
        }
        else
            this.filteredCards = this.cards;
        this.setUpViewCards();
        __WEBPACK_IMPORTED_MODULE_16__types_utils_type__["b" /* Util */].delay(600).then(function () {
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
        this.viewCardIndex = this.numberOfCards;
        for (var i = 0; i < this.numberOfCards; i++) {
            this.imageService.setDealImageURL(this.filteredCards[i]);
            this.organizationViewCards.push(this.filteredCards[i]);
        }
    };
    ConsumerComponent.prototype.openProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__user_profile_user_profile_component__["a" /* UserProfileComponent */], { isOrganization: false }).present();
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">Chalkbord</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="openDealTypePopover($event)" class="button-top" ion-button icon-only>\n    <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n</button>\n\n<button (click)="openProfile()" class="button-top-left" ion-button icon-only>\n    <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n</button>\n\n<div class="loading-div">\n    <ion-spinner class="loading-spinner"></ion-spinner>\n    <h2 ion-text style="text-align: center">Getting your local deals!</h2>\n</div>\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="swipeCard(false)" (throwoutright)="swipeCard(true)"\n    (throwoutup)="moreInfo()" id="card-stack" [style.zIindex]="-1000">\n    <ion-card #mycards1 swing-card *ngFor="let card of organizationViewCards; let i = index;" [style.zIndex]="-1*i" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.organization.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" ios="md-heart" md="md-heart"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_11__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_15__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_8__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_14__services_firebase_firestore_collection_user_service__["a" /* UserService */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}(__WEBPACK_IMPORTED_MODULE_17__types_locale_view_type__["a" /* LocaleView */]));

//# sourceMappingURL=consumer.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Util; });
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

var Util = (function () {
    function Util() {
    }
    //used simply to async wait for something
    Util.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    Util.randomNumber = function (from, to) {
        return Math.floor(from + Math.random() * to);
    };
    return Util;
}());

//# sourceMappingURL=utils.type.js.map

/***/ }),

/***/ 405:
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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDealComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FilterDealComponent);
    return FilterDealComponent;
}());

//# sourceMappingURL=filter-deal.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreCardInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_deals_type__ = __webpack_require__(111);
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
    function MoreCardInfoComponent(navParams, launchNavigator) {
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.card = this.navParams.get("card");
        this.dealType = __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealType */][this.card.dealType.valueOf()];
    }
    MoreCardInfoComponent.prototype.goToLocation = function () {
        this.launchNavigator.navigate(this.card.organization.address);
    };
    MoreCardInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/'<modal-navbar [organizationModal]="false" [profileModal]="false"></modal-navbar>\n<ion-content>\n    <img *ngIf="card" class="present-card-image fill" src="{{card.imageURL}}" />\n    <div text-wrap style="padding-right: 16px;">\n        <ion-item (click)="goToLocation()">\n            <h1 class="app-text">{{card.organization.name}}</h1>\n            <p class="app-text">{{card.organization.address}}</p>\n        </ion-item>\n        <ion-item *ngIf="card.numberOfDeals > 0">\n            <h2 class="app-text red-text">There are only {{card.numberOfDeals}} cards available for this deal!</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{card.dealDescription}}</h2>\n            <p>{{card.dealStart | date: \'MMM d\'}}</p>\n            <p>{{card.dealStart | date: \'h:mm a\'}} - {{card.dealEnd | date: \'h:mm a\'}}</p>\n        </ion-item>\n        <ion-item>\n            <p>Deal type: {{dealType}}</p>\n        </ion-item>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/,
            selector: 'more-card-info',
            styleUrls: ['/more-card-info.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], MoreCardInfoComponent);
    return MoreCardInfoComponent;
}());

//# sourceMappingURL=more-card-info.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_locale_view_type__ = __webpack_require__(110);
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



var BrowserHomeComponent = (function (_super) {
    __extends(BrowserHomeComponent, _super);
    function BrowserHomeComponent(viewController) {
        var _this = _super.call(this) || this;
        _this.viewController = viewController;
        return _this;
    }
    BrowserHomeComponent.prototype.showOrganizationPortal = function () {
        this.viewController.setOrganizationPortal();
    };
    BrowserHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="home-nav-bar">\n    <button class="home-nav-button" (click)="showOrganizationPortal()" ion-button>\n        <ion-icon name="organization"></ion-icon> Organizations\n    </button>\n    <button class="home-nav-button" ion-button>\n        <ion-icon name="send"></ion-icon> Contact\n    </button>\n</div>\n\n<div class="browser-home-photo">\n    <!-- <ion-card>\n        <ion-card-content>\n            <div class="flute-photo">\n            </div>\n        </ion-card-content>\n    </ion-card> -->\n</div>\n\n<div class="center-home-text">Chalkbord</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_controller_service__["a" /* ViewControllerService */]])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__types_locale_view_type__["a" /* LocaleView */]));

//# sourceMappingURL=browser-home.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__types_user_type__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types_location_type__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__types_organization_type__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__types_locale_view_type__ = __webpack_require__(110);
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
    function OrganizationLandingComponent(formBuilder, auth, loginService, organizationService, toastService, alert, currentUserService, userService, rememberMeService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.auth = auth;
        _this.loginService = loginService;
        _this.organizationService = organizationService;
        _this.toastService = toastService;
        _this.alert = alert;
        _this.currentUserService = currentUserService;
        _this.userService = userService;
        _this.rememberMeService = rememberMeService;
        _this.rememberMeLogIn = false;
        _this.rememberMeSignUp = false;
        _this.userLogInGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(64), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        }); //new UserLoginFormGroup(this.formBuilder);
        _this.restSignUpGroup = _this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(64)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(64)])],
            address: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            rememberMe: ['']
        });
        _this.rememberMeService.loginFromRememberMe(_this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Organization);
        return _this;
    }
    OrganizationLandingComponent.prototype.ngAfterViewInit = function () {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    };
    OrganizationLandingComponent.prototype.goToUserSignUpScreen = function () {
        this.signUpCard.nativeElement.scrollIntoView(true);
    };
    OrganizationLandingComponent.prototype.loginHandler = function () {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Organization);
        this.loginService.login(this.userLogInGroup);
    };
    OrganizationLandingComponent.prototype.signUp = function () {
        var _this = this;
        if (this.restSignUpGroup.valid) {
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
        var organizationName = this.restSignUpGroup.get("name").value;
        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then(function (methods) {
                if (!methods || methods.length < 1) {
                    _this.auth.signUp(email, password).then(function () {
                        _this.auth.signIn(email, password).then(function () {
                            _this.rememberMeService.handleRememberMeSetting(_this.restSignUpGroup, __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Organization);
                            var newUser = new __WEBPACK_IMPORTED_MODULE_6__types_user_type__["a" /* LocaleUser */](_this.auth.getCurrentUserUID(), __WEBPACK_IMPORTED_MODULE_6__types_user_type__["b" /* UserType */].Organization, organizationName);
                            var newOrganziationModel = new __WEBPACK_IMPORTED_MODULE_12__types_organization_type__["a" /* Organization */](_this.auth.getCurrentUserUID(), organizationName, place.formatted_address, "", new __WEBPACK_IMPORTED_MODULE_8__types_location_type__["a" /* LocaleLocation */](place.geometry.location));
                            newUser.organization = newOrganziationModel;
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
        else {
            this.toastService.showReadableToast("Please make sure your passwords match.");
            console.error("Passwords do not match");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('signUpCard'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], OrganizationLandingComponent.prototype, "signUpCard", void 0);
    OrganizationLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<div id="map" name="map">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">Chalkbord</div>\n    <div class="small-rest-center-text">Organizations</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email" formControlName="email"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Remember Me</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="rememberMeLogIn" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="loginHandler()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card #signUpCard class="sign-up-card">\n        <ion-list>\n            <form [formGroup]="restSignUpGroup">\n                <ion-item class="padding-right">\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="email" formControlName="email"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Password</ion-label>\n                    <ion-input type="password" formControlName="password"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Confirm Password</ion-label>\n                    <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>organization Name</ion-label>\n                    <ion-input formControlName="name"></ion-input>\n                </ion-item>\n\n                <ion-item class="padding-right">\n                    <ion-label floating>Address </ion-label>\n                    <ion-input formControlName="address"></ion-input>\n                </ion-item>\n                <ion-item class="padding-right">\n                    <ion-label floating>City</ion-label>\n                    <ion-input formControlName="city"></ion-input>\n                </ion-item>\n                <ion-item class="padding-right">\n                    <ion-label floating>State</ion-label>\n                    <ion-input formControlName="state"></ion-input>\n                </ion-item>\n                <ion-item class="padding-right">\n                    <ion-label floating>Zipcode</ion-label>\n                    <ion-input formControlName="zipcode"></ion-input>\n                </ion-item>\n            </form>\n        </ion-list>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-landing/organization-landing.component.html"*/,
            selector: 'organization-landing',
            styleUrls: ['/organization-landing.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_firebase_authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__services_current_user_service__["a" /* CurrentUserService */], __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_remember_me_service__["a" /* RememberMeService */]])
    ], OrganizationLandingComponent);
    return OrganizationLandingComponent;
}(__WEBPACK_IMPORTED_MODULE_13__types_locale_view_type__["a" /* LocaleView */]));

//# sourceMappingURL=organization-landing.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_locale_view_type__ = __webpack_require__(110);
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



var OrganizationDealsHomeComponent = (function (_super) {
    __extends(OrganizationDealsHomeComponent, _super);
    function OrganizationDealsHomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.root = __WEBPACK_IMPORTED_MODULE_1__deal_editor_deal_editor_component__["a" /* DealEditorComponent */];
        return _this;
    }
    OrganizationDealsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <organization-deal-list></organization-deal-list>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/,
            selector: 'organization-deals-home',
            styleUrls: ['/organization-deals-home.component.scss']
        })
    ], OrganizationDealsHomeComponent);
    return OrganizationDealsHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__types_locale_view_type__["a" /* LocaleView */]));

//# sourceMappingURL=organization-deals-home.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_deals_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uploader_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_deal_editing_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enums_ionic_screen_sizes_enum__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enums_ionic_platform_enum__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { PictureSourceType } from '@ionic-native/camera';











var DealEditorComponent = (function () {
    function DealEditorComponent(cardService, formBuilder, uploader, dealEditorService, userService, platform, actionSheetCtrl, imageService, currentUserService) {
        var _this = this;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.dealEditorService = dealEditorService;
        this.userService = userService;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imageService = imageService;
        this.currentUserService = currentUserService;
        this.limitDealNumber = false;
        this.fileReader = new FileReader();
        this.dealEditorFormGroup = this.formBuilder.group({
            dealDescription: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            numberOfDeals: [''],
            limitedDealNumber: [''],
            dealDay: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealStart: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealEnd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dealType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
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
        this.imageDataForUpload = event.srcElement.files[0];
        this.fileReader.readAsDataURL(this.imageDataForUpload);
    };
    DealEditorComponent.prototype.delete = function () {
        this.cardService.delete(this.dealEditorService.currentDealBeingEdited.id);
        this.dealEditorService.deleteDealSubject.next(this.dealEditorService.currentDealBeingEdited);
        this.dealEditorService.currentDealBeingEdited = null;
        this.dealEditorService.currentDealSubject.next();
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
    };
    DealEditorComponent.prototype.add = function () {
        if (this.dealEditorFormGroup.valid && this.imageDataForUpload) {
            var deal = this.getDealFromFields();
            this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, false);
            this.imageDataForUpload = null;
            this.dealEditorService.addDealSubject.next(deal);
            this.cardService.set(deal);
            this.currentUserService.addCardId(deal.id);
            this.userService.set(this.currentUserService.getCurrentUser());
        }
    };
    DealEditorComponent.prototype.save = function () {
        var _this = this;
        if (this.dealEditorFormGroup.valid) {
            var deal = this.getDealFromFields();
            var startDate = this.dealEditorFormGroup.get("dealDay").value;
            var startTime = this.dealEditorFormGroup.get("dealStart").value;
            var endTime = this.dealEditorFormGroup.get("dealEnd").value;
            var startDatetime = this.getSaveCombinedTime(startTime, startDate);
            var endDatetime = this.getSaveCombinedTime(endTime, startDate);
            deal.dealStart = startDatetime;
            deal.dealEnd = endDatetime;
            deal.id = this.dealEditorService.currentDealBeingEdited.id;
            if (this.imageDataForUpload) {
                this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, true).then(function () {
                    _this.cleanUpImageData();
                    _this.imageService.setDealImageURL(_this.dealEditorService.currentDealBeingEdited);
                });
            }
            this.cardService.set(deal);
        }
        else
            this.reportBadFields();
    };
    DealEditorComponent.prototype.getSaveCombinedTime = function (time, date) {
        var combinedTime = new Date(date);
        var timeDateObj = new Date(time);
        combinedTime.setHours(timeDateObj.getHours());
        combinedTime.setMinutes(timeDateObj.getMinutes());
        return combinedTime;
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
        var combinedTime = new Date(Date.parse(date));
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
        this.cleanUpImageData();
        Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
            _this.dealEditorFormGroup.get(key).setValue(null);
        });
    };
    DealEditorComponent.prototype.getDealFromFields = function () {
        var startDate = this.dealEditorFormGroup.get("dealDay").value;
        var startTime = this.dealEditorFormGroup.get("dealStart").value;
        var endTime = this.dealEditorFormGroup.get("dealEnd").value;
        var startDatetime = this.getCombinedTime(startTime, startDate);
        var endDatetime = this.getCombinedTime(endTime, startDate);
        var deal;
        if (!this.limitDealNumber) {
            deal = new __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["b" /* LocaleCard */](this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, -1, //no deal limit
            this.dealEditorFormGroup.get("dealType").value);
            deal.organization = this.currentUserService.getCurrentUser().organization;
        }
        else {
            deal = new __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["b" /* LocaleCard */](this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, this.dealEditorFormGroup.get("numberOfDeals").value, this.dealEditorFormGroup.get("dealType").value);
            deal.organization = this.currentUserService.getCurrentUser().organization;
        }
        return deal;
    };
    DealEditorComponent.prototype.getDeviceIsSmall = function () {
        if (this.platformReady)
            return this.platform.width() < __WEBPACK_IMPORTED_MODULE_7__enums_ionic_screen_sizes_enum__["a" /* IonicScreenSize */].Md;
    };
    DealEditorComponent.prototype.editPhotoData = function () {
        if (this.isDesktop()) {
            this.uploadDesktopImage();
        }
        else {
            this.actionSheetCtrl.create({
                title: 'Mobile Photo uploads not supported yet!',
                buttons: []
            }).present();
        }
    };
    // private cameraUpload(sourceType: PictureSourceType) {
    //     // this.cameraService.getPhotoFromLibrary(sourceType).then((photoData) => {
    //     //     this.imageData = photoData;
    //     // })
    //     sourceType; 
    // }
    DealEditorComponent.prototype.isDesktop = function () {
        return this.platform.is(__WEBPACK_IMPORTED_MODULE_8__enums_ionic_platform_enum__["a" /* IonicPlatform */].Core);
    };
    DealEditorComponent.prototype.uploadDesktopImage = function () {
        this.hiddenFileInput.nativeElement.click();
    };
    DealEditorComponent.prototype.cleanUpImageData = function () {
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
        this.fileReader.abort();
    };
    DealEditorComponent.prototype.reportBadFields = function () {
        //this.
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('hiddenFileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], DealEditorComponent.prototype, "hiddenFileInput", void 0);
    DealEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big">Chalkbord</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <ion-col col-12 col-sm-6 style="padding: 0px;">\n                        <ion-item>\n                            <ion-label floating>Deal Description</ion-label>\n                            <ion-input formControlName="dealDescription"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Deal date</ion-label>\n                            <ion-datetime displayFormat="MMMM DD, YYYY" formControlName="dealDay"></ion-datetime>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Start time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>End time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Limited deal number</ion-label>\n                            <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n                        </ion-item>\n                        \n                        <ion-item *ngIf="limitDealNumber">\n                            <ion-label floating>Deal Number</ion-label>\n                            <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n                        </ion-item>\n                \n                        <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                            Deal Type\n                            <ion-item>\n                                <ion-label>Drinks</ion-label>\n                                <ion-radio value="0"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Food</ion-label>\n                                <ion-radio value="1"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Both</ion-label>\n                                <ion-radio value="2"></ion-radio>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                    <ion-col (click)="editPhotoData()" style="padding: 0px;">\n                        <gs-card [card]="dealEditorService.currentDealBeingEdited" [imageSrc]="imageDataForPreview"></gs-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </form>\n    </ion-list>\n\n    <div class="button-group">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n            \n        <button *ngIf="editingDeal" ion-button (click)="delete()">\n            Delete\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n\n<input #hiddenFileInput type="file" (change)="setImageData($event)" accept="image/*" style="visibility:hidden"/>\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_firebase_firestore_collection_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_uploader_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_5__services_deal_editing_service__["a" /* DealEditorService */], __WEBPACK_IMPORTED_MODULE_11__services_firebase_firestore_collection_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_9__services_firebase_image_service_service__["a" /* ImageService */],
            __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */]])
    ], DealEditorComponent);
    return DealEditorComponent;
}());

//# sourceMappingURL=deal-editor.component.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(430);
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
    UploadService.prototype.uploadDealPhoto = function (imageData, fileName, updatePicture) {
        if (updatePicture && this.storage.ref("/locale-deal-photos/" + fileName))
            this.storage.ref("/locale-deal-photos/" + fileName).delete();
        return this.storage.upload("/locale-deal-photos/" + fileName, imageData);
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(583);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_firebase_firestore_collection_organization_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_consumer_landing_consumer_landing_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_organization_deals_home_organization_deals_home_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_organization_deal_list_organization_deal_list_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_more_card_info_more_card_info_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_card_card_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_draggable__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_consumer_consumer_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_dialogs__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_deal_editor_deal_editor_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_filter_deals_filter_deal_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_launch_navigator__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_database__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_firebase_image_service_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_uploader_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_view_controller_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_unique_device_id__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_device_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_user_profile_user_profile_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_browser_home_browser_home_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_deal_editing_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_organization_landing_organization_landing_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_remember_me_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_firebase_firestore_collection_card_data_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_firebase_firestore_collection_user_service__ = __webpack_require__(75);
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
                __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */]
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
                __WEBPACK_IMPORTED_MODULE_6__components_modal_navbar_modal_navbar_component__["a" /* ModalNavbarComponent */]
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
                __WEBPACK_IMPORTED_MODULE_43__services_remember_me_service__["a" /* RememberMeService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_firestore_collection_card_data_service__ = __webpack_require__(145);
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
    function CurrentUserService(cardService) {
        this.cardService = cardService;
    }
    CurrentUserService.prototype.setCurrentUser = function (user) {
        if (user != null) {
            this.currentUser = user;
            this.setUpCardObservable();
        }
    };
    CurrentUserService.prototype.getCurrentUser = function () {
        return Object.assign({}, this.currentUser);
    };
    //for subscription purposes only
    CurrentUserService.prototype.getCards = function () {
        return this.currentUser.cards;
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
    CurrentUserService.prototype.setUpCardObservable = function () {
        this.currentUser.cards = this.cardService.getMulti(this.currentUser.cardIds);
    };
    CurrentUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_firestore_collection_card_data_service__["a" /* CardDataService */]])
    ], CurrentUserService);
    return CurrentUserService;
}());

//# sourceMappingURL=current-user.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerCardList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConsumerCardList = (function () {
    function ConsumerCardList() {
    }
    ConsumerCardList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/'<ion-content></ion-content>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer-card-list/consumer-card-list.component.html"*/,
            selector: 'consumer-card-list',
            styleUrls: ['/consumer-card-list.component.scss']
        })
    ], ConsumerCardList);
    return ConsumerCardList;
}());

//# sourceMappingURL=consumer-card-list.component.js.map

/***/ }),

/***/ 735:
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

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationDealListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_deal_editing_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_deals_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
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
    function OrganizationDealListComponent(dealEditorService, modalCtrl, currentUserService) {
        var _this = this;
        this.dealEditorService = dealEditorService;
        this.modalCtrl = modalCtrl;
        this.currentUserService = currentUserService;
        this.cardList = [];
        this.currentUserService.getCards().subscribe(function (deals) {
            console.log(deals);
            __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* LocaleCard */].findAndUpdateCards(deals, _this.cardList);
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.currentCard = deal;
        });
        this.dealEditorService.deleteDealSubject.subscribe(function (deal) {
            _this.cardList.splice(_this.cardList.indexOf(deal), 1);
        });
        this.dealEditorService.addDealSubject.subscribe(function (deal) {
            _this.cardList.push(deal);
            _this.currentCard = deal;
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
    OrganizationDealListComponent.prototype.openProfile = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile_component__["a" /* UserProfileComponent */], { isOrganization: true }).present();
    };
    OrganizationDealListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/'<ion-content>\n    <ion-list radio-group [(ngModel)]="currentCard"  *ngIf="hasCards()" class="push-list-under-menu-bar">\n        <ion-item *ngFor="let deal of cardList" (click)="setCurrentCard(deal)" [ngClass]="getBackground(deal)">\n            <ion-label>{{ deal.dealDescription }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!hasCards()" class="push-list-under-menu-bar">\n        Add some deals and see them here!\n    </div>\n</ion-content>\n\n<button (click)="openProfile()" class="button-top-right" ion-button icon-only>\n    <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n</button>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/,
            selector: 'organization-deal-list',
            styleUrls: ['/organization-deal-list.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_deal_editing_service__["a" /* DealEditorService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__services_current_user_service__["a" /* CurrentUserService */]])
    ], OrganizationDealListComponent);
    return OrganizationDealListComponent;
}());

//# sourceMappingURL=organization-deal-list.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_device_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_keys_service__ = __webpack_require__(398);
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
                if (_this.organizationModal) {
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_5__services_login_keys_service__["a" /* LoginKeyss */].rememberMeRestKey, false);
                    _this.viewControllerService.setBrowserHome();
                }
                else {
                    _this.deviceService.putBooleanSetting(__WEBPACK_IMPORTED_MODULE_5__services_login_keys_service__["a" /* LoginKeyss */].rememberMeUserKey, false);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "profileModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalNavbarComponent.prototype, "organizationModal", void 0);
    ModalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">Chalkbord</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="closeProfile()" class="close-modal-button" ion-button icon-only>\n    <ion-icon ios="md-arrow-back" md="md-arrow-back"></ion-icon>\n</button>\n\n<button *ngIf="profileModal" (click)="logout()" class="signout-button" ion-button icon-only>\n    <ion-icon ios="md-log-out" md="md-log-out"></ion-icon>\n</button>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/modal-navbar/modal-navbar.component.html"*/,
            selector: 'modal-navbar',
            styleUrls: ['/modal-navbar.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__["a" /* ViewControllerService */]])
    ], ModalNavbarComponent);
    return ModalNavbarComponent;
}());

//# sourceMappingURL=modal-navbar.component.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types_deals_type__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_image_service_service__ = __webpack_require__(147);
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
    function LocaleCardComponent(imageService) {
        this.imageService = imageService;
        this.showCardText = true;
        this._card = __WEBPACK_IMPORTED_MODULE_0__types_deals_type__["b" /* LocaleCard */].getBlankCard();
    }
    Object.defineProperty(LocaleCardComponent.prototype, "card", {
        get: function () {
            return this._card;
        },
        set: function (card) {
            if (card) {
                this._card = card;
                this.imageService.setDealImageURL(this.card);
            }
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
    LocaleCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<div id="preview-card-stack" [style.zIindex]="-1000">\n    <ion-card>\n        <div *ngIf="card && !card.imageURL" class="non-draggable-card-image fill">Tap here to upload a photo</div>\n        <img *ngIf="card && card.imageURL" class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content *ngIf="card || showCardText" class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{_card.organization?.name}}\n            </ion-card-title>\n            {{_card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_firebase_image_service_service__["a" /* ImageService */]])
    ], LocaleCardComponent);
    return LocaleCardComponent;
}());

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* unused harmony export SignUpReturnCode */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(399);
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

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_ionic_platform_enum__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_authorization_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_view_controller_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(41);
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(66);
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
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     *
     * organization users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     *
     * We can talk about if we really want to use a toast here TODO
     * @param user
     */
    UserService.prototype.set = function (user) {
        if (this.userCollection) {
            var assignedUser = Object.assign({}, user);
            delete (assignedUser.cards);
            if (assignedUser.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(assignedUser.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(assignedUser);
        }
        else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");
        return Promise.reject("User not found!");
    };
    UserService.prototype.get = function (uid) {
        return this.database.collection("users", function (ref) { return ref.where("uid", '==', uid); }).valueChanges(); //this.fireAuth.auth.currentUser.uid
    };
    UserService.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    UserService.prototype.getMulti = function (ids) {
        ids;
        throw new Error("Method not implemented.");
    };
    UserService.prototype.setMulti = function (models) {
        models;
        throw new Error("Method not implemented.");
    };
    UserService.prototype.delete = function (id) {
        id;
        throw new Error("Method not implemented.");
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ })

},[465]);
//# sourceMappingURL=main.js.map