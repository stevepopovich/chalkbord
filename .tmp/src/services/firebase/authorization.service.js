var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
var AuthorizationService = (function () {
    function AuthorizationService(fireAuth) {
        this.fireAuth = fireAuth;
    }
    AuthorizationService.prototype.checkLoggedIn = function () {
        return this.fireAuth.auth.currentUser != null;
    };
    AuthorizationService.prototype.getCurrentUserUID = function () {
        return this.fireAuth.auth.currentUser.uid;
    };
    AuthorizationService.prototype.getCurrentUserEmail = function () {
        return this.fireAuth.auth.currentUser.email;
    };
    AuthorizationService.prototype.updateCurrentUserEmail = function (email) {
        return this.fireAuth.auth.currentUser.updateEmail(email);
    };
    AuthorizationService.prototype.sendPasswordResetEmail = function (email) {
        return this.fireAuth.auth.sendPasswordResetEmail(email);
    };
    // public signOut() {
    //     //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
    //                                     //this won't affect functionality but should be here for security
    // }
    AuthorizationService.prototype.signIn = function (email, password) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUp = function (email, password) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.checkSignInMethods = function (email) {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    };
    AuthorizationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth])
    ], AuthorizationService);
    return AuthorizationService;
}());
export { AuthorizationService };
export var SignUpReturnCode;
(function (SignUpReturnCode) {
    SignUpReturnCode[SignUpReturnCode["UserAlreadySignedUp"] = 0] = "UserAlreadySignedUp";
    SignUpReturnCode[SignUpReturnCode["Success"] = 1] = "Success";
    SignUpReturnCode[SignUpReturnCode["Failure"] = 2] = "Failure";
})(SignUpReturnCode || (SignUpReturnCode = {}));
//# sourceMappingURL=authorization.service.js.map