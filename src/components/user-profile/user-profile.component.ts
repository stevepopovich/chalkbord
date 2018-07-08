import { CurrentUserService } from './../../services/current-user.service';
import { Component, ViewChild } from "@angular/core";
import { ViewController, Button, NavParams, NavController } from "ionic-angular";
import { AuthorizationService } from "../../services/firebase/authorization.service";
import { ToastService } from "../../services/toast.service";
import { LocaleUser } from "../../types/user.type";
import { ConsumerCardList } from "../consumer-card-list/consumer-card-list.component";
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

    public emailDisabled: boolean = true;

    public editButtonText: string = "edit";

    constructor(private viewCtrl: ViewController,
        private authService: AuthorizationService, private toastService: ToastService,
        private params: NavParams, private navCtrl: NavController, private currentUserService: CurrentUserService,
        private userService: UserService) {

        this.isOrganization = this.params.get("isOrganization");

        this.userEmail = this.authService.getCurrentUserEmail();
        this.firstName = this.currentUserService.getCurrentUser().firstName;
    }

    public toggleEdit() {
        if (!this.isOrganization) {
            if (this.emailDisabled) {
                this.emailDisabled = false;

                this.editButtonText = "save";
            }
            else {
                if (this.authService.getCurrentUserEmail() != this.userEmail) {
                    this.authService.updateCurrentUserEmail(this.userEmail).then(() => {//.auth.currentUser.updateEmail(this.userEmail).then(() => {
                        this.toastService.showReadableToast("Cool, email is updated");
                    }).catch((reason) => {
                        this.toastService.showReadableToast("Email not updated: " + reason);
                    });
                }

                if (this.currentUserService.getCurrentUser().firstName != this.firstName) {
                    const currUser: LocaleUser = this.currentUserService.getCurrentUser();

                    currUser.firstName = this.firstName;

                    this.userService.updateUserInDatabase(currUser).then(() => {
                        this.toastService.showReadableToast("Cool, user name is updated");
                    }).catch((reason) => {
                        this.toastService.showReadableToast("User not updated: " + reason);
                    });
                }

                this.emailDisabled = true;

                this.editButtonText = "edit";
            }
        }
    }

    public closeProfile() {
        this.viewCtrl.dismiss();
    }

    public resetPassword(): void {
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to reset your password?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if (dismissType == "close") {
                var currentEmail = this.authService.getCurrentUserEmail()//fireAuth.auth.currentUser.email;

                if (currentEmail) {
                    this.authService.checkSignInMethods(currentEmail).then((methods) => {
                        if (methods.length > 0) {
                            this.authService.sendPasswordResetEmail(currentEmail).then(() => {
                                this.toastService.showReadableToast("Cool, a reset link was sent to your email.");
                            }).catch((reason) => {
                                this.toastService.showReadableToast("Sorry, couldn't send you a reset link because: " + reason)
                            });
                        }
                        else
                            this.toastService.showReadableToast("We don't have that email signed up. Please sign up!");
                    });
                }
                else {
                    this.toastService.showReadableToast("Are you logged in? Please contact support");
                }
            }
        });

        toast.present();
    }

    public yourCards() {//WIP
        this.navCtrl.push(ConsumerCardList);
    }
}