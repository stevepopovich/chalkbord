import { Component } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
import { LocaleView } from "../../types/locale-view.type";

@Component({
    templateUrl: './organization-deals-home.component.html',
    selector: 'organization-deals-home',
    styleUrls: ['/organization-deals-home.component.scss']
})

export class OrganizationDealsHomeComponent extends LocaleView {
    public root: any = DealEditorComponent;
}