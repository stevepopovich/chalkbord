import { ToastService } from './../../services/toast.service';
import { FormBuilderHelper } from './../../types/utils.type';
import { Organization } from './../../types/organization.type';
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
import { PictureSourceType, Camera } from '@ionic-native/camera';
import * as moment from 'moment';

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
    styleUrls: ['/deal-editor.component.scss']
})
export class DealEditorComponent {
    @ViewChild('hiddenFileInput') hiddenFileInput: ElementRef;

    public dealEditorFormGroup: FormGroup;

    public limitDealNumber: boolean = false;
    public isVegetarian: boolean = false;
    public isVegan: boolean = false;

    public imageDataForUpload;
    public imageDataForPreview;
    public fileReader = new FileReader();

    public editingDeal: boolean;
    public uneditedDeal: LocaleCard;

    public platformReady: boolean;

    public currentOrganization?: Organization;

    public previewCard: LocaleCard;

    public nowString = moment().format("YYYY-MM-DD");

    public constructor(private cardService: CardDataService, public formBuilder: FormBuilder, private uploader: UploadService,
        private dealEditorService: DealEditorService, private userService: UserService, private toastService: ToastService,
        private platform: Platform, public actionSheetCtrl: ActionSheetController, private imageService: ImageService,
        private currentUserService: CurrentUserService, private cameraService: Camera) {

        this.dealEditorFormGroup = this.formBuilder.group({
            dealDescription: ['', Validators.required],
            longDealDescription: [''],
            numberOfDeals: [''],
            limitedDealNumber: [''],
            dealDay: ['', Validators.required],
            dealStart: ['', Validators.required],
            dealEnd: ['', Validators.required],
            dealType: ['', Validators.required],
            isVegetarian: [''],
            isVegan: ['']
        });

        this.previewCard = LocaleCard.getBlankCard();

        this.dealEditorFormGroup.valueChanges.subscribe(() => {
            if (this.currentOrganization) {
                this.previewCard.dealDescription = this.dealEditorFormGroup.get("dealDescription").value || "";
                this.previewCard.organization = this.currentOrganization;
            }
        });

        this.currentUserService.getCurrentOrganization().subscribe((orgs: Organization[]) => {
            if (orgs && orgs.length > 0)
                this.currentOrganization = orgs[0];
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
        FormBuilderHelper.markFormGroupTouched(this.dealEditorFormGroup);
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.imageDataForUpload) {
            if (this.dealEditorFormGroup.valid) {
                const deal = this.getDealFromFields();

                deal.organization = this.currentOrganization;

                Promise.all([this.cardService.set(deal),
                this.currentUserService.addCardId(deal.id),
                this.userService.set(this.currentUserService.getCurrentUser()),
                this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, false)]).then(() => {
                    this.cleanUpImageData();
                    this.clearFields();
                    //basically done; assuming the below promises resolve faster set state to saved
                    this.dealEditorService.addDealSubject.next(deal);//add to list and make currents
                }).catch((error) => {
                    this.toastService.showReadableToast("There was an error " + error);
                });
            }
        } else
            this.toastService.showReadableToast("Please add a photo for this deal!");
    }

    public save() {
        FormBuilderHelper.markFormGroupTouched(this.dealEditorFormGroup);
        this.dealEditorFormGroup.updateValueAndValidity();
        if (this.dealEditorFormGroup.valid) {
            var deal: LocaleCard = this.getDealFromFields();

            deal.id = this.dealEditorService.currentDealBeingEdited.id;

            if (this.imageDataForUpload) {
                this.uploader.uploadDealPhoto(this.imageDataForUpload, deal.id, true).then(() => {
                    this.cleanUpImageData();
                    this.imageService.setDealImageURL(this.dealEditorService.currentDealBeingEdited);

                    this.dealEditorService.updateDealSubject.next(deal);
                });
            }

            this.cardService.set(deal);

            this.uneditedDeal = deal;
        }
    }

    private setCurrentCardBeingEdited(deal: LocaleCard) {
        if (deal) {
            this.uneditedDeal = Object.assign({}, deal);
            this.editingDeal = true;

            Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
                if (key != "dealDay" && key != "dealStart" && key != "dealEnd")//this just suprsses some warnings
                    this.dealEditorFormGroup.get(key).setValue(deal[key]);
            });

