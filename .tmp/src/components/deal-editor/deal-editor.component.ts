import { CurrentUserService } from './../../services/current-user.service';
//import { PictureSourceType } from '@ionic-native/camera';
import { Component, ViewChild, ElementRef } from "@angular/core";
import { LocaleCard } from "../../types/deals.type";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
import { DealEditorService } from "../../services/deal-editing.service";
import { Platform, ActionSheetController } from "ionic-angular";
import { IonicScreenSize } from "../../enums/ionic-screen-sizes.enum";
import { IonicPlatform } from '../../enums/ionic-platform.enum';
import { ImageService } from '../../services/firebase/image-service.service';
import { CardDataService } from '../../services/firebase/firestore-collection/card-data.service';
import { UserService } from '../../services/firebase/firestore-collection/user.service';

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
    styleUrls: ['/deal-editor.component.scss']
})
export class DealEditorComponent {
    @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

    public dealEditorFormGroup: FormGroup;

    public limitDealNumber: boolean = false;

    public imageDataForUpload;
    public imageDataForPreview;
    public fileReader = new FileReader();

    public editingDeal: boolean;
    public uneditedDeal: LocaleCard;

    public platformReady: boolean;

    public constructor(private cardService: CardDataService, public formBuilder: FormBuilder, private uploader: UploadService,
        private dealEditorService: DealEditorService, private userService: UserService,
        private platform: Platform, public actionSheetCtrl: ActionSheetController, private imageService: ImageService,
        private currentUserService: CurrentUserService) {
        this.dealEditorFormGroup = this.formBuilder.group({
            dealDescription: ['', Validators.required],
            numberOfDeals: [''],
            limitedDealNumber: [''],
            dealDay: ['', Validators.required],
            dealStart: ['', Validators.required],
            dealEnd: ['', Validators.required],
            dealType: ['', Validators.required],
        });

        this.dealEditorService.currentDealSubject.subscribe((deal: LocaleCard) => {
            this.clearFields();
            this.setCurrentCardBeingEdited(deal);
        });

        this.platform.ready().then(() => {
            this.platformReady = true;
        });

        this.fileReader.onloadend = () => {
            this.imageDataForPreview = this.fileReader.result;
        };
    }

    public setImageData(event): void {
        this.imageDataForUpload = event.srcElement.files[0];
        this.fileReader.readAsDataURL(this.imageDataForUpload);
    }

    public delete() {
        this.cardService.delete(this.dealEditorService.currentDealBeingEdited.id);
        this.dealEditorService.deleteDealSubject.next(this.dealEditorService.currentDealBeingEdited);
        this.dealEditorService.currentDealBeingEdited = null;
        this.dealEditorService.currentDealSubject.next();
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
    }

