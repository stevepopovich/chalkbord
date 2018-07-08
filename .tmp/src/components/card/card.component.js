var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GSCard } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/image-service.service';
var GSCardComponent = (function () {
    function GSCardComponent(imageService) {
        this.imageService = imageService;
        this.showCardText = true;
        this._card = GSCard.getBlankCard();
    }
    Object.defineProperty(GSCardComponent.prototype, "card", {
        get: function () {
            return this._card;
        },
        set: function (card) {
            if (card) {
                this._card = card;
                this.imageService.setDealImageURL(this.card);
            }
            else
                this._card = GSCard.getBlankCard();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GSCardComponent.prototype, "imageSrc", {
        get: function () {
            return this._imageSrc;
        },
        set: function (imageSrc) {
            this._imageSrc = imageSrc;
            if (!this._card)
                this._card = GSCard.getBlankCard();
            this._card.imageURL = imageSrc;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        Input(),
        __metadata("design:type", GSCard),
        __metadata("design:paramtypes", [GSCard])
    ], GSCardComponent.prototype, "card", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], GSCardComponent.prototype, "imageSrc", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GSCardComponent.prototype, "showCardText", void 0);
    GSCardComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<div id="preview-card-stack" [style.zIindex]="-1000">\n    <ion-card>\n        <div *ngIf="card && !card.imageURL" class="non-draggable-card-image fill">Tap here to upload a photo</div>\n        <img *ngIf="card && card.imageURL" class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content *ngIf="card || showCardText" class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{_card.restaurant?.name}}\n            </ion-card-title>\n            {{_card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [ImageService])
    ], GSCardComponent);
    return GSCardComponent;
}());
export { GSCardComponent };
//# sourceMappingURL=card.component.js.map