import { LocaleCard } from './../../types/deals.type';
import { CurrentUserService } from './../../services/current-user.service';
import { LocaleLocation } from './../../types/location.type';
import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';
import {
    StackConfig,
    SwingStackComponent,
    SwingCardComponent,
    Direction
} from 'angular2-swing';
import { AlertController, PopoverController, ModalController } from 'ionic-angular';
import { FilterDealComponent, FilterDealsOptionsInterface } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { AuthorizationService } from '../../services/firebase/authorization.service';
import { ImageService } from '../../services/firebase/image-service.service';
import { Subscription } from 'rxjs/Subscription';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ToastService } from '../../services/toast.service';
import { Geolocation } from '@ionic-native/geolocation';
import { MoreCardInfoComponent } from '../more-card-info/more-card-info.component';
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { CardDataService } from '../../services/firebase/firestore-collection/card-data.service';
import _ from 'underscore';
import moment from 'Moment';
import { ConsumerCardList } from '../consumer-card-list/consumer-card-list.component';

@Component({
    templateUrl: './consumer.component.html',
    selector: 'consumer',
    styleUrls: ['/consumer.component.scss']
})
export class ConsumerComponent implements AfterViewInit, OnDestroy {
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    public transitionString: string = "";

    public numberOfCardsToHaveInView = 3;

    public organizationViewCards: LocaleCard[];
    public filteredCards: LocaleCard[];

    public stackConfig: StackConfig;

    public destoryingCard: boolean = false;

    private moveCardIndex: number = 0;
    private viewCardIndex: number;

    private likingCard: boolean = false;

    private animatingCard: boolean = false;

    public currentFilter: FilterDealsOptionsInterface = { dealType: null, onlyVegan: false, onlyVegetarian: false };

    public cards: LocaleCard[];

    public cardSubscription: Subscription;

    public currentLocation: LocaleLocation = new LocaleLocation();

