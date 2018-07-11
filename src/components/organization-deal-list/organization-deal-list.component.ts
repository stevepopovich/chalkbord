import { CurrentUserService } from './../../services/current-user.service';
import { DealEditorService } from './../../services/deal-editing.service';
import { Component } from "@angular/core";
import { LocaleCard } from '../../types/deals.type';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ModalController } from 'ionic-angular';

@Component({
    templateUrl: './organization-deal-list.component.html',
    selector: 'organization-deal-list',
    styleUrls: ['/organization-deal-list.component.scss']
})
export class OrganizationDealListComponent {
    private currentCard: LocaleCard;
    private cardList: LocaleCard[] = [];

    public constructor(private dealEditorService: DealEditorService,
        private modalCtrl: ModalController, private currentUserService: CurrentUserService) {

        this.currentUserService.getCards().subscribe((deals: LocaleCard[]) => {
            LocaleCard.findAndUpdateCards(deals, this.cardList);
        });

        this.dealEditorService.currentDealSubject.subscribe((deal: LocaleCard) => {
            this.currentCard = deal;
        });

        this.dealEditorService.deleteDealSubject.subscribe((deal: LocaleCard) => {
            this.cardList.splice(this.cardList.indexOf(deal), 1);
        });

        this.dealEditorService.addDealSubject.subscribe((deal: LocaleCard) => {
            this.cardList.push(deal);

            this.currentCard = deal;
        });
    }

    public hasCards(): boolean {
        return this.cardList.length > 0;
    }

    public setCurrentCard(deal: LocaleCard) {
        if (this.currentCard != deal && deal != null) {
            this.currentCard = deal;

            this.dealEditorService.setCurrentDeal(this.currentCard);
        }
        else {
            this.currentCard = null;

            this.dealEditorService.setCurrentDeal(null);
        }
    }

    public getBackground(deal) {
        if (this.currentCard && deal.id == this.currentCard.id)
            return "selected-item";
        else
            return "selectable-item";
    }

    public openProfile() {
        this.modalCtrl.create(UserProfileComponent, { isOrganization: true }).present();
    }
}



