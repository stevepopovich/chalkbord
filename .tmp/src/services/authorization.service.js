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
import { Guid } from '../types/utils.type';
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
            this.database.collection("users", function (ref) { return ref.where("email", '==', email); }).valueChanges().subscribe(function (users) {
                _this.currentUser = users[0];
            });
        }
        return this.auth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthorizationService.prototype.signUpUser = function (email, password, userType) {
        var _this = this;
        this.auth.auth.fetchSignInMethodsForEmail(email).then(function (methods) {
            if (methods && methods.length > 0)
                return SignUpReturnCode.UserAlreadySignedUp;
            else {
                _this.auth.auth.createUserWithEmailAndPassword(email, password).then(function () {
                    _this.signIn(email, password, true).then(function () {
                        var newUser = new GSUser(email, userType);
                        _this.currentUser = newUser;
                        console.log(_this.currentUser);
                        _this.userCollection.doc(newUser.id).set(newUser.getAsPlainObject());
                        return SignUpReturnCode.Success;
                    }).catch(function (reason) {
                        console.error("Sign up failed because: " + reason);
                        return SignUpReturnCode.Failure;
                    });
                });
            }
        }).catch(function (reason) {
            console.error("Sign up failed because: " + reason);
            return SignUpReturnCode.Failure;
        });
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
var GSUser = (function () {
    function GSUser(email, userType) {
        this.id = Guid.newGuid();
        this.email = email;
        this.userType = userType;
    }
    GSUser.prototype.getAsPlainObject = function () {
        this.restaurant = Object.assign({}, this.restaurant);
        return Object.assign({}, this);
    };
    return GSUser;
}());
export { GSUser };
export var UserType;
(function (UserType) {
    UserType[UserType["Consumer"] = 0] = "Consumer";
    UserType[UserType["Restaurant"] = 1] = "Restaurant";
})(UserType || (UserType = {}));
//# sourceMappingURL=authorization.service.js.map