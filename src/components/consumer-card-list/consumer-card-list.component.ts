import moment from 'Moment';
import { Component } from "@angular/core";
import { LocaleCard } from '../../types/deals.type';
import { CurrentUserService } from "../../services/current-user.service";
import { ModalController } from "ionic-angular";
import { MoreCardInfoComponent } from "../more-card-info/more-card-info.component";
import { ImageService } from '../../services/firebase/image-service.service';
import { FirebaseEnvironmentService, FirebaseEnvironment } from '../../services/firebase/environment.service';

@Component({
    templateUrl: './consumer-card-list.component.html',
    selector: 'consumer-card-list',
    styleUrls: ['/consumer-card-list.component.scss']
})
export class ConsumerCardList {
    public cardList: LocaleCard[] = [];

    public cardClass: string = "user-card-list";

    constructor(private currentUserService: CurrentUserService, private modalCtrl: ModalController,
        private imageService: ImageService, private firebaseEnvironmentService: FirebaseEnvironmentService) {
        this.currentUserService.getAllCards().subscribe((deals: LocaleCard[]) => {
            const currentDeals = [];

            deals.forEach(card => {
                this.addNonDeletedCurrentCardsByEnvironment(card, currentDeals);
            });

            LocaleCard.findAndUpdateCards(currentDeals, this.cardList);
        });
    }

    public moreInfo(card: LocaleCard) {
        this.modalCtrl.create(MoreCardInfoComponent, { card: card, isCardList: true }).present();
    }

    private addNonDeletedCurrentCardsByEnvironment(card: LocaleCard, cardsToAddTo: LocaleCard[]) {
        if (this.firebaseEnvironmentService.getCurrentEnvironment() == FirebaseEnvironment.Demo) {
            if (!card.deleted) {
                cardsToAddTo.push(card);
                this.imageService.setDealImageURL(card);
            }
        }
        else {
            if (!card.deleted && moment(card.dealEnd).isAfter(moment())) {
                this.imageService.setDealImageURL(card);
                cardsToAddTo.push(card);
            }
        }
    }
}