import { Component } from '@angular/core';

@Component({
    templateUrl: './chalkbord-website-info.component.html',
    selector: 'chalkbord-website-info',
    styleUrls: ['/chalkbord-website-info.component.scss']
})
export class ChalkbordWebsiteInfoComponent {
    public goToGooglePlayStore() {
        window.open("https://play.google.com/store/apps/details?id=locale.alpha", '_system');
    }

    public goToAppleAppStore() {
        window.open("https://itunes.apple.com/us/app/chalkbord/id1376925008?ls=1&mt=8", '_system');
    }
} 