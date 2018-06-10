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
        public location: GSLocation, obj?: any){
        this.id = Guid.newGuid();

        if(obj){
            const newLoc = new GSLocation();
            newLoc.lat = obj.location.lat;
            newLoc.lng = obj.location.lng;

            this.restaurantUid = obj.restaurantUid;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
            this.location = newLoc;
        }
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

