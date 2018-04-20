import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
//import { DealModel, RestaurantModel, DealType } from "../../types/deals.type";

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']
})
export class RestaurantDealMakerComponent{
    // private newDatePlusTwo = new Date();

    // public deals: DealModel[] = [];

    public constructor(public modalCtrl: ModalController){
        // this.newDatePlusTwo.setHours(new Date().getHours() + 2);
        
        // var sixThirty = new Date();
        // sixThirty.setHours(18);
        // sixThirty.setMinutes(30);

        // var eight = new Date();
        // eight.setHours(20);
        // eight.setMinutes(0);

        // this.deals = [
        //     new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
        //     new DealModel(new RestaurantModel("Name2", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
        //     new DealModel(new RestaurantModel("Name3", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
        //     new DealModel(new RestaurantModel("Name4", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
        //     new DealModel(new RestaurantModel("Name5", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
        //     new DealModel(new RestaurantModel("Name6", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
        // ];
    }

    public editDeal(){
        this.modalCtrl.create(DealEditorComponent).present();
    }

    public createDeal(): void {
        this.modalCtrl.create(DealEditorComponent).present();
    }
}



