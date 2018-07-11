var LocaleUser = (function () {
    function LocaleUser(uid, userType, firstName) {
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
    }
    LocaleUser.prototype.getAsPlainObject = function () {
        this.organization = Object.assign({}, this.organization);
        return Object.assign({}, this);
    };
    return LocaleUser;
}());
export { LocaleUser };
export var UserType;
(function (UserType) {
    UserType[UserType["Consumer"] = 0] = "Consumer";
    UserType[UserType["Organization"] = 1] = "Organization";
    UserType[UserType["User"] = 2] = "User"; //signifies both consumer and organization
})(UserType || (UserType = {}));
//# sourceMappingURL=user.type.js.map