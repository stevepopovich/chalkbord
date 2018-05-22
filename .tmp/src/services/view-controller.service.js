var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
var ViewControllerService = (function () {
    function ViewControllerService() {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
    }
    ViewControllerService.prototype.setConsumerView = function () {
        this.dealMaker = false;
        this.consumer = true;
        this.signUp = false;
        this.browserHome = false;
    };
    ViewControllerService.prototype.setDealMakerView = function () {
        this.dealMaker = true;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = false;
    };
    ViewControllerService.prototype.setSignUpView = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = true;
        this.browserHome = false;
    };
    ViewControllerService.prototype.setRestaurantLanding = function () {
        this.dealMaker = false;
        this.consumer = false;
        this.signUp = false;
        this.browserHome = true;
    };
    ViewControllerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ViewControllerService);
    return ViewControllerService;
}());
export { ViewControllerService };
//# sourceMappingURL=view-controller.service.js.map