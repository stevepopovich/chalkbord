import { Component } from "@angular/core";
import { ViewControllerService } from "../../services/view-controller.service";
import { LocaleView } from "../../types/locale-view.type";

@Component({
    templateUrl: './browser-home.component.html',
    selector: 'browser-home',
    styleUrls: ['/browser-home.component.scss']
})
export class BrowserHomeComponent extends LocaleView {

    constructor(private viewController: ViewControllerService) {
        super();
    }

    public showOrganizationPortal() {
        this.viewController.setOrganizationPortal();
    }
}