var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { DealType } from '../../types/deals.type';
var MoreCardInfoComponent = (function () {
    function MoreCardInfoComponent(navParams, launchNavigator) {
        this.navParams = navParams;
        this.launchNavigator = launchNavigator;
        this.card = this.navParams.get("card");
        this.dealType = DealType[this.card.dealType.valueOf()];
    }
    MoreCardInfoComponent.prototype.goToLocation = function () {
        this.launchNavigator.navigate(this.card.restaurant.address);
    };
    MoreCardInfoComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/'<modal-navbar [restaurntModal]="false" [profileModal]="false"></modal-navbar>\n<ion-content>\n    <img *ngIf="card" class="present-card-image fill" src="{{card.imageURL}}" />\n    <div text-wrap style="padding-right: 16px;">\n        <ion-item (click)="goToLocation()">\n            <h1 class="app-text">{{card.restaurant.name}}</h1>\n            <p  class="app-text">{{card.restaurant.address}}</p>\n        </ion-item>\n        <ion-item *ngIf="card.numberOfDeals > 0">\n            <h2 class="app-text red-text">There are only {{card.numberOfDeals}} cards available for this deal!</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{card.dealDescription}}</h2>\n            <p>{{card.dealStart | date: \'MMM d\'}}</p>\n            <p>{{card.dealStart | date: \'h:mm a\'}} - {{card.dealEnd | date: \'h:mm a\'}}</p>\n        </ion-item>\n        <ion-item>\n            <p>Deal type: {{dealType}}</p>\n        </ion-item>\n    </div>\n</ion-content> '/*ion-inline-end:"/Users/Contence/locale/src/components/more-card-info/more-card-info.component.html"*/,
            selector: 'more-card-info',
            styleUrls: ['/more-card-info.component.scss']
        }),
        __metadata("design:paramtypes", [NavParams, LaunchNavigator])
    ], MoreCardInfoComponent);
    return MoreCardInfoComponent;
}());
export { MoreCardInfoComponent };
//# sourceMappingURL=more-card-info.component.js.map