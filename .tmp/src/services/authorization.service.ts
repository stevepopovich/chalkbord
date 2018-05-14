import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GSUser } from '../types/user.type';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {
    public userCollection: AngularFirestoreCollection<GSUser>;

    public currentUser: GSUser;

    constructor(public auth: AngularFireAuth, private database: AngularFirestore) { 
        this.userCollection = this.database.collection<GSUser>("users");
    }

    public checkUserType(): Observable<GSUser[]>{
        if(this.currentUser){
            return Observable.create(observer => {
                observer.next([this.currentUser]);
                observer.complete();
            });
        }
        else if(this.auth.auth.currentUser)
            return this.getCurrentUserData();
        else
            return null;
    }

    public checkUserIsLoggedIn(): boolean{
        if(this.currentUser && this.auth.auth.currentUser)
            return true;
        else
            return false;
    }

    public userSignOut() {
        this.currentUser = null;

        this.auth.auth.signOut();
    }

    public signIn(email: string, password: string): Promise<any> {
        return this.auth.auth.signInWithEmailAndPassword(email, password);
    }

    public getCurrentUserData(): Observable<GSUser[]> {
        return this.database.collection<GSUser>("users", ref => ref.where("uid", '==', this.auth.auth.currentUser.uid)).valueChanges();
    }

    public signUpUser(email: string, password: string):  Promise<any>{
        return this.auth.auth.createUserWithEmailAndPassword(email, password);
    }

    public checkUserSignInMethods(email: string): Promise<any> {
        return this.auth.auth.fetchSignInMethodsForEmail(email);
    }
}

export enum SignUpReturnCode{
    UserAlreadySignedUp,
    Success,
    Failure
}


