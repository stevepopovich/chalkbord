var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { PictureSourceType } from '@ionic-native/camera';
import { Component, ViewChild, ElementRef } from "@angular/core";
import { Card } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
import { AuthorizationService } from "../../services/authorization.service";
import { DealEditorService } from "../../services/deal-editing.service";
import { Platform, ActionSheetController } from "ionic-angular";
import { IonicScreenSize } from "../../enums/ionic-screen-sizes.enum";
import { IonicPlatform } from '../../enums/ionic-platform.enum';
import { ImageService } from '../../services/image-service.service';
var DealEditorComponent = (function () {
    function DealEditorComponent(cardService, formBuilder, uploader, authService, dealEditorService, platform, actionSheetCtrl, imageService) {
        var _this = this;
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.uploader = uploader;
        this.authService = authService;
        this.dealEditorService = dealEditorService;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imageService = imageService;
        this.limitDealNumber = false;
        this.fileReader = new FileReader();
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.required],
            numberOfDeals: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealDay: ['', Validators.required],
            dealStart: ['', Validators.required],
            dealEnd: ['', Validators.required],
            dealType: ['', Validators.required],
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.clearFields();
            _this.setCurrentCardBeingEdited(deal);
        });
        this.platform.ready().then(function () {
            _this.platformReady = true;
        });
        this.fileReader.onloadend = function () {
            _this.imageDataForPreview = _this.fileReader.result;
        };
    }
    DealEditorComponent.prototype.setImageData = function (event) {
        this.imageDataForUpload = event.srcElement.files[0];
        this.fileReader.readAsDataURL(this.imageDataForUpload);
    };
    DealEditorComponent.prototype.delete = function () {
        this.cardService.deleteCardById(this.dealEditorService.currentDealBeingEdited.id);
        this.authService.removeUserCardFromCurrentListById(this.dealEditorService.currentDealBeingEdited.id);
        this.dealEditorService.currentDealBeingEdited = null;
        this.dealEditorService.currentDealSubject.next();
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
    };
    DealEditorComponent.prototype.add = function () {
        var _this = this;
        if (this.dealEditorFormGroup.valid && this.imageDataForUpload) {
            var deal_1 = this.getDealFromFields();
            this.uploader.uploadDealPhoto(this.imageDataForUpload, deal_1.id, false).then(function () {
                _this.imageDataForUpload = null;
                _this.dealEditorService.currentDealBeingEdited = deal_1;
                _this.dealEditorService.currentDealSubject.next();
                _this.setCurrentCardBeingEdited(deal_1);
            });
            this.cardService.addCard(deal_1);
            this.authService.addCardIdToCurrentUser(deal_1.id);
        }
    };
    DealEditorComponent.prototype.save = function () {
        var _this = this;
        if (this.dealEditorFormGroup.valid) {
            var deal = this.getDealFromFields();
            var startDate = this.dealEditorFormGroup.get("dealDay").value;
            var startTime = this.dealEditorFormGroup.get("dealStart").value;
            var endTime = this.dealEditorFormGroup.get("dealEnd").value;
            var startDatetime = this.getSaveCombinedTime(startTime, startDate);
            var endDatetime = this.getSaveCombinedTime(endTime, startDate);
            deal.dealStart = startDatetime;
            deal.dealEnd = endDatetime;
            deal.id = this.dealEditorService.currentDealBeingEdited.id;
            if (this.imageDataForUpload) {
                this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, true).then(function () {
                    _this.cleanUpImageData();
                    _this.imageService.setDealImageURL(_this.dealEditorService.currentDealBeingEdited);
                });
            }
            this.cardService.updateCard(deal);
        }
        else
            this.reportBadFields();
    };
    DealEditorComponent.prototype.getSaveCombinedTime = function (time, date) {
        var combinedTime = new Date(date);
        var timeDateObj = new Date(time);
        combinedTime.setHours(timeDateObj.getHours());
        combinedTime.setMinutes(timeDateObj.getMinutes());
        return combinedTime;
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
        var combinedTime = new Date(Date.parse(date));
        var timeDateObj = new Date('1970-01-01T' + time); //use abitrary stuff date here to make parsing happen
        var timeOffsetInHours = timeDateObj.getTimezoneOffset() / 60;
        combinedTime.setHours(timeDateObj.getHours() - timeOffsetInHours + 1); //add one bc combinedTime is one hour off?? GMT-400???
        combinedTime.setMinutes(timeDateObj.getMinutes()); //idk but this should be watched
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
        this.cleanUpImageData();
        Object.keys(this.dealEditorFormGroup.controls).forEach(function (key) {
            _this.dealEditorFormGroup.get(key).setValue(null);
        });
    };
    DealEditorComponent.prototype.getDealFromFields = function () {
        var startDate = this.dealEditorFormGroup.get("dealDay").value;
        var startTime = this.dealEditorFormGroup.get("dealStart").value;
        var endTime = this.dealEditorFormGroup.get("dealEnd").value;
        var startDatetime = this.getCombinedTime(startTime, startDate);
        var endDatetime = this.getCombinedTime(endTime, startDate);
        var deal;
        if (!this.limitDealNumber) {
            deal = new Card(this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, -1, //no deal limit
            this.dealEditorFormGroup.get("dealType").value);
            deal.restaurant = this.authService.currentUser.restaurant;
        }
        else {
            deal = new Card(this.dealEditorFormGroup.get("dealDescription").value, startDatetime, endDatetime, this.dealEditorFormGroup.get("numberOfDeals").value, this.dealEditorFormGroup.get("dealType").value);
            deal.restaurant = this.authService.currentUser.restaurant;
        }
        return deal;
    };
    DealEditorComponent.prototype.getDeviceIsSmall = function () {
        if (this.platformReady)
            return this.platform.width() < IonicScreenSize.Md;
    };
    DealEditorComponent.prototype.editPhotoData = function () {
        if (this.isDesktop()) {
            this.uploadDesktopImage();
        }
        else {
            this.actionSheetCtrl.create({
                title: 'Mobile Photo uploads not supported yet!',
                buttons: []
            }).present();
        }
    };
    // private cameraUpload(sourceType: PictureSourceType) {
    //     // this.cameraService.getPhotoFromLibrary(sourceType).then((photoData) => {
    //     //     this.imageData = photoData;
    //     // })
    //     sourceType; 
    // }
    DealEditorComponent.prototype.isDesktop = function () {
        return this.platform.is(IonicPlatform.Core);
    };
    DealEditorComponent.prototype.uploadDesktopImage = function () {
        this.hiddenFileInput.nativeElement.click();
    };
    DealEditorComponent.prototype.cleanUpImageData = function () {
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
        this.fileReader.abort();
    };
    DealEditorComponent.prototype.reportBadFields = function () {
    };
    __decorate([
        ViewChild('hiddenFileInput'),
        __metadata("design:type", ElementRef)
    ], DealEditorComponent.prototype, "hiddenFileInput", void 0);
    DealEditorComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/'<ion-header class="nav-round">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title-big">grabsome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <form [formGroup]="dealEditorFormGroup">\n            <ion-grid style="padding: 0px;">\n                <ion-row>\n                    <!-- <ion-col *ngIf="getDeviceIsSmall()" style="height: 700px; padding: 0px;">\n                        <gs-card [(card)]="dealEditorService.currentDealBeingEdited"></gs-card>\n                    </ion-col> -->\n                    <ion-col col-12 col-sm-6 style="padding: 0px;">\n                        <ion-item>\n                            <ion-label floating>Deal Description</ion-label>\n                            <ion-input formControlName="dealDescription"></ion-input>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Deal date</ion-label>\n                            <ion-datetime displayFormat="MMMM DD, YYYY" formControlName="dealDay"></ion-datetime>\n                        </ion-item>\n            \n                        <ion-item>\n                            <ion-label floating>Start time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealStart"></ion-datetime>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label floating>End time</ion-label>\n                            <ion-datetime displayFormat="h:mm a" formControlName="dealEnd"></ion-datetime>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Limited deal number</ion-label>\n                            <ion-checkbox formControlName="limitedDealNumber" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n                        </ion-item>\n                        \n                        <ion-item *ngIf="limitDealNumber">\n                            <ion-label floating>Deal Number</ion-label>\n                            <ion-input type="number" formControlName="numberOfDeals"></ion-input>\n                        </ion-item>\n                \n                        <ion-list style="padding: 1em;" radio-group formControlName="dealType">\n                            Deal Type\n                            <ion-item>\n                                <ion-label>Drinks</ion-label>\n                                <ion-radio value="0"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Food</ion-label>\n                                <ion-radio value="1"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Both</ion-label>\n                                <ion-radio value="2"></ion-radio>\n                            </ion-item>\n                        </ion-list>\n                    </ion-col>\n                    <ion-col (click)="editPhotoData()" style="padding: 0px;">\n                        <gs-card [card]="dealEditorService.currentDealBeingEdited" [imageSrc]="imageDataForPreview"></gs-card>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        \n            <!-- <ion-item>\n                <input type="file" (change)="setImageData($event)" accept="image/*"/>\n            </ion-item> -->\n        </form>\n    </ion-list>\n\n    <div class="button-group">\n        <!-- <button *ngIf="isDesktop()" ion-button (click)="uploadDesktopImage()">\n            Photo\n        </button>\n        <button *ngIf="!isDesktop()" ion-button (click)="editPhotoData()">\n            Photo\n        </button> -->\n        <button *ngIf="!editingDeal" ion-button (click)="add()">\n            Add\n        </button>\n\n        <button *ngIf="editingDeal" ion-button (click)="save()">\n            Save\n        </button>\n            \n        <button *ngIf="editingDeal" ion-button (click)="delete()">\n            Delete\n        </button>\n\n        <button ion-button (click)="cancel()">\n            Cancel\n        </button>\n    </div>\n</ion-content>\n\n<input #hiddenFileInput type="file" (change)="setImageData($event)" accept="image/*" style="visibility:hidden"/>\n\n'/*ion-inline-end:"/Users/Contence/locale/src/components/deal-editor/deal-editor.component.html"*/,
            selector: 'deal-editor',
            styleUrls: ['/deal-editor.component.scss']
        }),
        __metadata("design:paramtypes", [CardDataService, FormBuilder, UploadService,
            AuthorizationService, DealEditorService,
            Platform, ActionSheetController, ImageService])
    ], DealEditorComponent);
    return DealEditorComponent;
}());
export { DealEditorComponent };
//# sourceMappingURL=deal-editor.component.js.map