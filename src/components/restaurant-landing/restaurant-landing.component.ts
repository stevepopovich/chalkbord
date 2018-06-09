import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthorizationService } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { DeviceService, EmailPasswordTuple } from "../../services/device.service";
import { ToastService } from "../../services/toast.service";
import { GSUser, UserType } from "../../types/user.type";
import { AlertController } from "ionic-angular";
import { Restaurant } from "../../types/restaurant.type";
import { GSLocation } from "../../types/location.type";

const restEmailPasswordComboKey = "restEmailCombo";
const rememberMeRestKey = "rememberMeRest";

@Component({
    templateUrl: './restaurant-landing.component.html',
    selector: 'restaurant-landing',
    styleUrls: ['/restaurant-landing.component.scss']
})
export class RestaurantLandingComponent implements AfterViewInit {
    public userLogInGroup: FormGroup;
    public restSignUpGroup: FormGroup;

    public rememberMeLogIn: boolean = false;
    public rememberMeSignUp: boolean = false;;

    public map: google.maps.Map;

    @ViewChild('signUpCard') signUpCard: ElementRef;

    constructor(public formBuilder: FormBuilder, private auth: AuthorizationService, 
        private viewControl: ViewControllerService, private deviceService: DeviceService,
        public toastService: ToastService, public alert: AlertController) {
        this.userLogInGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            rememberMe: ['']
        });

        this.restSignUpGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            address: ['', Validators.compose([Validators.required])],
            city: ['', Validators.compose([Validators.required])],
            state: ['', Validators.compose([Validators.required])],
            zipcode: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]*')])],
            name: ['', Validators.compose([Validators.required])],
            rememberMe: ['']
        });

        // this.deviceService.getSetting(rememberMeRestKey).then((rememberMe: boolean) => {
        //     if(rememberMe){
        //         this.deviceService.getUserEmailPasswordFromLocalStorage(restEmailPasswordComboKey).then((emailPasswordTup: EmailPasswordTuple) => {
        //             if(emailPasswordTup){
        //                 this.userLogInGroup.get("email").setValue(emailPasswordTup.email);
        //                 this.userLogInGroup.get("password").setValue(emailPasswordTup.password);
        
        //                 this.login();
        //             }
        //         });
        //     }
        // });
    }

    public ngAfterViewInit(): void {
        this.map = new google.maps.Map(document.getElementById('map'), { zoom: 15 });
    }

    public goToUserSignUpScreen(): void {
        this.signUpCard.nativeElement.scrollIntoView(true);
    }

    public loginHandler(): void {
        this.handleRememberMe(this.userLogInGroup);

        this.login();
    }

    public handleRememberMe(formGroup: FormGroup){
        const rememberMe: boolean = formGroup.get("rememberMe").value;

        this.deviceService.putSetting(rememberMeRestKey, rememberMe);

        if(rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(restEmailPasswordComboKey, formGroup.get("email").value, formGroup.get("password").value);
    }

    public login() {
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

    public signUp(): void {
        if(this.restSignUpGroup.valid){
            //this.toastService.showReadableToast("Signing you up...welcome!");

            const address: string = this.restSignUpGroup.get("address").value;
            const city: string = this.restSignUpGroup.get("city").value;
            const state: string = this.restSignUpGroup.get("state").value;
            const zipcode: string = this.restSignUpGroup.get("zipcode").value;

            var service = new google.maps.places.PlacesService(this.map);

            var textSearchRequest: google.maps.places.TextSearchRequest = {
                query: this.concatStringsWithSpaces(address, city, state, zipcode)
            }

            service.textSearch(textSearchRequest, (results: google.maps.places.PlaceResult[]) => {
                if(results.length < 0){
                    this.toastService.showReadableToast("We couldn't find that address. Please verify your address or contact support");

                    console.error("Address not found");
                }
                else
                    this.presentVerifyAddressAlert(results, 0);
            });
        } else {
            var display: string = "";
    
            display = "One or more of your fields are messed up!";
    
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

        for(var word of words){
            var wordsOfWords = word.split(" ");

            for(var wordOfWords of wordsOfWords){
                spaceSeperatedWords.push(wordOfWords);
            }
        }

        var query = spaceSeperatedWords.join(" ");
        
        return query;
    }

    private presentVerifyAddressAlert(places: google.maps.places.PlaceResult[], placesIndex: number): void {
        if(placesIndex < places.length){
            this.alert.create({
                buttons:[
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

    private finishSignUpFlow(place: google.maps.places.PlaceResult){

        const email: string = this.restSignUpGroup.get("email").value;
        const password: string = this.restSignUpGroup.get("password").value;
        const confrimPassword: string = this.restSignUpGroup.get("confirmPassword").value;
        const restaurantName: string = this.restSignUpGroup.get("name").value;

        if(password == confrimPassword) {
            this.auth.checkUserSignInMethods(email).then((methods) => {
                if(!methods || methods.length < 1){//if user not in db
                    this.auth.signUpUser(email, password).then(() => {
                        this.auth.signIn(email, password).then(() => {
                            this.handleRememberMe(this.restSignUpGroup);

                            const newUser = new GSUser(this.auth.fireAuth.auth.currentUser.uid, UserType.Restaurant, restaurantName);
                            
                            const newRestaurantModel = new Restaurant(this.auth.fireAuth.auth.currentUser.uid, restaurantName, place.formatted_address, "", new GSLocation(place.geometry.location));
                    
                            newUser.restaurant = newRestaurantModel;
                    
                            this.auth.currentUser = newUser;
                    
                            this.auth.restaurantCollection.doc(this.auth.fireAuth.auth.currentUser.uid).set(newRestaurantModel.getAsPlainObject());

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

    private setAppropiateView(){
        if(this.auth.currentUser.userType == UserType.Restaurant)
            this.viewControl.setRestaurantHome();
        else
            this.viewControl.setConsumerView();
    }
}