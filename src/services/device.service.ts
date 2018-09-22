import { IonicPlatform } from './../enums/ionic-platform.enum';
import { UniqueDeviceID } from "@ionic-native/unique-device-id";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class DeviceService {
    public deviceId: string;

    constructor(private uniqueDeviceID: UniqueDeviceID, private storage: Storage, public platform: Platform) {
        if (this.platform.is(IonicPlatform.Cordova)) {
            this.uniqueDeviceID.get().then((id) => {
                this.deviceId = id;
            });
        }
    }

    public putUserEmailPasswordToLocalStorage(key: string, email: string, password: string): void {
        this.storage.set(key, new EmailPasswordTuple(email, password));
    }

    public putBooleanSetting(key: string, setting: boolean) {
        return this.storage.set(key, setting);
    }

    public getSetting(key: string): Promise<any> {
        return this.storage.get(key);
    }

    public putToLocalStorage(key: string, value: any) {
        return this.storage.set(key, value);
    }

    public getFromLocalStorage(key: string): Promise<any> {
        return this.storage.get(key);
    }
}

export class EmailPasswordTuple {
    constructor(public email: string, public password: string) { }
}