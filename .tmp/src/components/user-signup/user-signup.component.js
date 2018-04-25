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
import { Validators, FormBuilder } from "@angular/forms";
import { AuthorizationService, UserType } from "../../services/authorization.service";
import { CardDataService } from "../../services/card-data.service";
var UserSignUpComponent = (function () {
    function UserSignUpComponent(formBuilder, auth, cardService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.cardService = cardService;
        this.signingUp = false;
        this.userFormGroup = formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            isRestuarant: [''],
        });
    }
    UserSignUpComponent.prototype.signUp = function () {
        if (!this.signingUp) {
            this.signingUp = true;
        }
        else if (this.userFormGroup.valid) {
            if (this.userFormGroup.get("isRestuarant").value)
                this.auth.signUpUser(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, UserType.Restaurant);
            else
                this.auth.signUpUser(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, UserType.Consumer);
            //navigate to profile
        }
        else {
            //tell them shits invalid
        }
    };
    UserSignUpComponent.prototype.login = function () {
        this.auth.signIn(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, false);
    };
    UserSignUpComponent = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/'<ion-content>\n    <ion-list>\n        <form [formGroup]="userFormGroup">\n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input formControlName="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input formControlName="password"></ion-input>\n            </ion-item>\n        \n            <ion-item *ngIf="signingUp">\n                <ion-label>Restaurant User</ion-label>\n                <ion-checkbox formControlName="isRestuarant" [(ngModel)]="limitDealNumber" checked="false"></ion-checkbox>\n            </ion-item>\n        </form>\n    </ion-list>\n\n    <div class="button-group">\n        <button ion-button (click)="login()">\n            Login\n        </button>\n\n        <button ion-button (click)="signUp()">\n            Sign Up\n        </button>\n    </div>\n</ion-content>\n        '/*ion-inline-end:"/Users/Contence/locale/src/components/user-signup/user-signup.component.html"*/,
            selector: 'user-signup',
            styleUrls: ['/user-signup.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder, AuthorizationService, CardDataService])
    ], UserSignUpComponent);
    return UserSignUpComponent;
}());
export { UserSignUpComponent };
//# sourceMappingURL=user-signup.component.js.map