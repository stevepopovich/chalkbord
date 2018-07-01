import { Guid } from "./utils.type";
import { Restaurant } from "./restaurant.type";
import { GSLocation } from "./location.type";
var GSCard = (function () {
    function GSCard(dealDescription, dealStart, dealEnd, numberOfDeals, dealType, obj) {
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.id = Guid.newGuid();
        if (obj) {
            this.id = obj.id;
            this.restaurant = obj.restaurant;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
        }
    }
    GSCard.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    GSCard.getBlankCard = function () {
        var blankCard = new GSCard(null, new Date(), new Date(), -1, DealType.Drinks, null);
        blankCard.restaurant = new Restaurant("", "", "", "", new GSLocation());
        return blankCard;
    };
    return GSCard;
}());
export { GSCard };
export var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map