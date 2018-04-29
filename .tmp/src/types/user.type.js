var GSUser = (function () {
    function GSUser(uid, userType) {
        this.uid = uid;
        this.userType = userType;
    }
    GSUser.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return GSUser;
}());
export { GSUser };
export var UserType;
(function (UserType) {
    UserType[UserType["Consumer"] = 0] = "Consumer";
    UserType[UserType["Restaurant"] = 1] = "Restaurant";
})(UserType || (UserType = {}));
//# sourceMappingURL=user.type.js.map