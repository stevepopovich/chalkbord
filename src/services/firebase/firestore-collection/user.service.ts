import { Organization } from './../../../types/organization.type';
import { LocaleUser } from './../../../types/user.type';
import { FirebaseEnvironmentService } from './../environment.service';
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { LocaleCard } from '../../../types/deals.type';

@Injectable()
export class UserService {

    constructor(private database: AngularFirestore, private firebaseEnvironmentService: FirebaseEnvironmentService) {
    }

    /**
     * organization users have cards that they created, and consumer users have cards that have
     * "claimed" or intend to use
     * 
     * Why are we leaving the Organization with the user when it is saved elsewhere?
     * Great question! The orgs can't be edited so they won't get out of sync and it so much easier to do 
     * it this way for now. Subject to change for sure....
     * @param user 
     */
    public set(user: LocaleUser): Promise<any> {
        var assignedUser;
        if (user.getAsPlainObject)
            assignedUser = Object.assign({}, user.getAsPlainObject());
        else
            assignedUser = Object.assign({}, user);

        return this.database.collection<LocaleUser>(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "users").doc(user.uid).set(assignedUser);
    }

    public get(uid: string): Observable<LocaleUser[]> {
        return this.database.collection<LocaleUser>(this.firebaseEnvironmentService.getCurrentEnvironmentPrefix() + "users", ref => ref.where("uid", '==', uid)).valueChanges();//this.fireAuth.auth.currentUser.uid
    }


    //Firebase helper function, not intended for production code
    public copyAllDataFromNonToDemo(): void {
        this.database.collection<LocaleCard>("cards").valueChanges().subscribe((cards: LocaleCard[]) => {
            for (const card of cards)
                this.database.collection<LocaleCard>("demo\\cards").doc(card.id).set(card);
        });

        this.database.collection<LocaleUser>("users").valueChanges().subscribe((users: LocaleUser[]) => {
            for (const user of users)
                this.database.collection<LocaleUser>("demo\\users").doc(user.uid).set(user);
        });


        this.database.collection<Organization>("organizations").valueChanges().subscribe((orgs: Organization[]) => {
            for (const org of orgs)
                this.database.collection<Organization>("demo\\organizations").doc(org.uid).set(org);
        });
    }
}