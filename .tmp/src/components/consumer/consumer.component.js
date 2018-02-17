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
import { AlertController } from 'ionic-angular';
var ConsumerComponent = (function () {
    function ConsumerComponent(alert) {
        var _this = this;
        this.alert = alert;
        this.transitionString = "";
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
            new RestaurantCardModel("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
            new RestaurantCardModel("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
            new RestaurantCardModel("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
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
            new RestaurantCardModel("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
            new RestaurantCardModel("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
            new RestaurantCardModel("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
            new RestaurantCardModel("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
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
        ViewChild('myswing1'),
        __metadata("design:type", SwingStackComponent)
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        ViewChildren('mycards1'),
        __metadata("design:type", QueryList)
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n            <ion-title class="title-big">local</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-grid style="height: 100%; padding: 0px">\n    <ion-row style="height: 74%">\n        <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n            <ion-card #mycards1 swing-card *ngFor="let card of restaurantCards" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n                <img class="non-draggable-card-image" src="{{card.imageSource}}" />\n            \n                <ion-card-content class="card-text">\n                    <ion-card-title style="color: white !important;">\n                        {{card.restaurantTitle}}\n                    </ion-card-title>\n                    {{card.dealDescription}}\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </ion-row>\n\n    <ion-row style="height: 18%">\n        <ion-grid>\n            <ion-row style="height: 100%">\n                <ion-col col-2></ion-col>\n                <ion-col col-4>    \n                    <button class="button-circular" (click)="voteButton(false)" ion-button full round icon-only>\n                        <img src="assets/images/no.png" style="width : 100% ; height : 100%">\n                    </button>\n                </ion-col>\n                <ion-col col-4>    \n                    <button class="button-circular" (click)="voteButton(true)" ion-button full round icon-only>\n                        <img src="assets/images/yes.png" style="width : 100% ; height : 100%">\n                    </button>\n                </ion-col>\n                <ion-col col-2></ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-row>\n</ion-grid>\n\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [AlertController])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map