import { Component } from "@angular/core";
import { DealModel, DealType } from "../restaurant-deal-maker/restaurant-deal-maker.component";
import { ViewController } from "ionic-angular";

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
})
export class DealEditorComponent{
    public deal: DealModel = new DealModel("", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/burger.jpg");

    public constructor(public viewCtrl: ViewController){
    }

    public close(){
        this.viewCtrl.dismiss();
    }
}