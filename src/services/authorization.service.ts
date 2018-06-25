import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GSUser } from '../types/user.type';
import { Observable } from 'rxjs/Observable';
import { ToastService } from './toast.service';
import { CardDataService } from './card-data.service';
import { Card } from '../types/deals.type';

@Injectable()
export class AuthorizationService {
    public userCollection: AngularFirestoreCollection<GSUser>;

    public currentUser: GSUser;

    constructor(public fireAuth: AngularFireAuth, private database: AngularFirestore, 
        private toastService: ToastService, private cardService: CardDataService) { 
        this.userCollection = this.database.collection<GSUser>("users");
    }

    public checkCurrentUserType(): Observable<GSUser[]>{
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

    /**
     * Only use this when passing a user you don't care about
     * Data in the user will be changed for worse!
     * 
     * We don't wanna save all the cards, they are saved in a seperate collection,
     * but I want to still have users "have cards"
     * 
     * Restaurant users have cards that they created, and consumer users have cards that have
     * "consumed" or intend to use
     * @param user 
     */
    public updateUserInDatabase(user: GSUser): Promise<any>{
        if(this.checkUserIsLoggedIn() && this.userCollection){
            user.cards = null;

            if(user.getAsPlainObject)
                return this.userCollection.doc(user.uid).set(user.getAsPlainObject());
            else
                return this.userCollection.doc(user.uid).set(user);
        } else
            this.toastService.showReadableToast("User not updated! You are either not logged in or offline");

        return null;
    }

    public addCardIdToCurrentUser(cardId: string) {
        if(this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];

        this.currentUser.cardIds.push(cardId);

        this.updateUserInDatabase(Object.assign({}, this.currentUser)).then(() => {
            this.generateCardsFromIds();
        });
    }

    public generateCardsFromIds(): void {
        this.cardService.getCardsById(this.currentUser.cardIds).subscribe((obDeal: Observable<Card[]>) => {
            obDeal.subscribe((deals: Card[]) => {
                for(let deal of deals){
                    if(!this.currentUser.cards){
                        this.currentUser.cards = [];
                        this.currentUser.cards.push(new Card(null, null, null, null, null, deal));
                    }
                    else
                        this.findAndUpdateCards(deals, this.currentUser.cards);
                }
            });
        });
    }

    public removeUserCardFromCurrentListById(id: string) {
        const currentUserCardsIndex = this.currentUser.cards.findIndex((value, index, deals) => {
            value;
            return deals[index].id == id;
        });
        const currentUserId = this.currentUser.cardIds.findIndex((value, index, deals) => {
            index;deals;
            return value == id;
        });

        this.currentUser.cards.splice(currentUserCardsIndex, 1);
        this.currentUser.cardIds.splice(currentUserId, 1);
    }

    private updateDealModel(objectToUpdate: Card, updatedObject: Card): void{
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.restaurant = updatedObject.restaurant;
    }

    public findAndUpdateCards(newDealModels: Card[], oldDealModels: Card[]){
        newDealModels.forEach((dealModel) => {
            var foundCard = oldDealModels[oldDealModels.findIndex(c => c.id == dealModel.id)];

            if(foundCard){
                this.updateDealModel(foundCard, dealModel);

                var foundViewCard = oldDealModels[oldDealModels.findIndex(c => c.id == dealModel.id)]; 
                
                if(foundViewCard)
                    this.updateDealModel(foundViewCard, dealModel);
            }
            else
                oldDealModels.push(dealModel);
        });
    }
}

export enum SignUpReturnCode{
    UserAlreadySignedUp,
    Success,
    Failure
}


