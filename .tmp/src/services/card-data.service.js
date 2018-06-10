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
import { AngularFirestore } from 'angularfire2/firestore';
import { merge } from 'rxjs';
var CardDataService = (function () {
    function CardDataService(database) {
        this.database = database;
        this.cardDoc = this.database.collection("cards");
    }
    CardDataService.prototype.getCards = function () {
        return this.cards;
    };
    CardDataService.prototype.setCards = function (data) {
        var _this = this;
        var cards = data.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(Object.assign({}, card));
        });
    };
    CardDataService.prototype.addCard = function (data) {
        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    };
    CardDataService.prototype.getCardsById = function (ids) {
        var observables = [];
        var _loop_1 = function (id) {
            observables.push(this_1.database.collection("cards", function (ref) { return ref.where("id", "==", id); }).valueChanges());
        };
        var this_1 = this;
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            _loop_1(id);
        }
        var allCardsObservableMerged = merge(observables);
        return allCardsObservableMerged;
    };
    CardDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], CardDataService);
    return CardDataService;
}());
export { CardDataService };
//# sourceMappingURL=card-data.service.js.map