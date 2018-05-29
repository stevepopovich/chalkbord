import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    templateUrl: './restaurant-landing.component.html',
    selector: 'restaurant-landing',
    styleUrls: ['/restaurant-landing.component.scss']
})

export class RestaurantLandingComponent{

    public userLogInGroup: FormGroup;
    public restSignUpGroup: FormGroup;

    constructor(public formBuilder: FormBuilder) {
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
            zipcode: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            name: ['', Validators.compose([Validators.required])],
            rememberMe: ['']
        });
    }

    public signUp(){
        if(this.restSignUpGroup.valid){
            
        }
    }
}