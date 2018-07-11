var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from "@angular/core";
var OrganizationService = (function () {
    function OrganizationService(database) {
        this.database = database;
        this.organizationCollection = this.database.collection("organization");
    }
    OrganizationService.prototype.get = function (id) {
        return this.database.collection("organization", function (ref) { return ref.where("id", '==', id); }).valueChanges();
    };
    OrganizationService.prototype.set = function (model) {
        return this.organizationCollection.doc(model.uid).set(model);
    };
    OrganizationService.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.getMulti = function (ids) {
        ids;
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.setMulti = function (models) {
        models;
        throw new Error("Method not implemented.");
    };
    OrganizationService.prototype.delete = function (id) {
        id;
        throw new Error("Method not implemented.");
    };
    OrganizationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFirestore])
    ], OrganizationService);
    return OrganizationService;
}());
export { OrganizationService };
//# sourceMappingURL=organization-service.js.map