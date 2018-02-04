import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './restaurant-card.component.html',
  selector: 'restaurant-card',
  styleUrls: ['/restaurant-card.component.scss']
})

export class RestaurantCardComponent implements AfterViewInit {
    @Input()
    public cardModel: RestaurantCardModel;

    public destroying: boolean = false;

    public draggableElement;

    constructor() {
    }

    ngAfterViewInit(): void {
    }

    public delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
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