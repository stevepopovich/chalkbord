import { Injectable } from "@angular/core";
import { AngularFireStorage } from "angularfire2/storage";
import { Deal } from "../types/deals.type";

@Injectable()
export class ImageService {
    constructor(private storage: AngularFireStorage) {
    }

    public setDealImageURL(dealModel: Deal): void{
        this.storage.ref(dealModel.imageSource).getDownloadURL().subscribe(URL => {
            dealModel.imageURL = URL;
        });
    }
}