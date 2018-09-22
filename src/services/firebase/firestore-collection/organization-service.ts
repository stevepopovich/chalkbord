import { FirebaseEnvironmentService } from './../environment.service';
import { Organization } from '../../../types/organization.type';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from "@angular/core";

@Injectable()
export class OrganizationService {
    constructor(private database: AngularFirestore, private firebaseEnvironmentService: FirebaseEnvironmentService) {
    }

    public getCurrent(uid: string): Observable<Organization[]> {
        return this.database.collection<Organization>(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "organizations", ref => ref.where("uid", "==", uid)).valueChanges();
    }

    public set(model: Organization): Promise<void> {
        return this.database.collection<Organization>(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "organizations").doc(model.uid).set(model.getAsPlainObject());
    }
}
