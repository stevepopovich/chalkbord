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
import { Subject } from 'rxjs/Subject';
var RestaurantCardComponent = (function () {
    function RestaurantCardComponent() {
    }
    RestaurantCardComponent.prototype.swipeRight = function () {
        this.swipedRight = true;
    };
    RestaurantCardComponent.prototype.swipeLeft = function () {
        this.swipedLeft = true;
    };
    RestaurantCardComponent.prototype.onDragEnd = function () {
        if (this.swipedLeft || this.swipedRight)
            this.destroyCard.next(this.cardModel);
    };
    __decorate([
        Input(),
        __metadata("design:type", RestaurantCardModel)
    ], RestaurantCardComponent.prototype, "cardModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], RestaurantCardComponent.prototype, "destroyCard", void 0);
    RestaurantCardComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/pages/restaurant-card/restaurant-card.component.html"*/'<ion-card [hidden]="!cardModel" ngDraggable (swipeleft)="swipeLeft()" (swiperight)="swipeRight()" (stopped)="onDragEnd()" class="card-height">\n    <img class="non-draggable-image" src="{{cardModel.imageSource}}"/>\n\n    <ion-card-content>\n        <ion-card-title>\n            {{cardModel.restaurantTitle}}\n        </ion-card-title>\n        {{cardModel.dealDescription}}\n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/Users/Contence/locale/src/pages/restaurant-card/restaurant-card.component.html"*/,
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