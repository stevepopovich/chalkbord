import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RestaurantCardModel } from '../restaurant-card/restaurant-card.component';

import {
    StackConfig,
    DragEvent,
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

    public restaurantCards = [
        new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
        new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
        new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
    ];

    stackConfig: StackConfig;

    public currentDragged;

    public destoryingCard = false;
  
    constructor (){
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
        this.swingStack.throwin.subscribe((event: DragEvent) => {
            event.target.style.background = '#000000';
        });
    }

    onItemMove(element, x, y, r) {
        element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    voteUp(like: boolean) {
        this.restaurantCards.pop();
        console.log(like);
        // if (like) {
        //   this.recentCard = 'You liked: ' + removedCard.restaurantTitle;
        // } else {
        //   this.recentCard = 'You disliked: ' + removedCard.restaurantTitle;
        // }
        
    }
       
      // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    decimalToHex(d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        
        return hex;
    }
      
    public resetCards(){
        this.restaurantCards = [
            new RestaurantCardModel("assets/images/burger.jpg", "Tuccis", "Half off all burgers from 3-5pm"),
            new RestaurantCardModel("assets/images/margs.jpg", "J Liu", "Margs half off happy hours prices 2-4pm"),
            new RestaurantCardModel("assets/images/chicken.jpg", "Brazenhead", "Special tonight is chicken marsala")
        ];
    }

    public deleteCard(card: RestaurantCardModel){
        var cardToDeleteIndex = this.restaurantCards.indexOf(card);
        this.restaurantCards.splice(cardToDeleteIndex, 1);  
    }

    public addCard(card: RestaurantCardModel){
        this.restaurantCards.push(card);
    }
}