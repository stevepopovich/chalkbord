import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'restaurant-card.component.html',
  selector: 'restaurant-card',
  styleUrls: ['/restaurant-card.component.scss']
})

export class RestaurantCardComponent implements AfterViewInit {
    @Input()
    public cardModel: RestaurantCardModel;

    @Input()
    public destroyCard: Subject<RestaurantCardModel>;

    public destroying: boolean = false;

    public draggableElement;

    constructor(private elRef:ElementRef) {
    }

    ngAfterViewInit(): void {
    }

    public swipeRight(event){
        this.destroying = true;
        console.log(this.draggableElement.style);
        this.draggableElement.style.transition = "transform 0.25s";
        this.delay(5).then(() => {
            this.destroyCard.next(this.cardModel);
        });
    }

    public swipeLeft(event){
        this.destroyCard.next(this.cardModel);
    }

    public onDragBegin(event){
        this.draggableElement = event;
        event.style.transition = "";
    }

    public onDragEnd(event){
        if(!this.destroying){
            console.log(event.style);
            event.style.transition = "transform .25s";
            event.style.transform = "translate(0px, 0px)";
            event.style["-ms-transform"] = "translate(0px, 0px)";
            event.style["-o-transform"] = "translate(0px, 0px)";
            event.style["-moz-transform"] = "translate(0px, 0px)";
        }
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