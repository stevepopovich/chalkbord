import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";
import { DealModel, RestaurantModel, DealType } from "../../types/deals.type";

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
})
export class DealEditorComponent{
    public deal: DealModel = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg");

    public constructor(public viewCtrl: ViewController){
    }

    public close(){
        this.viewCtrl.dismiss();
    }
}