var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
var RestaurantProfileComponent = (function () {
    function RestaurantProfileComponent() {
        this.root = DealEditorComponent;
    }
    RestaurantProfileComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-profile/restaurant-profile.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <restaurant-deal-maker></restaurant-deal-maker>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-profile/restaurant-profile.component.html"*/,
            selector: 'restaurant-profile',
            styleUrls: ['/restaurant-profile.component.scss']
        })
    ], RestaurantProfileComponent);
    return RestaurantProfileComponent;
}());
export { RestaurantProfileComponent };
//# sourceMappingURL=restaurant-profile.component.js.map