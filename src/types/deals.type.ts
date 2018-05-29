import { Guid } from "./utils.type";

export class Deal {
    public id: string;

    public imageURL: string;

    public constructor(public restaurant: Restaurant, public dealDescription: string, public dealStart: Date, public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, public imageSource: string){
        this.id = Guid.newGuid();
    }

    public getAsPlainObject(): any {
        this.restaurant = Object.assign({}, this.restaurant);
        
        return Object.assign({}, this);
    }
}

export class Restaurant {
    public constructor(public uid: string, public name: string, public location: string, public imageSource: string){}

    public getAsPlainObject(): any {
        return Object.assign({}, this);
    }
}

export enum DealType{
    Drinks,
    Food,
    Both
}

