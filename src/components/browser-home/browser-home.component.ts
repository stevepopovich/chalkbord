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

    public goToGooglePlayStore() {
        window.open("https://play.google.com/store/apps/details?id=locale.alpha", '_system');
    }

    public goToAppleAppStore() {
        window.open("https://itunes.apple.com/us/app/chalkbord/id1376925008?ls=1&mt=8", '_system');
    }
}