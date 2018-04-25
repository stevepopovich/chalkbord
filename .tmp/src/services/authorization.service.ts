import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { RestaurantModel } from '../types/deals.type';
import { Guid } from '../types/utils.type';

@Injectable()

export class AuthorizationService {

    public userCollection: AngularFirestoreCollection<GSUser>;

    public currentUser: GSUser;

    constructor(private auth: AngularFireAuth, private database: AngularFirestore) { 
        this.userCollection = this.database.collection<GSUser>("users");
    }

    public checkUserType(): UserType{
        return this.currentUser.userType;
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

    public signIn(email: string, password: string, newSignIn: boolean): Promise<any> {
        if(!newSignIn){
            this.database.collection<GSUser>("users", ref => ref.where("email", '==', email)).valueChanges().subscribe((users) => {
                this.currentUser = users[0];
            });
        }

        return this.auth.auth.signInWithEmailAndPassword(email, password);
    }

    public signUpUser(email: string, password: string, userType: UserType):  any{
        this.auth.auth.fetchSignInMethodsForEmail(email).then((methods) => {
            if(methods && methods.length > 0)
                return SignUpReturnCode.UserAlreadySignedUp;
            else{
                this.auth.auth.createUserWithEmailAndPassword(email, password).then(() => {
                    this.signIn(email, password, true).then(() => {
                        const newUser = new GSUser(email, userType);
    
                        this.currentUser = newUser;
    
                        console.log(this.currentUser);
    
                        this.userCollection.doc(newUser.id).set(newUser.getAsPlainObject());
    
                        return SignUpReturnCode.Success;
                    }).catch((reason) => {
                        console.error("Sign up failed because: " + reason);
    
                        return SignUpReturnCode.Failure;
                    });
                });
            }
        }).catch((reason) => {
            console.error("Sign up failed because: " + reason);

            return SignUpReturnCode.Failure;
        });
    }
}

export enum SignUpReturnCode{
    UserAlreadySignedUp,
    Success,
    Failure
}

export class GSUser{
    public id: string;
    public email: string;
    public userType: UserType;
    public restaurant?: RestaurantModel;

    public constructor(email: string, userType: UserType){
        this.id = Guid.newGuid();
        this.email = email;
        this.userType = userType;
    }

    public getAsPlainObject(){
        this.restaurant = Object.assign({}, this.restaurant);

        return Object.assign({}, this);
    }
}

export enum UserType {
    Consumer,
    Restaurant
}
