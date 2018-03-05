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
import { SwingStackComponent } from 'angular2-swing';
import { AlertController, PopoverController } from 'ionic-angular';
import { DealModel, DealType } from '../restaurant-deal-maker/restaurant-deal-maker.component';
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
var restaurantCards = [
    new DealModel("Name1", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
    new DealModel("Name2", "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
    new DealModel("Name3", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
    new DealModel("Name4", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
    new DealModel("Name5", "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
    new DealModel("Name6", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
];
var ConsumerComponent = (function () {
    function ConsumerComponent(alert, popoverCtrl, launchNavigator) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.launchNavigator = launchNavigator;
        this.transitionString = "";
        this.restaurantViewCards = [];
        this.destoryingCard = false;
        this.moveCardIndex = -1;
        this.likingCard = false;
        this.animatingCard = false;
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                console.log(offsetY);
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 6), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 400;
            }
        };
        this.filterCards(null);
    }
    ConsumerComponent.prototype.onItemMove = function (element, x, y, r) {
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    ConsumerComponent.prototype.voteUp = function (like) {
        if (like) {
            if (!this.likingCard) {
                this.likingCard = true;
                this.handleCard(like);
            }
        }
        else
            this.handleCard(like);
    };
    ConsumerComponent.prototype.clickLike = function () {
        var _this = this;
        if (this.restaurantViewCards.length > 0 && !this.likingCard && !this.animatingCard) {
            if (this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;
            this.transitionString = "all 0.75s";
            this.likingCard = true;
            this.animatingCard = true;
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)";
            this.moveCardIndex--;
            this.delay(300).then(function () {
                _this.handleCard(true);
                _this.animatingCard = false;
                _this.transitionString = "";
            });
        }
    };
    ConsumerComponent.prototype.clickNo = function () {
        var _this = this;
        if (this.restaurantViewCards.length > 0 && !this.animatingCard) {
            if (this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;
            this.transitionString = "all 0.75s";
            this.animatingCard = true;
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)";
            this.moveCardIndex--;
            this.delay(300).then(function () {
                _this.handleCard(false);
                _this.animatingCard = false;
                _this.transitionString = "";
            });
        }
    };
    ConsumerComponent.prototype.filterDealTypes = function (event) {
        var _this = this;
        var filterPopover = this.popoverCtrl.create(FilterDealComponent);
        filterPopover.onDidDismiss(function (data) {
            _this.filterCards(DealType[data]);
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
                        _this.launchNavigator.navigate('Cleveland, OH');
                    }
                }
            ],
            title: "You are going to " + card.restaurantName + "!",
            subTitle: "Your deal code is: " + this.randomNumber(),
            message: "Bring this code to " + card.restaurantName + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });
        likeAlert.present().then(function () {
            _this.likingCard = false;
        });
    };
    ConsumerComponent.prototype.resetCards = function () {
        this.filterCards(null);
        this.swingCards.toArray()[0].getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
    };
    ConsumerComponent.prototype.popCard = function () {
        var poppedCard = this.restaurantViewCards.pop();
        if (this.restaurantViewCards.length < 1)
            this.resetCards();
        return poppedCard;
    };
    ConsumerComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ConsumerComponent.prototype.randomNumber = function () {
        return String(Math.floor(1000 + Math.random() * 9000));
    };
    ConsumerComponent.prototype.filterCards = function (type) {
        this.restaurantViewCards = [];
        if (type) {
            this.restaurantViewCards = Object.create(restaurantCards).filter(function (card) {
                return card.dealType === type;
            });
        }
        else
            this.restaurantViewCards = Object.create(restaurantCards);
        this.moveCardIndex = this.restaurantViewCards.length - 1;
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
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<button (click)="filterDealTypes($event)" class="button-top" ion-button icon-only>\n    <ion-icon name="funnel"></ion-icon>\n</button>\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantViewCards" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image" src="{{card.imageSource}}" />\n    \n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restaurantName}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" name="heart"></ion-icon>\n    </button>\n</div>\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [AlertController, PopoverController, LaunchNavigator])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map