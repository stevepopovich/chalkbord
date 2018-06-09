import { GSLocation } from "./location.type";

export class Restaurant {
    constructor(public uid: string, public name: string, public address: string, 
        public imageSource: string, public location: GSLocation){}

    public getAsPlainObject(): any {
        this.location = Object.assign({}, this.location);

        return Object.assign({}, this);
    }
}