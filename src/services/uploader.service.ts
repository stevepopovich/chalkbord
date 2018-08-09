import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()
export class UploadService {
    constructor(public storage: AngularFireStorage) { }

    public uploadDealBlobPhoto(imageData: File, fileName: string, updatePicture: boolean): AngularFireUploadTask {
        if (updatePicture && this.storage.ref("/locale-deal-photos/" + fileName))
            this.storage.ref("/locale-deal-photos/" + fileName);

        return this.storage.upload("/locale-deal-photos/" + fileName, imageData);
    }

    public uploadDealBase64Photo(imageData: string, fileName: string, updatePicture: boolean): AngularFireUploadTask {
        if (updatePicture && this.storage.ref("/locale-deal-photos/" + fileName))
            this.storage.ref("/locale-deal-photos/" + fileName);

        return this.storage.ref("/locale-deal-photos/" + fileName).putString(imageData, 'base64');
    }
}