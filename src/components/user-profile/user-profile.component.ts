import { CurrentUserService } from './../../services/current-user.service';
import { Component, ViewChild } from "@angular/core";
import { ViewController, Button, NavParams } from "ionic-angular";
import { AuthorizationService } from "../../services/firebase/authorization.service";
import { ToastService } from "../../services/toast.service";
import { LocaleUser } from "../../types/user.type";
import { UserService } from '../../services/firebase/firestore-collection/user.service';

//Used in modal with orgs and consumers
@Component({
    templateUrl: './user-profile.component.html',
    selector: 'user-profile',
    styleUrls: ['/user-profile.component.scss']
})
export class UserProfileComponent {
    @ViewChild('editButton') editButton: Button;

    public isOrganization: boolean;

    public userEmail: string;
    public firstName: string;


    constructor(private viewCtrl: ViewController,
        private authService: AuthorizationService, private toastService: ToastService,
        private params: NavParams, private currentUserService: CurrentUserService,
        private userService: UserService) {

        this.isOrganization = this.params.get("isOrganization");

        this.userEmail = this.authService.getCurrentUserEmail();
        this.firstName = this.currentUserService.getCurrentUser().firstName;
    }

    public save() {
        if (this.authService.getCurrentUserEmail() != this.userEmail) {
            this.authService.updateCurrentUserEmail(this.userEmail).then(() => {
                this.toastService.showReadableToast("Email updated, use this email for future log ins");
            }).catch(() => {
                //this.toastService.showReadableToast("Email not updated: " + reason);
            });
        }

        if (this.currentUserService.getCurrentUser().firstName != this.firstName) {
            const currUser: LocaleUser = this.currentUserService.getCurrentUser();

            currUser.firstName = this.firstName;

            this.userService.set(currUser).then(() => {
                this.toastService.showReadableToast("First name updated");
            }).catch(() => {
                //this.toastService.showReadableToast("Firstser not updated: " + reason);
            });
        }
    }

    public valueChanged() {
        return this.authService.getCurrentUserEmail() != this.userEmail || this.currentUserService.getCurrentUser().firstName != this.firstName;
    }

    public closeProfile() {
        this.viewCtrl.dismiss();
    }
}