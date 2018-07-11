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
import { DeviceService } from "./device.service";
import { LoginKeyss } from "./login-keys.service";
import { UserType } from "../types/user.type";
import { LoginService } from './login.service';
var RememberMeService = (function () {
    function RememberMeService(deviceService, loginService) {
        this.deviceService = deviceService;
        this.loginService = loginService;
    }
    RememberMeService.prototype.loginFromRememberMe = function (formGroup, userType) {
        var _this = this;
        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);
        this.deviceService.getSetting(deviceKey).then(function (rememberMe) {
            if (rememberMe) {
                _this.deviceService.getSetting(tupleKey).then(function (emailPasswordTup) {
                    if (emailPasswordTup) {
                        formGroup.get("email").setValue(emailPasswordTup.email);
                        formGroup.get("password").setValue(emailPasswordTup.password);
                        _this.loginService.login(formGroup);
                    }
                });
            }
        });
    };
    RememberMeService.prototype.handleRememberMeSetting = function (formGroup, userType) {
        var rememberMe = formGroup.get("rememberMe").value;
        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);
        this.deviceService.putBooleanSetting(deviceKey, rememberMe);
        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(tupleKey, formGroup.get("email").value, formGroup.get("password").value);
    };
    RememberMeService.prototype.setKeys = function (userType, deviceKey, tupleKey) {
        if (userType == UserType.Organization) {
            deviceKey = LoginKeyss.rememberMeRestKey;
            tupleKey = LoginKeyss.restEmailPasswordComboKey;
        }
        else if (userType == UserType.Consumer) {
            deviceKey = LoginKeyss.rememberMeUserKey;
            tupleKey = LoginKeyss.userEmailPasswordComboKey;
        }
    };
    RememberMeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DeviceService, LoginService])
    ], RememberMeService);
    return RememberMeService;
}());
export { RememberMeService };
//# sourceMappingURL=remember-me.service.js.map