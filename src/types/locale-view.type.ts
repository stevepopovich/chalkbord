import { ConsumerLandingComponent } from './../components/consumer-landing/consumer-landing.component';
import { ConsumerComponent } from "../components/consumer/consumer.component";
import { BrowserHomeComponent } from '../components/browser-home/browser-home.component';
import { OrganizationLandingComponent } from '../components/organization-landing/organization-landing.component';
import { OrganizationDealsHomeComponent } from '../components/organization-deals-home/organization-deals-home.component';

/**
 * This is to simply signify that a component is used as one of the main views of the app
 * and is manipulated by the view controller service
 */
export class LocaleView {

}

/**
 * All the classes below extends LocaleView above
 */
export class Views {//from the six
    public static views =//a list of components usable for main app view
    {
        ConsumerComponent,
        ConsumerLandingComponent,
        BrowserHomeComponent,
        OrganizationLandingComponent,
        OrganizationDealsHomeComponent
    };
}