    constructor(private alert: AlertController, private popoverCtrl: PopoverController, private toastService: ToastService,
        private launchNavigator: LaunchNavigator, private cardService: CardDataService, private authService: AuthorizationService,
        private imageService: ImageService, private modalCtrl: ModalController, private geolocation: Geolocation,
        private currentUserService: CurrentUserService, private userService: UserService) {
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                const throwoutHorizontal = Math.abs(offsetX) / (element.offsetWidth / 2.75);
                const throwoutVertical = Math.abs(offsetY) / (element.offsetHeight / 4.5);

                return Math.min(1,
                    Math.sqrt((throwoutHorizontal * throwoutHorizontal) + (throwoutVertical * throwoutVertical)));//pythag
            },
            transform: (element, x, y, r) => {
                this.onItemMove(element, x, y, r);
            },
            throwOutDistance: () => {
                return 50;
            },
            allowedDirections: [Direction.UP, Direction.LEFT, Direction.RIGHT],
        };
    }

    public ngAfterViewInit(): void {
        if (this.authService.checkLoggedIn) {
            this.geolocation.watchPosition().subscribe((resp) => {
                this.currentLocation.lat = resp.coords.latitude;
                this.currentLocation.lng = resp.coords.longitude;

                this.cardSubscription = this.cardService.getCardsByLatLng(this.currentLocation, 100000000).subscribe((cardModels) => {
                    if (cardModels.length > 0) {
                        cardModels = cardModels.filter((card) => {
                            return !_.contains(this.currentUserService.getCurrentUser().cardIds, card.id);
                        })
                        if (!this.cards) {
                            this.cards = this.cardService.filterNonDuplicateDeals(cardModels as LocaleCard[]);

                            this.filterCards(this.currentFilter);
                        }
                        else
                            LocaleCard.findAndUpdateCards(this.organizationViewCards, cardModels as LocaleCard[]);
                    }
                });
            }, (error) => {
                this.toastService.showReadableToast("We could not find your location, please contact support. " + error);
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

    public openConsumerCardList() {
        this.modalCtrl.create(ConsumerCardList).present();
    }

    public voteUp(like: boolean): void {
        if (this.organizationViewCards.length > 0) {
            this.transitionString = "all 0.25s";

            if (like) {
                if (!this.likingCard) {
                    this.likingCard = true;

                    this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;

                    this.handleCard(like);
                }
            }
            else {
                this.handleCard(like);

                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(40deg)`;
            }
        }
    }

    public moreInfo(): void {
        const cardSwipedUp = this.organizationViewCards.shift();

        this.modalCtrl.create(MoreCardInfoComponent, { card: cardSwipedUp }).present().then(() => {
            this.organizationViewCards.unshift(cardSwipedUp);
        });
    }

    public clickLike(): void {
        if (this.organizationViewCards.length > 0 && !this.likingCard && !this.animatingCard) {
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
        if (this.organizationViewCards.length > 0 && !this.animatingCard) {
            this.transitionString = "all 0.75s";

            this.animatingCard = true;

            this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)`;

            this.delay(300).then(() => {
                this.handleCard(false);

                this.animatingCard = false;
            });
        }
    }

    public openDealTypePopover(event) {
        var filterPopover = this.popoverCtrl.create(FilterDealComponent, this.currentFilter);

        filterPopover.onDidDismiss((data: FilterDealsOptionsInterface) => {
            if (data) {
                if (data.dealType)
                    this.currentFilter = data;

                this.filterCards(data);
            }
        });

        filterPopover.present({
            ev: event,
        });
    }

    private handleCard(like: boolean) {
        if (like) {
            const poppedCard = this.popCard();

            this.popLikeAlert(poppedCard);

            this.currentUserService.addCardId(poppedCard.id);
            this.userService.set(this.currentUserService.getCurrentUser());
        }
        else
            this.popCard();

        this.transitionString = "";
    }

    private popLikeAlert(card: LocaleCard): void {
        let likeAlert = this.alert.create({
            buttons: [
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
                        this.launchNavigator.navigate(card.organization.address);
                    }
                },
                {
                    text: 'Ok',
                    role: 'close',
                }
            ],
            title: "You are going to " + card.organization.name + "!",
            subTitle: "Your deal code is: " + this.randomNumber(),
            message: "Bring this code to " + card.organization.name + " and show it when you sit down. Remember, your deal is: " + card.dealDescription + ". Have fun!"
        });

        likeAlert.present().then(() => {
            this.likingCard = false;
        });
    }

    private popCard(): LocaleCard {
        var poppedCard = this.organizationViewCards.shift();
        this.addCardToStack();

        return poppedCard;
    }

    private filterCards(filterOptions: FilterDealsOptionsInterface) {
        this.organizationViewCards = new Array<LocaleCard>();
        this.filteredCards = this.cards;
        if (filterOptions.dealType || filterOptions.dealType == 0) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return card.dealType == filterOptions.dealType;
            });
        }

        if (filterOptions.onlyVegan) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return card.isVegan && card.isVegetarian;
            });
        }
        else if (filterOptions.onlyVegetarian) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return card.isVegetarian;
            });
        }

        this.setUpViewCards();

        this.delay(600).then(() => {//this sucks
            const topCard = this.swingCards.toArray()[0];

            if (topCard)
                topCard.getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
        });
    }

    private addCardToStack() {
        if (this.viewCardIndex < this.filteredCards.length) {
            var nextCard = this.filteredCards[this.viewCardIndex];

            this.imageService.setDealImageURL(nextCard);

            this.organizationViewCards.push(nextCard);

            this.viewCardIndex++;

            for (var i = 0; i < this.swingCards.toArray.length; i++) {
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
            }
        }
    }

    private setUpViewCards() {
        this.viewCardIndex = this.numberOfCardsToHaveInView;

        for (var i: number = 0; i < this.numberOfCardsToHaveInView; i++) {
            if (this.filteredCards[i]) {
                this.imageService.setDealImageURL(this.filteredCards[i]);

                this.organizationViewCards.push(this.filteredCards[i]);
            }
        }
    }

    //used simply to async wait for something
    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private randomNumber(): string {
        return String(Math.floor(1000 + Math.random() * 9000));
    }

    public openProfile() {
        this.modalCtrl.create(UserProfileComponent, { isOrganization: false }).present();
    }

    public getMomentFormatted(dateTime: string, format: string): string {
        return moment(dateTime).format(format);
    }
}