var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';
import { Subject } from 'rxjs/Subject';
var ConsumerComponent = (function () {
    function ConsumerComponent() {
        this.restaurantCards = [
            new RestaurantCardModel("/../assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("/../assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("/../assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
        this.destroyCard = new Subject();
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.destroyCard.subscribe(function (cardModel) {
            var cardToDeleteIndex = _this.restaurantCards.indexOf(cardModel);
            _this.restaurantCards.splice(cardToDeleteIndex, 1);
        });
    };
    ConsumerComponent.prototype.resetCards = function () {
        this.restaurantCards = [
            new RestaurantCardModel("/../assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("/../assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("/../assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
    };
    ConsumerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/pages/consumer/consumer.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Locale</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button ion-button (click)="resetCards()" class="reset-button">Reset</button>\n\n<div *ngFor="let card of restaurantCards">\n    <restaurant-card [cardModel]="card" [destroyCard]="destroyCard" class="restaurant-card"></restaurant-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/pages/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map