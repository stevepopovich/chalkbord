var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var RestaurantDealMakerComponent = (function () {
    function RestaurantDealMakerComponent() {
    }
    RestaurantDealMakerComponent.prototype.setFunny = function () {
        this.funny = true;
        this.positive = false;
        this.constructive = false;
    };
    RestaurantDealMakerComponent.prototype.setPositive = function () {
        this.funny = false;
        this.positive = true;
        this.constructive = false;
    };
    RestaurantDealMakerComponent.prototype.setConstructive = function () {
        this.funny = false;
        this.positive = false;
        this.constructive = true;
    };
    RestaurantDealMakerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/'<div class="bottom-row">\n    <button ion-button (click)="setPositive()">Positive</button>\n    <button ion-button (click)="setConstructive()">Constructive</button>\n    <button ion-button (click)="setFunny()">Funny</button>\n</div>\n\n<ion-card class="alarm" [ngClass]="{\'show\': positive === true}">\n\n    <ion-card-header class="center-header">\n      Positive\n    </ion-card-header>\n  \n    <ion-card-content class="center-header">\n        <img class="distort" src="assets/images/wakeworthy/positive.jpg">\n        Be the best you, you can be, today.\n    </ion-card-content>\n  \n</ion-card>\n\n<ion-card class="alarm" [ngClass]="{\'show\': constructive === true}">\n\n    <ion-card-header class="center-header">\n      Constructive\n    </ion-card-header>\n  \n    <ion-card-content class="center-header">\n        <img src="assets/images/wakeworthy/constructive.jpg">\n        What would your mom think?\n    </ion-card-content>\n  \n</ion-card>\n\n<ion-card class="alarm" [ngClass]="{\'show\': funny === true}">\n\n    <ion-card-header class="center-header">\n      Funny\n    </ion-card-header>\n  \n    <ion-card-content class="center-header">\n        <img src="assets/images/wakeworthy/funny.jpg">\n        You want to not have a job?\n    </ion-card-content>\n  \n</ion-card>'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/,
            selector: 'restaurant-deal-maker',
            styleUrls: ['/restaurant-deal-maker.component.scss']
        })
    ], RestaurantDealMakerComponent);
    return RestaurantDealMakerComponent;
}());
export { RestaurantDealMakerComponent };
//# sourceMappingURL=restaurant-deal-maker.component.js.map