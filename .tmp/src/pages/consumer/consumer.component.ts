import { Component, AfterViewInit } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'consumer.component.html',
  selector: 'consumer',
  styleUrls: ['./consumer.component.scss']
})

export class ConsumerComponent implements AfterViewInit {
    public restaurantCards = [
        new RestaurantCardModel("/../assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
        new RestaurantCardModel("/../assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
        new RestaurantCardModel("/../assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
    ];
  
    public destroyCard: Subject<RestaurantCardModel> = new Subject<RestaurantCardModel>();

    constructor() {
    }

    ngAfterViewInit(): void {
        this.destroyCard.subscribe((cardModel) => {
            var cardToDeleteIndex = this.restaurantCards.indexOf(cardModel);
            this.restaurantCards.splice(cardToDeleteIndex, 1);  
        });
    }

    public resetCards(){
        this.restaurantCards = [
            new RestaurantCardModel("/../assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("/../assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("/../assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
    }
}