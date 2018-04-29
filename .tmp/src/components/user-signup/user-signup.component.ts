import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { GSUser, UserType } from '../../types/user.type';
import { ToastController } from "ionic-angular";

@Component({
    templateUrl: './user-signup.component.html',
    selector: 'user-signup',
    styleUrls: ['/user-signup.component.scss']
})
export class UserSignUpComponent{
    public userFormGroup: FormGroup;

    public signingUp: boolean = false;

    public isRest: boolean = false;

    public attemptingSignup: boolean = false;
    public attemptingLogin: boolean = false;

    public constructor(private formBuilder: FormBuilder, private auth: AuthorizationService, private viewControl: ViewControllerService, public toastCtrl: ToastController){
        this.userFormGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            isRestuarant: [''],
        });
    }

    public signUp(): void{
        if(!this.signingUp){
            this.signingUp = true;
        }else if(this.userFormGroup.valid){
            this.showToast("Signing you up...welcome!");

            const email: string = this.userFormGroup.get("email").value;
            const password: string = this.userFormGroup.get("password").value;
            const confrimPassword: string = this.userFormGroup.get("password").value;

            if(password == confrimPassword)
            {
                var userType: UserType;
                if(this.userFormGroup.get("isRestuarant").value)
                    userType = UserType.Restaurant;
                else
                    userType = UserType.Consumer;
    
                this.auth.checkUserSignInMethods(email).then((methods) => {
                    if(!methods || methods.length < 1){//if user not in db
                        this.attemptingSignup = true;
                        this.auth.signUpUser(email, password).then(() => {
                            this.auth.signIn(email, password).then(() => {
                                const newUser = new GSUser(this.auth.auth.auth.currentUser.uid, userType);
            
                                this.auth.currentUser = newUser;
            
                                this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());

                                this.setAppropiateView();
            
                            }).catch((reason) => {//couldn't sign in 
                                this.showToast("Sorry, that didn't work beacuase " + reason);

                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch((reason) => {//couldn't sign up
                            this.showToast("Sorry, that didn't work beacause " + reason);

                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else{
                        this.showToast("Sorry, that email is already signed up.");

                        console.error("User account already exists");//user account already exists
                    }
                }).catch((reason) => {//couldn't check sign in methods
                    this.showToast("Sorry, that didn't work, please contact support.");

                    console.error("Sign up failed because: " + reason);
                });
            }
            else{
                this.showToast("Please make sure your passwords match.");

                console.error("Passwords do not match");
            }
        }
        else{
            var display: string = "";

            if(this.userFormGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userFormGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";

            this.showToast(display);

            console.error("Fields are invalid");
        }
    }
    
    public login(): void{
        if(this.userFormGroup.valid){
            this.attemptingLogin = true;

            this.showToast("Logging you in...welcome back!");

            const email = this.userFormGroup.get("email").value;

            this.auth.checkUserSignInMethods(email).then((methods) => {
                if(methods.length > 0){//if user not in db
                    this.auth.signIn(email, this.userFormGroup.get("password").value,).then(() => {
                        this.auth.getCurrentUserData();

                        this.setAppropiateView();
                    }).catch((reason) => {
                        this.showToast("Double check your password");

                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else{
                    this.showToast("Sorry, we dont have that username signed up. Please sign up.");

                    console.error("User does not exist!");
                }
            }).catch((reason) => {
                this.showToast("Sign in didn't work because: " + reason);

                console.error("User does not exist!");
            });
        }
        else{
            var display: string = "";

            if(this.userFormGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userFormGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";

            this.showToast(display);

            console.error("Fields are invalid");
        }
    }

    public setAppropiateView(): void{
        if(this.auth.checkUserType()){
            this.auth.checkUserType().subscribe((users: GSUser[]) => {
                if(users[0].userType == UserType.Restaurant)
                    this.viewControl.setDealMakerView();
                else
                    this.viewControl.setConsumerView();
            })
        }
    }

    public showToast(message: string){
        let toast = this.toastCtrl.create({
            message: message,
            duration: 6000,
            position: "bottom"
        });

        toast.present();
    }
}