var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
var RestaurantDealMakerComponent = (function () {
    function RestaurantDealMakerComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.newDatePlusTwo = new Date();
        this.deals = [];
        this.newDatePlusTwo.setHours(new Date().getHours() + 2);
        var sixThirty = new Date();
        sixThirty.setHours(18);
        sixThirty.setMinutes(30);
        var eight = new Date();
        eight.setHours(20);
        eight.setMinutes(0);
        this.deals = [
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel("Name", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg")
        ];
    }
    RestaurantDealMakerComponent.prototype.editDeal = function (deal) {
        console.log(deal);
        this.modalCtrl.create(DealEditorComponent).present();
    };
    RestaurantDealMakerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/'<h4 style="margin-left: 1em">Restaurant name</h4>\n\n<ion-content class="content-override">\n    <ion-card *ngFor="let deal of deals" (click)="editDeal(deal)">\n        <ion-card-header>\n            {{deal.dealDescription}}\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="{{deal.imageSource}}">\n            <h2>Deal Time: {{deal.dealStart | date:\'MM/dd hh:mm aa\'}}-{{deal.dealEnd | date: \'hh:mm aa\'}}</h2>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/,
            selector: 'restaurant-deal-maker',
            styleUrls: ['/restaurant-deal-maker.component.scss']
        }),
        __metadata("design:paramtypes", [ModalController])
    ], RestaurantDealMakerComponent);
    return RestaurantDealMakerComponent;
}());
export { RestaurantDealMakerComponent };
var DealModel = (function () {
    function DealModel(restaurantName, dealDescription, dealStart, dealEnd, numberOfDeals, dealType, imageSource) {
        this.restaurantName = restaurantName;
        this.dealDescription = dealDescription;
        this.dealStart = dealStart;
        this.dealEnd = dealEnd;
        this.numberOfDeals = numberOfDeals;
        this.dealType = dealType;
        this.imageSource = imageSource;
    }
    return DealModel;
}());
export { DealModel };
export var DealType;
(function (DealType) {
    DealType[DealType["Drinks"] = 0] = "Drinks";
    DealType[DealType["Food"] = 1] = "Food";
    DealType[DealType["Both"] = 2] = "Both";
})(DealType || (DealType = {}));
//# sourceMappingURL=restaurant-deal-maker.component.js.map