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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { ViewControllerService } from "../../services/view-controller.service";
import { LocaleView } from "../../types/locale-view.type";
var BrowserHomeComponent = (function (_super) {
    __extends(BrowserHomeComponent, _super);
    function BrowserHomeComponent(viewController) {
        var _this = _super.call(this) || this;
        _this.viewController = viewController;
        return _this;
    }
    BrowserHomeComponent.prototype.showOrganizationPortal = function () {
        this.viewController.setOrganizationPortal();
    };
    BrowserHomeComponent = __decorate([
        Component({
            template:/*ion-inline-start:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/'<div class="home-nav-bar">\n    <button class="home-nav-button" (click)="showOrganizationPortal()" ion-button>\n        <ion-icon name="organization"></ion-icon> Organizations\n    </button>\n    <button class="home-nav-button" ion-button>\n        <ion-icon name="send"></ion-icon> Contact\n    </button>\n</div>\n\n<div class="browser-home-photo">\n    <!-- <ion-card>\n        <ion-card-content>\n            <div class="flute-photo">\n            </div>\n        </ion-card-content>\n    </ion-card> -->\n</div>\n\n<div class="center-home-text">Chalkbord</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/browser-home/browser-home.component.html"*/,
            selector: 'browser-home',
            styleUrls: ['/browser-home.component.scss']
        }),
        __metadata("design:paramtypes", [ViewControllerService])
    ], BrowserHomeComponent);
    return BrowserHomeComponent;
}(LocaleView));
export { BrowserHomeComponent };
//# sourceMappingURL=browser-home.component.js.map