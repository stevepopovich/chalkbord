import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()

export class AuthorizationService {

    constructor(private auth: AngularFireAuth) { 

    }

    public authorizeUserAccess(username: string, password: string): Promise<any> {
        return this.auth.auth.signInWithEmailAndPassword(username, password);
    }

}