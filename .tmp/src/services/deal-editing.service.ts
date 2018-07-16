import { Injectable } from "@angular/core";
import { LocaleCard } from "../types/deals.type";
import { Subject } from 'rxjs';

@Injectable()
export class DealEditorService {
    public currentDealBeingEdited: LocaleCard;

    public currentDealSubject: Subject<LocaleCard> = new Subject<LocaleCard>();

    public deleteDealSubject: Subject<LocaleCard> = new Subject<LocaleCard>();

    public addDealSubject: Subject<LocaleCard> = new Subject<LocaleCard>();

    public updateDealSubject: Subject<LocaleCard> = new Subject<LocaleCard>();

    public setCurrentDeal(deal: LocaleCard) {
        this.currentDealBeingEdited = deal;

        this.currentDealSubject.next(deal);
    }
}