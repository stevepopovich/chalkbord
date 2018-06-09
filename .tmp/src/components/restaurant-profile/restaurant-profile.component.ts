import { Component } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";

@Component({
    templateUrl: './restaurant-profile.component.html',
    selector: 'restaurant-profile',
    styleUrls: ['/restaurant-profile.component.scss']
})

export class RestaurantProfileComponent{
    public root: any = DealEditorComponent;
}