import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']
})
export class RestaurantDealMakerComponent{
    private newDatePlusTwo = new Date();

    public deals: DealModel[] = [];

    public constructor(public modalCtrl: ModalController){
        this.newDatePlusTwo.setHours(new Date().getHours() + 2);
        
        var sixThirty = new Date();
        sixThirty.setHours(18);
        sixThirty.setMinutes(30);

        var eight = new Date();
        eight.setHours(20);
        eight.setMinutes(0);

        this.deals = [
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg")
        ];
    }

    public editDeal(deal: DealModel){
        console.log(deal);
        this.modalCtrl.create(DealEditorComponent).present();
    }
}

export class DealModel{
    public restaurantName: string;
    public dealDescription: string;
    public dealStart: Date;
    public dealEnd: Date;
    public numberOfDeals: Number;
    public dealType: DealType;
    public imageSource: string;

    public constructor(restaurantName: string, dealDescription: string, dealStart: Date, dealEnd: Date, numberOfDeals: Number, dealType: DealType,imageSource: string){
        this.restaurantName = restaurantName;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
    }
}

export enum DealType{
    Drinks,
    Food,
    Both
}