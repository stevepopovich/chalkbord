import { Injectable } from "@angular/core";

@Injectable()
export class ViewControllerService {
    public dealMaker: Boolean = false;
    public consumer: Boolean = false;
    public signUp: Boolean = false;

    constructor() {
    }

    public setConsumerView(){
        this.dealMaker = false;
        this.consumer = true;
        this.signUp = false;
    }

    public setDealMakerView(){
        this.dealMaker = true;
        this.consumer = false;
        this.signUp = false;
    }

    public setSignUpView(){
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = true;
    }
}