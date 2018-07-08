import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { LocaleUser } from "../../../types/user.type";
import { ToastService } from "../../toast.service";

@Injectable()
export class UserService {
    private userCollection: AngularFirestoreCollection<LocaleUser>;

    constructor(private database: AngularFirestore, public toastService: ToastService) {
        this.userCollection = this.database.collection<LocaleUser>("users");
    }

    /**
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     * 
     * organization users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     * 
     * We can talk about if we really want to use a toast here TODO
     * @param user 
     */
    public set(user: LocaleUser): Promise<any> {
        if (this.userCollection) {
            const assignedUser = Object.assign({}, user);

            delete (assignedUser.cards);

            if (assignedUser.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(assignedUser.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(assignedUser);
        } else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");

        return Promise.reject("User not found!");
    }

    public get(uid: string): Observable<LocaleUser[]> {
        return this.database.collection<LocaleUser>("users", ref => ref.where("uid", '==', uid)).valueChanges();//this.fireAuth.auth.currentUser.uid
    }
}