import { Injectable } from "@angular/core";
import { GSCard } from "../types/deals.type";
import { Subject } from 'rxjs';

@Injectable()
export class DealEditorService {
    public currentDealBeingEdited: GSCard;

    public currentDealSubject: Subject<GSCard> = new Subject<GSCard>();

    public setCurrentDeal(deal: GSCard){
        this.currentDealBeingEdited = deal;

        this.currentDealSubject.next(deal);
    }
}