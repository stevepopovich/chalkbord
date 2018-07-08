import { Injectable } from "@angular/core";
import { DeviceService, EmailPasswordTuple } from "./device.service";
import { LoginKeys } from "./login-keys.service";
import { UserLoginFormGroup } from '../types/user-login-form-group.type';
import { UserType } from "../types/user.type";
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';

@Injectable()
export class RememberMeService {

    constructor(private deviceService: DeviceService, private loginService: LoginService) {

    }
    /**
     * loginFromRememberMe
     */
    public loginFromRememberMe(formGroup: UserLoginFormGroup, userType: UserType) {
        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);
            
        this.deviceService.getSetting(deviceKey).then((rememberMe: boolean) => {
            if(rememberMe){
                this.deviceService.getUserEmailPasswordFromLocalStorage(tupleKey).then((emailPasswordTup: EmailPasswordTuple) => {
                    if(emailPasswordTup){
                        formGroup.get("email").setValue(emailPasswordTup.email);
                        formGroup.get("password").setValue(emailPasswordTup.password);
        
                        this.loginService.login(formGroup);
                    }
                });
            }
        });
    }

    public handleRememberMeSetting(formGroup: FormGroup, userType: UserType){
        const rememberMe: boolean = formGroup.get("rememberMe").value;

        var deviceKey, tupleKey;
        this.setKeys(userType, deviceKey, tupleKey);

        this.deviceService.putSetting(deviceKey, rememberMe);

        if(rememberMe)
            this.deviceService.putUserEmailPasswordToLocalStorage(tupleKey, formGroup.get("email").value, formGroup.get("password").value);
    }

    private setKeys(userType: UserType, deviceKey: string, tupleKey: string){
        if(userType == UserType.Organization){
            deviceKey = LoginKeys.rememberMeRestKey;
            tupleKey = LoginKeys.restEmailPasswordComboKey;
        }
        else if (userType == UserType.Consumer) {
            deviceKey = LoginKeys.rememberMeUserKey;
            tupleKey = LoginKeys.userEmailPasswordComboKey;
        }
    }
}