import { Guid } from "./utils.type";
import { Restaurant } from "./restaurant.type"; 
import { GSLocation } from "./location.type";

export class Deal { 
    public id: string;
    public imageSource: string;

    public imageURL: string;
    public restaurant: Restaurant;

    public constructor(public restaurantUid: string, public dealDescription: string, public dealStart: Date, 
        public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, 
        public location: GSLocation){
        this.id = Guid.newGuid();
    }

    public getAsPlainObject(): any {
        this.restaurant = Object.assign({}, this.restaurant);
        
        return Object.assign({}, this);
    }
}

export enum DealType{
    Drinks,
    Food,
    Both
}

