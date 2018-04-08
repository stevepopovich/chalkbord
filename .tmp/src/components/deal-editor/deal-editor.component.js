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
import { ViewController } from "ionic-angular";
import { DealModel, RestaurantModel, DealType } from "../../types/deals.type";
var DealEditorComponent = (function () {
    function DealEditorComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.deal = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg");
    }
    DealEditorComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DealEditorComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n            <ion-title class="title-big">locale</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n            <ion-item>\n                <ion-label color="primary" floating>Deal Description</ion-label>\n                <ion-input placeholder="Deal description" [ngModel]="deal.dealDescription"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label floating>Day</ion-label>\n                <ion-datetime displayFormat="MM/DD"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>Start time</ion-label>\n                <ion-datetime displayFormat="h:mm a" [(ngModel)]="deal.dealStart"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>End time</ion-label>\n                <ion-datetime displayFormat="h:mm a" [(ngModel)]="deal.dealEnd"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Limited deal number</ion-label>\n                <ion-checkbox [(ngModel)]="limitedDealNumber"></ion-checkbox>\n            </ion-item>\n        \n            <ion-item *ngIf="limitedDealNumber">\n                <ion-label floating>Deal Number</ion-label>\n                <ion-input type="number" [(ngModel)]="dealNumber"></ion-input>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Image upload will be here</ion-label>\n            </ion-item>\n        </ion-list>\n\n        <button ion-button (click)="close()" style="left: 38%">\n            Close\n        </button>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
        }),
        __metadata("design:paramtypes", [ViewController])
    ], DealEditorComponent);
    return DealEditorComponent;
}());
export { DealEditorComponent };
//# sourceMappingURL=deal-editor.component.js.map