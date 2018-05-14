import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

const userLoginKey: string = "userEmail";
const rememberMeKey: string = "rememberMe";

@Injectable()
export class DeviceService {
    public deviceId: string;

    constructor(private uniqueDeviceID: UniqueDeviceID, private storage: Storage, public platform: Platform){
        if(this.platform.is("cordova")){
            this.uniqueDeviceID.get().then((id) => {
                this.deviceId = id;
            });
        }
    }

    public putUserEmailPasswordToLocalStorage(email: string, password: string): void {
        this.storage.set(userLoginKey, new EmailPasswordTuple(email, password));
    }

    public getUserEmailPasswordFromLocalStorage(): Promise<EmailPasswordTuple> {
        return this.storage.get(userLoginKey);
    }

    public putRememberMeSetting(rememberMe: boolean){
        return this.storage.set(rememberMeKey, rememberMe);
    }

    public getRememberMeSetting(): Promise<boolean> {
        return this.storage.get(rememberMeKey);
    }
}

export class EmailPasswordTuple {
    constructor(public email: string, public password: string){ }
}