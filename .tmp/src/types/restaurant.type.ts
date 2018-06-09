export class Restaurant {
    constructor(public uid: string, public name: string, public location: string, public imageSource: string){}

    public getAsPlainObject(): any {
        return Object.assign({}, this);
    }
}