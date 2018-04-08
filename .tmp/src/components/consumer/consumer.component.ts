import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent} from 'angular2-swing';
import { AlertController, PopoverController } from 'ionic-angular';
import { FilterDealComponent } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CardDataService } from '../../services/card-data.service';
import { AuthorizationService } from '../../services/authorization.service';
import { ImageService } from '../../services/image-service.service';
import { DealModel, DealType } from '../../types/deals.type';

// const localeDealPhotoFolder: string = "/locale-deal-photos/";

// const restaurantCards: DealModel[] = [
//     new DealModel(new RestaurantModel("Bonefish Grill", "5712 Frantz rd, Dublin, OH", ""), " $14 Fresh Caught Salmon Filet", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Bonefish Grill Food.jpg"),
//     new DealModel(new RestaurantModel("Bridge Street Pizza", "16 East Bridge st, Dublin, OH", ""), "Half Off Large Pizza", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Bridge Street Pizza food.jpg"),
//     new DealModel(new RestaurantModel("Cafe Istanbul", "6125 Riverside dr, Dublin OH, Dublin, OH", ""), "$9 Lamb Chops", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder +  "Cafe Istanbul food.jpg"),
//     new DealModel(new RestaurantModel("Cap City", "6644 Riverside dr, Dublin, OH", ""), "$8 Proseco", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Cap City Bar.jpg"),
//     new DealModel(new RestaurantModel("Dub Pub", "5736 Frantz rd, Dublin, OH", ""), "$5 Irish Car Bomb", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Dub Pub bar.jpg"),
//     new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$4 Stella Pints", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "DVT Barr.jpg"),
//     new DealModel(new RestaurantModel("Dublin Village Tavern", "27 S High st, Dublin, OH", ""), "$7 Soft Preztel Sticks", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "DVT Food.jpg"),
//     new DealModel(new RestaurantModel("El Vaquero", "3580 W Dublin-granville rd, Columbus, OH", ""), "25% Off All Tacos", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "El Vaquero Food.jpg"),
//     new DealModel(new RestaurantModel("Hyde Park", "6360 Frantz rd, Dublin, OH", ""), "$29 6oz Filet Mignon", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Hyde Park Food.jpg"),
//     new DealModel(new RestaurantModel("LIV Miami", "4441 Collins ave, Miami Beach, FL", ""), "$1000 VIP Table", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Liv Miami.jpg"),
//     new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "$2 Off House Margaritas", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Local Cantina Bar.jpg"),
//     new DealModel(new RestaurantModel("Local Cantina", "4537 Bridge Park ave, Dublin, OH", ""), "Half Off Street Taco Appetizer", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Local Cantina Food.jpg"),
//     new DealModel(new RestaurantModel("Mean Jeans", "2942 Hayden Run plaza, Columbus, OH", ""), "$1 Off Domestic Beers", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Mean Jeans bar.jpg"),
//     new DealModel(new RestaurantModel("Mezzo", "12 West Bridge st, Dublin, OH", ""), "Split a Bottle of Wine Half Off", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Mezzo Bar.jpg"),
//     new DealModel(new RestaurantModel("Oscars", "84 N High st, Dublin, OH", ""), "$4 Fried Chicken Lunch Sandwich", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Oscars of Dublin food.jpg"),
//     new DealModel(new RestaurantModel("Pins Mechanical", "6558 Riverside dr, Dublin, OH", ""), "2 For 1 Patron Silver", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Pins Bar.jpg"),
//     new DealModel(new RestaurantModel("Pint Room", "4415 W Dublin-Granville rd, Dublin, OH", ""), "$4 IPA Drafts", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Pint Room Bar.jpg"),
//     new DealModel(new RestaurantModel("Poke Bros", "1065 Gemini Pl, Columbus, OH", ""), "$6 Poke Bowl", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Poke Bros.jpg"),
//     new DealModel(new RestaurantModel("RAM Restaurant and Brewery", "6632 Longshore st, Dublin, OH", ""), "$5 Fish and Chips", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "RAM Food.jpg"),
//     new DealModel(new RestaurantModel("Rancho Allegra", "5637 Woerner Temple rd, Dublin, OH", ""), "$7 Shareable Loaded Nachos", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "Rancho Allegra Food.jpg"),
//     new DealModel(new RestaurantModel("Steak 954", "401 N Ft Lauderdale Beach Bvld, Fort Lauderdale, FL", ""), "$30 10oz NY Strip", new Date(), new Date(), 150, DealType.Food, localeDealPhotoFolder + "steak.jpg"),
//     new DealModel(new RestaurantModel("Sway Nightclub", "1824, 111 SW 2nd ave, Fort Lauderdale, Fl", ""), "Free Cover with this app", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Sway Nightclub.jpg"),
//     new DealModel(new RestaurantModel("Vine and Tap", "55 S High st, Dublin, OH", ""), "$12 House Wine for Two", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Vine _ Tap Bar.jpg"),
//     new DealModel(new RestaurantModel("Yogis", "5857 Karric Square dr, Dublin, OH", ""), "$4 Well Mixed Drinks", new Date(), new Date(), 150, DealType.Drinks, localeDealPhotoFolder + "Yogis Bar.jpg"),
// ];

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

    public restaurantViewCards: DealModel[];// = new Array<DealModel>(this.numberOfCards);
    public filteredCards: DealModel[];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;
  
    private moveCardIndex: number = 0;
    private viewCardIndex: number;

    private likingCard: boolean = false;

    private animatingCard: boolean = false;

    public currentFilter: DealType = null;

    public cards: DealModel[];

    constructor (private alert: AlertController, private popoverCtrl: PopoverController, private launchNavigator: LaunchNavigator, private cardService: CardDataService, private authService: AuthorizationService, private imageService: ImageService){
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                offsetY;   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/6), 1);
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 2400;
            }
        };

        // this.authService.authorizeUserAccess("stevepopovich8@gmail.com", "Thisism1").then(() => {
        //     this.cardService.setCards(restaurantCards);
        // });

        this.authService.authorizeUserAccess("stevepopovich8@gmail.com", "Thisism1").then(() => {
            this.cardService.getCards().subscribe((cardModels) => {
                if(!this.cards){
                    this.cards = cardModels as DealModel[];

                    this.filterCards(this.currentFilter);
                }
                else{
                    this.findAndUpdateCards(cardModels as DealModel[]);
                }
            });
        });
    }

    public onItemMove(element, x, y, r): void {
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    public voteUp(like: boolean): void {
        if(this.restaurantViewCards.length > 0){
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
    }

    public clickLike(): void {
        if(this.restaurantViewCards.length > 0 && !this.likingCard && !this.animatingCard){
           this.transitionString = "all 0.75s";

            this.likingCard = true;

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;
            
            this.delay(300).then(() => {
                this.handleCard(true);

                this.animatingCard = false;
            });
        }
    }

    public clickNo(): void {
        if(this.restaurantViewCards.length > 0 && !this.animatingCard){
            this.transitionString = "all 0.75s";

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)`;
            
            this.delay(300).then(() => {
                this.handleCard(false);

                this.animatingCard = false;
            });
        }
    }


    public openDealTypePopover(event){
        var filterPopover = this.popoverCtrl.create(FilterDealComponent);

        filterPopover.onDidDismiss((data: string) => {
            this.currentFilter = DealType[data];

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

        this.transitionString = "";
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
        this.restaurantViewCards = new Array<DealModel>();
        this.filteredCards = new Array<DealModel>();
        if(type || type == 0){
            this.filteredCards = this.cards.filter((card) => {
                return card.dealType == type;
            });
        }
        else
            this.filteredCards = this.cards;

        this.setUpViewCards();  

        this.delay(600).then(() => {//this sucks
            this.swingCards.toArray()[0].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
        });
    }

    private addCardToStack(){
        if(this.viewCardIndex < this.filteredCards.length){
            var nextCard = this.filteredCards[this.viewCardIndex];

            this.imageService.setDealImageURL(nextCard);

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
            this.imageService.setDealImageURL(this.filteredCards[i]);

            this.restaurantViewCards.push(this.filteredCards[i]);
        }
    }

    private findAndUpdateCards(dealModels: DealModel[]){
        dealModels.forEach((dealModel) => {
            var foundCard = this.filteredCards[this.filteredCards.findIndex(c => c.id == dealModel.id)];

            if(foundCard){
                this.updateDealModel(foundCard, dealModel);

                var foundViewCard = this.restaurantViewCards[this.restaurantViewCards.findIndex(c => c.id == dealModel.id)]; 
                
                if(foundViewCard)
                    this.updateDealModel(foundViewCard, dealModel);
            }
        });
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private randomNumber(): string{
        return String(Math.floor(1000 + Math.random() * 9000));
    }

    //looks at differences in properties between objects
    private updateDealModel(objectToUpdate: DealModel, updatedObject: DealModel): void{
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.restaurant = updatedObject.restaurant;

        if(objectToUpdate.imageSource != updatedObject.imageSource){
            objectToUpdate.imageSource = updatedObject.imageSource;

            this.imageService.setDealImageURL(objectToUpdate);
        }
    }
}