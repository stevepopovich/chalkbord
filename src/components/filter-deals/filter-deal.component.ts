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
        console.log(this.navParams.data);
        this.setDealType(appliedFilterOptions.dealType);
        this.boolValues.vegetarian = appliedFilterOptions.onlyVegetarian;
        this.boolValues.vegan = appliedFilterOptions.onlyVegan;
    }

    public applyFilters() {
        const returnData: FilterDealsOptionsInterface = {
            onlyVegetarian: this.boolValues.vegetarian,
            onlyVegan: this.boolValues.vegan,
            dealType: this.getDealTypeValue()
        };
        console.log(returnData);
        this.viewCtrl.dismiss(returnData);
    }

    public toggle(boolName: string): void {
        this.boolValues[boolName] = !this.boolValues[boolName];

        if (boolName == 'vegan' || boolName == 'vegetarian')
            this.updateVeganVegValues(boolName);
        else
            this.updateDealTypeValues(boolName);
    }

    public getColor(boolName: string): string {
        return this.boolValues[boolName] ? "black" : "light-grey";
    }


    private updateVeganVegValues(boolName: string): void {
        if (boolName == 'vegetarian') {
            if (!this.boolValues.vegetarian)
                this.boolValues.vegan = false;
        }
        else {//change vegan option
            if (this.boolValues.vegan)
                this.boolValues.vegetarian = true;
        }
    }

    private updateDealTypeValues(boolName: string) {
        if (this.boolValues[boolName]) {
            this.boolValues.drink = false;
            this.boolValues.food = false;
            this.boolValues.meal = false;
            this.boolValues[boolName] = true;
        }
    }

    private getDealTypeValue(): DealType {
        if (this.boolValues.drink)
            return DealType.Drinks;
        if (this.boolValues.food)
            return DealType.Food;
        if (this.boolValues.meal)
            return DealType.Meal;
    }

    private setDealType(dealType: DealType) {
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
    }
}

export interface FilterDealsOptionsInterface {
    onlyVegetarian: boolean;
    onlyVegan: boolean;
    dealType: DealType;
}