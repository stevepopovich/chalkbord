import { Guid } from "./utils.type";
var Deal = (function () {
    function Deal(restaurantUid, dealDescription, dealStart, dealEnd, numberOfDeals, dealType, imageSource) {
        this.restaurantUid = restaurantUid;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
        this.id = Guid.newGuid();
    }
    Deal.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return Deal;
}());
export { Deal };
export var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map