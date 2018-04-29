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
import { AngularFirestore } from 'angularfire2/firestore';
var AuthorizationService = (function () {
    function AuthorizationService(auth, database) {
        this.auth = auth;
        this.database = database;
        this.userCollection = this.database.collection("users");
    }
    AuthorizationService.prototype.checkUserType = function () {
        return this.currentUser.userType;
    };
    AuthorizationService.prototype.checkUserIsLoggedIn = function () {
        if (this.currentUser && this.auth.auth.currentUser)
            return true;
        else
            return false;
    };
    AuthorizationService.prototype.userSignOut = function () {
        this.currentUser = null;
        this.auth.auth.signOut();
    };
    AuthorizationService.prototype.signIn = function (email, password, newSignIn) {
        var _this = this;
        if (!newSignIn) {
            this.database.collection("users", function (ref) { return ref.where("uid", '==', _this.auth.auth.currentUser.uid); }).valueChanges().subscribe(function (users) {
                _this.currentUser = users[0];
            });
        }
        return this.auth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUpUser = function (email, password) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.checkUserSignInMethods = function (email) {
        return this.auth.auth.fetchSignInMethodsForEmail(email);
    };
    AuthorizationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireAuth, AngularFirestore])
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