import { FirebaseCollectionService } from './firebase-collection-service.interface';
import { LocaleCard } from './../../../types/deals.type';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LocaleLocation } from '../../../types/location.type';
import { Guid } from '../../../types/utils.type';

@Injectable()
export class CardDataService implements FirebaseCollectionService<LocaleCard> {

    public cardDoc: AngularFirestoreCollection<LocaleCard>;

    constructor(private database: AngularFirestore) {
        this.cardDoc = this.database.collection<LocaleCard>("cards");
    }

    public get(id: string): Observable<LocaleCard[]> {
        id;
        throw new Error("Method not implemented.");
    }

    public getAll(): Observable<LocaleCard[]> {
        return this.cardDoc.valueChanges();
    }

    public getMulti(ids: Guid[]): Observable<LocaleCard[]> {
        if (ids && ids.length > 0) {
            const observables: Observable<LocaleCard[]>[] = [];

            for (let id of ids) {
                observables.push(this.database.collection<LocaleCard>("cards", ref => ref.where("id", "==", id)).valueChanges());
            }

            const allCardsObservableMerged: Observable<LocaleCard[]> = Observable.merge(...observables);//so if you just pass it an array
            //you get an Observable<Observable<>> but if you add ... it passes each observable seperately giving a single observable out
            return allCardsObservableMerged;
        } else
            return Observable.of([]);
    }

    public setMulti(models: Array<LocaleCard>): void {
        const cards = models.map((card) => { return Object.assign({}, card.getAsPlainObject()) });
        cards.forEach((card) => {
            this.cardDoc.doc(card.id).set(card);
        })
    }

    public set(model: LocaleCard): Promise<void> {
        const assignedCard = Object.assign({}, model.getAsPlainObject());
        delete (assignedCard.imageURL);

        return this.cardDoc.doc(model.id).set(assignedCard);
    }

    public delete(id: string): Promise<void> {
        return this.cardDoc.doc(id).delete();
    }

    //gets all cards in the collection within the radius passed
    //TODO: actaully test this, I am not sure these calculations make any sense
    public getCardsByLatLng(location: LocaleLocation, radiusInKM: number): Observable<LocaleCard[]> {
        var distanceInKMAverageBetweenLatitudes = 111.045;

        var latitudeRadiusLength = radiusInKM / distanceInKMAverageBetweenLatitudes;

        var radiusOfEarthInKM = 6371;//arguable, the earth isn't perfactable sphereical

        var bearingClockwiseFromNorthInRadians = 1.5708;//90 degrees

        var distanceOverRadius = radiusInKM / radiusOfEarthInKM;

        var newLat = Math.asin(Math.sin(location.lat) * Math.cos(distanceOverRadius) +
            Math.cos(location.lat) * Math.sin(distanceOverRadius) * Math.cos(bearingClockwiseFromNorthInRadians));
        var newLng = location.lng + Math.atan2(Math.sin(bearingClockwiseFromNorthInRadians) * Math.sin(distanceOverRadius) * Math.cos(location.lat),
            Math.cos(distanceOverRadius) - Math.sin(location.lat) * Math.sin(newLat));//this is some famous calculation
        //that takes a LatLng, bearing and distance and gives you a new LatLng
        var changeInLng = Math.abs(newLng - location.lng);

        //get two different deal chains because firebase can't .where across different properties in a collection
        var latDeals = this.database.collection<LocaleCard>("cards", ref => ref.where("organization.location.lat", "<=", (location.lat + latitudeRadiusLength))
            .where("organization.location.lat", ">=", (location.lat - latitudeRadiusLength))).valueChanges();

        var lngDeals = this.database.collection<LocaleCard>("cards", ref => ref.where("organization.location.lng", "<=", (location.lng + changeInLng))
            .where("organization.location.lng", ">=", (location.lng - changeInLng))).valueChanges();

        return Observable.merge(latDeals, lngDeals);
    }

    public filterNonDuplicateDeals(cards: LocaleCard[]): LocaleCard[] {
        var filteredDeals: LocaleCard[] = [];

        for (let currentCard of cards) {
            if (cards.findIndex(card => { return card.id == currentCard.id }) > -1 &&
                filteredDeals.findIndex(card => { return card.id == currentCard.id }) < 0)
                filteredDeals.push(currentCard);
        }

        return filteredDeals;
    }
}