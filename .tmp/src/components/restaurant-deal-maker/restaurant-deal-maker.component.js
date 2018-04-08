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
import { DealModel, RestaurantModel, DealType } from "../../types/deals.type";
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
            new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel(new RestaurantModel("Name2", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel(new RestaurantModel("Name3", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
            new DealModel(new RestaurantModel("Name4", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
            new DealModel(new RestaurantModel("Name5", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Food, "assets/images/foodandliquor/wingsrest.jpg"),
            new DealModel(new RestaurantModel("Name6", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
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
//# sourceMappingURL=restaurant-deal-maker.component.js.map