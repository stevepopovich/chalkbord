var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { CardDataService } from "./firebase/firestore-collection/card-data.service";
var CurrentUserService = (function () {
    function CurrentUserService(cardService) {
        this.cardService = cardService;
    }
    CurrentUserService.prototype.setCurrentUser = function (user) {
        if (user != null) {
            this.currentUser = user;
            this.setUpCardObservable();
        }
    };
    CurrentUserService.prototype.getCurrentUser = function () {
        return Object.assign({}, this.currentUser);
    };
    //for subscription purposes only
    CurrentUserService.prototype.getCards = function () {
        return this.currentUser.cards;
    };
    CurrentUserService.prototype.hasCurrentUser = function () {
        return this.currentUser != null;
    };
    CurrentUserService.prototype.removeCurrentUser = function () {
        this.currentUser = null;
    };
    CurrentUserService.prototype.addCardId = function (cardId) {
        if (this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];
        this.currentUser.cardIds.push(cardId);
    };
    CurrentUserService.prototype.setUpCardObservable = function () {
        this.currentUser.cards = this.cardService.getMulti(this.currentUser.cardIds);
    };
    CurrentUserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [CardDataService])
    ], CurrentUserService);
    return CurrentUserService;
}());
export { CurrentUserService };
//# sourceMappingURL=current-user.service.js.map