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
import { AngularFirestore } from "angularfire2/firestore";
import { ToastService } from "./toast.service";
var UserService = (function () {
    function UserService(database, toastService) {
        this.database = database;
        this.toastService = toastService;
        this.userCollection = this.database.collection("users");
    }
    /**
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     *
     * Restaurant users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     *
     * We can talk about if we really want to use a toast here TODO
     * @param user
     */
    UserService.prototype.updateUserInDatabase = function (user) {
        if (this.userCollection) {
            var assignedUser = Object.assign({}, user);
            delete (assignedUser.cards);
            if (assignedUser.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(assignedUser.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(assignedUser);
        }
        else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");
        return null;
    };
    UserService.prototype.getUserData = function (uid) {
        return this.database.collection("users", function (ref) { return ref.where("uid", '==', uid); }).valueChanges(); //this.fireAuth.auth.currentUser.uid
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore, ToastService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map