import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { GSUser, UserType } from '../../types/user.type';
import { DeviceService, EmailPasswordTuple } from "../../services/device.service";
import { ToastService } from "../../services/toast.service";

const userEmailPasswordComboKey = "userEmailCombo";
const rememberMeUserKey = "rememberMeUser";

@Component({
    templateUrl: './user-signup.component.html',
    selector: 'user-signup',
    styleUrls: ['/user-signup.component.scss']
})
export class UserSignUpComponent implements AfterViewInit{
    @ViewChild('welcomeScreen') welcomeScreen: ElementRef;
    @ViewChild('logInScreen') logInScreen: ElementRef;
    @ViewChild('userSignUpFields') userSignUpScreen: ElementRef;
    @ViewChild('goBackButton') goBackButton;

    public userSignUpGroup: FormGroup;
    public userLogInGroup: FormGroup;

    public signingUp: boolean = true;

    public isRest: boolean = false;

    public attemptingSignup: boolean = false;
    public attemptingLogin: boolean = false;

    public remembered = false;

    public constructor(private formBuilder: FormBuilder, private auth: AuthorizationService, 
        private viewControl: ViewControllerService, private deviceService: DeviceService, 
        public toastService: ToastService){
        this.userSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            name: [''],
            rememberMe: ['']
        });

        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });

        this.deviceService.getSetting(rememberMeUserKey).then((rememberMe: boolean) => {
            if(rememberMe){
                this.deviceService.getUserEmailPasswordFromLocalStorage(userEmailPasswordComboKey).then((emailPasswordTup: EmailPasswordTuple) => {
                    if(emailPasswordTup){
                        this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
                        this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
        
                        this.login();
                    }
                });
            }
        });
    }

    ngAfterViewInit(): void {//bit of a hack, bit it is for security 
        if(this.auth.checkUserIsLoggedIn()){//user is logged in, possibly from switching screens
            this.auth.userSignOut();
        }
    }

    public signUp(): void{
        if(this.userSignUpGroup.valid){
            this.toastService.showReadableToast("Signing you up...welcome!");

            const email: string = this.userSignUpGroup.get("email").value;
            const password: string = this.userSignUpGroup.get("password").value;
            const confrimPassword: string = this.userSignUpGroup.get("confirmPassword").value;
            const firstName: string = this.userSignUpGroup.get("name").value;

            if(password == confrimPassword)
            {
                var userType: UserType = UserType.Consumer;
    
                this.auth.checkUserSignInMethods(email).then((methods) => {
                    if(!methods || methods.length < 1){//if user not in db
                        this.attemptingSignup = true;
                        this.auth.signUpUser(email, password).then(() => {
                            this.auth.signIn(email, password).then(() => {
                                this.handleRememberMe(this.userSignUpGroup);

                                const newUser = new GSUser(this.auth.fireAuth.auth.currentUser.uid, userType, firstName);
            
                                this.auth.currentUser = newUser;
            
                                this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());

                                this.setAppropiateView();
            
                            }).catch((reason) => {//couldn't sign in 
                                this.toastService.showReadableToast("Sorry, that didn't work beacuase " + reason);

                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch((reason) => {//couldn't sign up
                            this.toastService.showReadableToast("Sorry, that didn't work beacause " + reason);

                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else{
                        this.toastService.showReadableToast("Sorry, that email is already signed up.");

                        console.error("User account already exists");//user account already exists
                    }
                }).catch((reason) => {//couldn't check sign in methods
                    this.toastService.showReadableToast("Sorry, that didn't work, please contact support.");

                    console.error("Sign up failed because: " + reason);
                });
            }
            else{
                this.toastService.showReadableToast("Please make sure your passwords match.");

                console.error("Passwords do not match");
            }
        }
        else{
            var display: string = "";

            if(this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";

            this.toastService.showReadableToast(display);

            console.error("Fields are invalid");
        }
    }
    
    public loginHandler(): void{
        this.handleRememberMe(this.userLogInGroup);

        this.login();
    }

    public login(): void{
        if(this.userLogInGroup.valid){
            this.toastService.showReadableToast("Logging you in...welcome back!");

            const email = this.userLogInGroup.get("email").value;

            this.auth.checkUserSignInMethods(email).then((methods) => {
                if(methods.length > 0){//if user not in db
                    this.auth.signIn(email, this.userLogInGroup.get("password").value,).then(() => {
                        this.auth.getCurrentUserData().subscribe((users: GSUser[]) => {
                            this.auth.currentUser = users[0];//there SHOULD be only one

                            this.setAppropiateView();
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

            if(this.userLogInGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userLogInGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";

            this.toastService.showReadableToast(display);

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

    public handleRememberMe(formGroup: FormGroup){
        const rememberMe: boolean = formGroup.get("rememberMe").value;

        this.deviceService.putSetting(rememberMeUserKey, rememberMe);

        if(rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(userEmailPasswordComboKey, formGroup.get("email").value, formGroup.get("password").value);
    }

    public resetPassword(): void {
        const emailControl = this.userLogInGroup.get("email");

        if(emailControl.valid){
            this.auth.checkUserSignInMethods(emailControl.value).then((methods) => {
                if(methods.length > 0){
                    this.auth.fireAuth.auth.sendPasswordResetEmail(emailControl.value).then(() => {
                        this.toastService.showReadableToast("Cool, a reset link was sent to your email.");
                    }).catch((reason) => {
                        this.toastService.showReadableToast("Sorry, couldn't send you a reset link because: " + reason)
                    });
                }
                else
                    this.toastService.showReadableToast("We don't have that email signed up. Please sign up!");
            })
        }
        else{
            this.toastService.showReadableToast("Please check your email is valid");
        }
    }

    /**
     * Ugly css animations
     */
    public goToUserSignUpScreen(): void {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.userSignUpScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }

    public goToLoginScreen(): void {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.logInScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }

    public goBackAScreen(): void {
        this.welcomeScreen.nativeElement.style['left'] = "0%";
        this.logInScreen.nativeElement.style['left'] = "100%";
        this.userSignUpScreen.nativeElement.style['left'] = "100%";
        this.goBackButton.nativeElement.style['bottom'] = "-10%";
    }
}