import { OrganizationService } from './../../services/firebase/firestore-collection/organization-service';
import { RememberMeService } from './../../services/remember-me.service';
import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ToastService } from "../../services/toast.service";
import { UserType } from "../../types/user.type";
import { LoginService } from "../../services/login.service";
import { UserLoginFormGroup } from "../../types/user-login-form-group.type";
import { CurrentUserService } from '../../services/current-user.service';
import { AlertController } from 'ionic-angular';
import { UserService } from '../../services/firebase/firestore-collection/user.service';
import { AuthorizationService } from '../../services/firebase/authorization.service';
import { OrganizationSignupComponent } from '../organization-signup/organization-signup.component';
import { Facebook } from '@ionic-native/facebook';

@Component({
    templateUrl: './organization-landing.component.html',
    selector: 'organization-landing',
    styleUrls: ['/organization-landing.component.scss']
})
export class OrganizationLandingComponent extends OrganizationSignupComponent {
    public userLogInGroup: UserLoginFormGroup;
    public rememberMeLogIn: boolean = false;
    public rememberMeSignUp: boolean = false;
    @ViewChild('signUpCard') signUpCard: ElementRef;

    constructor(formBuilder: FormBuilder,
        loginService: LoginService,
        rememberMeService: RememberMeService,
        toastService: ToastService, alert: AlertController,
        currentUserService: CurrentUserService, userService: UserService,
        auth: AuthorizationService,
        organizationService: OrganizationService, facebook: Facebook) {

        super(toastService, alert, currentUserService, userService, formBuilder, auth, organizationService, loginService, rememberMeService, facebook);
        this.userLogInGroup = new UserLoginFormGroup(this.formBuilder);

        this.rememberMeService.loginFromRememberMe(this.userLogInGroup, UserType.Organization);
    }

    public goToUserSignUpScreen(): void {
        this.signUpCard.nativeElement.scrollIntoView(true);
    }

    public loginHandler(): void {
        this.rememberMeService.handleRememberMeSetting(this.userLogInGroup, UserType.Organization);

        this.loginService.login(this.userLogInGroup);
    }

}