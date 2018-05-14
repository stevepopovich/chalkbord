import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { GSUser, UserType } from '../../types/user.type';
import { ToastController } from "ionic-angular";
import { DeviceService, EmailPasswordTuple } from "../../services/device.service";

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

    public constructor(private formBuilder: FormBuilder, private auth: AuthorizationService, private viewControl: ViewControllerService, public toastCtrl: ToastController, private deviceService: DeviceService){
        this.userSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });

        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });

        this.deviceService.getRememberMeSetting().then((rememberMe: boolean) => {
            if(rememberMe){
                this.deviceService.getUserEmailPasswordFromLocalStorage().then((emailPasswordTup: EmailPasswordTuple) => {
                    if(emailPasswordTup){
                        this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
                        this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
        
                        this.login();
                    }
                });
            }
        });
    }

    ngAfterViewInit(): void {
        if(this.auth.checkUserIsLoggedIn()){//user is logged in, possibly from switching screens
            this.auth.userSignOut();
        }
    }

    public signUp(): void{
        if(this.userSignUpGroup.valid){
            this.showReadableToast("Signing you up...welcome!");

            const email: string = this.userSignUpGroup.get("email").value;
            const password: string = this.userSignUpGroup.get("password").value;
            const confrimPassword: string = this.userSignUpGroup.get("confirmPassword").value;

            if(password == confrimPassword)
            {
                var userType: UserType = UserType.Consumer;
    
                this.auth.checkUserSignInMethods(email).then((methods) => {
                    if(!methods || methods.length < 1){//if user not in db
                        this.attemptingSignup = true;
                        this.auth.signUpUser(email, password).then(() => {
                            this.auth.signIn(email, password).then(() => {
                                this.handleRememberMe(this.userSignUpGroup);

                                const newUser = new GSUser(this.auth.fireAuth.auth.currentUser.uid, userType);
            
                                this.auth.currentUser = newUser;
            
                                this.auth.userCollection.doc(newUser.uid).set(newUser.getAsPlainObject());

                                this.setAppropiateView();
            
                            }).catch((reason) => {//couldn't sign in 
                                this.showReadableToast("Sorry, that didn't work beacuase " + reason);

                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch((reason) => {//couldn't sign up
                            this.showReadableToast("Sorry, that didn't work beacause " + reason);

                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else{
                        this.showReadableToast("Sorry, that email is already signed up.");

                        console.error("User account already exists");//user account already exists
                    }
                }).catch((reason) => {//couldn't check sign in methods
                    this.showReadableToast("Sorry, that didn't work, please contact support.");

                    console.error("Sign up failed because: " + reason);
                });
            }
            else{
                this.showReadableToast("Please make sure your passwords match.");

                console.error("Passwords do not match");
            }
        }
        else{
            var display: string = "";

            if(this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";

            this.showReadableToast(display);

            console.error("Fields are invalid");
        }
    }
    
    public loginHandler(): void{
        this.handleRememberMe(this.userLogInGroup);

        this.login();
    }

    public login(): void{
        if(this.userLogInGroup.valid){
            this.showReadableToast("Logging you in...welcome back!");

            const email = this.userLogInGroup.get("email").value;

            this.auth.checkUserSignInMethods(email).then((methods) => {
                if(methods.length > 0){//if user not in db
                    this.auth.signIn(email, this.userLogInGroup.get("password").value,).then(() => {
                        this.auth.getCurrentUserData();

                        this.setAppropiateView();
                    }).catch((reason) => {
                        this.showReadableToast("Double check your password");

                        console.error("Sign in didn't work because: " + reason);
                    });
                }
                else{
                    this.showReadableToast("Sorry, we dont have that username signed up. Please sign up.");

                    console.error("User does not exist!");
                }
            }).catch((reason) => {
                this.showReadableToast("Sign in didn't work because: " + reason);

                console.error("User does not exist!");
            });
        }
        else{
            var display: string = "";

            if(this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if(this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long. ";

            this.showReadableToast(display);

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

    public showReadableToast(message: string){
        const wordCount = message.split(" ").length;

        const wordsPerMinute = 210;//resonable words per minute someone can read on a computer

        const wordTime = ((wordCount/wordsPerMinute) *
                            (60*1000)) +//convert to milliseconds
                            1500;//delay to see the notification toast;

        let toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom"
        });

        toast.present();
    }

    public handleRememberMe(formGroup: FormGroup){
        const rememberMe: boolean = formGroup.get("rememberMe").value;

        this.deviceService.putRememberMeSetting(rememberMe);

        if(rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(formGroup.get("email").value, formGroup.get("password").value);
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