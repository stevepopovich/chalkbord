import { RestaurantModel, DealModel } from "./deals.type";

export class GSUser{
    public uid: string;//from firebase auth
    public userType: UserType;
    public restaurant?: RestaurantModel;
    public cards?: DealModel[];

    public constructor(uid: string,userType: UserType){
        this.uid = uid;
        this.userType = userType;
    }

    public getAsPlainObject(){
        this.restaurant = Object.assign({}, this.restaurant);

        return Object.assign({}, this);
    }
}

export enum UserType {
    Consumer,
    Restaurant
}