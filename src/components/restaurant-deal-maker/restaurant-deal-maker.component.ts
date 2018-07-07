import { CurrentUserService } from './../../services/current-user.service';
import { DealEditorService } from './../../services/deal-editing.service';
import { Component } from "@angular/core";
import { GSCard } from '../../types/deals.type';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ModalController } from 'ionic-angular';

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']  
})
export class RestaurantDealMakerComponent{
    private currentCard: GSCard;
    private cardList: GSCard[] = [];

    public constructor(private dealEditorService: DealEditorService,
        private modalCtrl: ModalController, private currentUserService: CurrentUserService){

        this.currentUserService.getCards().subscribe((deals: GSCard[]) => {
            console.log(deals);
            GSCard.findAndUpdateCards(deals, this.cardList);
        });

        this.dealEditorService.currentDealSubject.subscribe((deal: GSCard) => {
            this.currentCard = deal;
        });

        this.dealEditorService.deleteDealSubject.subscribe((deal: GSCard) => {
            this.cardList.splice(this.cardList.indexOf(deal), 1);
        });

        this.dealEditorService.addDealSubject.subscribe((deal: GSCard) => {
            this.cardList.push(deal);

            this.currentCard = deal;
        });
    }

    public hasCards(): boolean {
        return this.cardList.length > 0;
    }

    public setCurrentCard(deal: GSCard){
        if(this.currentCard != deal && deal != null){
            this.currentCard = deal;
        
            this.dealEditorService.setCurrentDeal(this.currentCard);
        }
        else{
            this.currentCard = null;

            this.dealEditorService.setCurrentDeal(null);
        }
    }

    public getBackground(deal) {
        if(this.currentCard && deal.id == this.currentCard.id)
            return "selected-item";
        else 
            return "selectable-item";
    }

    public openProfile(){
        this.modalCtrl.create(UserProfileComponent, {isRestaurant: true}).present(); 
    }
}



