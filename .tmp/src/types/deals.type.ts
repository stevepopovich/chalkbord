import { Guid } from "./utils.type";
import { Restaurant } from "./restaurant.type"; 

export class Deal { 
    public id: string;

    public imageURL: string;
    public restaurant: Restaurant;

    public constructor(public restaurantUid: string, public dealDescription: string, public dealStart: Date, public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, public imageSource: string){
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

