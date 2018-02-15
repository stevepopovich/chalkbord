import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, transition } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';

@Component({
    templateUrl: './consumer.component.html',
    selector: 'consumer',
    styleUrls: ['/consumer.component.scss']
})
export class ConsumerComponent implements AfterViewInit {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    public transitionString: string = "";

    public restaurantCards = [
        new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
        new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
        new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala"),
        new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
        new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
        new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala"),
    ];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;
  
    constructor (){
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                console.log(offsetY);   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/1.5), 1);
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 800;
            }
          };
    }

    ngAfterViewInit(): void {
    }

    public onItemMove(element, x, y, r): void {
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    public voteUp(like: boolean): void {
        console.log(like);
        this.popCard();
    }

    public like():void{
        this.transitionString = "all 0.5s";//this.swingCards.toArray()[this.swingCards.toArray().length - 1].getElementRef().nativeElement.style['transistion'] = "all 0.5s";
        this.swingCards.toArray()[this.swingCards.toArray().length - 1].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(800px, 0px) rotate(40deg)`;
        
        this.delay(500).then(() => {this.popCard(); this.transitionString = "";});
    }

    public dislike():void{
        this.transitionString = "all 0.5s";//this.swingCards.toArray()[this.swingCards.toArray().length - 1].getElementRef().nativeElement.style['transistion'] = "all 0.5s";
        this.swingCards.toArray()[this.swingCards.toArray().length - 1].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-800px, 0px) rotate(-40deg)`;
        
        this.delay(500).then(() => {this.popCard(); this.transitionString = "";});
    }

    private resetCards(): void{
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala"),
            new RestaurantCardModel("assets/images/shots.jpg", "Bullwinkles", "Shots up!")
        ];
    }

    private popCard(): void{
        this.restaurantCards.pop();
        if(this.restaurantCards.length < 1)
            this.resetCards();
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}