    public add() {
        if (this.dealEditorFormGroup.valid && this.imageDataForUpload) {
            const deal = this.getDealFromFields();

            this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, false);
            this.imageDataForUpload = null;

            this.dealEditorService.addDealSubject.next(deal);

            this.cardService.set(deal);
            this.currentUserService.addCardId(deal.id);
            this.userService.set(this.currentUserService.getCurrentUser());
        }
    }

    public save() {
        if (this.dealEditorFormGroup.valid) {
            var deal: LocaleCard = this.getDealFromFields();

            const startDate = this.dealEditorFormGroup.get("dealDay").value;
            const startTime = this.dealEditorFormGroup.get("dealStart").value;
            const endTime = this.dealEditorFormGroup.get("dealEnd").value;

            const startDatetime = this.getSaveCombinedTime(startTime, startDate);
            const endDatetime = this.getSaveCombinedTime(endTime, startDate);

            deal.dealStart = startDatetime;
            deal.dealEnd = endDatetime;
            deal.id = this.dealEditorService.currentDealBeingEdited.id;

            if (this.imageDataForUpload) {
                this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, true).then(() => {
                    this.cleanUpImageData();
                    this.imageService.setDealImageURL(this.dealEditorService.currentDealBeingEdited);
                });
            }

            this.cardService.set(deal);
        }
        else
            this.reportBadFields();
    }

    private getSaveCombinedTime(time: any, date: any): Date {
        const combinedTime = new Date(date);
        const timeDateObj = new Date(time);

        combinedTime.setHours(timeDateObj.getHours());
        combinedTime.setMinutes(timeDateObj.getMinutes());

        return combinedTime;
    }

    private setCurrentCardBeingEdited(deal: LocaleCard) {
        if (deal) {
            this.uneditedDeal = deal;
            this.editingDeal = true;

            Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
                if (key != "dealDay" && key != "dealStart" && key != "dealEnd")//this just suprsses some warnings
                    this.dealEditorFormGroup.get(key).setValue(deal[key]);
            });

            this.dealEditorFormGroup.get("dealDay").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealStart").setValue(deal.dealStart.toISOString());
            this.dealEditorFormGroup.get("dealEnd").setValue(deal.dealEnd.toISOString());

            this.dealEditorFormGroup.get("limitedDealNumber").setValue(deal.numberOfDeals > 0);
        } else
            this.clearFields();
    }

    private getCombinedTime(time: any, date: any): Date {//still needs to be tested
        const combinedTime = new Date(Date.parse(date));
        const timeDateObj = new Date('1970-01-01T' + time);//use abitrary stuff date here to make parsing happen

        const timeOffsetInHours = timeDateObj.getTimezoneOffset() / 60;

        combinedTime.setHours(timeDateObj.getHours() - timeOffsetInHours + 1);//add one bc combinedTime is one hour off?? GMT-400???
        combinedTime.setMinutes(timeDateObj.getMinutes());//idk but this should be watched

        return combinedTime;
    }

    public cancel() {
        this.dealEditorService.setCurrentDeal(null);

        this.clearFields();
    }

    private clearFields() {
        this.uneditedDeal = null;
        this.editingDeal = false;

        this.cleanUpImageData();

        Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
            this.dealEditorFormGroup.get(key).setValue(null);
        });
    }

    private getDealFromFields(): LocaleCard {
        const startDate = this.dealEditorFormGroup.get("dealDay").value;

        const startTime = this.dealEditorFormGroup.get("dealStart").value;
        const endTime = this.dealEditorFormGroup.get("dealEnd").value;

        const startDatetime = this.getCombinedTime(startTime, startDate);
        const endDatetime = this.getCombinedTime(endTime, startDate);

        let deal: LocaleCard;

        if (!this.limitDealNumber) {
            deal = new LocaleCard(this.dealEditorFormGroup.get("dealDescription").value,
                startDatetime,
                endDatetime,
                -1,//no deal limit
                this.dealEditorFormGroup.get("dealType").value);

            deal.organization = this.currentUserService.getCurrentUser().organization;
        } else {
            deal = new LocaleCard(this.dealEditorFormGroup.get("dealDescription").value,
                startDatetime,
                endDatetime,
                this.dealEditorFormGroup.get("numberOfDeals").value,
                this.dealEditorFormGroup.get("dealType").value);

            deal.organization = this.currentUserService.getCurrentUser().organization;
        }

        return deal;
    }

    public getDeviceIsSmall(): boolean {
        if (this.platformReady)
            return this.platform.width() < IonicScreenSize.Md;
    }

    public editPhotoData() {
        if (this.isDesktop()) {
            this.uploadDesktopImage();
        } else {
            this.actionSheetCtrl.create({
                title: 'Mobile Photo uploads not supported yet!',
                buttons: [
                    // {
                    //     text: 'Camera',
                    //     icon: !this.platform.is('ios') ? 'camera' : null,
                    //     handler: () => {
                    //         this.cameraUpload(PictureSourceType.CAMERA);
                    //     }
                    // },{
                    //     text: 'Photo Library',
                    //     icon: !this.platform.is('ios') ? 'images' : null,
                    //     handler: () => {
                    //         this.cameraUpload(PictureSourceType.PHOTOLIBRARY);
                    //     }
                    // },
                ]
            }).present();
        }

    }

    // private cameraUpload(sourceType: PictureSourceType) {
    //     // this.cameraService.getPhotoFromLibrary(sourceType).then((photoData) => {
    //     //     this.imageData = photoData;
    //     // })
    //     sourceType; 
    // }

    public isDesktop(): boolean {
        return this.platform.is(IonicPlatform.Core);
    }

    public uploadDesktopImage() {
        this.hiddenFileInput.nativeElement.click();
    }

    private cleanUpImageData() {
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
        this.fileReader.abort();
    }

    private reportBadFields() {
        //this.
    }
}