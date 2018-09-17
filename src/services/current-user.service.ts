import { Organization } from './../types/organization.type';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { LocaleUser } from "../types/user.type";
import { CardDataService } from "./firebase/firestore-collection/card-data.service";
import { OrganizationService } from "./firebase/firestore-collection/organization-service";
import { LocaleCard } from '../types/deals.type';

@Injectable()
export class CurrentUserService {
    private currentUser: LocaleUser;

    constructor(private cardService: CardDataService, private organizationService: OrganizationService) {
    }

    public setCurrentUser(user: LocaleUser) {
        if (user != null)
            this.currentUser = user;
    }

    public getCurrentUser(): LocaleUser {
        return Object.assign({}, this.currentUser) as LocaleUser;
    }

    public getNotDeletedCards(): Observable<LocaleCard[]> {
        return this.cardService.getMulti(this.currentUser.cardIds, false);
    }

    public getAllCards(): Observable<LocaleCard[]> {
        return this.cardService.getMulti(this.currentUser.cardIds, true);
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

    public addClaimedId(cardId: string): void {
        if (this.currentUser.claimedCards == null)
            this.currentUser.claimedCards = [];

        this.currentUser.claimedCards.push(cardId);
    }

    public getCurrentOrganization(): Observable<Organization[]> {
        return this.organizationService.getCurrent(this.currentUser.uid);
    }
}