import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
import { AlertController } from 'ionic-angular';

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
        new RestaurantCardModel("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
        new RestaurantCardModel("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
        new RestaurantCardModel("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
        new RestaurantCardModel("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
    ];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;
  
    private moveCardIndex = -1;

    constructor (private alert: AlertController){
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                console.log(offsetY);   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
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
        if(like)
            this.popLikeAlert(this.popCard());
        else
            this.popCard();
    }

    public voteButton(like: boolean):void{
        if(this.restaurantCards.length > 0){
            if(this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;

            this.transitionString = "all 0.5s";

            if(like)
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(800px, 0px) rotate(40deg)`;
            else
                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-800px, 0px) rotate(-40deg)`;
            
            this.moveCardIndex--;

            this.delay(500).then(() => {
                if(like)
                    this.popLikeAlert(this.popCard());
                else
                    this.popCard();

                this.transitionString = "";
            });
        }
    }

    private popLikeAlert(card: RestaurantCardModel): void{
        let likeAlert = this.alert.create({
            buttons:[],
            title: "You are going to " + card.restaurantTitle + "!",
            subTitle: "Your deal code is: 4456",
            message: "Bring this code to " + card.restaurantTitle + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });

        likeAlert.present();
    }

    private resetCards(): void{
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/foodandliquor/uhhhwtfisthis.jpg", "Tuccis", "Whole menu half off 3-6pm"),
            new RestaurantCardModel("assets/images/foodandliquor/pastabread.png", "J Liu", "Pasta and bread for two $12"),
            new RestaurantCardModel("assets/images/foodandliquor/mixeddrink.jpg", "Brazenhead", "$3 mixed drinks 2-4pm"),
            new RestaurantCardModel("assets/images/foodandliquor/wingsrest.jpg", "Matt The Miller's", "Free wings app with purchase of 2 drinks")
        ];
    }

    private popCard(): RestaurantCardModel{
        var poppedCard = this.restaurantCards.pop();
        if(this.restaurantCards.length < 1)
            this.resetCards();
        
        return poppedCard;
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}