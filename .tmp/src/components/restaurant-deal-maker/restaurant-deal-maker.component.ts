import { Component } from "@angular/core";

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']
})
export class RestaurantDealMakerComponent{
    public funny: boolean;
    public positive: boolean;
    public constructive: boolean;

    public setFunny(){
        this.funny = true;
        this.positive = false;
        this.constructive = false;
    }

    public setPositive(){
        this.funny = false;
        this.positive = true;
        this.constructive = false;
    }

    public setConstructive(){
        this.funny = false;
        this.positive = false;
        this.constructive = true;
    }
}