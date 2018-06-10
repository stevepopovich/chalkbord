var Restaurant = (function () {
    function Restaurant(uid, name, address, imageSource, location) {
        this.uid = uid;
        this.name = name;
        this.address = address;
        this.imageSource = imageSource;
        this.location = location;
    }
    Restaurant.prototype.getAsPlainObject = function () {
        this.location = Object.assign({}, this.location);
        return Object.assign({}, this);
    };
    return Restaurant;
}());
export { Restaurant };
//# sourceMappingURL=restaurant.type.js.map