var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Card } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/image-service.service';
var GSCardComponent = (function () {
    function GSCardComponent(imageService) {
        this.imageService = imageService;
        this.card = Card.getBlankCard();
    }
    GSCardComponent.prototype.ngOnChanges = function () {
        if (this.card) {
            if (this.imageSrc != this.card.imageURL)
                this.card.imageURL = this.imageSrc;
            else
                this.imageService.setDealImageURL(this.card);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Card)
    ], GSCardComponent.prototype, "card", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GSCardComponent.prototype, "imageSrc", void 0);
    GSCardComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/card/card.component.html"*/'<!-- <ion-card *ngIf="card" style="width: 100%; height: 95%; border-radius: 13px;">\n    <img src="{{card.imageURL}}" />\n    <ion-card-title style="color: white !important;">\n    </ion-card-title>\n    {{card.dealDescription}}\n</ion-card> -->\n\n<div id="preview-card-stack" [style.zIindex]="-1000">\n    <ion-card>\n        <img *ngIf="card" class="non-draggable-card-image fill" src="{{card.imageURL}}" />\n\n        <ion-card-content *ngIf="card" class="card-text">\n            <ion-card-title style="color: white !important;">\n                {{card.restuarant?.name}}\n            </ion-card-title>\n            {{card.dealDescription}}\n        </ion-card-content>\n    </ion-card>\n</div>'/*ion-inline-end:"/Users/Contence/locale/src/components/card/card.component.html"*/,
            selector: 'gs-card',
            styleUrls: ['/card.component.scss']
        }),
        __metadata("design:paramtypes", [ImageService])
    ], GSCardComponent);
    return GSCardComponent;
}());
export { GSCardComponent };
//# sourceMappingURL=card.component.js.map