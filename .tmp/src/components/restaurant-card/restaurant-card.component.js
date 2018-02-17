var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
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
        Input(),
        __metadata("design:type", RestaurantCardModel)
    ], RestaurantCardComponent.prototype, "cardModel", void 0);
    RestaurantCardComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-card/restaurant-card.component.html"*/''/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-card/restaurant-card.component.html"*/,
            selector: 'restaurant-card',
            styleUrls: ['/restaurant-card.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantCardComponent);
    return RestaurantCardComponent;
}());
export { RestaurantCardComponent };
var RestaurantCardModel = (function () {
    function RestaurantCardModel(imageSource, title, deal) {
        this.imageSource = imageSource;
        this.restaurantTitle = title;
        this.dealDescription = deal;
    }
    return RestaurantCardModel;
}());
export { RestaurantCardModel };
//# sourceMappingURL=restaurant-card.component.js.map