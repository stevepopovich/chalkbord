var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CurrentUserService } from './../../services/current-user.service';
import { DealEditorService } from './../../services/deal-editing.service';
import { Component } from "@angular/core";
import { GSCard } from '../../types/deals.type';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ModalController } from 'ionic-angular';
var OrganizationDealListComponent = (function () {
    function OrganizationDealListComponent(dealEditorService, modalCtrl, currentUserService) {
        var _this = this;
        this.dealEditorService = dealEditorService;
        this.modalCtrl = modalCtrl;
        this.currentUserService = currentUserService;
        this.cardList = [];
        this.currentUserService.getCards().subscribe(function (deals) {
            console.log(deals);
            GSCard.findAndUpdateCards(deals, _this.cardList);
        });
        this.dealEditorService.currentDealSubject.subscribe(function (deal) {
            _this.currentCard = deal;
        });
        this.dealEditorService.deleteDealSubject.subscribe(function (deal) {
            _this.cardList.splice(_this.cardList.indexOf(deal), 1);
        });
        this.dealEditorService.addDealSubject.subscribe(function (deal) {
            _this.cardList.push(deal);
            _this.currentCard = deal;
        });
    }
    OrganizationDealListComponent.prototype.hasCards = function () {
        return this.cardList.length > 0;
    };
    OrganizationDealListComponent.prototype.setCurrentCard = function (deal) {
        if (this.currentCard != deal && deal != null) {
            this.currentCard = deal;
            this.dealEditorService.setCurrentDeal(this.currentCard);
        }
        else {
            this.currentCard = null;
            this.dealEditorService.setCurrentDeal(null);
        }
    };
    OrganizationDealListComponent.prototype.getBackground = function (deal) {
        if (this.currentCard && deal.id == this.currentCard.id)
            return "selected-item";
        else
            return "selectable-item";
    };
    OrganizationDealListComponent.prototype.openProfile = function () {
        this.modalCtrl.create(UserProfileComponent, { isRestaurant: true }).present();
    };
    OrganizationDealListComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/'<ion-content>\n    <ion-list radio-group [(ngModel)]="currentCard"  *ngIf="hasCards()" class="push-list-under-menu-bar">\n        <ion-item *ngFor="let deal of cardList" (click)="setCurrentCard(deal)" [ngClass]="getBackground(deal)">\n            <ion-label>{{ deal.dealDescription }}</ion-label>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!hasCards()" class="push-list-under-menu-bar">\n        Add some cards and see them here!\n    </div>\n</ion-content>\n\n<button (click)="openProfile()" class="button-top-right" ion-button icon-only>\n    <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n</button>'/*ion-inline-end:"/Users/Contence/locale/src/components/organization-deal-list/organization-deal-list.component.html"*/,
            selector: 'organization-deal-list',
            styleUrls: ['/organization-deal-list.component.scss']
        }),
        __metadata("design:paramtypes", [DealEditorService,
            ModalController, CurrentUserService])
    ], OrganizationDealListComponent);
    return OrganizationDealListComponent;
}());
export { OrganizationDealListComponent };
//# sourceMappingURL=organization-deal-list.component.js.map