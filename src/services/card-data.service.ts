import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthorizationService } from './authorization.service';

@Injectable()

export class CardDataService {

    constructor(private database: AngularFireDatabase, private storage: AngularFireStorage, private auth: AuthorizationService) {
        this.database;
        this.storage;
        this.auth.authorizeUserAccess("stevepopovich8@gmail.com", "Thisism1").then(() => {

        });
    }

}