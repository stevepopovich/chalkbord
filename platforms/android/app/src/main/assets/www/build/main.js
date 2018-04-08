webpackJsonp([0],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RestaurantModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DealType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_type__ = __webpack_require__(661);

var DealModel = (function () {
    function DealModel(restaurant, dealDescription, dealStart, dealEnd, numberOfDeals, dealType, imageSource) {
        this.id = __WEBPACK_IMPORTED_MODULE_0__utils_type__["a" /* Guid */].newGuid();
        this.restaurant = restaurant;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
    }
    DealModel.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return DealModel;
}());

var RestaurantModel = (function () {
    function RestaurantModel(name, location, imageSource) {
        this.name = name;
        this.location = location;
        this.imageSource = imageSource;
    }
    return RestaurantModel;
}());

var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 277:
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
webpackEmptyAsyncContext.id = 277;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDealComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], FilterDealComponent);
    return FilterDealComponent;
}());

//# sourceMappingURL=filter-deal.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(363);
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
    function CardDataService(database, storage) {
        this.database = database;
        this.storage = storage;
        this.storage;
    }
    CardDataService.prototype.setUpCardStream = function () {
        this.cardDoc = this.database.collection("cards");
        this.cards = this.cardDoc.valueChanges();
    };
    CardDataService.prototype.getCards = function () {
        if (!this.cards)
            this.setUpCardStream();
        return this.cards;
    };
    CardDataService.prototype.setCards = function (data) {
        var _this = this;
        if (!this.cardDoc)
            this.setUpCardStream();
        var cards = data.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(Object.assign({}, card));
        });
    };
    CardDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], CardDataService);
    return CardDataService;
}());

//# sourceMappingURL=card-data.service.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(377);
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
    function AuthorizationService(auth) {
        this.auth = auth;
    }
    AuthorizationService.prototype.authorizeUserAccess = function (username, password) {
        return this.auth.auth.signInWithEmailAndPassword(username, password);
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthorizationService);
    return AuthorizationService;
}());

//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_storage__ = __webpack_require__(184);
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

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_deals_type__ = __webpack_require__(213);
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
    function DealEditorComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.deal = new __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["c" /* RestaurantModel */]("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_2__types_deals_type__["b" /* DealType */].Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg");
    }
    DealEditorComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DealEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n            <ion-title class="title-big">locale</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n            <ion-item>\n                <ion-label color="primary" floating>Deal Description</ion-label>\n                <ion-input placeholder="Deal description" [ngModel]="deal.dealDescription"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label floating>Day</ion-label>\n                <ion-datetime displayFormat="MM/DD"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>Start time</ion-label>\n                <ion-datetime displayFormat="h:mm a" [(ngModel)]="deal.dealStart"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>End time</ion-label>\n                <ion-datetime displayFormat="h:mm a" [(ngModel)]="deal.dealEnd"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Limited deal number</ion-label>\n                <ion-checkbox [(ngModel)]="limitedDealNumber"></ion-checkbox>\n            </ion-item>\n        \n            <ion-item *ngIf="limitedDealNumber">\n                <ion-label floating>Deal Number</ion-label>\n                <ion-input type="number" [(ngModel)]="dealNumber"></ion-input>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Image upload will be here</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <button ion-button (click)="close()" style="left: 38%">\n            Close\n        </button>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], DealEditorComponent);
    return DealEditorComponent;
}());