            this.dealEditorFormGroup.get("dealDay").setValue(moment(deal.dealStart).format('YYYY-MM-DD'));
            this.dealEditorFormGroup.get("dealStart").setValue(moment(deal.dealStart).format('HH:mm'));
            this.dealEditorFormGroup.get("dealEnd").setValue(moment(deal.dealEnd).format('HH:mm'));

            this.dealEditorFormGroup.get("limitedDealNumber").setValue(deal.numberOfDeals > 0);

            this.previewCard.imageURL = undefined;
            this.previewCard.id = deal.id;
            this.imageService.setDealImageURL(this.previewCard);
        } else
            this.clearFields();
    }

    public cancel() {
        this.dealEditorService.setCurrentDeal(null);

        this.clearFields();
    }

    private clearFields() {
        this.uneditedDeal = null;
        this.editingDeal = false;
        this.previewCard = LocaleCard.getBlankCard();

        this.cleanUpImageData();

        Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
            this.dealEditorFormGroup.get(key).setValue(null);
        });

        FormBuilderHelper.markFormGroupUntouched(this.dealEditorFormGroup);
    }

    private getDealFromFields(): LocaleCard {
        const startDate = this.dealEditorFormGroup.get("dealDay").value;

        const startTime = moment(startDate + " " + this.dealEditorFormGroup.get("dealStart").value);
        const endTime = moment(startDate + " " + this.dealEditorFormGroup.get("dealEnd").value);

        let deal: LocaleCard;

        if (!this.limitDealNumber) {
            deal = new LocaleCard(this.dealEditorFormGroup.get("dealDescription").value,
                this.dealEditorFormGroup.get("longDealDescription").value || "",
                startTime.toObject(),
                endTime.toObject(),
                -1,//no deal limit
                this.dealEditorFormGroup.get("dealType").value,
                this.dealEditorFormGroup.get("isVegetarian").value,
                this.dealEditorFormGroup.get("isVegan").value);

            deal.organization = this.currentOrganization;
        } else {
            deal = new LocaleCard(this.dealEditorFormGroup.get("dealDescription").value,
                this.dealEditorFormGroup.get("longDealDescription").value || "",
                startTime.toObject(),
                endTime.toObject(),
                this.dealEditorFormGroup.get("numberOfDeals").value,
                this.dealEditorFormGroup.get("dealType").value,
                this.dealEditorFormGroup.get("isVegetarian").value,
                this.dealEditorFormGroup.get("isVegan").value);

            deal.organization = this.currentOrganization;
        }

        return deal;
    }

    public getDeviceIsSmall(): boolean {
        if (this.platformReady)
            return this.platform.width() < IonicScreenSize.Lg;
    }

    public editPhotoData() {
        if (this.isDesktop()) {
            this.uploadDesktopImage();
        } else {
            this.actionSheetCtrl.create({
                title: 'Upload type',
                buttons: [
                    {
                        text: 'Camera',
                        icon: !this.platform.is('ios') ? 'camera' : null,
                        handler: () => {
                            this.cameraUpload(PictureSourceType.CAMERA);
                        }
                    }, {
                        text: 'Photo Library',
                        icon: !this.platform.is('ios') ? 'images' : null,
                        handler: () => {
                            this.cameraUpload(PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                ]
            }).present();
        }

    }

    private cameraUpload(sourceType: PictureSourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.cameraService.DestinationType.FILE_URI,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
        };

        this.cameraService.getPicture(options).then((photoData) => {
            this.imageDataForPreview = photoData;
            this.imageDataForUpload = photoData;
        });
    }

    public isDesktop(): boolean {
        return this.platform.is(IonicPlatform.Core);
    }

    public uploadDesktopImage() {
        this.hiddenFileInput.nativeElement.click();
    }

    public cardIsEdited(): boolean {
        return !LocaleCard.cardsAreLogicallyEqual(this.getDealFromFields(), this.uneditedDeal) || this.imageDataForUpload;
    }

    private cleanUpImageData() {
        this.imageDataForPreview = null;
        this.imageDataForUpload = null;
        this.fileReader.abort();
    }
}