import { Deal } from "./deals.type";
import { Restaurant } from "./restaurant.type";
import { Guid } from "./utils.type";

export class GSUser{
    public uid: string;//from firebase auth
    public firstName: string;
    public userType: UserType;
    public cardIds?: Guid[];
    public restaurant?: Restaurant;
    public cards?: Deal[];
    public radius?: number; 

    public constructor(uid: string, userType: UserType, firstName: string){
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
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