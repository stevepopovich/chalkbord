import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from "@angular/core";
import { LocaleCard, DealType } from '../../types/deals.type';
import { CallNumber } from '@ionic-native/call-number';
import * as moment from 'moment';

@Component({
    templateUrl: './more-card-info.component.html',
    selector: 'more-card-info',
    styleUrls: ['/more-card-info.component.scss']
})
export class MoreCardInfoComponent {
    public card: LocaleCard;

    public dealType: string;

    constructor(private navParams: NavParams, private ionicViewController: ViewController,
        private callNumber: CallNumber, private launchNavigator: LaunchNavigator) {
        this.card = this.navParams.get("card");

        this.dealType = DealType[this.card.dealType.valueOf()];
    }

    public goToWebsite() {
        if (this.card.organization.website.startsWith("http"))
            window.open(this.card.organization.website, '_system');
        else
            window.open("http://" + this.card.organization.website, '_system');
    }

    public goToLocation() {
        this.launchNavigator.navigate(this.card.organization.address);
    }

    public callPhoneNumber() {
        this.callNumber.callNumber(this.card.organization.phoneNumber.toString(), true)
    }

    public getMomentFormatted(dateTime: string, format: string): string {
        return moment(dateTime).format(format);
    }

    public getPhoneFormatted(phoneNumber: number): string {
        const areaCode = phoneNumber.toString().substring(0, 3);
        const firstThree = phoneNumber.toString().substring(3, 6);
        const lastFour = phoneNumber.toString().substring(6, 10);
        return "(" + areaCode + ")" + firstThree + "-" + lastFour;
    }

    public getDealTypeIcon(): string {
        if (this.card.dealType == DealType.Drinks)
            return "beer";
        else if (this.card.dealType == DealType.Food)
            return "pizza";
    }

    public swipeGesture() {
        this.ionicViewController.dismiss();
    }
}