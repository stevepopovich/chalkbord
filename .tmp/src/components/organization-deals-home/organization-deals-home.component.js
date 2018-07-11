var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
import { LocaleView } from "../../types/locale-view.type";
var OrganizationDealsHomeComponent = (function (_super) {
    __extends(OrganizationDealsHomeComponent, _super);
    function OrganizationDealsHomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.root = DealEditorComponent;
        return _this;
    }
    OrganizationDealsHomeComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/'<ion-split-pane>\n    <!--  our side menu  -->\n    <ion-menu [content]="content">\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Your Deals</ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <organization-deal-list></organization-deal-list>\n    </ion-menu>\n\n    <!-- the main content -->\n    <ion-nav [root]="root" main #content></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deals-home/organization-deals-home.component.html"*/,
            selector: 'organization-deals-home',
            styleUrls: ['/organization-deals-home.component.scss']
        })
    ], OrganizationDealsHomeComponent);
    return OrganizationDealsHomeComponent;
}(LocaleView));
export { OrganizationDealsHomeComponent };
//# sourceMappingURL=organization-deals-home.component.js.map