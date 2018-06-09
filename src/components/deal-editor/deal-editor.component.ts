import { Component } from "@angular/core";
import { Deal } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
import { AuthorizationService } from "../../services/authorization.service";

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
    styleUrls: ['/deal-editor.component.scss'] 
})
export class DealEditorComponent{
    public dealEditorFormGroup: FormGroup;

    public limitDealNumber: boolean = false;

    public day;

    public imageData;

    public constructor(private cardService: CardDataService, public formBuilder: FormBuilder, private uploader: UploadService,
                    public authService: AuthorizationService){
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.compose([Validators.maxLength(9999), Validators.minLength(0), Validators.required])],
            dealNumber: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealStart: ['', Validators.required],
            dealEnd:['', Validators.required],
            dealType: ['', Validators.required],
        });
        this.cardService;
    }

    public uploadImage(event): void{
        this.imageData = event.srcElement.files[0];
    }

    public add(){
        this.dealEditorFormGroup.updateValueAndValidity();

        if(this.dealEditorFormGroup.valid && this.imageData){
            let deal: Deal;

            if(!this.limitDealNumber){
                deal = new Deal(this.authService.currentUser.restaurant.uid, 
                this.dealEditorFormGroup.get("dealDescription").value, 
                new Date(this.dealEditorFormGroup.get("dealStart").value), 
                new Date(this.dealEditorFormGroup.get("dealEnd").value),
                -1,//no deal limit
                this.dealEditorFormGroup.get("dealType").value, 
                null);

                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }else{
                deal = new Deal(this.authService.currentUser.restaurant.uid, 
                this.dealEditorFormGroup.get("dealDescription").value, 
                new Date(this.dealEditorFormGroup.get("dealStart").value),
                new Date(this.dealEditorFormGroup.get("dealEnd").value),
                this.dealEditorFormGroup.get("dealNumber").value,
                this.dealEditorFormGroup.get("dealType").value, 
                null);
                
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }

            this.uploader.uploadDealPhoto(this.imageData, deal.id);

            this.cardService.addCard(deal);
        }
    }
}