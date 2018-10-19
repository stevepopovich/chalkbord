import { StatusBar } from '@ionic-native/status-bar';
import { FirebaseEnvironmentService, FirebaseEnvironment } from './../../services/firebase/environment.service';
import { FormBuilderHelper } from '../../types/utils.type';
import { ToastService } from '../../services/toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { CurrentUserService } from '../../services/current-user.service';
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { AuthorizationService } from '../../services/firebase/authorization.service';
import { OrganizationService } from '../../services/firebase/firestore-collection/organization-service';
import { LocaleUser, UserType } from '../../types/user.type';
import { Organization } from '../../types/organization.type';
import { RememberMeService } from '../../services/remember-me.service';
import { LoginService } from '../../services/login.service';
import { LocaleLocation } from '../../types/location.type';
import { Facebook } from '@ionic-native/facebook';
import { DeviceService } from '../../services/device.service';
import { Subject } from 'rxjs';

export class OrganizationSignupComponent {

    public signUpGroup: FormGroup;

    public map: google.maps.Map;

    public titleClickSubject = new Subject();
    public titleClickObervable = this.titleClickSubject.asObservable();

    constructor(public toastService: ToastService, public alert: AlertController,
        public currentUserService: CurrentUserService, public userService: UserService,
        public formBuilder: FormBuilder, public auth: AuthorizationService,
        public organizationService: OrganizationService, public loginService: LoginService,
        public rememberMeService: RememberMeService, public facebook: Facebook, public firebaseEnvironmentService: FirebaseEnvironmentService,
        public deviceService: DeviceService, public statusBar: StatusBar) {

        this.signUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8)])],
            phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/), Validators.minLength(10), Validators.maxLength(13)])],
            website: [''],
            address: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            zipcode: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')])],
            name: ['', Validators.compose([Validators.required])],
            rememberMe: ['']
        });
    }

    public passwordsMatch(): boolean {
        if (this.signUpGroup.get("password").dirty
            && this.signUpGroup.get("confirmPassword").dirty)
            return this.signUpGroup.get("password").value === this.signUpGroup.get("confirmPassword").value;
        else
            return true;
    }

    public signUp(): void {
        FormBuilderHelper.markFormGroupTouched(this.signUpGroup);
        if (this.signUpGroup.valid && this.passwordsMatch()) {
            const address: string = this.signUpGroup.get("address").value;
            const city: string = this.signUpGroup.get("city").value;
            const state: string = this.signUpGroup.get("state").value;
            const zipcode: string = this.signUpGroup.get("zipcode").value;

            var googleMapsPlacesService = new google.maps.places.PlacesService(this.map);

            var textSearchRequest: google.maps.places.TextSearchRequest = {
                query: this.concatStringsWithSpaces(address, city, state, zipcode)
            }

            googleMapsPlacesService.textSearch(textSearchRequest, (results: google.maps.places.PlaceResult[]) => {
                if (results.length < 0) {
                    this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");

                    console.error("Address not found");
                }
                else
                    this.presentVerifyAddressAlert(results, 0);
            });
        }
    }

    public iterateEnvironment(key: string): void {
        const newEnvironment = FirebaseEnvironment[this.firebaseEnvironmentService.iterateEnvironment()];

        this.toastService.showToast(newEnvironment, 100);

        this.deviceService.putToLocalStorage(key, this.firebaseEnvironmentService.getCurrentEnvironment());
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

        const email: string = this.signUpGroup.get("email").value;
        const password: string = this.signUpGroup.get("password").value;
        const confrimPassword: string = this.signUpGroup.get("confirmPassword").value;
        const organizationName: string = this.signUpGroup.get("name").value;
        const phoneNumber: number = this.signUpGroup.get("phoneNumber").value;
        const website: string = this.signUpGroup.get("website").value;

        if (password == confrimPassword) {
            this.auth.checkSignInMethods(email).then((methods) => {
                if (!methods || methods.length < 1) {//if user not in db
                    this.auth.signUp(email, password).then(() => {
                        this.auth.signIn(email, password).then(() => {

                            this.rememberMeService.handleRememberMeSetting(this.signUpGroup, UserType.Organization);

                            const newUser = new LocaleUser(this.auth.getCurrentUserUID(), UserType.Organization, organizationName);

                            const newOrganziationModel = new Organization(this.auth.getCurrentUserUID(), organizationName, place.formatted_address, phoneNumber, website, "", new LocaleLocation(place.geometry.location));

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
    }

    // private URLValidator(control: FormControl) {
    //     const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    //     return regexp.test(control.value) ? null : {
    //         'invalidUrl': {
    //             valid: false
    //         }
    //     };
    // }
}
