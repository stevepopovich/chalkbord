import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
import { AlertController, PopoverController } from 'ionic-angular';
import { DealModel, DealType, RestaurantModel } from '../restaurant-deal-maker/restaurant-deal-maker.component';
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

const restaurantCards: DealModel[] = [
    new DealModel(new RestaurantModel("Bonefish Grill", "5712 Frantz rd, Dublin, OH", ""), " $14 Fresh Caught Salmon Filet", new Date(), new Date(), 150, DealType.Food, "assets/images/Local Prototype Pictures/Bonefish Grill Food.jpg"),
    new DealModel(new RestaurantModel("Bridge Street Pizza", "16 East Bridge st, Dublin, OH", ""), "Half Off Large Pizza", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Bridge Street Pizza food.jpg"),
    new DealModel(new RestaurantModel("Cafe Istanbul", "6125 Riverside dr, Dublin OH, Dublin, OH", ""), "$9 Lamb Chops", new Date(), new Date(), 150, DealType.Food, "assets/images/Local Prototype Pictures/Cafe Istanbul food.jpg"),
    new DealModel(new RestaurantModel("Cap City", "6644 Riverside dr, Dublin, OH", ""), "$8 Proseco", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Cap City Bar.jpg"),
    new DealModel(new RestaurantModel("Dub Pub", "5736 Frantz rd, Dublin, OH", ""), "$5 Irish Car Bomb", new Date(), new Date(), 150, DealType.Drinks, "assets/images/Local Prototype Pictures/Dub Pub bar.jpg"),
    new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$4 Stella Pints", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/DVT Barr.jpg"),
    new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$7 Soft Preztel Sticks", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/DVT Food.jpg"),
    new DealModel(new RestaurantModel("El Vaquero", "3580 W Dublin-granville rd, Columbus, OH", ""), "25% Off All Tacos", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/El Vaquero Food.jpg"),
    new DealModel(new RestaurantModel("Hyde Park", "6360 Frantz rd, Dublin, OH", ""), "$29 6oz Filet Mignon", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Hyde Park Food.jpg"),
    new DealModel(new RestaurantModel("LIV Miami", "4441 Collins ave, Miami Beach, FL", ""), "$1000 VIP Table", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Liv Miami.jpg"),
    new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "$2 Off House Margaritas", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Local Cantina Bar.jpg"),
    new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "Half Off Street Taco Appetizer", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Local Cantina Food.jpg"),
    new DealModel(new RestaurantModel("Mean Jeans", "2942 Hayden Run plaza, Columbus, OH", ""), "$1 Off Domestic Beers", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Mean Jeans bar.jpg"),
    new DealModel(new RestaurantModel("Mezzo", "12 West Bridge st, Dublin, OH", ""), "Split a Bottle of Wine Half Off", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Mezzo Bar.jpg"),
    new DealModel(new RestaurantModel("Oscars", "84 N High st, Dublin, OH", ""), "$4 Fried Chicken Lunch Sandwich", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Oscars of Dublin food.jpg"),
    new DealModel(new RestaurantModel("Pins Mechanical", "6558 Riverside dr, Dublin, OH", ""), "2 For 1 Patron Silver", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Pins Bar.jpg"),
    new DealModel(new RestaurantModel("Pint Room", "4415 W Dublin-Granville rd, Dublin, OH", ""), "$4 IPA Drafts", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Pint Room Bar.jpg"),
    new DealModel(new RestaurantModel("Poke Bros", "1065 Gemini Pl, Columbus, OH", ""), "$6 Poke Bowl", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Poke Bros.jpg"),
    new DealModel(new RestaurantModel("RAM Restaurant and Brewery", "6632 Longshore st, Dublin, OH", ""), "$5 Fish and Chips", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/RAM Food.jpg"),
    new DealModel(new RestaurantModel("Rancho Allegra", "5637 Woerner Temple rd, Dublin, OH", ""), "$7 Shareable Loaded Nachos", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/Rancho Allegra Food.jpg"),
    new DealModel(new RestaurantModel("Steak 954", "401 N Ft Lauderdale Beach Bvld, Fort Lauderdale, FL", ""), "$30 10oz NY Strip", new Date(), new Date(), 150, DealType.Food,"assets/images/Local Prototype Pictures/steak.jpg"),
    new DealModel(new RestaurantModel("Sway Nightclub", "1824, 111 SW 2nd ave, Fort Lauderdale, Fl", ""), "Free Cover with this app", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Sway Nightclub.jpg"),
    new DealModel(new RestaurantModel("Vine and Tap", "55 S High st, Dublin, OH", ""), "$12 House Wine for Two", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Vine _ Tap Bar.jpg"),
    new DealModel(new RestaurantModel("Yogis", "5857 Karric Square dr, Dublin, OH", ""), "$4 Well Mixed Drinks", new Date(), new Date(), 150, DealType.Drinks,"assets/images/Local Prototype Pictures/Yogis Bar.jpg"),
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

    public numberOfCards = 3;

    public restaurantViewCards: DealModel[] = new Array<DealModel>(this.numberOfCards);
    public filteredCards: DealModel[] = [];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;
  
    private moveCardIndex: number = 0;
    private viewCardIndex: number;

    private likingCard: boolean = false;

    private animatingCard: boolean = false;

    constructor (private alert: AlertController, private popoverCtrl: PopoverController, private launchNavigator: LaunchNavigator){
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                offsetY;   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/6), 1);
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 1600;
            }
        };

        this.filterCards(null);
    }

    public onItemMove(element, x, y, r): void {
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    public voteUp(like: boolean): void {
        this.transitionString = "all 0.25s";

        if(like){
            if(!this.likingCard){
                this.likingCard = true;

                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;

                this.handleCard(like);
            }
        }
        else{
            this.handleCard(like);
            
            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(40deg)`;
        }
            
    }

    public clickLike(): void {
        if(this.restaurantViewCards.length > 0 && !this.likingCard && !this.animatingCard){
            // if(this.moveCardIndex == undefined || this.moveCardIndex < 0)
            //     this.moveCardIndex = this.swingCards.toArray().length - 1;

            this.transitionString = "all 0.75s";

            this.likingCard = true;

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;
            
            this.delay(300).then(() => {
                this.handleCard(true);

                this.animatingCard = false;

                this.transitionString = "";
            });
        }
    }

    public clickNo(): void {
        if(this.restaurantViewCards.length > 0 && !this.animatingCard){
            // if(this.moveCardIndex == undefined || this.moveCardIndex < 0)
            //     this.moveCardIndex = this.swingCards.toArray().length - 1;

            this.transitionString = "all 0.75s";

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)`;
            
            this.delay(300).then(() => {
                this.handleCard(false);

                this.animatingCard = false;

                this.transitionString = "";
            });
        }
    }


    public openDealTypePopover(event){
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
                        this.launchNavigator.navigate(card.restaurant.location);
                    }
                }
            ],
            title: "You are going to " + card.restaurant.name + "!",
            subTitle: "Your deal code is: " + this.randomNumber(),
            message: "Bring this code to " + card.restaurant.name + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });

        likeAlert.present().then(() => { 
            this.likingCard = false; 
        });
    }

    private popCard(): DealModel{
        var poppedCard = this.restaurantViewCards.shift();
        this.addCardToStack();
        
        return poppedCard;
    }

    private filterCards(type: DealType){
        this.restaurantViewCards = [];
        this.filteredCards = [];
        if(type || type == 0){
            this.filteredCards = Object.create(restaurantCards).filter(function(card){
                return card.dealType === type;
            });
        }
        else
            this.filteredCards = Object.create(restaurantCards);

        this.setUpViewCards();  

        this.delay(600).then(() => {//this sucks
            this.swingCards.toArray()[0].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
        });
    }

    private addCardToStack(){
        if(this.viewCardIndex < this.filteredCards.length){
            var nextCard = this.filteredCards[this.viewCardIndex];

            this.restaurantViewCards.push(nextCard);

            this.viewCardIndex++;

            for(var i = 0; i < this.swingCards.toArray.length; i++){
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
            }
        }
    }

    private setUpViewCards(){
        this.viewCardIndex = this.numberOfCards;

        for(var i: number = 0; i < this.numberOfCards; i++){
            this.restaurantViewCards.push(this.filteredCards[i]);
        }
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private randomNumber(): string{
        return String(Math.floor(1000 + Math.random() * 9000));
    }
}