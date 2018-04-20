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
import { ViewController } from "ionic-angular";
import { DealModel, RestaurantModel } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
var DealEditorComponent = (function () {
    function DealEditorComponent(viewCtrl, cardService, formBuilder, uploader) {
        this.viewCtrl = viewCtrl;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.limitDealNumber = false;
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
            dealNumber: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealStart: ['', Validators.required],
            dealEnd: ['', Validators.required],
            dealType: ['', Validators.required],
        });
        this.cardService;
    }
    DealEditorComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DealEditorComponent.prototype.uploadImage = function (event) {
        this.imageData = event.srcElement.files[0];
    };
    DealEditorComponent.prototype.save = function () {
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.dealEditorFormGroup.valid && this.imageData) {
            var deal = void 0;
            if (!this.limitDealNumber) {
                deal = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), this.dealEditorFormGroup.get("dealDescription").value, new Date(this.dealEditorFormGroup.get("dealStart").value), new Date(this.dealEditorFormGroup.get("dealEnd").value), -1, this.dealEditorFormGroup.get("dealType").value, null);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            else {
                deal = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), this.dealEditorFormGroup.get("dealDescription").value, new Date(this.dealEditorFormGroup.get("dealStart").value), new Date(this.dealEditorFormGroup.get("dealEnd").value), this.dealEditorFormGroup.get("dealNumber").value, this.dealEditorFormGroup.get("dealType").value, null);
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }
            this.uploader.uploadDealPhoto(this.imageData, deal.id);
            this.cardService.addCard(deal);
            this.viewCtrl.dismiss();
        }
    };
    DealEditorComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n            <ion-title class="title-big">locale</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-item>\n                <ion-label floating>Deal Description</ion-label>\n                <ion-input formControlName="dealDescription"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Start time</ion-label>\n                <ion-datetime displayFormat="MMMM DD, YYYY h:mm a" formControlName="dealStart"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label floating>End time</ion-label>\n                <ion-datetime displayFormat="MMMM DD, YYYY h:mm a" formControlName="dealEnd"></ion-datetime>\n            </ion-item>\n        \n            <ion-item>\n                <ion-label>Limited deal number</ion-label>\n                <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n            </ion-item>\n        \n            <ion-item *ngIf="limitDealNumber">\n                <ion-label floating>Deal Number</ion-label>\n                <ion-input type="number" formControlName="dealNumber"></ion-input>\n            </ion-item>\n\n            <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                Deal Type\n                <ion-item>\n                    <ion-label>Drinks</ion-label>\n                    <ion-radio value="0"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Food</ion-label>\n                    <ion-radio value="1"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Both</ion-label>\n                    <ion-radio value="2"></ion-radio>\n                </ion-item>\n            </ion-list>\n        \n            <ion-item>\n                <input type="file" (change)="uploadImage($event)" accept="image/*"/>\n            </ion-item>\n\n        </form>\n    </ion-list>\n    <div class="button-group">\n        <button ion-button (click)="close()">\n            Close\n        </button>\n\n        <button ion-button (click)="save()">\n            Save\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [ViewController, CardDataService, FormBuilder, UploadService])
    ], DealEditorComponent);
    return DealEditorComponent;
}());
export { DealEditorComponent };
//# sourceMappingURL=deal-editor.component.js.map