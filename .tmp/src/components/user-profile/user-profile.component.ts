import { Component } from "@angular/core";
import { DeviceService } from "../../services/device.service";
import { ViewControllerService } from "../../services/view-controller.service";
import { ModalController, ViewController } from "ionic-angular";

@Component({
    templateUrl: './user-profile.component.html',
    selector: 'user-profile',
    styleUrls: ['/user-profile.component.scss']
})

export class UserProfileComponent{

    constructor(public deviceService: DeviceService, public viewController: ViewControllerService, public modalCtrl: ModalController, public viewCtrl: ViewController){

    }

    public logout(){
        this.deviceService.putRememberMeSetting(false);

        this.viewController.setSignUpView();
    }

    public closeProfile(){
        this.viewCtrl.dismiss();
    }
}