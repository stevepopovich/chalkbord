import { LocaleCard } from './../../types/deals.type';
import { Component, Input, AfterViewInit } from "@angular/core";
import { ImageService } from '../../services/firebase/image-service.service';

@Component({
    templateUrl: './card.component.html',
    selector: 'gs-card',
    styleUrls: ['/card.component.scss']
})
export class GSCardComponent implements AfterViewInit {

    @Input()
    set card(card: LocaleCard) {
        if (card) {
            this._card = card;
            //this.imageService.setDealImageURL(this.card);
        } else
            this._card = LocaleCard.getBlankCard();

    }
    get card(): LocaleCard {
        return this._card;
    }

    @Input()
    set imageSrc(imageSrc) {
        this._imageSrc = imageSrc;

        if (!this._card)
            this._card = LocaleCard.getBlankCard();

        this._card.imageURL = imageSrc;
    };
    get imageSrc() {
        return this._imageSrc;
    }

    @Input() showCardText: boolean = true;

    @Input() inputClass: string = "default-class";
    private _card: LocaleCard;
    private _imageSrc;

    constructor(private imageService: ImageService) {
        imageService;
        this._card = LocaleCard.getBlankCard();
    }

    public ngAfterViewInit(): void {
        //console.log(this.inputClass);
    }
}