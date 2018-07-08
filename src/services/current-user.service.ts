import { Injectable } from "@angular/core";
import { LocaleUser } from "../types/user.type";
import { CardDataService } from "./firebase/firestore-collection/card-data.service";

@Injectable()
export class CurrentUserService {
    private currentUser: LocaleUser;

    constructor(private cardService: CardDataService) {
    }

    public setCurrentUser(user: LocaleUser) {
        if (user != null) {
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
        if (this.currentUser.cardIds == null)
            this.currentUser.cardIds = [];

        this.currentUser.cardIds.push(cardId);
    }

    private setUpCardObservable(): void {
        this.currentUser.cards = this.cardService.get(this.currentUser.cardIds);
    }
}