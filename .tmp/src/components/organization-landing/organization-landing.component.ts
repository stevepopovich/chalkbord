import { OrganizationService } from './../../services/firebase/firestore-collection/organization-service';
import { RememberMeService } from './../../services/remember-me.service';
import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/firebase/authorization.service";
import { ToastService } from "../../services/toast.service";
import { LocaleUser, UserType } from "../../types/user.type";
import { AlertController } from "ionic-angular";
import { LocaleLocation } from "../../types/location.type";
import { CurrentUserService } from "../../services/current-user.service";
import { LoginService } from "../../services/login.service";
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { Organization } from '../../types/organization.type';
import { LocaleView } from '../../types/locale-view.type';

@Component({
    templateUrl: './organization-landing.component.html',
    selector: 'organization-landing',
    styleUrls: ['/organization-landing.component.scss']
})
export class OrganizationLandingComponent extends LocaleView implements AfterViewInit {
    public userLogInGroup: FormGroup;
    public restSignUpGroup: FormGroup;

    public rememberMeLogIn: boolean = false;
    public rememberMeSignUp: boolean = false;

    public map: google.maps.Map;

    @ViewChild('signUpCard') signUpCard: ElementRef;

    constructor(public formBuilder: FormBuilder, private auth: AuthorizationService,
        private loginService: LoginService, private organizationService: OrganizationService,
        public toastService: ToastService, private alert: AlertController,
        private currentUserService: CurrentUserService, private userService: UserService, private rememberMeService: RememberMeService) {
        super();

        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });//new UserLoginFormGroup(this.formBuilder);

        this.restSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])],
            address: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            zipcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')])],
            name: ['', Validators.compose([Validators.required])],
            rememberMe: ['']
        });

        this.rememberMeService.loginFromRememberMe(this.userLogInGroup, UserType.Organization);
    }

    public ngAfterViewInit(): void {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    }

    public goToUserSignUpScreen(): void {
        this.signUpCard.nativeElement.scrollIntoView(true);
    }

    public loginHandler(): void {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, UserType.Organization);

        this.loginService.login(this.userLogInGroup);
    }

    public signUp(): void {
        if (this.restSignUpGroup.valid) {
            const address: string = this.restSignUpGroup.get("address").value;
            const city: string = this.restSignUpGroup.get("city").value;
            const state: string = this.restSignUpGroup.get("state").value;
            const zipcode: string = this.restSignUpGroup.get("zipcode").value;

            var service = new google.maps.places.PlacesService(this.map);

            var textSearchRequest: google.maps.places.TextSearchRequest = {
                query: this.concatStringsWithSpaces(address, city, state, zipcode)
            }

            service.textSearch(textSearchRequest, (results: google.maps.places.PlaceResult[]) => {
                if (results.length < 0) {
                    this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");

                    console.error("Address not found");
                }
                else
                    this.presentVerifyAddressAlert(results, 0);
            });
        } else {
            var display: string = "";

            display = "One or more of your fields are messed up!";//TODO

            // if(this.restSignUpGroup.get("email").invalid)//TODO
            //     display += "Please be sure your email is formatted correctly. ";

            // if(this.restSignUpGroup.get("password").invalid)
            //     display += "Please be sure your password is at least eight characters long and both passwords match. ";

            this.toastService.showReadableToast(display);

            console.error("Fields are invalid");
        }
    }

    private concatStringsWithSpaces(...words: string[]): string {
        var spaceSeperatedWords: string[] = [];

        for (var word of words) {
            var wordsOfWords = word.split(" ");

            for (var wordOfWords of wordsOfWords) {
                spaceSeperatedWords.push(wordOfWords);
            }
        }

        var query = spaceSeperatedWords.join(" ");

        return query;
    }

    private presentVerifyAddressAlert(places: google.maps.places.PlaceResult[], placesIndex: number): void {
        if (placesIndex < places.length) {
            this.alert.create({
                buttons: [
                    {
                        text: 'Yes',
                        role: 'yes',
                        handler: () => {
                            this.finishSignUpFlow(places[placesIndex])
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: () => {
                            placesIndex += 1;

                            this.presentVerifyAddressAlert(places, placesIndex)
                        }
                    },
                ],
                title: "First...",
                message: "Verify your business address: " + places[placesIndex].formatted_address
            }).present();
        }
        else
            this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");
    }

    private finishSignUpFlow(place: google.maps.places.PlaceResult) {

        const email: string = this.restSignUpGroup.get("email").value;
        const password: string = this.restSignUpGroup.get("password").value;
        const confrimPassword: string = this.restSignUpGroup.get("confirmPassword").value;
        const organizationName: string = this.restSignUpGroup.get("name").value;

        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then((methods) => {
                if (!methods || methods.length < 1) {//if user not in db
                    this.auth.signUp(email, password).then(() => {
                        this.auth.signIn(email, password).then(() => {
                            this.rememberMeService.handleRememberMeSetting(this.restSignUpGroup, UserType.Organization);

                            const newUser = new LocaleUser(this.auth.getCurrentUserUID(), UserType.Organization, organizationName);

                            const newOrganziationModel = new Organization(this.auth.getCurrentUserUID(), organizationName, place.formatted_address, "", new LocaleLocation(place.geometry.location));

                            newUser.organization = newOrganziationModel;

                            this.currentUserService.setCurrentUser(newUser);

                            this.organizationService.set(newOrganziationModel);

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
}