import { Injectable } from "@angular/core";
import { GSUser } from "../types/user.type";
import { CardDataService } from "./card-data.service";

@Injectable()
export class CurrentUserService {

    private currentUser: GSUser;

    constructor(private cardService: CardDataService) {
    }

    public setCurrentUser(user: GSUser) {
        if(user != null){
            this.currentUser = user;

            this.setUpCardObservable();
        }
    }

    public getCurrentUser() {
        return Object.assign({}, this.currentUser);
    }

    //for subscription purposes only
    public getCards() {
        return this.currentUser.cards;
    }

    public hasCurrentUser(): boolean {
        return this.currentUser != null;
    }

    public removeCurrentUser(): void {
        this.currentUser = null;
    }

    public addCardId(cardId: string): void {
        if(this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];

        this.currentUser.cardIds.push(cardId);
    }

    private setUpCardObservable(): void {
        this.currentUser.cards =  this.cardService.getCardsById(this.currentUser.cardIds);
    }

    // public removeUserCardFromCurrentListById(id: string) {
    //     const currentUserCardsIndex = this.currentUser.cards.findIndex((value, index, deals) => {
    //         value;
    //         return deals[index].id == id;
    //     });//todo
    //     const currentUserId = this.currentUser.cardIds.findIndex((value, index, deals) => {
    //         index;deals;
    //         return value == id;
    //     });

    //     this.currentUser.cards.splice(currentUserCardsIndex, 1);
    //     this.currentUser.cardIds.splice(currentUserId, 1);
    // }
}