import { NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LocaleCard, DealType } from '../../types/deals.type';

@Component({
    templateUrl: './more-card-info.component.html',
    selector: 'more-card-info',
    styleUrls: ['/more-card-info.component.scss']
})
export class MoreCardInfoComponent{ 
    public card: LocaleCard;

    public dealType: string;

    constructor(private navParams: NavParams, private launchNavigator: LaunchNavigator){
        this.card = this.navParams.get("card");

        this.dealType = DealType[this.card.dealType.valueOf()];
    }

    public goToLocation() {
        this.launchNavigator.navigate(this.card.organization.address);
    }
}