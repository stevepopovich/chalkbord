import { Injectable } from "@angular/core";
import { AngularFireStorage } from "angularfire2/storage";
import { LocaleCard } from "../../types/deals.type";

@Injectable()
export class ImageService {
    constructor(private storage: AngularFireStorage) {
    }

    public setDealImageURL(dealModel: LocaleCard): void {
        this.storage.ref("locale-deal-photos/" + dealModel.id).getDownloadURL().subscribe(URL => {
            dealModel.imageURL = URL;
        });
    }
}