import { NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { GSCard } from '../../types/deals.type';

@Component({
    templateUrl: './more-card-info.component.html',
    selector: 'more-card-info',
    styleUrls: ['/more-card-info.component.scss']
})
export class MoreCardInfoComponent{ 
    public card: GSCard;

    constructor(private navParams: NavParams, private launchNavigator: LaunchNavigator){
        this.card = this.navParams.get("card");
    }

    public goToLocation() {
        this.launchNavigator.navigate(this.card.restaurant.address);
    }
}