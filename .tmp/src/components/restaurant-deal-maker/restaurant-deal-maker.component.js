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
import { AuthorizationService } from "../../services/authorization.service";
var RestaurantDealMakerComponent = (function () {
    function RestaurantDealMakerComponent(authService) {
        this.authService = authService;
    }
    RestaurantDealMakerComponent.prototype.hasCards = function () {
        return this.authService.currentUser
            && this.authService.currentUser.cards
            && this.authService.currentUser.cards.length > 0;
    };
    RestaurantDealMakerComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/'<ion-content class="outer-content">\n    <ion-list *ngIf="hasCards()">\n        <ion-item *ngFor="let deal of authService.currentUser.cards">\n            {{deal.dealDescription}}\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!hasCards()">\n        Add some cards and see them here!\n    </div>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-deal-maker/restaurant-deal-maker.component.html"*/,
            selector: 'restaurant-deal-maker',
            styleUrls: ['/restaurant-deal-maker.component.scss']
        }),
        __metadata("design:paramtypes", [AuthorizationService])
    ], RestaurantDealMakerComponent);
    return RestaurantDealMakerComponent;
}());
export { RestaurantDealMakerComponent };
//# sourceMappingURL=restaurant-deal-maker.component.js.map