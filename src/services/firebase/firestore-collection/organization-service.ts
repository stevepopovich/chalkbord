import { Organization } from '../../../types/organization.type';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from "@angular/core";

@Injectable()
export class OrganizationService {
    private organizationCollection: AngularFirestoreCollection<Organization>;

    constructor(private database: AngularFirestore) {
        this.organizationCollection = this.database.collection<Organization>("organization");
    }

    public get(id: string): Observable<Organization[]> {
        return this.database.collection<Organization>("organization", ref => ref.where("id", '==', id)).valueChanges();//TODO
    }

    public set(model: Organization): Promise<void> {
        return this.organizationCollection.doc(model.uid).set(model);
    }
}
