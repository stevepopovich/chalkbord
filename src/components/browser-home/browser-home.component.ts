import { Component } from "@angular/core";
import { ViewControllerService } from "../../services/view-controller.service";

@Component({
    templateUrl: './browser-home.component.html',
    selector: 'browser-home',
    styleUrls: ['/browser-home.component.scss']
})
export class BrowserHomeComponent {

    constructor(private viewController: ViewControllerService) {

    }

    public showOrganizationPortal() {
        this.viewController.setOrganizationPortal();
    }

    public contact() {

    }
}