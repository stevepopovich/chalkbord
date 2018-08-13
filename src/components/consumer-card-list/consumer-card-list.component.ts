import { Component } from "@angular/core";
import { LocaleCard } from '../../types/deals.type';
import { CurrentUserService } from "../../services/current-user.service";
import { ModalController } from "ionic-angular";
import { MoreCardInfoComponent } from "../more-card-info/more-card-info.component";
import * as moment from 'moment';
import { ImageService } from '../../services/firebase/image-service.service';

@Component({
    templateUrl: './consumer-card-list.component.html',
    selector: 'consumer-card-list',
    styleUrls: ['/consumer-card-list.component.scss']
})
export class ConsumerCardList {
    public cardList: LocaleCard[] = [];

    public cardClass: string = "user-card-list";

    constructor(private currentUserService: CurrentUserService, private modalCtrl: ModalController,
        private imageService: ImageService) {
        this.currentUserService.getAllCards().subscribe((deals: LocaleCard[]) => {
            const currentDeals = [];

            deals.forEach(card => {
                if (moment(card.dealEnd).isAfter(moment())) {
                    currentDeals.push(card);
                    this.imageService.setDealImageURL(card);
                }
            });

            LocaleCard.findAndUpdateCards(currentDeals, this.cardList);
        });
    }

    public moreInfo(card: LocaleCard) {
        this.modalCtrl.create(MoreCardInfoComponent, { card: card }).present();
    }
}