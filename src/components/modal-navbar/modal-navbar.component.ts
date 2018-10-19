import { CurrentUserService } from './../../services/current-user.service';
import { Component, Input } from "@angular/core";
import { ToastService } from "../../services/toast.service";
import { DeviceService } from "../../services/device.service";
import { ViewController, Platform } from "ionic-angular";
import { ViewControllerService } from '../../services/view-controller.service';
import { LoginKeys } from '../../services/login-keys.service';
import { IonicPlatform } from '../../enums/ionic-platform.enum';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
    templateUrl: './modal-navbar.component.html',
    selector: 'modal-navbar',
    styleUrls: ['/modal-navbar.component.scss']
})
export class ModalNavbarComponent {
    @Input() profileModal: boolean;
    @Input() organizationModal: boolean;

    constructor(private toastService: ToastService, private ionicViewController: ViewController,
        private deviceService: DeviceService, private viewControllerService: ViewControllerService,
        private currentUserService: CurrentUserService, private platform: Platform, private statusBar: StatusBar) {
    }

    public ionViewDidEnter(): void {
        this.statusBar.hide();
        this.statusBar.show();
        this.statusBar.overlaysWebView(false);
    }

    public logout() {
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if (dismissType == "close") {
                if (this.organizationModal) {
                    this.deviceService.putBooleanSetting(LoginKeys.rememberMeRestKey, false);
                    this.deviceService.putBooleanSetting(LoginKeys.rememberMeUserKey, false);

                    if (this.platform.is(IonicPlatform.Core))
                        this.viewControllerService.setBrowserHome();
                    else
                        this.viewControllerService.setSignUpView();
                } else {
                    this.deviceService.putBooleanSetting(LoginKeys.rememberMeUserKey, false);
                    this.deviceService.putBooleanSetting(LoginKeys.rememberMeUserKey, false);

                    if (this.platform.is(IonicPlatform.Core))
                        this.viewControllerService.setBrowserHome();
                    else
                        this.viewControllerService.setSignUpView();
                }

                this.ionicViewController.dismiss();

                this.currentUserService.removeCurrentUser();
            }
        });

        toast.present();
    }

    public closeProfile() {
        this.ionicViewController.dismiss();
    }
}