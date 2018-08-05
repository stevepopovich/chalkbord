import { DealType } from './../../types/deals.type';
import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
    templateUrl: './filter-deal.component.html',
    selector: 'filter-deal',
    styleUrls: ['/filter-deal.component.scss']
})
export class FilterDealComponent {
    public onlyVegetarian: boolean = false;
    public onlyVegan: boolean = false;

    public dealType: DealType;

    constructor(private viewCtrl: ViewController, private navParams: NavParams) {
        const appliedFilterOptions: FilterDealsOptionsInterface = this.navParams.data;
        this.dealType = appliedFilterOptions.dealType;
        this.onlyVegetarian = appliedFilterOptions.onlyVegetarian;
        this.onlyVegan = appliedFilterOptions.onlyVegan
    }

    public applyFilters() {
        const returnData: FilterDealsOptionsInterface = {
            onlyVegetarian: this.onlyVegetarian,
            onlyVegan: this.onlyVegan,
            dealType: this.dealType
        };
        this.viewCtrl.dismiss(returnData);
    }

    public updateDealContentType(changeVegetarianOption: boolean): void {
        if (changeVegetarianOption) {
            if (!this.onlyVegetarian)
                this.onlyVegan = false;
        }
        else {//change vegan option
            if (this.onlyVegan)
                this.onlyVegetarian = true;
        }
    }
}

export interface FilterDealsOptionsInterface {
    onlyVegetarian: boolean;
    onlyVegan: boolean;
    dealType: DealType;
}