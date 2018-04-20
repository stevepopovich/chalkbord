import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";
import { DealModel, RestaurantModel } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";

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

    public constructor(public viewCtrl: ViewController, private cardService: CardDataService, public formBuilder: FormBuilder, private uploader: UploadService){
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*'), Validators.required])],
            dealNumber: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealStart: ['', Validators.required],
            dealEnd:['', Validators.required],
            dealType: ['', Validators.required],
        });
        this.cardService;
    }

    public close(){
        this.viewCtrl.dismiss();
    }

    public uploadImage(event): void{
        this.imageData = event.srcElement.files[0];
    }

    public save(){
        this.dealEditorFormGroup.updateValueAndValidity();

        if(this.dealEditorFormGroup.valid && this.imageData){
            let deal: DealModel;

            if(!this.limitDealNumber){
                deal = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), 
                this.dealEditorFormGroup.get("dealDescription").value, 
                new Date(this.dealEditorFormGroup.get("dealStart").value), 
                new Date(this.dealEditorFormGroup.get("dealEnd").value),
                -1,
                this.dealEditorFormGroup.get("dealType").value, 
                null);

                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }else{
                deal = new DealModel(new RestaurantModel("Name1", "Columbus, OH", ""), 
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

            this.viewCtrl.dismiss();
        }
    }
}