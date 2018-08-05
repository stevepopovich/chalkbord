import { NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { LocaleCard, DealType } from '../../types/deals.type';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import * as moment from 'moment';

@Component({
    templateUrl: './more-card-info.component.html',
    selector: 'more-card-info',
    styleUrls: ['/more-card-info.component.scss']
})
export class MoreCardInfoComponent {
    public card: LocaleCard;

    public dealType: string;

    constructor(private navParams: NavParams, private iab: InAppBrowser) {
        this.card = this.navParams.get("card");

        this.dealType = DealType[this.card.dealType.valueOf()];
    }

    public goToLocation() {
        this.iab.create("http://www.google.com/search?q=" + this.card.organization.name);
        //this.launchNavigator.navigate(this.card.organization.address);
    }

    public getMomentFormatted(dateTime: string, format: string): string {
        return moment(dateTime).format(format);
    }
}