import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Deal } from '../types/deals.type';

@Injectable()
export class CardDataService {
    public cardDoc: AngularFirestoreCollection<Deal>;
    public cards: Observable<Deal[]>;

    constructor(private database: AngularFirestore) {
    }

    public setUpCardStream(): void {
        this.cardDoc = this.database.collection<Deal>("cards");
        this.cards = this.cardDoc.valueChanges();
    } 

    public getCards(): Observable<Deal[]> {
        this.setUpCardStream();//always hard refresh to force update eveything subscribed
        
        return this.cards;
    }

    public setCards(data: Deal[]): void {
        if(!this.cardDoc)
            this.setUpCardStream();

        const cards = data.map((card)=> {return Object.assign({}, card.getAsPlainObject())});
        cards.forEach((card) => {
            this.cardDoc.doc(card.id).set(Object.assign({}, card));
        })
    }

    public addCard(data: Deal): void {
        if(!this.cardDoc)
            this.setUpCardStream();

        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    }
}