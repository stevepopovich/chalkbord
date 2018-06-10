var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
var DealEditorService = (function () {
    function DealEditorService() {
        this.currentDealSubject = new Subject();
    }
    DealEditorService.prototype.setCurrentDeal = function (deal) {
        this.currentDealBeingEdited = deal;
        this.currentDealSubject.next(deal);
    };
    DealEditorService = __decorate([
        Injectable()
    ], DealEditorService);
    return DealEditorService;
}());
export { DealEditorService };
//# sourceMappingURL=deal-editing.service.js.map