//# sourceMappingURL=deal-editor.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_consumer_consumer_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_dialogs__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_restaurant_deal_maker_restaurant_deal_maker_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_deal_editor_deal_editor_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_filter_deals_filter_deal_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_launch_navigator__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_card_data_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authorization_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_image_service_service__ = __webpack_require__(381);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */], {}, {
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
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_12__components_restaurant_deal_maker_restaurant_deal_maker_component__["a" /* RestaurantDealMakerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_deal_editor_deal_editor_component__["a" /* DealEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_filter_deals_filter_deal_component__["a" /* FilterDealComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
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
                __WEBPACK_IMPORTED_MODULE_23__services_image_service_service__["a" /* ImageService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(318);
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
    function LocaleApp(statusBar) {
        this.statusBar = statusBar;
        this.dealMaker = false;
        this.consumer = true;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByName("black");
    }
    LocaleApp.prototype.changeView = function () {
        if (this.dealMaker) {
            this.consumer = true;
            this.dealMaker = false;
        }
        else if (this.consumer) {
            this.dealMaker = true;
            this.consumer = false;
        }
    };
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n            <button (click)="changeView()" class="button-left" ion-button icon-only>\n                <ion-icon ios="md-sync" md="md-sync"></ion-icon>\n            </button>\n            <ion-title class="title-big">GrabSome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<consumer *ngIf="consumer"></consumer>\n<restaurant-deal-maker *ngIf="dealMaker"></restaurant-deal-maker>'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]])
    ], LocaleApp);
    return LocaleApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_deals_filter_deal_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_card_data_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authorization_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_image_service_service__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__types_deals_type__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// const localeDealPhotoFolder: string = "/locale-deal-photos/";
// const restaurantCards: DealModel[] = [
//     new DealModel(new RestaurantModel("Bonefish Grill", "5712 Frantz rd, Dublin, OH", ""), " $14 Fresh Caught Salmon Filet", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Bonefish Grill Food.jpg"),
//     new DealModel(new RestaurantModel("Bridge Street Pizza", "16 East Bridge st, Dublin, OH", ""), "Half Off Large Pizza", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Bridge Street Pizza food.jpg"),
//     new DealModel(new RestaurantModel("Cafe Istanbul", "6125 Riverside dr, Dublin OH, Dublin, OH", ""), "$9 Lamb Chops", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder +  "Cafe Istanbul food.jpg"),
//     new DealModel(new RestaurantModel("Cap City", "6644 Riverside dr, Dublin, OH", ""), "$8 Proseco", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Cap City Bar.jpg"),
//     new DealModel(new RestaurantModel("Dub Pub", "5736 Frantz rd, Dublin, OH", ""), "$5 Irish Car Bomb", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Dub Pub bar.jpg"),
//     new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$4 Stella Pints", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "DVT Barr.jpg"),
//     new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$7 Soft Preztel Sticks", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "DVT Food.jpg"),
//     new DealModel(new RestaurantModel("El Vaquero", "3580 W Dublin-granville rd, Columbus, OH", ""), "25% Off All Tacos", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "El Vaquero Food.jpg"),
//     new DealModel(new RestaurantModel("Hyde Park", "6360 Frantz rd, Dublin, OH", ""), "$29 6oz Filet Mignon", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Hyde Park Food.jpg"),
//     new DealModel(new RestaurantModel("LIV Miami", "4441 Collins ave, Miami Beach, FL", ""), "$1000 VIP Table", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Liv Miami.jpg"),
//     new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "$2 Off House Margaritas", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Local Cantina Bar.jpg"),
//     new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "Half Off Street Taco Appetizer", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Local Cantina Food.jpg"),
//     new DealModel(new RestaurantModel("Mean Jeans", "2942 Hayden Run plaza, Columbus, OH", ""), "$1 Off Domestic Beers", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Mean Jeans bar.jpg"),
//     new DealModel(new RestaurantModel("Mezzo", "12 West Bridge st, Dublin, OH", ""), "Split a Bottle of Wine Half Off", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Mezzo Bar.jpg"),
//     new DealModel(new RestaurantModel("Oscars", "84 N High st, Dublin, OH", ""), "$4 Fried Chicken Lunch Sandwich", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Oscars of Dublin food.jpg"),
//     new DealModel(new RestaurantModel("Pins Mechanical", "6558 Riverside dr, Dublin, OH", ""), "2 For 1 Patron Silver", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Pins Bar.jpg"),
//     new DealModel(new RestaurantModel("Pint Room", "4415 W Dublin-Granville rd, Dublin, OH", ""), "$4 IPA Drafts", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Pint Room Bar.jpg"),
//     new DealModel(new RestaurantModel("Poke Bros", "1065 Gemini Pl, Columbus, OH", ""), "$6 Poke Bowl", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Poke Bros.jpg"),
//     new DealModel(new RestaurantModel("RAM Restaurant and Brewery", "6632 Longshore st, Dublin, OH", ""), "$5 Fish and Chips", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "RAM Food.jpg"),
//     new DealModel(new RestaurantModel("Rancho Allegra", "5637 Woerner Temple rd, Dublin, OH", ""), "$7 Shareable Loaded Nachos", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Rancho Allegra Food.jpg"),
//     new DealModel(new RestaurantModel("Steak 954", "401 N Ft Lauderdale Beach Bvld, Fort Lauderdale, FL", ""), "$30 10oz NY Strip", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "steak.jpg"),
//     new DealModel(new RestaurantModel("Sway Nightclub", "1824, 111 SW 2nd ave, Fort Lauderdale, Fl", ""), "Free Cover with this app", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Sway Nightclub.jpg"),
//     new DealModel(new RestaurantModel("Vine and Tap", "55 S High st, Dublin, OH", ""), "$12 House Wine for Two", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Vine _ Tap Bar.jpg"),
//     new DealModel(new RestaurantModel("Yogis", "5857 Karric Square dr, Dublin, OH", ""), "$4 Well Mixed Drinks", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Yogis Bar.jpg"),
// ];
var ConsumerComponent = (function () {
    function ConsumerComponent(alert, popoverCtrl, launchNavigator, cardService, authService, imageService) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.launchNavigator = launchNavigator;
        this.cardService = cardService;
        this.authService = authService;
        this.imageService = imageService;
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
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 6), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 2400;
            }
        };
        // this.authService.authorizeUserAccess("stevepopovich8@gmail.com", "Thisism1").then(() => {
        //     this.cardService.setCards(restaurantCards);
        // });
        this.authService.authorizeUserAccess("stevepopovich8@gmail.com", "Thisism1").then(function () {
            _this.cardService.getCards().subscribe(function (cardModels) {
                if (!_this.cards) {
                    _this.cards = cardModels;
                    _this.filterCards(_this.currentFilter);
                }
                else {
                    _this.findAndUpdateCards(cardModels);
                }
            });
        });
    }
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
                        _this.launchNavigator.navigate(card.restaurant.location);
                    }
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
            _this.swingCards.toArray()[0].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_swing__["SwingStackComponent"])
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<button (click)="openDealTypePopover($event)" class="button-top" ion-button icon-only>\n    <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n</button>\n<div swing-stack #myswing1 *ngIf="restaurantViewCards && restaurantViewCards.length > 0" [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack" [style.zIindex] = "-1000">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantViewCards; let i = index;" [style.zIndex]="-1*i" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restaurant.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" ios="md-heart" md="md-heart"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_5__services_card_data_service__["a" /* CardDataService */], __WEBPACK_IMPORTED_MODULE_6__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_7__services_image_service_service__["a" /* ImageService */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());

