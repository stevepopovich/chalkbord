import { SplashScreen } from '@ionic-native/splash-screen';
import { Injectable } from "@angular/core";
import { DeviceService, EmailPasswordTuple } from "./device.service";
import { LoginKeys } from "./login-keys.service";
import { UserLoginFormGroup } from '../types/user-login-form-group.type';
import { UserType } from "../types/user.type";
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class RememberMeService {

    constructor(private deviceService: DeviceService, private loginService: LoginService, private splashScreen: SplashScreen) {
        this.loginService;
    }

    public loginFromRememberMe(formGroup: UserLoginFormGroup, userType: UserType) {
        const keys = this.setKeys(userType);

        this.deviceService.getSetting(keys.deviceKey).then((rememberMe: boolean) => {
            if (rememberMe) {
                this.deviceService.getSetting(keys.tupleKey).then((emailPasswordTup: EmailPasswordTuple) => {
                    if (emailPasswordTup) {
                        formGroup.get("email").setValue(emailPasswordTup.email);
                        formGroup.get("password").setValue(emailPasswordTup.password);

                        this.loginService.login(formGroup);
                    }
                });
            }
            else {
                this.delay(300).then(() => {
                    this.splashScreen.hide();
                });
            }
        });
    }

    public handleRememberMeSetting(formGroup: FormGroup, userType: UserType) {
        const rememberMe: boolean = formGroup.get("rememberMe").value;

        const keys = this.setKeys(userType);

        this.deviceService.putBooleanSetting(keys.deviceKey, rememberMe);

        if (rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(keys.tupleKey, formGroup.get("email").value, formGroup.get("password").value);
    }

    private setKeys(userType: UserType): { deviceKey: string, tupleKey: string } {
        if (userType == UserType.Organization)
            return { deviceKey: LoginKeys.rememberMeRestKey, tupleKey: LoginKeys.restEmailPasswordComboKey };
        else if (userType == UserType.Consumer)
            return { deviceKey: LoginKeys.rememberMeUserKey, tupleKey: LoginKeys.userEmailPasswordComboKey };
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}