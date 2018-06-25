import { DealEditorService } from './../../services/deal-editing.service';
import { Component } from "@angular/core";
import { AuthorizationService } from "../../services/authorization.service";
import { Card } from '../../types/deals.type';

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']
})
export class RestaurantDealMakerComponent{
    public currentCard: Card;

    public constructor(public authService: AuthorizationService, public dealEditorService: DealEditorService){
        this.authService.generateCardsFromIds();

        this.dealEditorService.currentDealSubject.subscribe((deal: Card) => {
            this.currentCard = deal;
        });
    }

    public hasCards(): boolean {
        return this.authService.currentUser 
        && this.authService.currentUser.cards 
        && this.authService.currentUser.cards.length > 0;
    }

    public setCurrentCard(deal: Card){
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
}



