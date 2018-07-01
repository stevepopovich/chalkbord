import { Injectable } from "@angular/core";
import { AngularFireStorage } from "angularfire2/storage";
import { GSCard } from "../types/deals.type";

@Injectable()
export class ImageService {
    constructor(private storage: AngularFireStorage) {
    }

    public setDealImageURL(dealModel: GSCard): void{
        this.storage.ref("locale-deal-photos/" + dealModel.id).getDownloadURL().subscribe(URL => {
            console.log(URL);
            dealModel.imageURL = URL;
        });
    }
}