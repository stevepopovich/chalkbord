webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RestaurantCardModel; });
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

var RestaurantCardComponent = (function () {
    function RestaurantCardComponent() {
        this.destroying = false;
    }
    RestaurantCardComponent.prototype.ngAfterViewInit = function () {
    };
    RestaurantCardComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", RestaurantCardModel)
    ], RestaurantCardComponent.prototype, "cardModel", void 0);
    RestaurantCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-card/restaurant-card.component.html"*/''/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-card/restaurant-card.component.html"*/,
            selector: 'restaurant-card',
            styleUrls: ['/restaurant-card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantCardComponent);
    return RestaurantCardComponent;
}());

var RestaurantCardModel = (function () {
    function RestaurantCardModel(imageSource, title, deal) {
        this.imageSource = imageSource;
        this.restaurantTitle = title;
        this.dealDescription = deal;
    }
    return RestaurantCardModel;
}());

//# sourceMappingURL=restaurant-card.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_consumer_consumer_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_restaurant_card_restaurant_card_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_dialogs__ = __webpack_require__(298);
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
                __WEBPACK_IMPORTED_MODULE_9__components_restaurant_card_restaurant_card_component__["a" /* RestaurantCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_2_angular2_draggable__["a" /* AngularDraggableModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* LocaleApp */],
                __WEBPACK_IMPORTED_MODULE_9__components_restaurant_card_restaurant_card_component__["a" /* RestaurantCardComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_dialogs__["a" /* Dialogs */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleApp; });
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

var LocaleApp = (function () {
    function LocaleApp() {
    }
    LocaleApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<consumer></consumer>'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LocaleApp);
    return LocaleApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(112);
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
    function ConsumerComponent(alert) {
        var _this = this;
        this.alert = alert;
        this.transitionString = "";
        this.restaurantCards = [
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
        ];
        this.destoryingCard = false;
        this.moveCardIndex = -1;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                console.log(offsetY);
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 800;
            }
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
    };
    ConsumerComponent.prototype.onItemMove = function (element, x, y, r) {
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    ConsumerComponent.prototype.voteUp = function (like) {
        if (like)
            this.popLikeAlert(this.popCard());
        else
            this.popCard();
    };
    ConsumerComponent.prototype.voteButton = function (like) {
        var _this = this;
        if (this.restaurantCards.length > 0) {
            if (this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;
            this.transitionString = "all 0.5s";
            if (like)
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(800px, 0px) rotate(40deg)";
            else
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-800px, 0px) rotate(-40deg)";
            this.moveCardIndex--;
            this.delay(500).then(function () {
                if (like)
                    _this.popLikeAlert(_this.popCard());
                else
                    _this.popCard();
                _this.transitionString = "";
            });
        }
    };
    ConsumerComponent.prototype.popLikeAlert = function (card) {
        var likeAlert = this.alert.create({
            buttons: [],
            title: "You are going to " + card.restaurantTitle + "!",
            subTitle: "Your deal code is: 4456",
            message: "Bring this code to " + card.restaurantTitle + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });
        likeAlert.present();
    };
    ConsumerComponent.prototype.resetCards = function () {
        this.restaurantCards = [
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
            new __WEBPACK_IMPORTED_MODULE_1__restaurant_card_restaurant_card_component__["b" /* RestaurantCardModel */]("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
        ];
    };
    ConsumerComponent.prototype.popCard = function () {
        var poppedCard = this.restaurantCards.pop();
        if (this.restaurantCards.length < 1)
            this.resetCards();
        return poppedCard;
    };
    ConsumerComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_swing__["SwingStackComponent"])
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n            <ion-title class="title-big">local</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-grid style="height: 100%; padding: 0px">\n    <ion-row style="height: 74%">\n        <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n            <ion-card #mycards1 swing-card *ngFor="let card of restaurantCards" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n                <img class="non-draggable-card-image" src="{{card.imageSource}}" />\n            \n                <ion-card-content class="card-text">\n                    <ion-card-title style="color: white !important;">\n                        {{card.restaurantTitle}}\n                    </ion-card-title>\n                    {{card.dealDescription}}\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </ion-row>\n\n    <ion-row style="height: 18%">\n        <ion-grid>\n            <ion-row style="height: 100%">\n                <ion-col col-2></ion-col>\n                <ion-col col-4>    \n                    <button class="button-circular" (click)="voteButton(false)" ion-button full round icon-only>\n                        <img src="assets/images/no.png" style="width : 100% ; height : 100%">\n                    </button>\n                </ion-col>\n                <ion-col col-4>    \n                    <button class="button-circular" (click)="voteButton(true)" ion-button full round icon-only>\n                        <img src="assets/images/yes.png" style="width : 100% ; height : 100%">\n                    </button>\n                </ion-col>\n                <ion-col col-2></ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-row>\n</ion-grid>\n\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());

//# sourceMappingURL=consumer.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map