import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'restaurant-card.component.html',
  selector: 'restaurant-card',
  styleUrls: ['./restaurant-card.component.scss']
})

export class RestaurantCardComponent {
    @Input()
    public cardModel: RestaurantCardModel;

    @Input()
    public destroyCard: Subject<RestaurantCardModel>;

    constructor() {
    }

    public swipeRight(){
        this.destroyCard.next(this.cardModel);
    }

    public swipeLeft(){
        this.destroyCard.next(this.cardModel);
    }
}

export class RestaurantCardModel {
    constructor(imageSource: string, title: string, deal: string){
        this.imageSource = imageSource;
        this.restaurantTitle = title;
        this.dealDescription = deal;
    }

    public imageSource: string;
    public restaurantTitle: string;
    public dealDescription: string;
}