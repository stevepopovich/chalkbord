var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
export { Guid };
var Util = (function () {
    function Util() {
    }
    //used simply to async wait for something
    Util.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    Util.randomNumber = function (from, to) {
        return Math.floor(from + Math.random() * to);
    };
    return Util;
}());
export { Util };
//# sourceMappingURL=utils.type.js.map