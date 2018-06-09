import { Component } from "@angular/core";
import { AuthorizationService } from "../../services/authorization.service";

@Component({
    templateUrl: './restaurant-deal-maker.component.html',
    selector: 'restaurant-deal-maker',
    styleUrls: ['/restaurant-deal-maker.component.scss']
})
export class RestaurantDealMakerComponent{
    public constructor(private authService: AuthorizationService){
    }

    public hasCards(): boolean {
        return this.authService.currentUser 
        && this.authService.currentUser.cards 
        && this.authService.currentUser.cards.length > 0
      }
}



