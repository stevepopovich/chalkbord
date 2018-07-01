import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GSCard } from '../types/deals.type';
import { merge } from 'rxjs';
import { Guid } from "../types/utils.type";
import { GSLocation } from '../types/location.type';

@Injectable()
export class CardDataService {

    public cardDoc: AngularFirestoreCollection<GSCard>;

    constructor(private database: AngularFirestore) {
        this.cardDoc = this.database.collection<GSCard>("cards");
    }

    public getCards(): Observable<GSCard[]> {
        return this.cardDoc.valueChanges();
    }

    public setCards(data: GSCard[]): void {
        const cards = data.map((card)=> {return Object.assign({}, card.getAsPlainObject())});
        cards.forEach((card) => {
            this.cardDoc.doc(card.id).set(Object.assign({}, card));
        })
    }

    public addCard(data: GSCard): void {
        this.cardDoc.doc(data.id).set(Object.assign({}, data.getAsPlainObject()));
    }

    public getCardsById(ids: Guid[]): Observable<Observable<GSCard[]>> {
        const observables: Observable<GSCard[]>[] = [];

        for (let id of ids) {
            observables.push(this.database.collection<GSCard>("cards", ref => ref.where("id", "==", id)).valueChanges());
        }
        
        const allCardsObservableMerged: Observable<Observable<GSCard[]>> = merge(observables);

        return allCardsObservableMerged;
    }

    public getCardsByLatLng(location: GSLocation, radiusInKM: number): Observable<GSCard[]> {
        var distanceInKMAverageBetweenLatitudes = 111.045;

        var latitudeRadiusLength = radiusInKM / distanceInKMAverageBetweenLatitudes;

        var radiusOfEarthInKM = 6371;

        var bearingClockwiseFromNorthInRadians = 1.5708;//90 degrees

        var distanceOverRadius = radiusInKM / radiusOfEarthInKM;

        var newLat = Math.asin( Math.sin(location.lat)*Math.cos(distanceOverRadius) +
            Math.cos(location.lat)*Math.sin(distanceOverRadius)*Math.cos(bearingClockwiseFromNorthInRadians) );
        var newLng = location.lng + Math.atan2(Math.sin(bearingClockwiseFromNorthInRadians)*Math.sin(distanceOverRadius)*Math.cos(location.lat),
            Math.cos(distanceOverRadius)-Math.sin(location.lat)*Math.sin(newLat));

        var changeInLng = Math.abs(newLng - location.lng);

        var latDeals = this.database.collection<GSCard>("cards", ref => ref.where("restaurant.location.lat", "<=",  (location.lat + latitudeRadiusLength))
                                                        .where("restaurant.location.lat", ">=",  (location.lat - latitudeRadiusLength))).valueChanges();

        var lngDeals = this.database.collection<GSCard>("cards", ref => ref.where("restaurant.location.lng", "<=",  (location.lng + changeInLng))
                                                        .where("restaurant.location.lng", ">=",  (location.lng - changeInLng))).valueChanges();

        return Observable.merge(latDeals, lngDeals);
    }

    public filterNonDuplicateDeals(cards: GSCard[]): GSCard[] {
        var filteredDeals: GSCard[] = [];

        for(let currentCard of cards) {
            if(cards.findIndex(card => {return card.id == currentCard.id}) > -1 &&
                filteredDeals.findIndex(card => {return card.id == currentCard.id}) < 0)
                filteredDeals.push(currentCard);
        }

        return filteredDeals;
    }

    public updateCard(card: GSCard) {
        delete(card.imageURL);

        this.cardDoc.doc(card.id).set(card.getAsPlainObject());
    }

    public deleteCardById(id: string): Promise<void> {
        return this.cardDoc.doc(id).delete();
    }
}