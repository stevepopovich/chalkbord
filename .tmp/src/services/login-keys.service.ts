import { Injectable } from "@angular/core";

@Injectable()
export class LoginKeyss {
    public static rememberMeUserKey = "rememberMeUser";//dont change this unless you want to change the other one is user-signup
    public static rememberMeRestKey = "rememberMeRest";//this either
    public static userEmailPasswordComboKey = "userEmailCombo";
    public static restEmailPasswordComboKey = "restEmailCombo";
}