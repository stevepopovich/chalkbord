import { Guid } from "./utils.type";
var DealModel = (function () {
    function DealModel(restaurant, dealDescription, dealStart, dealEnd, numberOfDeals, dealType, imageSource) {
        this.id = Guid.newGuid();
        this.restaurant = restaurant;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
    }
    DealModel.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return DealModel;
}());
export { DealModel };
var RestaurantModel = (function () {
    function RestaurantModel(name, location, imageSource) {
        this.name = name;
        this.location = location;
        this.imageSource = imageSource;
    }
    return RestaurantModel;
}());
export { RestaurantModel };
export var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=deals.type.js.map