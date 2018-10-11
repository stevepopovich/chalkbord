import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, AfterViewInit } from "@angular/core";
import { DealEditorComponent } from "../deal-editor/deal-editor.component";
import { ToastService } from '../../services/toast.service';
import { LoginKeys } from '../../services/login-keys.service';
import { IonicPlatform } from '../../enums/ionic-platform.enum';
import { Platform } from 'ionic-angular';
import { DeviceService } from '../../services/device.service';
import { ViewControllerService } from '../../services/view-controller.service';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
    templateUrl: './organization-deals-home.component.html',
    selector: 'organization-deals-home',
    styleUrls: ['/organization-deals-home.component.scss']
})
export class OrganizationDealsHomeComponent implements AfterViewInit {

    public root: any = DealEditorComponent;

    constructor(private toastService: ToastService, private deviceService: DeviceService,
        private platform: Platform, private viewControllerService: ViewControllerService,
        private currentUserService: CurrentUserService, private splashScreen: SplashScreen) { }

    public ngAfterViewInit(): void {
        this.splashScreen.hide();
    }

    public logout() {
        const toast = this.toastService.showReadableAndAnswerableOkayToast("Are you sure you want to log out?");

        toast.onDidDismiss((data, dismissType) => {
            data;
            if (dismissType == "close") {
                this.deviceService.putBooleanSetting(LoginKeys.rememberMeRestKey, false);
                this.deviceService.putBooleanSetting(LoginKeys.rememberMeUserKey, false);

                if (this.platform.is(IonicPlatform.Core))
                    this.viewControllerService.setBrowserHome();
                else
                    this.viewControllerService.setSignUpView();

                this.currentUserService.removeCurrentUser();
            }
        });

        toast.present();
    }
}