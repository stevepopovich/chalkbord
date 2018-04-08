import { Guid } from "./utils.type";

export class DealModel{
    public id: string;
    public restaurant: RestaurantModel;
    public dealDescription: string;
    public dealStart: Date;
    public dealEnd: Date;
    public numberOfDeals: Number;
    public dealType: DealType;
    public imageSource: string;

    public imageURL: string;

    public constructor(restaurant: RestaurantModel, dealDescription: string, dealStart: Date, dealEnd: Date, numberOfDeals: Number, dealType: DealType, imageSource: string){
        this.id = Guid.newGuid();
        this.restaurant = restaurant;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
    }

    public getAsPlainObject(): any {
        this.restaurant = Object.assign({}, this.restaurant);
        
        return Object.assign({}, this);
    }
}

export class RestaurantModel {
    public name: string;
    public location: string;
    public imageSource: string;

    public constructor(name: string, location: string, imageSource: string){
        this.name = name;
        this.location = location;
        this.imageSource = imageSource;
    }
}

export enum DealType{
    Drinks,
    Food,
    Both
}

