import { Component, Input } from "@angular/core";
import { ToastService } from "../../services/toast.service";
import { DeviceService } from "../../services/device.service";
import { ViewController } from "ionic-angular";
import { ViewControllerService } from '../../services/view-controller.service';
import { LoginKeyss } from '../../services/login-keys.service';

@Component({
    templateUrl: './modal-navbar.component.html',
    selector: 'modal-navbar',
    styleUrls: ['/modal-navbar.component.scss']
})
export class ModalNavbarComponent {
    @Input() profileModal: boolean;
    @Input() organizationModal: boolean;

    constructor(private toastService: ToastService, private ionicViewController: ViewController,
        private deviceService: DeviceService, private viewControllerService: ViewControllerService) {
    }

    public logout() {
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if (dismissType == "close") {
                if (this.organizationModal) {
                    this.deviceService.putBooleanSetting(LoginKeyss.rememberMeRestKey, false);

                    this.viewControllerService.setBrowserHome();
                } else {
                    this.deviceService.putBooleanSetting(LoginKeyss.rememberMeUserKey, false);

                    this.viewControllerService.setSignUpView();
                }

                this.ionicViewController.dismiss();
            }
        });

        toast.present();
    }

    public closeProfile() {
        this.ionicViewController.dismiss();
    }
}