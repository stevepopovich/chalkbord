import { Component } from "@angular/core";
import { Deal } from "../../types/deals.type";
import { CardDataService } from "../../services/card-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from "../../services/uploader.service";
import { AuthorizationService } from "../../services/authorization.service";
import { DealEditorService } from "../../services/deal-editing.service";

@Component({
    templateUrl: './deal-editor.component.html',
    selector: 'deal-editor',
    styleUrls: ['/deal-editor.component.scss'] 
})
export class DealEditorComponent{

    public dealEditorFormGroup: FormGroup;

    public limitDealNumber: boolean = false;

    public imageData; 

    public editingDeal: boolean;
    public uneditedDeal: Deal;

    public constructor(private cardService: CardDataService, public formBuilder: FormBuilder, private uploader: UploadService,
                    public authService: AuthorizationService, public dealEditorService: DealEditorService){
        this.dealEditorFormGroup = formBuilder.group({
            dealDescription: ['', Validators.compose([Validators.maxLength(9999), Validators.minLength(0), Validators.required])],
            numberOfDeals: ['', Validators.compose([Validators.maxLength(1000), Validators.pattern('[0-9 ]*')])],
            limitedDealNumber: [''],
            dealDay: ['', Validators.required],
            dealStart: ['', Validators.required],
            dealEnd:['', Validators.required],
            dealType: ['', Validators.required],
        });

        this.dealEditorService.currentDealSubject.subscribe((deal: Deal) => {
            this.setCurrentCardBeingEdited(deal);
        });
    }

    public setImageData(event): void{
        this.imageData = event.srcElement.files[0];
    }

    public save(){

    }

    public add(){
        this.dealEditorFormGroup.updateValueAndValidity();

        if(this.dealEditorFormGroup.valid && this.imageData){
            const startDate = this.dealEditorFormGroup.get("dealDay").value;

            const startDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealStart").value, startDate);
            const endDatetime = this.getCombinedTime(this.dealEditorFormGroup.get("dealEnd").value, startDate);

            let deal: Deal;

            if(!this.limitDealNumber){
                deal = new Deal(this.authService.currentUser.restaurant.uid, 
                this.dealEditorFormGroup.get("dealDescription").value, 
                startDatetime,
                endDatetime,
                -1,//no deal limit
                this.dealEditorFormGroup.get("dealType").value, 
                this.authService.currentUser.restaurant.location);

                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }else{
                deal = new Deal(this.authService.currentUser.restaurant.uid, 
                this.dealEditorFormGroup.get("dealDescription").value, 
                startDatetime,
                endDatetime,
                this.dealEditorFormGroup.get("numberOfDeals").value,
                this.dealEditorFormGroup.get("dealType").value, 
                this.authService.currentUser.restaurant.location);
                
                deal.imageSource = "/locale-deal-photos/" + deal.id;
            }

            this.uploader.uploadDealPhoto(this.imageData, deal.id);

            this.cardService.addCard(deal);

            this.authService.addCardIdToCurrentUser(deal.id);
        }
    }

    private setCurrentCardBeingEdited(deal: Deal) {
        if(deal){
            this.uneditedDeal = deal;
            this.editingDeal = true;

            Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
                if(key != "dealDay" && key != "dealStart" && key != "dealEnd")//this just suprsses some warnings
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
        const combinedTime = new Date(date);
        const timeDateObj = new Date('1970-01-01T' + time);//use abitrary stuff date here to make parsing happen

        const timeOffsetInHours = timeDateObj.getTimezoneOffset() / 60;

        combinedTime.setHours(timeDateObj.getHours() - timeOffsetInHours + 1);//add one bc combinedTime is one hour off?? GMT-400???
        combinedTime.setMinutes(timeDateObj.getMinutes());//idk but this should be watched

        return combinedTime;
    }

    public cancel(){
        this.dealEditorService.setCurrentDeal(null);

        this.clearFields();
    }

    private clearFields(){
        this.uneditedDeal = null;
        this.editingDeal = false;

        Object.keys(this.dealEditorFormGroup.controls).forEach(key => {
            this.dealEditorFormGroup.get(key).setValue(null);
        });
    }
}