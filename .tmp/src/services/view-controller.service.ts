import { Injectable } from "@angular/core";

@Injectable()
export class ViewControllerService {
    public dealMaker: Boolean = false;
    public consumer: Boolean = false;
    public signUp: Boolean = false;
    public browserHome: Boolean = false;
    public restaurantLanding: Boolean = false;
    public restaurantHome: Boolean = false;

    constructor() {
    }

    public setConsumerView(){
        this.dealMaker = false;
        this.consumer = true;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    }

    public setDealMakerView(){
        this.dealMaker = true;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    }

    public setSignUpView(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = true;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    }

    public setBrowserHome(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = true;
        this.restaurantLanding = false;
        this.restaurantHome = false;
    }

    public setRestaurantPortal(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = true;
        this.restaurantHome = false;
    }

    public setRestaurantHome(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
        this.restaurantLanding = false;
        this.restaurantHome = true;
    }
}