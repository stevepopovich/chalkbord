import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Deal } from '../types/deals.type';
import { merge } from 'rxjs';
import { Guid } from "../types/utils.type";

@Injectable()
export class CardDataService {
    public cardDoc: AngularFirestoreCollection<Deal>;
    public cards: Observable<Deal[]>;

    constructor(private database: AngularFirestore) {
        this.cardDoc = this.database.collection<Deal>("cards");
    }

    public getCards(): Observable<Deal[]> {
        return this.cards;
    }

    public setCards(data: Deal[]): void {
        const cards = data.map((card)=> {return Object.assign({}, card.getAsPlainObject())});
        cards.forEach((card) => {
            this.cardDoc.doc(card.id).set(Object.assign({}, card));
        })
    }

    public addCard(data: Deal): void {
        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    }

    public getCardsById(ids: Guid[]): Observable<Observable<Deal[]>> {
        const observables: Observable<Deal[]>[] = [];

        for (let id of ids) {
            observables.push(this.database.collection<Deal>("cards", ref => ref.where("id", "==", id)).valueChanges());
        }
        
        const allCardsObservableMerged: Observable<Observable<Deal[]>> = merge(observables);

        return allCardsObservableMerged;
    }
}