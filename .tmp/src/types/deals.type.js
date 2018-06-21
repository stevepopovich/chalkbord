import { Guid } from "./utils.type";
var Deal = (function () {
    function Deal(dealDescription, dealStart, dealEnd, numberOfDeals, dealType, obj) {
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.id = Guid.newGuid();
        if (obj) {
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
        }
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