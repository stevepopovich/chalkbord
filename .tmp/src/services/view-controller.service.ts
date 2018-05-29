import { Injectable } from "@angular/core";

@Injectable()
export class ViewControllerService {
    public dealMaker: Boolean = false;
    public consumer: Boolean = false;
    public signUp: Boolean = false;
    public browserHome: Boolean = false;
    public restaurantLanding: Boolean = false;

    constructor() {
    }

    public setConsumerView(){
        this.dealMaker = false;
        this.consumer = true;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
    }

    public setDealMakerView(){
        this.dealMaker = true;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
    }

    public setSignUpView(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = true;
        this.browserHome = false;
        this.restaurantLanding = false;
    }

    public setBrowserHome(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = true;
        this.restaurantLanding = false;
    }

    public setRestaurantPortal(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = true;
    }
}