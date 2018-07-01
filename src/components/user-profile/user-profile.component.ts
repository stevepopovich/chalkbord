import { Component, ViewChild } from "@angular/core";
import { DeviceService } from "../../services/device.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { ModalController, ViewController, Button, NavParams, App } from "ionic-angular";
import { AuthorizationService } from "../../services/authorization.service";
import { ToastService } from "../../services/toast.service";
import { GSUser } from "../../types/user.type";

const rememberMeUserKey = "rememberMeUser";//dont change this unless you want to change the other one is user-signup
const rememberMeRestKey = "rememberMeRest";//this either

@Component({
    templateUrl: './user-profile.component.html',
    selector: 'user-profile',
    styleUrls: ['/user-profile.component.scss']
})

export class UserProfileComponent {
    @ViewChild('editButton') editButton: Button;

    public isRestaurant: boolean;

    public userEmail: string;
    public firstName: string;

    public emailDisabled: boolean = true;

    public editButtonText: string = "edit";

    constructor(public deviceService: DeviceService, public viewController: ViewControllerService, 
        public modalCtrl: ModalController, public viewCtrl: ViewController, 
        public authService: AuthorizationService, public toastService: ToastService, 
        private params: NavParams, private app: App){

        this.isRestaurant = this.params.get("isRestaurant");

        this.userEmail = this.authService.fireAuth.auth.currentUser.email; 
        this.firstName = this.authService.currentUser.firstName;
    }

    public toggleEdit(){
        if(!this.isRestaurant) {
            if(this.emailDisabled){
                this.emailDisabled = false;
    
                this.editButtonText = "save";
            }
            else{
                if(this.authService.fireAuth.auth.currentUser.email != this.userEmail){
                    this.authService.fireAuth.auth.currentUser.updateEmail(this.userEmail).then(() => {
                        this.toastService.showReadableToast("Cool, email is updated");
                    }).catch((reason) => {
                        this.toastService.showReadableToast("Email not updated: " + reason);
                    });
                }
    
                if(this.authService.currentUser.firstName != this.firstName){
                    const currUser: GSUser = Object.assign({}, this.authService.currentUser);
    
                    currUser.firstName = this.firstName;
    
                    this.authService.updateUserInDatabase(currUser).then(() => {
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

    public logout(){
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if(dismissType == "close"){
                if(this.isRestaurant){
                    this.deviceService.putSetting(rememberMeRestKey, false);

                    this.viewController.setBrowserHome();
                } else {
                    this.deviceService.putSetting(rememberMeUserKey, false);

                    this.viewController.setSignUpView();
                }

                this.viewCtrl.dismiss();
            }
        });

        toast.present();
    }

    public closeProfile(){
        this.viewCtrl.dismiss();
    }

    public resetPassword(): void {
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to reset your password?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if(dismissType == "close"){
                var currentEmail = this.authService.fireAuth.auth.currentUser.email;

                if(currentEmail){
                    this.authService.checkUserSignInMethods(currentEmail).then((methods) => {
                        if(methods.length > 0){
                            this.authService.fireAuth.auth.sendPasswordResetEmail(currentEmail).then(() => {
                                this.toastService.showReadableToast("Cool, a reset link was sent to your email.");
                            }).catch((reason) => {
                                this.toastService.showReadableToast("Sorry, couldn't send you a reset link because: " + reason)
                            });
                        }
                        else
                            this.toastService.showReadableToast("We don't have that email signed up. Please sign up!");
                    });
                }
                else{
                    this.toastService.showReadableToast("Are you logged in? Please contact support");
                }
            }
        });

        toast.present();
    }

    public yourCards() {
        this.app.getRootNav().push();
    }
}