//# sourceMappingURL=consumer.component.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
/* unused harmony export Util */
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
    //looks at differences in properties between objects
    Util.objectUpdater = function (newObj, objToUpdate) {
        var props = Object.getOwnPropertyNames(objToUpdate);
        var changed = false;
        props.forEach(function (prop) {
            if (newObj[prop])
                if (objToUpdate[prop] != newObj[prop]) {
                    objToUpdate[prop] = newObj[prop];
                    changed = true;
                }
        });
        return changed;
    };
    return Util;
}());

//# sourceMappingURL=utils.type.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantDealMakerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deal_editor_deal_editor_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_deals_type__ = __webpack_require__(213);
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
    function RestaurantDealMakerComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.newDatePlusTwo = new Date();
        this.deals = [];
        this.newDatePlusTwo.setHours(new Date().getHours() + 2);
        var sixThirty = new Date();
        sixThirty.setHours(18);
        sixThirty.setMinutes(30);
        var eight = new Date();
        eight.setHours(20);
        eight.setMinutes(0);
        this.deals = [
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name2", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name3", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name4", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name5", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["a" /* DealModel */](new __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["c" /* RestaurantModel */]("Name6", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, __WEBPACK_IMPORTED_MODULE_3__types_deals_type__["b" /* DealType */].Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
        ];
    }
    RestaurantDealMakerComponent.prototype.editDeal = function (deal) {
        console.log(deal);
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__deal_editor_deal_editor_component__["a" /* DealEditorComponent */]).present();
    };
    RestaurantDealMakerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/'<h4 style="margin-left: 1em">Restaurant name</h4>\n\n<ion-content class="content-override">\n    <ion-card *ngFor="let deal of deals" (click)="editDeal(deal)">\n        <ion-card-header>\n            {{deal.dealDescription}}\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="{{deal.imageSource}}">\n            <h2>Deal Time: {{deal.dealStart | date:\'MM/dd hh:mm aa\'}}-{{deal.dealEnd | date: \'hh:mm aa\'}}</h2>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/,
            selector: 'restaurant-deal-maker',
            styleUrls: ['/restaurant-deal-maker.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], RestaurantDealMakerComponent);
    return RestaurantDealMakerComponent;
}());

//# sourceMappingURL=restaurant-deal-maker.component.js.map

/***/ })

},[416]);
//# sourceMappingURL=main.js.map