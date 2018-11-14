import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { LocaleCard, DealType } from './../../types/deals.type';
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
import { FilterDealComponent, FilterDealsOptionsInterface, DayFilter } from '../filter-deals/filter-deal.component';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { AuthorizationService } from '../../services/firebase/authorization.service';
import { ImageService } from '../../services/firebase/image-service.service';
import { Subscription } from 'rxjs/Subscription';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MoreCardInfoComponent } from '../more-card-info/more-card-info.component';
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { CardDataService } from '../../services/firebase/firestore-collection/card-data.service';
import _ from 'underscore';
import moment from 'Moment';
import { ConsumerCardList } from '../consumer-card-list/consumer-card-list.component';
import { FirebaseEnvironmentService, FirebaseEnvironment } from '../../services/firebase/environment.service';
import { LocationCardsService } from '../../services/location-cards.service';
import { SplashScreen } from '@ionic-native/splash-screen';

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

    private moveCardIndex: number = 0;
    private viewCardIndex: number = 0;

    private likingCard: boolean = false;

    private animatingCard: boolean = false;

    public currentFilter: FilterDealsOptionsInterface = { dealTypes: [], onlyVegan: false, onlyVegetarian: false, dayFilter: DayFilter.anytime };

    public cards: LocaleCard[];

    public cardSubscription: Subscription;

    public currentLocation: LocaleLocation = new LocaleLocation();

    public initialLoading: boolean = true;

    public swipeHelpOverlayHidden: boolean = true;
    public auxHelpOverlayHidden: boolean = true;

    constructor(private alert: AlertController, private popoverCtrl: PopoverController,
        private launchNavigator: LaunchNavigator, private cardService: CardDataService, private authService: AuthorizationService,
        private imageService: ImageService, private modalCtrl: ModalController, private locationService: LocationCardsService,
        private currentUserService: CurrentUserService, private userService: UserService, private geolocation: Geolocation,
        private firebaseEnvironmentService: FirebaseEnvironmentService, private statusBar: StatusBar, private splashScreen: SplashScreen) {
        this.stackConfig = {
            throwOutConfidence: (offsetX, offsetY, element) => {
                const throwoutHorizontal = Math.abs(offsetX) / (element.offsetWidth / 4.0);
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
            allowedDirections: [Direction.LEFT, Direction.RIGHT],
        };
    }

    public ngAfterViewInit(): void {
        if (this.authService.checkLoggedIn) {
            if (this.locationService.cardModels && this.locationService.cardModels.length > 0) {
                this.setUpInitalViewCards(this.locationService.cardModels);
            }
            else {
                this.locationService.setUpCurrentLocationCards(this.geolocation, this.cardService, this.locationService.currentLocation).then((cardModels) => {
                    this.setUpInitalViewCards(cardModels);
                })
            }
        }

        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);

        this.delay(650).then(() => {
            this.splashScreen.hide();
        });

        this.viewCardIndex = this.numberOfCardsToHaveInView;
    }

    public ionViewDidEnter(): void {
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
    }

    private setUpInitalViewCards(cardModels: LocaleCard[]) {
        this.initialLoading = false;
        if (cardModels.length > 0) {
            cardModels = cardModels.filter((card) => {
                if (this.firebaseEnvironmentService.getCurrentEnvironment() == FirebaseEnvironment.Demo)
                    return !_.contains(this.currentUserService.getCurrentUser().cardIds, card.id) && !card.deleted;
                else {
                    return !_.contains(this.currentUserService.getCurrentUser().cardIds, card.id) &&
                        !card.deleted &&
                        moment(card.dealEnd).isAfter(moment());
                }
            })
            if (!this.cards) {
                this.cards = this.cardService.filterNonDuplicateDeals(cardModels as LocaleCard[]);

                this.cards = this.cards.sort(function (a, b) {
                    if (moment(a.dealStart).isAfter(b.dealStart))
                        return 1;
                    else
                        return -1;
                });

                this.filterCards(this.currentFilter);
            }
            else
                LocaleCard.findAndUpdateCards(this.organizationViewCards, cardModels as LocaleCard[]);
        }
    }

    public ngOnDestroy(): void {
        this.cardSubscription.unsubscribe();
    }

    public onItemMove(element, x, y, r): void {
        if (this.transitionString != "all 0.55s") // basically not being thrown out
            element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    }

    public openConsumerCardList() {
        this.modalCtrl.create(ConsumerCardList).present();
    }

    public hideHelpOverlay() {
        if (!this.swipeHelpOverlayHidden)
            this.swipeHelpOverlayHidden = true;
        else if (!this.auxHelpOverlayHidden)
            this.auxHelpOverlayHidden = true;
    }

    public showHelpOverlay() {
        this.swipeHelpOverlayHidden = false;
        this.auxHelpOverlayHidden = false;
    }

    public getSwipeHelpZ(): string {
        if (!this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '25';
        else
            return '0';
    }

    public getAuxHelpZ(): string {
        if (this.swipeHelpOverlayHidden && !this.auxHelpOverlayHidden)
            return '25';
        else
            return '0';
    }

    public getBottomGridZ() {
        if (this.swipeHelpOverlayHidden && this.auxHelpOverlayHidden)
            return '-10';
        else
            return '';
    }

    public voteUp(like: boolean): void {
        if (this.organizationViewCards.length > 0) {
            this.transitionString = "all 0.55s";

            if (like) {
                if (!this.likingCard) {
                    this.likingCard = true;

                    this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(1100px, 0px) rotate(40deg)`;

                    this.delay(300).then(() => {
                        this.handleCard(like);
                    });
                }
            }
            else {
                this.delay(300).then(() => {
                    this.handleCard(like);
                });

                this.swingCards.toArray()[this.moveCardIndex].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(-1100px, 0px) rotate(-40deg)`;
            }
        }
    }

    public moreInfo(): void {
        const cardSwipedUp = this.organizationViewCards.shift();

        this.modalCtrl.create(MoreCardInfoComponent, { card: cardSwipedUp, isCardList: false }).present().then(() => {
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

    public openFilterPopover(event) {
        var filterPopover = this.popoverCtrl.create(FilterDealComponent, this.currentFilter);

        filterPopover.onDidDismiss((data: FilterDealsOptionsInterface) => {
            if (data) {
                this.currentFilter = data;

                this.filterCards(data);
            }
        });

        filterPopover.present({
            ev: event,//pass the event in to put the popover in the right position on screen
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
            message: "Click the button in the top right to use your deal at the restaurant. Have fun!"
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
        this.filteredCards = [];

        for (var i = this.viewCardIndex - this.numberOfCardsToHaveInView; i < this.cards.length; i++)
            this.filteredCards.push(this.cards[i]);

        if (filterOptions.dealTypes.length > 0) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return filterOptions.dealTypes.findIndex(x => x == card.dealType) >= 0 || card.dealType == DealType.Meal;
            });
        }

        if (filterOptions.onlyVegan) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return card.isVegan;
            });
        }

        if (filterOptions.onlyVegetarian) {
            this.filteredCards = this.filteredCards.filter((card) => {
                return card.isVegetarian;
            });
        }

        if (filterOptions.dayFilter != DayFilter.anytime) {
            if (filterOptions.dayFilter == DayFilter.today) {
                this.filteredCards = this.filteredCards.filter((card) => {
                    return moment().dayOfYear() == moment(card.dealStart).dayOfYear() &&
                        moment().year() == moment(card.dealStart).year();
                });
            }
            else if (filterOptions.dayFilter == DayFilter.thisWeek) {
                this.filteredCards = this.filteredCards.filter((card) => {
                    return moment(card.dealStart).isBefore(moment().add('7', 'days')) &&
                        moment().year() == moment(card.dealStart).year();
                });
            }
        }

        this.filteredCards = this.filteredCards.sort(function (a, b) {
            if (moment(a.dealStart).isAfter(b.dealStart))
                return 1;
            else
                return -1;
        });

        this.setUpViewCards();

        this.delay(600).then(() => {//this sucks
            const topCard = this.swingCards.toArray()[0];

            if (topCard)
                topCard.getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
        });
    }

    private addCardToStack() {
        if (this.viewCardIndex < this.filteredCards.length && this.filteredCards[this.viewCardIndex] != null) {
            var nextCard = this.filteredCards[this.viewCardIndex];

            this.imageService.setDealImageURL(nextCard);

            this.organizationViewCards.push(nextCard);

            for (var i = 0; i < this.swingCards.toArray.length; i++) {
                this.swingCards.toArray()[i].getElementRef().nativeElement.style['transform'] = `translate3d(0, 0, 0) translate(0px, 0px) rotate(0deg)`;
            }
        }

        this.viewCardIndex++;
    }

    private setUpViewCards() {
        for (var i: number = 0; i < this.numberOfCardsToHaveInView; i++) {
            if (this.filteredCards[i]) {
                this.imageService.setDealImageURL(this.filteredCards[i]);

                this.organizationViewCards.push(this.filteredCards[i]);
            }
        }
    }

    public filterIsApplied(): boolean {
        return (this.currentFilter.dealTypes && this.currentFilter.dealTypes.length > 0)
            || this.currentFilter.onlyVegan
            || this.currentFilter.onlyVegetarian
            || this.currentFilter.dayFilter != DayFilter.anytime;
    }

    //used simply to async wait for something
    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public openProfile() {
        this.modalCtrl.create(UserProfileComponent, { isOrganization: false }).present();
    }

    public getMomentFormatted(dateTime: string, format: string): string {
        return moment(dateTime).format(format);
    }
}