import { LocaleCard } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/firebase/image-service.service';

@Component({
    templateUrl: './card.component.html',
    selector: 'gs-card',
    styleUrls: ['/card.component.scss']
})
export class GSCardComponent {
    @Input()
    set card(card: LocaleCard) {
        if(card) {
            this._card = card;
            this.imageService.setDealImageURL(this.card);
        } else
            this._card = LocaleCard.getBlankCard();

    }
    get card(): LocaleCard {
        return this._card;
    }

    @Input()   
    set imageSrc(imageSrc) {
        this._imageSrc = imageSrc;
    
        if(!this._card)
            this._card = LocaleCard.getBlankCard();

        this._card.imageURL = imageSrc;
    };
    get imageSrc() {
        return this._imageSrc;
    }

    @Input() showCardText: boolean = true;

    private _card: LocaleCard;
    private _imageSrc;

    constructor(private imageService: ImageService) {
        this._card = LocaleCard.getBlankCard();
    }
}