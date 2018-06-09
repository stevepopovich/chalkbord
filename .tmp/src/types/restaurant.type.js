var Restaurant = (function () {
    function Restaurant(uid, name, location, imageSource) {
        this.uid = uid;
        this.name = name;
        this.location = location;
        this.imageSource = imageSource;
    }
    Restaurant.prototype.getAsPlainObject = function () {
        return Object.assign({}, this);
    };
    return Restaurant;
}());
export { Restaurant };
//# sourceMappingURL=restaurant.type.js.map