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
    //looks at differences in properties between objects
    Util.objectUpdater = function (newObj, objToUpdate) {
        var props = Object.getOwnPropertyNames(objToUpdate);
        var changed = false;
        props.forEach(function (prop) {
            if (newObj[prop])
                if (objToUpdate[prop] != newObj[prop]) {
                    objToUpdate[prop] = newObj[prop];
                    changed = true;
                }
        });
        return changed;
    };
    return Util;
}());
export { Util };
//# sourceMappingURL=utils.type.js.map