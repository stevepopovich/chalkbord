var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
var RestaurantLandingComponent = (function () {
    function RestaurantLandingComponent(formBuilder) {
        this.formBuilder = formBuilder;
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
    RestaurantLandingComponent.prototype.signUp = function () {
        if (this.restSignUpGroup.valid) {
        }
    };
    RestaurantLandingComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/restaurant-landing/restaurant-landing.component.html"*/'<div class="rest-landing-home-photo">\n\n</div>\n\n<ion-content class="main-area">\n    <div class="rest-center-text">grabsome</div>\n    <div class="small-rest-center-text">Restaurants</div>\n\n    <ion-card class="log-in-card">\n        <ion-list>\n            <form [formGroup]="userLogInGroup">\n                <ion-item class="padding-right">\n                    <ion-label stacked>Email</ion-label>\n                    <ion-input placeholder="Business email" type="email"  formControlName="email"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-right">\n                    <ion-label stacked>Password</ion-label>\n                    <ion-input placeholder="********" type="password" formControlName="password"></ion-input>\n                </ion-item>\n    \n                <ion-item class="padding-bottom-checkbox">\n                    <ion-label>Remember Me</ion-label>\n                    <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                </ion-item>\n            </form>\n        </ion-list>\n    </ion-card>\n\n    <div class="rest-button-area">\n        <button class="rest-landing-button" ion-button outline (click)="goToLoginScreen()">\n            login\n        </button>\n        <div class="or-text">or</div>\n        <button class="rest-landing-button" ion-button (click)="goToUserSignUpScreen()">\n            sign up\n        </button>\n    </div>\n\n    <ion-card class="log-in-card">\n        <ion-card-content>\n            <ion-list>\n                <form [formGroup]="restSignUpGroup">\n                    <ion-item class="padding-right">\n                        <ion-label stacked>Email</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                    </ion-item>\n        \n                    <ion-item class="padding-right">\n                        <ion-label stacked>Password</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label stacked>Confirm Password</ion-label>\n                        <ion-input type="password" formControlName="confirmPassword"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label stacked>Restaurant Name</ion-label>\n                        <ion-input formControlName="name"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-right">\n                        <ion-label stacked>Address </ion-label>\n                        <ion-input formControlName="address"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label stacked>City</ion-label>\n                        <ion-input formControlName="city"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label stacked>State</ion-label>\n                        <ion-input formControlName="state"></ion-input>\n                    </ion-item>\n                    <ion-item class="padding-right">\n                        <ion-label stacked>Zipcode</ion-label>\n                        <ion-input formControlName="zipcode"></ion-input>\n                    </ion-item>\n    \n                    <ion-item class="padding-bottom-checkbox">\n                        <ion-label>Remember Me</ion-label>\n                        <ion-checkbox formControlName="rememberMe" [(ngModel)]="remembered" checked="false"></ion-checkbox>\n                    </ion-item>\n                </form>\n            </ion-list>\n        </ion-card-content>\n        <button class="rest-landing-button" ion-button (click)="signUp()">\n            sign up\n        </button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Contence/locale/src/components/restaurant-landing/restaurant-landing.component.html"*/,
            selector: 'restaurant-landing',
            styleUrls: ['/restaurant-landing.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], RestaurantLandingComponent);
    return RestaurantLandingComponent;
}());
export { RestaurantLandingComponent };
//# sourceMappingURL=restaurant-landing.component.js.map