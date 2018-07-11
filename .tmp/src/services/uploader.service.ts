import { Injectable } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class UploadService {
    constructor(public storage: AngularFireStorage,
                private camera: Camera) { }

    public captureImage(): Promise<any> {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        }

        return this.camera.getPicture(options);//returns image data base 64 as string
    }
    
    public uploadDealPhoto(imageData: string, fileName: string, updatePicture: boolean): AngularFireUploadTask {
        if(updatePicture && this.storage.ref("/locale-deal-photos/"+ fileName))
            this.storage.ref("/locale-deal-photos/"+ fileName).delete();

        return this.storage.upload("/locale-deal-photos/"+ fileName, imageData);
    }
}