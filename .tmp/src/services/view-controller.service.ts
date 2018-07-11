import { Injectable } from "@angular/core";
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