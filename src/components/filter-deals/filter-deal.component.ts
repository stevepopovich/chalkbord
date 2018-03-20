import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
    templateUrl: './filter-deal.component.html',
    selector: 'filter-deal',
    styleUrls: ['/filter-deal.component.scss']
})
export class FilterDealComponent{
    constructor(public viewCtrl: ViewController){

    }

    public closePopover(model: string) {
        this.viewCtrl.dismiss(model);
      }
}