import { Injectable } from "@angular/core";
import { Deal } from "../types/deals.type";
import { Subject } from 'rxjs';

@Injectable()
export class DealEditorService {
    public currentDealBeingEdited: Deal;

    public currentDealSubject: Subject<Deal> = new Subject<Deal>();

    public setCurrentDeal(deal: Deal){
        this.currentDealBeingEdited = deal;

        this.currentDealSubject.next(deal);
    }
}