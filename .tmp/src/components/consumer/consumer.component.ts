import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
import { AlertController, PopoverController } from 'ionic-angular';
import { DealModel, DealType } from '../restaurant-deal-maker/restaurant-deal-maker.component';
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

const restaurantCards: DealModel[] = [
    new DealModel("Name1", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
    new DealModel("Name2", "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
    new DealModel("Name3", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
    new DealModel("Name4", "Deal description", new Date(), new Date(), 150, DealType.Both, "assets/images/foodandliquor/uhhhwtfisthis.jpg"),
    new DealModel("Name5", "Deal description", new Date(), new Date(), 150, DealType.Food,"assets/images/foodandliquor/wingsrest.jpg"),
    new DealModel("Name6", "Deal description", new Date(), new Date(), 150, DealType.Drinks, "assets/images/foodandliquor/mixeddrink.jpg"),
];

@Component({
    templateUrl: './consumer.component.html',
    selector: 'consumer',
    styleUrls: ['/consumer.component.scss']
})
export class ConsumerComponent{
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    public transitionString: string = "";

    public restaurantViewCards: DealModel[] = [];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;
  
    private moveCardIndex = -1;

    private likingCard: boolean = false;

    private animatingCard: boolean = false;

    constructor (private alert: AlertController, private popoverCtrl: PopoverController, private launchNavigator: LaunchNavigator){
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                console.log(offsetY);   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/6), 1);
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 400;
            }
        };

        this.filterCards(null);
    }

    public onItemMove(element, x, y, r): void {
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    public voteUp(like: boolean): void {
        if(like){
            if(!this.likingCard){
                this.likingCard = true;

                this.handleCard(like);
            }
        }
        else
            this.handleCard(like);
    }

    public clickLike(): void {
        if(this.restaurantViewCards.length > 0 && !this.likingCard && !this.animatingCard){
            if(this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;

            this.transitionString = "all 0.75s";

            this.likingCard = true;

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;
            
            this.moveCardIndex--;

            this.delay(300).then(() => {
                this.handleCard(true);

                this.animatingCard = false;

                this.transitionString = "";
            });
        }
    }

    public clickNo(): void {
        if(this.restaurantViewCards.length > 0 && !this.animatingCard){
            if(this.moveCardIndex == undefined || this.moveCardIndex < 0)
                this.moveCardIndex = this.swingCards.toArray().length - 1;

            this.transitionString = "all 0.75s";

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)`;
            
            this.moveCardIndex--;

            this.delay(300).then(() => {
                this.handleCard(false);

                this.animatingCard = false;

                this.transitionString = "";
            });
        }
    }


    public filterDealTypes(event){
        var filterPopover = this.popoverCtrl.create(FilterDealComponent);

        filterPopover.onDidDismiss((data: string) => {
            this.filterCards(DealType[data]);
        });

        filterPopover.present({
            ev: event,
        });
    }

    private handleCard(like: boolean){
        if(like)
            this.popLikeAlert(this.popCard());
        else
            this.popCard();
    }

    private popLikeAlert(card: DealModel): void{
        let likeAlert = this.alert.create({
            buttons:[
                {
                    text: 'Share',
                    role: 'share',
                    handler: () => {
                        console.log('Share');
                    }
                },
                {
                    text: 'Go',
                    role: 'go',
                    handler: () => {
                        this.launchNavigator.navigate('Cleveland, OH');
                    }
                }
            ],
            title: "You are going to " + card.restaurantName + "!",
            subTitle: "Your deal code is: " + this.randomNumber(),
            message: "Bring this code to " + card.restaurantName + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });

        likeAlert.present().then(() => { 
            this.likingCard = false; 
        });
    }

    private resetCards(): void{
        this.filterCards(null);

        this.swingCards.toArray()[0].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
    }

    private popCard(): DealModel{
        var poppedCard = this.restaurantViewCards.pop();
        if(this.restaurantViewCards.length < 1)
            this.resetCards();
        
        return poppedCard;
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private randomNumber(): string{
        return String(Math.floor(1000 + Math.random() * 9000));
    }

    private filterCards(type: DealType){
        this.restaurantViewCards = [];

        if(type){
            this.restaurantViewCards = Object.create(restaurantCards).filter(function(card){
                return card.dealType === type;
            });
        }
        else
            this.restaurantViewCards = Object.create(restaurantCards);

        this.moveCardIndex = this.restaurantViewCards.length - 1;
    }
}