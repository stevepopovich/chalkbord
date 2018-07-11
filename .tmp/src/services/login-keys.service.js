var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
var LoginKeyss = (function () {
    function LoginKeyss() {
    }
    LoginKeyss.rememberMeUserKey = "rememberMeUser"; //dont change this unless you want to change the other one is user-signup
    LoginKeyss.rememberMeRestKey = "rememberMeRest"; //this either
    LoginKeyss.userEmailPasswordComboKey = "userEmailCombo";
    LoginKeyss.restEmailPasswordComboKey = "restEmailCombo";
    LoginKeyss = __decorate([
        Injectable()
    ], LoginKeyss);
    return LoginKeyss;
}());
export { LoginKeyss };
//# sourceMappingURL=login-keys.service.js.map