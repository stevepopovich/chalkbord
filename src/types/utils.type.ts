export class Guid {
    static newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}

export class Util {
    //looks at differences in properties between objects
    public static objectUpdater(newObj: any, objToUpdate: any): any{
        var props = Object.getOwnPropertyNames(objToUpdate);

        var changed = false;

        props.forEach(prop => {
            if(newObj[prop])
                if(objToUpdate[prop] != newObj[prop]){
                    objToUpdate[prop] = newObj[prop];

                    changed = true;
                }
        });

        return changed;
    }
}
