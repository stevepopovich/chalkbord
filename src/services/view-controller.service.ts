import { ToastService } from './toast.service';
import { OrganizationDealsHomeComponent } from './../components/organization-deals-home/organization-deals-home.component';
import { OrganizationLandingComponent } from './../components/organization-landing/organization-landing.component';
import { BrowserHomeComponent } from './../components/browser-home/browser-home.component';
import { ConsumerComponent } from './../components/consumer/consumer.component';
import { Injectable } from "@angular/core";
import { ConsumerLandingComponent } from '../components/consumer-landing/consumer-landing.component';
import { LocaleView } from '../types/locale-view.type';

@Injectable()
export class ViewControllerService {//TODO bag up this entire system
    public consumer: Boolean = false;
    public userLanding: Boolean = false;
    public browserHome: Boolean = false;
    public organizationLanding: Boolean = false;
    public organizationDealsHome: Boolean = false;

    constructor() {
    }

    public setConsumerView() {
        this.consumer = true;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    }

    public setSignUpView() {
        this.consumer = false;
        this.userLanding = true;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    }

    public setBrowserHome() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = true;
        this.organizationLanding = false;
        this.organizationDealsHome = false;
    }

    public setOrganizationPortal() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = true;
        this.organizationDealsHome = false;
    }

    public setOrganizationHome() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationLanding = false;
        this.organizationDealsHome = true;
    }

    public setView(viewComponent: LocaleView) {
        viewComponent;
    }
}