import { Component } from "@angular/core";
import { LocaleCard } from '../../types/deals.type';
import { CurrentUserService } from "../../services/current-user.service";
import { ModalController } from "ionic-angular";
import { MoreCardInfoComponent } from "../more-card-info/more-card-info.component";
import * as moment from 'moment';

@Component({
    templateUrl: './consumer-card-list.component.html',
    selector: 'consumer-card-list',
    styleUrls: ['/consumer-card-list.component.scss']
})
export class ConsumerCardList {
    public cardList: LocaleCard[] = [];

    public cardClass: string = "user-card-list";

    constructor(private currentUserService: CurrentUserService, private modalCtrl: ModalController) {
        this.currentUserService.getCards().subscribe((deals: LocaleCard[]) => {
            const currentDeals = [];

            deals.forEach(card => {
                if (card.dealStart > moment().toObject())
                    currentDeals.push(card);
            });

            LocaleCard.findAndUpdateCards(currentDeals, this.cardList);
        });
    }

    public moreInfo(card: LocaleCard) {
        this.modalCtrl.create(MoreCardInfoComponent, { card: card }).present();
    }
}