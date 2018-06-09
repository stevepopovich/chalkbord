import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

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

    public putUserEmailPasswordToLocalStorage(key: string ,email: string, password: string): void {
        this.storage.set(key, new EmailPasswordTuple(email, password));
    }

    public getUserEmailPasswordFromLocalStorage(key: string): Promise<EmailPasswordTuple> {
        return this.storage.get(key);
    }

    public putSetting(key: string, rememberMe: boolean){
        return this.storage.set(key, rememberMe);
    }

    public getSetting(key: string): Promise<boolean> {
        return this.storage.get(key);
    }
}

export class EmailPasswordTuple {
    constructor(public email: string, public password: string){ }
}