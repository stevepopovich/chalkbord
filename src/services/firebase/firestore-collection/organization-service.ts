import { FirebaseCollectionService } from './firebase-collection-service.interface';
import { Organization } from '../../../types/organization.type';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from "@angular/core";

@Injectable()
export class OrganizationService implements FirebaseCollectionService<Organization> {


    private organizationCollection: AngularFirestoreCollection<Organization>;

    constructor(private database: AngularFirestore) {
        this.organizationCollection = this.database.collection<Organization>("organization");
    }

    public get(id: string): Observable<Organization[]> {
        return this.database.collection<Organization>("organization", ref => ref.where("id", '==', id)).valueChanges();
    }

    public set(model: Organization): Promise<void> {
        return this.organizationCollection.doc(model.uid).set(model);
    }

    public getAll(): Observable<Organization[]> {
        throw new Error("Method not implemented.");
    }

    public getMulti(ids: string[]): Observable<Organization[]> {
        ids;
        throw new Error("Method not implemented.");
    }
    public setMulti(models: Organization[]): void {
        models;
        throw new Error("Method not implemented.");
    }
    public delete(id: string): Promise<void> {
        id;
        throw new Error("Method not implemented.");
    }
}
