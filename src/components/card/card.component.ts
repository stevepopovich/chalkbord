import { Card } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/image-service.service';

@Component({
    templateUrl: './card.component.html',
    selector: 'gs-card',
    styleUrls: ['/card.component.scss']
})
export class GSCardComponent {
    @Input()
    set card(card: Card) {
        this._card = card;

        if(this._card && this._card.id.length && this._card.id.length > 0)
            this.imageService.setDealImageURL(this.card);
    }
    get card(): Card {
        return this._card;
    }

    @Input()   
    set imageSrc(imageSrc) {
        this._imageSrc = imageSrc;
    
        if(!this._card)
            this._card = Card.getBlankCard();

        this._card.imageURL = imageSrc;
    };
    get imageSrc() {
        return this._imageSrc;
    }

    private _card: Card;
    private _imageSrc;

    constructor(private imageService: ImageService) {
        this._card = Card.getBlankCard();
    }
}