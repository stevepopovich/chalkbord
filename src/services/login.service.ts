import { UserService } from './user.service';
import { CurrentUserService } from './current-user.service';
import { ToastService } from './toast.service';
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthorizationService } from './authorization.service';
import { GSUser, UserType } from '../types/user.type';
import { ViewControllerService } from './view-controller.service';

@Injectable()
export class LoginService {

    constructor(private toastService: ToastService, private authService: AuthorizationService,
        private currentUserService: CurrentUserService, private viewControllerService: ViewControllerService,
        private userService: UserService) {

    }

    public login(formGroup: FormGroup) {
        if(formGroup.valid){
            this.toastService.showReadableToast("Logging you in...welcome back!");

            const email = formGroup.get("email").value;

            this.authService.checkSignInMethods(email).then((methods) => {
                if(methods.length > 0){//if user not in db
                    this.authService.signIn(email, formGroup.get("password").value,).then(() => {
                        this.userService.getUserData(this.authService.getCurrentUserUID()).subscribe((users: GSUser[]) => {
                            if(!this.currentUserService.hasCurrentUser()){
                                this.currentUserService.setCurrentUser(users[0]);//there SHOULD be only one
                            
                                this.setAppropiateView();
                            }
                        });
                    }).catch((reason) => {
                        this.toastService.showReadableToast("Double check your password");

                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else{
                    this.toastService.showReadableToast("Sorry, we dont have that username signed up. Please sign up.");

                    console.error("User does not exist!");
                }
            }).catch((reason) => {
                this.toastService.showReadableToast("Sign in didn't work because: " + reason);

                console.error("User does not exist!");
            });
        }
        else{
            var display: string = "";

            if(formGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(formGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";

            this.toastService.showReadableToast(display);

            console.error("Fields are invalid");
        }
    }

    public setAppropiateView(){
        if(this.currentUserService.getCurrentUser().userType == UserType.Organization)
            this.viewControllerService.setRestaurantHome();
        else
            this.viewControllerService.setConsumerView();
    }
}