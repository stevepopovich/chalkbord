var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';
import { SwingStackComponent } from 'angular2-swing';
var ConsumerComponent = (function () {
    function ConsumerComponent() {
        var _this = this;
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
        this.destoryingCard = false;
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
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#000000';
        });
    };
    ConsumerComponent.prototype.onItemMove = function (element, x, y, r) {
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    ConsumerComponent.prototype.voteUp = function (like) {
        this.restaurantCards.pop();
        console.log(like);
        // if (like) {
        //   this.recentCard = 'You liked: ' + removedCard.restaurantTitle;
        // } else {
        //   this.recentCard = 'You disliked: ' + removedCard.restaurantTitle;
        // }
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    ConsumerComponent.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    ConsumerComponent.prototype.resetCards = function () {
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
    };
    ConsumerComponent.prototype.deleteCard = function (card) {
        var cardToDeleteIndex = this.restaurantCards.indexOf(card);
        this.restaurantCards.splice(cardToDeleteIndex, 1);
    };
    ConsumerComponent.prototype.addCard = function (card) {
        this.restaurantCards.push(card);
    };
    __decorate([
        ViewChild('myswing1'),
        __metadata("design:type", SwingStackComponent)
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        ViewChildren('mycards1'),
        __metadata("design:type", QueryList)
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/pages/consumer/consumer.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Locale</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantCards" class="card-height">\n        <img class="non-draggable-image" src="{{card.imageSource}}"/>\n    \n        <ion-card-content>\n            <ion-card-title>\n                {{card.restaurantTitle}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<button ion-button (click)="resetCards()" class="reset-button">Reset</button>'/*ion-inline-end:"/Users/Contence/locale/src/pages/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map