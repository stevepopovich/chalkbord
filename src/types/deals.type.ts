import { Guid } from "./utils.type";
import { Restaurant } from "./restaurant.type"; 

export class Deal { 
    public id: string;

    public imageURL: string;
    public restaurant: Restaurant;

    public constructor(public dealDescription: string, public dealStart: Date, 
        public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, obj?: any){
        this.id = Guid.newGuid();

        if(obj){
            this.id = obj.id;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
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

