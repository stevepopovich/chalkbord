import { Component } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";

@Component({
    templateUrl: './organization-deals-home.component.html',
    selector: 'organization-deals-home',
    styleUrls: ['/organization-deals-home.component.scss']
})

export class OrganizationDealsHomeComponent{
    public root: any = DealEditorComponent;
}