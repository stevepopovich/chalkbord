import { LocaleLocation } from "./location.type";

export class Organization {
    constructor(
        public uid: string,
        public name: string,
        public address: string,
        public imageSource: string,
        public location: LocaleLocation) { }

    public getAsPlainObject(): any {
        this.location = Object.assign({}, this.location);

        return Object.assign({}, this);
    }
}