import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GSUser } from '../types/user.type';
import { Observable } from 'rxjs/Observable';
import { ToastService } from './toast.service';
import { RestaurantModel } from '../types/deals.type';

@Injectable()
export class AuthorizationService {
    public userCollection: AngularFirestoreCollection<GSUser>;
    public restaurantCollection: AngularFirestoreCollection<RestaurantModel>;

    public currentUser: GSUser;

    constructor(public fireAuth: AngularFireAuth, private database: AngularFirestore, private toastService: ToastService) { 
        this.userCollection = this.database.collection<GSUser>("users");
        this.restaurantCollection = this.database.collection<RestaurantModel>("restaurants");
    }

    public checkUserType(): Observable<GSUser[]>{
        if(this.currentUser){
            return Observable.create(observer => {
                observer.next([this.currentUser]);
                observer.complete();
            });
        }
        else if(this.fireAuth.auth.currentUser)
            return this.getCurrentUserData();
        else
            return null;
    }

    public checkUserIsLoggedIn(): boolean{
        if(this.currentUser && this.fireAuth.auth.currentUser)
            return true;
        else
            return false;
    }

    public userSignOut() {
        this.currentUser = null;

        //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
                                        //this won't affect functionality but should be here for security
    }

    public signIn(email: string, password: string): Promise<any> {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public signUpUser(email: string, password: string):  Promise<any>{
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public checkUserSignInMethods(email: string): Promise<any> {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    }

    public getCurrentUserData(): Observable<GSUser[]> {
        return this.database.collection<GSUser>("users", ref => ref.where("uid", '==', this.fireAuth.auth.currentUser.uid)).valueChanges();
    }

    public updateCurrentUser(user: GSUser): Promise<any>{
        if(this.checkUserIsLoggedIn() && this.userCollection){
            if(user.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(user.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(user);
        } else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");

        return null;
    }

    public getCurrentRestaurantData(restId: string): Observable<RestaurantModel[]> {
        return this.database.collection<RestaurantModel>("restaurants", ref => ref.where("id", '==', restId)).valueChanges();//TODO
    }

    public updateCurrentRestaurantUser(user: GSUser): Promise<any>{
        if(this.checkUserIsLoggedIn() && this.restaurantCollection){
            if(user.getAsPlainObject)
                return this.restaurantCollection.doc(user.uid).set(user.getAsPlainObject());
            else
                return this.restaurantCollection.doc(user.uid).set(user);
        } else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");

        return null;
    }
}

export enum SignUpReturnCode{
    UserAlreadySignedUp,
    Success,
    Failure
}


