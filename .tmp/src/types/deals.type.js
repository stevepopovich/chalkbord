import { Guid } from "./utils.type";
import { LocaleLocation } from "./location.type";
import { Organization } from "./organization.type";
var LocaleCard = (function () {
    function LocaleCard(dealDescription, dealStart, dealEnd, numberOfDeals, dealType, obj) {
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.id = Guid.newGuid();
        if (obj) {
            this.id = obj.id;
            this.organization = obj.organization;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
        }
    }
    LocaleCard.prototype.getAsPlainObject = function () {
        this.organization = Object.assign({}, this.organization);
        return Object.assign({}, this);
    };
    LocaleCard.getBlankCard = function () {
        var blankCard = new LocaleCard(null, new Date(), new Date(), -1, DealType.Drinks, null);
        blankCard.organization = new Organization("", "", "", "", new LocaleLocation());
        return blankCard;
    };
    LocaleCard.updateDealModel = function (objectToUpdate, updatedObject) {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.organization = updatedObject.organization;
    };
    LocaleCard.findAndUpdateCards = function (incomingCards, cardsToManipulate) {
        incomingCards.forEach(function (dealModel) {
            var foundCard = cardsToManipulate[cardsToManipulate.findIndex(function (c) { return c.id == dealModel.id; })];
            if (foundCard)
                LocaleCard.updateDealModel(foundCard, dealModel);
            else
                cardsToManipulate.push(dealModel);
        });
    };
    return LocaleCard;
}());
export { LocaleCard };
export var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map