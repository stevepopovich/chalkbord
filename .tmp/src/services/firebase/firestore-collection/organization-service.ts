import { Organization } from '../../../types/organization.type';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from "@angular/core";

@Injectable()
export class OrganizationService {
    private organizationCollection: AngularFirestoreCollection<Organization>;

    constructor(private database: AngularFirestore) {
        this.organizationCollection = this.database.collection<Organization>("organizations");
    }

    public getCurrent(uid: string): Observable<Organization[]> {
        return this.database.collection<Organization>("organizations", ref => ref.where("uid", "==", uid)).valueChanges();
    }

    public set(model: Organization): Promise<void> {
        return this.organizationCollection.doc(model.uid).set(model.getAsPlainObject());
    }
}
