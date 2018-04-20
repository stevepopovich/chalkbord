import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DealModel } from '../types/deals.type';

@Injectable()
export class CardDataService {
    public cardDoc: AngularFirestoreCollection<DealModel>;
    public cards: Observable<DealModel[]>;

    constructor(private database: AngularFirestore) {
    }

    public setUpCardStream(): void {
        this.cardDoc = this.database.collection<DealModel>("cards");
        this.cards = this.cardDoc.valueChanges();
    } 

    public getCards(): Observable<DealModel[]> {
        if(!this.cards)
            this.setUpCardStream();
        
        return this.cards;
    }

    public setCards(data: DealModel[]): void {
        if(!this.cardDoc)
            this.setUpCardStream();

        const cards = data.map((card)=> {return Object.assign({}, card.getAsPlainObject())});
        cards.forEach((card) => {
            this.cardDoc.doc(card.id).set(Object.assign({}, card));
        })
    }

    public addCard(data: DealModel): void {
        if(!this.cardDoc)
            this.setUpCardStream();

        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    }
}