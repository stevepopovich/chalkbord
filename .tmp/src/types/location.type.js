var GSLocation = (function () {
    function GSLocation(googleLocation) {
        if (googleLocation) {
            this.lat = googleLocation.lat();
            this.lng = googleLocation.lng();
        }
    }
    GSLocation.prototype.getAsPlainObject = function () {
        return Object.assign({}, this);
    };
    return GSLocation;
}());
export { GSLocation };
//# sourceMappingURL=location.type.js.map