import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthorizationService {


    constructor(private fireAuth: AngularFireAuth) { 
    }

    public checkLoggedIn(): boolean {
        return this.fireAuth.auth.currentUser != null;
    }

    public getCurrentUserUID(): string {
        return this.fireAuth.auth.currentUser.uid;
    }

    public getCurrentUserEmail(): string {
        return this.fireAuth.auth.currentUser.email;
    }

    public updateCurrentUserEmail(email: string): Promise<any> {
        return this.fireAuth.auth.currentUser.updateEmail(email);
    }

    public sendPasswordResetEmail(email: string): Promise<any> {
        return this.fireAuth.auth.sendPasswordResetEmail(email);
    }

    // public signOut() {
    //     //this.fireAuth.auth.signOut();//AAHHH this needs to be here but the current verison of Firestore causes this to break.
    //                                     //this won't affect functionality but should be here for security
    // }

    public signIn(email: string, password: string): Promise<any> {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public signUp(email: string, password: string):  Promise<any>{
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public checkSignInMethods(email: string): Promise<any> {
        return this.fireAuth.auth.fetchSignInMethodsForEmail(email);
    }
}

export enum SignUpReturnCode{
    UserAlreadySignedUp,
    Success,
    Failure
}


