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
import { AlertController, PopoverController, ModalController } from 'ionic-angular';
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CardDataService } from '../../services/card-data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { ImageService } from '../../services/image-service.service';
import { DealType } from '../../types/deals.type';
import { DeviceService } from '../../services/device.service';
import { ViewControllerService } from '../../services/view-controller.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
var ConsumerComponent = (function () {
    function ConsumerComponent(alert, popoverCtrl, launchNavigator, cardService, authService, imageService, deviceService, viewContoller, modalCtrl) {
        var _this = this;
        this.alert = alert;
        this.popoverCtrl = popoverCtrl;
        this.launchNavigator = launchNavigator;
        this.cardService = cardService;
        this.authService = authService;
        this.imageService = imageService;
        this.deviceService = deviceService;
        this.viewContoller = viewContoller;
        this.modalCtrl = modalCtrl;
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
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2.5), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function () {
                return 200;
            }
        };
    }
    ConsumerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.authService.checkUserIsLoggedIn) {
            this.cardSubscription = this.cardService.getCards().subscribe(function (cardModels) {
                if (!_this.cards) {
                    _this.cards = cardModels;
                    _this.filterCards(_this.currentFilter);
                }
                else {
                    _this.findAndUpdateCards(cardModels);
                }
            });
        }
        else
            console.error("User not logged in when he should be!");
    };
    ConsumerComponent.prototype.ngOnDestroy = function () {
        this.cardSubscription.unsubscribe();
    };
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
                },
                {
                    text: 'Ok',
                    role: 'close',
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
            var topCard = _this.swingCards.toArray()[0];
            if (topCard)
                topCard.getElementRef().nativeElement.style['transform'] = "translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)";
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
    //used simply to async wait for something
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
    ConsumerComponent.prototype.openProfile = function () {
        this.modalCtrl.create(UserProfileComponent).present();
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
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar class="navbar-md">\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<button (click)="openDealTypePopover($event)" class="button-top" ion-button icon-only>\n    <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n</button>\n\n<button (click)="openProfile()" class="button-top-left" ion-button icon-only>\n    <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n</button>\n\n<div class="loading-div">\n    <ion-spinner class="loading-spinner"></ion-spinner>\n    <h2 ion-text style="text-align: center">Getting your local deals!</h2>\n</div>\n\n<div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(false)" (throwoutright)="voteUp(true)" id="card-stack" [style.zIindex] = "-1000">\n    <ion-card #mycards1 swing-card *ngFor="let card of restaurantViewCards; let i = index;" [style.zIndex]="-1*i" class="card-height" [ngStyle]="{\'transition\': transitionString}">\n        <img class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restaurant.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>\n\n<div class="bottom-row">\n    <button class="button-circular" (click)="clickNo()" ion-button icon-only>\n        <ion-icon ios="md-close" md="md-close"></ion-icon>\n    </button>\n    <button class="button-circular-heart" (click)="clickLike()" ion-button icon-only>\n        <ion-icon class="padding-top" ios="md-heart" md="md-heart"></ion-icon>\n    </button>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/consumer/consumer.component.html"*/,
            selector: 'consumer',
            styleUrls: ['/consumer.component.scss']
        }),
        __metadata("design:paramtypes", [AlertController, PopoverController,
            LaunchNavigator, CardDataService,
            AuthorizationService, ImageService,
            DeviceService, ViewControllerService,
            ModalController])
    ], ConsumerComponent);
    return ConsumerComponent;
}());
export { ConsumerComponent };
//# sourceMappingURL=consumer.component.js.map