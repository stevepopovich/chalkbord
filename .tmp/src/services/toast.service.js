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
import { ToastController } from "ionic-angular";
var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.showReadableToast = function (message) {
        var wordTime = this.calculateReadTime(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom"
        });
        toast.present();
    };
    ToastService.prototype.showReadableAndAnswerableOkayToast = function (message) {
        var wordTime = this.calculateReadTime(message);
        wordTime *= 2;
        var toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom",
            showCloseButton: true,
            closeButtonText: "OK"
        });
        return toast;
    };
    ToastService.prototype.calculateReadTime = function (message) {
        var wordCount = message.split(" ").length;
        var wordsPerMinute = 210; //resonable words per minute someone can read on a computer
        var wordTime = ((wordCount / wordsPerMinute) *
            (60 * 1000)) +
            1500; //delay to see the notification toast;
        return wordTime;
    };
    ToastService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ToastController])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=toast.service.js.map