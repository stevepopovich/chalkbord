import { Guid } from "./utils.type";
import { Restaurant } from "./restaurant.type"; 
import { GSLocation } from "./location.type";

export class GSCard { 
    public id: string;

    public imageURL: string;
    public restaurant: Restaurant;

    public constructor(public dealDescription: string, public dealStart: Date, 
        public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, obj?: any){
        this.id = Guid.newGuid();

        if(obj){
            this.id = obj.id;
            this.restaurant = obj.restaurant;
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

    public static getBlankCard(): GSCard {
        const blankCard = new GSCard(null, new Date(), new Date(), -1, DealType.Drinks, null)
        blankCard.restaurant = new Restaurant("", "", "", "", new GSLocation());
        return blankCard;
    }
}

export enum DealType{
    Drinks,
    Food,
    Both
}

