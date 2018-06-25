import { Card } from './../../types/deals.type';
import { Component, Input } from "@angular/core";
import { ImageService } from '../../services/image-service.service';

@Component({
    templateUrl: './card.component.html',
    selector: 'gs-card',
    styleUrls: ['/card.component.scss']
})
export class GSCardComponent {
    @Input() card: Card;
    @Input() imageSrc;

    constructor(private imageService: ImageService) {
        this.card = Card.getBlankCard();
    }

    ngOnChanges() {
        if(this.card){
            if(this.imageSrc != this.card.imageURL)
                this.card.imageURL = this.imageSrc;
            else
                this.imageService.setDealImageURL(this.card);
        }
    }
}