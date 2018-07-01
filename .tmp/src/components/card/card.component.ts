import { GSCard } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/image-service.service';

@Component({
    templateUrl: './card.component.html',
    selector: 'gs-card',
    styleUrls: ['/card.component.scss']
})
export class GSCardComponent {
    @Input()
    set card(card: GSCard) {
        if(card) {
            this._card = card;
            this.imageService.setDealImageURL(this.card);
        } else
            this._card = GSCard.getBlankCard();

    }
    get card(): GSCard {
        return this._card;
    }

    @Input()   
    set imageSrc(imageSrc) {
        this._imageSrc = imageSrc;
    
        if(!this._card)
            this._card = GSCard.getBlankCard();

        this._card.imageURL = imageSrc;
    };
    get imageSrc() {
        return this._imageSrc;
    }

    @Input() showCardText: boolean = true;

    private _card: GSCard;
    private _imageSrc;

    constructor(private imageService: ImageService) {
        this._card = GSCard.getBlankCard();
    }
}