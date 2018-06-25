var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastService } from './toast.service';
import { CardDataService } from './card-data.service';
import { Card } from '../types/deals.type';
var AuthorizationService = (function () {
    function AuthorizationService(fireAuth, database, toastService, cardService) {
        this.fireAuth = fireAuth;
        this.database = database;
        this.toastService = toastService;
        this.cardService = cardService;
        this.userCollection = this.database.collection("users");
    }
    AuthorizationService.prototype.checkCurrentUserType = function () {
        var _this = this;
        if (this.currentUser) {
            return Observable.create(function (observer) {
                observer.next([_this.currentUser]);
                observer.complete();
            });
        }
        else if (this.fireAuth.auth.currentUser)
            return this.getCurrentUserData();
        else
            return null;
    };
    AuthorizationService.prototype.checkUserIsLoggedIn = function () {
        if (this.currentUser && this.fireAuth.auth.currentUser)
            return true;
        else
            return false;
    };
    AuthorizationService.prototype.userSignOut = function () {
        this.currentUser = null;
        //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
        //this won't affect functionality but should be here for security
    };
    AuthorizationService.prototype.signIn = function (email, password) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUpUser = function (email, password) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.checkUserSignInMethods = function (email) {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    };
    AuthorizationService.prototype.getCurrentUserData = function () {
        var _this = this;
        return this.database.collection("users", function (ref) { return ref.where("uid", '==', _this.fireAuth.auth.currentUser.uid); }).valueChanges();
    };
    /**
     * Only use this when passing a user you don't care about
     * Data in the user will be changed for worse!
     *
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     *
     * Restaurant users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     * @param user
     */
    AuthorizationService.prototype.updateUserInDatabase = function (user) {
        if (this.checkUserIsLoggedIn() && this.userCollection) {
            user.cards = null;
            if (user.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(user.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(user);
        }
        else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");
        return null;
    };
    AuthorizationService.prototype.addCardIdToCurrentUser = function (cardId) {
        var _this = this;
        if (this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];
        this.currentUser.cardIds.push(cardId);
        this.updateUserInDatabase(Object.assign({}, this.currentUser)).then(function () {
            _this.generateCardsFromIds();
        });
    };
    AuthorizationService.prototype.generateCardsFromIds = function () {
        var _this = this;
        this.cardService.getCardsById(this.currentUser.cardIds).subscribe(function (obDeal) {
            obDeal.subscribe(function (deals) {
                for (var _i = 0, deals_1 = deals; _i < deals_1.length; _i++) {
                    var deal = deals_1[_i];
                    if (!_this.currentUser.cards) {
                        _this.currentUser.cards = [];
                        _this.currentUser.cards.push(new Card(null, null, null, null, null, deal));
                    }
                    else
                        _this.findAndUpdateCards(deals, _this.currentUser.cards);
                }
            });
        });
    };
    AuthorizationService.prototype.removeUserCardFromCurrentListById = function (id) {
        var currentUserCardsIndex = this.currentUser.cards.findIndex(function (value, index, deals) {
            value;
            return deals[index].id == id;
        });
        var currentUserId = this.currentUser.cardIds.findIndex(function (value, index, deals) {
            index;
            deals;
            return value == id;
        });
        this.currentUser.cards.splice(currentUserCardsIndex, 1);
        this.currentUser.cardIds.splice(currentUserId, 1);
    };
    AuthorizationService.prototype.updateDealModel = function (objectToUpdate, updatedObject) {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.restaurant = updatedObject.restaurant;
    };
    AuthorizationService.prototype.findAndUpdateCards = function (newDealModels, oldDealModels) {
        var _this = this;
        newDealModels.forEach(function (dealModel) {
            var foundCard = oldDealModels[oldDealModels.findIndex(function (c) { return c.id == dealModel.id; })];
            if (foundCard) {
                _this.updateDealModel(foundCard, dealModel);
                var foundViewCard = oldDealModels[oldDealModels.findIndex(function (c) { return c.id == dealModel.id; })];
                if (foundViewCard)
                    _this.updateDealModel(foundViewCard, dealModel);
            }
            else
                oldDealModels.push(dealModel);
        });
    };
    AuthorizationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth, AngularFirestore,
            ToastService, CardDataService])
    ], AuthorizationService);
    return AuthorizationService;
}());
export { AuthorizationService };
export var SignUpReturnCode;
(function (SignUpReturnCode) {
    SignUpReturnCode[SignUpReturnCode["UserAlreadySignedUp"] = 0] = "UserAlreadySignedUp";
    SignUpReturnCode[SignUpReturnCode["Success"] = 1] = "Success";
    SignUpReturnCode[SignUpReturnCode["Failure"] = 2] = "Failure";
})(SignUpReturnCode || (SignUpReturnCode = {}));
//# sourceMappingURL=authorization.service.js.map