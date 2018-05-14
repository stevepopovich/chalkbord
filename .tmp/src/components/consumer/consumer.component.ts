import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';

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
import { DeviceService } from '../../services/device.service';
import { ViewControllerService } from '../../services/view-controller.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './consumer.component.html',
    selector: 'consumer',
    styleUrls: ['/consumer.component.scss']
})
export class ConsumerComponent implements AfterViewInit, OnDestroy{
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

    public cardSubscription: Subscription;

    constructor (private alert: AlertController, private popoverCtrl: PopoverController, private launchNavigator: LaunchNavigator, private cardService: CardDataService, private authService: AuthorizationService, private imageService: ImageService, public deviceService: DeviceService, public viewContoller: ViewControllerService) {
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                offsetY;   
                return Math.min(Math.abs(offsetX) / (element.offsetWidth/2.5), 1);
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 200;
            }
        };
    }
    
    public ngAfterViewInit(): void {
        if(this.authService.checkUserIsLoggedIn){
            this.cardSubscription = this.cardService.getCards().subscribe((cardModels) => {
                if(!this.cards){
                    this.cards = cardModels as DealModel[];
    
                    this.filterCards(this.currentFilter);
                }
                else{
                    this.findAndUpdateCards(cardModels as DealModel[]);
                }
            });
        }
        else
            console.error("User not logged in when he should be!");
    }

    public ngOnDestroy(): void {
        this.cardSubscription.unsubscribe();
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
                },
                {
                    text: 'Ok',
                    role: 'close',
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
            const topCard = this.swingCards.toArray()[0];

            if(topCard)
                topCard.getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
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

    //used simply to async wait for something
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

    public logout(){
        this.deviceService.putRememberMeSetting(false);

        this.viewContoller.setSignUpView();
    }
}