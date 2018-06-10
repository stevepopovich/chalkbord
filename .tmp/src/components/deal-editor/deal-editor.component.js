var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Deal } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
import { AuthorizationService } from "../../services/authorization.service";
import { DealEditorService } from "../../services/deal-editing.service";
var DealEditorComponent = (function () {
    function DealEditorComponent(cardService, formBuilder, uploader, authService, dealEditorService) {
        var _this = this;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.authService = authService;
        this.dealEditorService = dealEditorService;
        this.limitDealNumber = false;
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.compose([Validators.maxLength(9999), Validators.minLength(0), Validators.required])],
            numberOfDeals: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealDay: ['', Validators.required],
            dealStart: ['', Validators.required],
            dealEnd: ['', Validators.required],
            dealType: ['', Validators.required],
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.setCurrentCardBeingEdited(deal);
        });
    }
    DealEditorComponent.prototype.setImageData = function (event) {
        this.imageData = event.srcElement.files[0];
    };
    DealEditorComponent.prototype.save = function () {
    };
    DealEditorComponent.prototype.add = function () {
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.dealEditorFormGroup.valid && this.imageData) {
            var startDate = this.dealEditorFormGroup.get("dealDay").value;
            var startDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealStart"), startDate);
            var endDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealEnd"), startDate);
            var deal = void 0;
            if (!this.limitDealNumber) {
                deal = new Deal(this.authService.currentUser.restaurant.uid, this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, -1, //no deal limit
                this.dealEditorFormGroup.get("dealType").value, this.authService.currentUser.restaurant.location);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            else {
                deal = new Deal(this.authService.currentUser.restaurant.uid, this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, this.dealEditorFormGroup.get("dealNumber").value, this.dealEditorFormGroup.get("dealType").value, this.authService.currentUser.restaurant.location);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            this.uploader.uploadDealPhoto(this.imageData, deal.id);
            this.cardService.addCard(deal);
            this.authService.addCardIdToCurrentUser(deal.id);
        }
    };
    DealEditorComponent.prototype.setCurrentCardBeingEdited = function (deal) {
        var _this = this;
        if (deal) {
            this.uneditedDeal = deal;
            this.editingDeal = true;
            Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
                if (key != "dealDay" && key != "dealStart" && key != "dealEnd")
                    _this.dealEditorFormGroup.get(key).setValue(deal[key]);
            });
            this.dealEditorFormGroup.get("dealDay").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealStart").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealEnd").setValue(deal.dealEnd.toISOString());
            this.dealEditorFormGroup.get("limitedDealNumber").setValue(deal.numberOfDeals > 0);
        }
        else
            this.clearFields();
    };
    DealEditorComponent.prototype.getCombinedTime = function (time, date) {
        console.log(time);
        console.log(date);
        var combinedTime = new Date(date);
        var timeDateObj = new Date(time);
        combinedTime.setTime(timeDateObj.getTime());
        console.log(combinedTime);
        return combinedTime;
    };
    DealEditorComponent.prototype.cancel = function () {
        this.dealEditorService.setCurrentDeal(null);
        this.clearFields();
    };
    DealEditorComponent.prototype.clearFields = function () {
        var _this = this;
        this.uneditedDeal = null;
        this.editingDeal = false;
        Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
            _this.dealEditorFormGroup.get(key).setValue(null);
        });
    };
    DealEditorComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-item>\n                <ion-label floating>Deal Description</ion-label>\n                <ion-input formControlName="dealDescription"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Deal date</ion-label>\n                <ion-datetime displayFormat="MMMM DD, YYYY" formControlName="dealDay"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Start time</ion-label>\n                <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>End time</ion-label>\n                <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Limited deal number</ion-label>\n                <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n            </ion-item>\n        \n            <ion-item *ngIf="limitDealNumber">\n                <ion-label floating>Deal Number</ion-label>\n                <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n            </ion-item>\n\n            <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                Deal Type\n                <ion-item>\n                    <ion-label>Drinks</ion-label>\n                    <ion-radio value="0"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Food</ion-label>\n                    <ion-radio value="1"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Both</ion-label>\n                    <ion-radio value="2"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n            <ion-item>\n                <input type="file" (change)="setImageData($event)" accept="image/*"/>\n            </ion-item>\n        </form>\n    </ion-list>\n    <div class="button-group">\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [CardDataService, FormBuilder, UploadService,
            AuthorizationService, DealEditorService])
    ], DealEditorComponent);
    return DealEditorComponent;
}());
export { DealEditorComponent };
//# sourceMappingURL=deal-editor.component.js.map