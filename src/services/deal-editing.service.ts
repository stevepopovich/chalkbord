import { Injectable } from "@angular/core";
import { Card } from "../types/deals.type";
import { Subject } from 'rxjs';

@Injectable()
export class DealEditorService {
    public currentDealBeingEdited: Card;

    public currentDealSubject: Subject<Card> = new Subject<Card>();

    public setCurrentDeal(deal: Card){
        this.currentDealBeingEdited = deal;

        this.currentDealSubject.next(deal);
    }
}