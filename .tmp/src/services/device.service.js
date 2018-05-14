var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";
var userLoginKey = "userEmail";
var rememberMeKey = "rememberMe";
var DeviceService = (function () {
    function DeviceService(uniqueDeviceID, storage, platform) {
        var _this = this;
        this.uniqueDeviceID = uniqueDeviceID;
        this.storage = storage;
        this.platform = platform;
        if (this.platform.is("cordova")) {
            this.uniqueDeviceID.get().then(function (id) {
                _this.deviceId = id;
            });
        }
    }
    DeviceService.prototype.putUserEmailPasswordToLocalStorage = function (email, password) {
        this.storage.set(userLoginKey, new EmailPasswordTuple(email, password));
    };
    DeviceService.prototype.getUserEmailPasswordFromLocalStorage = function () {
        return this.storage.get(userLoginKey);
    };
    DeviceService.prototype.putRememberMeSetting = function (rememberMe) {
        return this.storage.set(rememberMeKey, rememberMe);
    };
    DeviceService.prototype.getRememberMeSetting = function () {
        return this.storage.get(rememberMeKey);
    };
    DeviceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [UniqueDeviceID, Storage, Platform])
    ], DeviceService);
    return DeviceService;
}());
export { DeviceService };
var EmailPasswordTuple = (function () {
    function EmailPasswordTuple(email, password) {
        this.email = email;
        this.password = password;
    }
    return EmailPasswordTuple;
}());
export { EmailPasswordTuple };
//# sourceMappingURL=device.service.js.map