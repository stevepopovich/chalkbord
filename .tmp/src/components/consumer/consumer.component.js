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
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CardDataService } from '../../services/card-data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { ImageService } from '../../services/image-service.service';
import { DealType } from '../../types/deals.type';
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
        var filterPopover = this.popoverCtrl.create(FilterDealComponent);
        filterPopover.onDidDismiss(function (data) {
            _this.currentFilter = DealType[data];
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
        ViewChild('myswing1'),
        __metadata("design:type", SwingStackComponent)
    ], ConsumerComponent.prototype, "swingStack", void 0);
    __decorate([
        ViewChildren('mycards1'),
        __metadata("design:type", QueryList)
    ], ConsumerComponent.prototype, "swingCards", void 0);
    ConsumerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<button (click)="openDealTypePopover($event)" class="button-top" ion-button icon-only>\n    <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n</button>\n<div swing-stack #myswing1 *ngIf="restaurantViewCards && restaurantViewCards.length > 0" [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack" [style.zIindex] = "-1000">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantViewCards; let i = index;" [style.zIndex]="-1*i" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restaurant.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" ios="md-heart" md="md-heart"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [AlertController, PopoverController, LaunchNavigator, CardDataService, AuthorizationService, ImageService])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map