import { AlertController } from 'ionic-angular';
import { OrganizationSignupComponent } from './../organization-signup/organization-signup.component';
import { RememberMeService } from './../../services/remember-me.service';
import { UserLoginFormGroup } from './../../types/user-login-form-group.type';
import { LoginService } from './../../services/login.service';
import { CurrentUserService } from './../../services/current-user.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/firebase/authorization.service";
import { LocaleUser, UserType } from '../../types/user.type';
import { ToastService } from "../../services/toast.service";
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { OrganizationService } from '../../services/firebase/firestore-collection/organization-service';

@Component({
    templateUrl: './consumer-landing.component.html',
    selector: 'consumer-landing',
    styleUrls: ['/consumer-landing.component.scss']
})
export class ConsumerLandingComponent extends OrganizationSignupComponent implements AfterViewInit {
    @ViewChild('welcomeScreen') welcomeScreen: ElementRef;
    @ViewChild('logInScreen') logInScreen: ElementRef;
    @ViewChild('userSignUpFields') userSignUpScreen: ElementRef;
    @ViewChild('goBackButton') goBackButton;
    @ViewChild('userTypeChoiceFields') userTypeChoiceFields: ElementRef;
    @ViewChild('restaurantSignUpFields') restaurantSignUpFields: ElementRef;

    public userSignUpGroup: FormGroup;
    public userLogInGroup: UserLoginFormGroup;
    public signingUp: boolean = true;
    public isOrg: boolean = false;
    public attemptingSignup: boolean = false;
    public attemptingLogin: boolean = false;
    public remembered = false;

    public constructor(formBuilder: FormBuilder, auth: AuthorizationService,
        rememberMeService: RememberMeService, alert: AlertController, organizationService: OrganizationService,
        toastService: ToastService, currentUserService: CurrentUserService,
        userService: UserService, loginService: LoginService) {

        super(toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService);

        this.userSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            name: ['', Validators.required],
            rememberMe: ['']
        });

        this.userLogInGroup = new UserLoginFormGroup(this.formBuilder);
    }

    public ngAfterViewInit(): void {
        //this.rememberMeService.loginFromRememberMe(this.userLogInGroup, UserType.Consumer);
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    }

    public signUpUser(): void {
        if (this.userSignUpGroup.valid) {
            this.toastService.showReadableToast("Signing you up...welcome!");

            const email: string = this.userSignUpGroup.get("email").value;
            const password: string = this.userSignUpGroup.get("password").value;
            const confrimPassword: string = this.userSignUpGroup.get("confirmPassword").value;
            const firstName: string = this.userSignUpGroup.get("name").value;

            if (password == confrimPassword) {
                var userType: UserType = UserType.Consumer;

                this.auth.checkSignInMethods(email).then((methods) => {
                    if (!methods || methods.length < 1) {//if user not in db
                        this.attemptingSignup = true;
                        this.auth.signUp(email, password).then(() => {//todo undo sign up if sign in fails
                            this.auth.signIn(email, password).then(() => {
                                this.rememberMeService.handleRememberMeSetting(this.userSignUpGroup, UserType.Consumer);

                                const newUser = new LocaleUser(this.auth.getCurrentUserUID(), userType, firstName);

                                this.currentUserService.setCurrentUser(newUser);

                                this.userService.set(newUser);

                                this.loginService.setAppropiateView();

                            }).catch((reason) => {//couldn't sign in 
                                this.toastService.showReadableToast("Sorry, that didn't work beacuase " + reason);

                                console.error("Sign up failed because: " + reason);
                            });
                        }).catch((reason) => {//couldn't sign up
                            this.toastService.showReadableToast("Sorry, that didn't work beacause " + reason);

                            console.error("Sign up failed because: " + reason);
                        });
                    }
                    else {
                        this.toastService.showReadableToast("Sorry, that email is already signed up.");

                        console.error("User account already exists");//user account already exists
                    }
                }).catch((reason) => {//couldn't check sign in methods
                    this.toastService.showReadableToast("Sorry, that didn't work, please contact support.");

                    console.error("Sign up failed because: " + reason);
                });
            }
            else {
                this.toastService.showReadableToast("Please make sure your passwords match.");

                console.error("Passwords do not match");
            }
        }
        else {
            var display: string = "";

            if (this.userSignUpGroup.get("email").invalid)
                display += "Please be sure your email is formatted correctly. ";

            if (this.userSignUpGroup.get("password").invalid)
                display += "Please be sure your password is at least eight characters long and both passwords match. ";

            this.toastService.showReadableToast(display);

            console.error("Fields are invalid");
        }
    }

    public loginHandler(): void {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, UserType.Consumer);

        this.loginService.login(this.userLogInGroup);
    }

    public resetPassword(): void {
        const emailControl = this.userLogInGroup.get("email");

        if (emailControl.valid) {
            this.auth.checkSignInMethods(emailControl.value).then((methods) => {
                if (methods.length > 0) {
                    this.auth.sendPasswordResetEmail(emailControl.value).then(() => {
                        this.toastService.showReadableToast("Cool, a reset link was sent to your email.");
                    }).catch((reason) => {
                        this.toastService.showReadableToast("Sorry, couldn't send you a reset link because: " + reason)
                    });
                }
                else
                    this.toastService.showReadableToast("We don't have that email signed up. Please sign up!");
            })
        }
        else {
            this.toastService.showReadableToast("Please check your email is valid");
        }
    }

    /**
     * Ugly css animations
     */
    public goBackAScreen(): void {
        if (this.userTypeChoiceFields.nativeElement.style['left'] == "0%") {
            this.welcomeScreen.nativeElement.style['left'] = "0%";
            this.userTypeChoiceFields.nativeElement.style['left'] = "100%";
            this.goBackButton.nativeElement.style['bottom'] = "-10%";
        } else if (this.logInScreen.nativeElement.style['left'] == "0%") {
            this.welcomeScreen.nativeElement.style['left'] = "0%";
            this.logInScreen.nativeElement.style['left'] = "100%";
            this.goBackButton.nativeElement.style['bottom'] = "-10%";
        } else if (this.userSignUpScreen.nativeElement.style['left'] == "0%") {
            this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
            this.userSignUpScreen.nativeElement.style['left'] = "100%";
        } else if (this.restaurantSignUpFields.nativeElement.style['left'] == "0%") {
            this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
            this.restaurantSignUpFields.nativeElement.style['left'] = "100%";
        }
    }

    public goToLoginScreen(): void {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.logInScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }

    public goToUserTypeScreen(): void {
        this.welcomeScreen.nativeElement.style['left'] = "-100%";
        this.userTypeChoiceFields.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }

    public goToUserSignUpScreen(): void {
        this.userTypeChoiceFields.nativeElement.style['left'] = "-100%";
        this.userSignUpScreen.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }

    public goToRestaurantSignUpScreen(): void {
        this.userTypeChoiceFields.nativeElement.style['left'] = "-100%";
        this.restaurantSignUpFields.nativeElement.style['left'] = "0%";
        this.goBackButton.nativeElement.style['bottom'] = "2%";
    }
}