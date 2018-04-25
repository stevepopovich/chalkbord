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
var CardDataService = (function () {
    function CardDataService(database) {
        this.database = database;
    }
    CardDataService.prototype.setUpCardStream = function () {
        this.cardDoc = this.database.collection("cards");
        this.cards = this.cardDoc.valueChanges();
    };
    CardDataService.prototype.getCards = function () {
        this.setUpCardStream(); //always hard refresh to force update eveything subscribed
        return this.cards;
    };
    CardDataService.prototype.setCards = function (data) {
        var _this = this;
        if (!this.cardDoc)
            this.setUpCardStream();
        var cards = data.map(function (card) { return Object.assign({}, card.getAsPlainObject()); });
        cards.forEach(function (card) {
            _this.cardDoc.doc(card.id).set(Object.assign({}, card));
        });
    };
    CardDataService.prototype.addCard = function (data) {
        if (!this.cardDoc)
            this.setUpCardStream();
        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    };
    CardDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], CardDataService);
    return CardDataService;
}());
export { CardDataService };
//# sourceMappingURL=card-data.service.js.map