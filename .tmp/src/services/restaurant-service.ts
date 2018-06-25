import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Restaurant } from './../types/restaurant.type';
import { Injectable } from "@angular/core";

@Injectable()
export class RestaurantService {
    public restaurantCollection: AngularFirestoreCollection<Restaurant>;

    constructor(private database: AngularFirestore) {
        this.restaurantCollection = this.database.collection<Restaurant>("restaurants");
    }

    public getRestaurantById(id: string): Observable<Restaurant[]> {
        return this.database.collection<Restaurant>("restaurants", ref => ref.where("id", '==', id)).valueChanges();//TODO
    }
}
