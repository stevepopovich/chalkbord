import { Injectable } from "@angular/core";

@Injectable()
export class ViewControllerService {//TODO bag up this entire system
    public consumer: Boolean = false;
    public userLanding: Boolean = false;
    public browserHome: Boolean = false;
    public organizationDealsHome: Boolean = false;

    constructor() {
    }

    public setConsumerView() {
        this.consumer = true;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationDealsHome = false;
    }

    public setSignUpView() {
        this.consumer = false;
        this.userLanding = true;
        this.browserHome = false;
        this.organizationDealsHome = false;
    }

    public setBrowserHome() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = true;
        this.organizationDealsHome = false;
    }

    public setOrganizationPortal() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationDealsHome = false;
    }

    public setOrganizationHome() {
        this.consumer = false;
        this.userLanding = false;
        this.browserHome = false;
        this.organizationDealsHome = true;
    }
}