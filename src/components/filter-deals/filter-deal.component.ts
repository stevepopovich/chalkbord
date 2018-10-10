import { DealType } from './../../types/deals.type';
import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
    templateUrl: './filter-deal.component.html',
    selector: 'filter-deal',
    styleUrls: ['/filter-deal.component.scss']
})
export class FilterDealComponent {

    public boolValues = {
        vegetarian: false,
        vegan: false,
        food: false,
        drink: false,
        meal: false
    }

    constructor(private viewCtrl: ViewController, private navParams: NavParams) {
        const appliedFilterOptions: FilterDealsOptionsInterface = this.navParams.data;
        this.setDealType(appliedFilterOptions.dealTypes);
        this.boolValues.vegetarian = appliedFilterOptions.onlyVegetarian;
        this.boolValues.vegan = appliedFilterOptions.onlyVegan;
    }

    public applyFilters() {
        const returnData: FilterDealsOptionsInterface = {
            onlyVegetarian: this.boolValues.vegetarian,
            onlyVegan: this.boolValues.vegan,
            dealTypes: this.getDealTypesValue()
        };
        this.viewCtrl.dismiss(returnData);
    }

    public toggle(boolName: string): void {
        this.boolValues[boolName] = !this.boolValues[boolName];
    }

    public getColor(boolName: string): string {
        return this.boolValues[boolName] ? "black" : "light-grey";
    }

    private getDealTypesValue(): DealType[] {
        const dealTypes = [];

        if (this.boolValues.drink)
            dealTypes.push(DealType.Drinks);
        if (this.boolValues.food)
            dealTypes.push(DealType.Food);
        if (this.boolValues.meal)
            dealTypes.push(DealType.Meal);

        return dealTypes;
    }

    private setDealType(dealTypes: DealType[]) {
        dealTypes.forEach(dealType => {
            switch (dealType) {
                case DealType.Meal: {
                    this.boolValues.meal = true;
                    break;
                }
                case DealType.Drinks: {
                    this.boolValues.drink = true;
                    break;
                }
                case DealType.Food: {
                    this.boolValues.food = true;
                    break;
                }
            }
        });
    }
}

export interface FilterDealsOptionsInterface {
    onlyVegetarian: boolean;
    onlyVegan: boolean;
    dealTypes: DealType[];
}