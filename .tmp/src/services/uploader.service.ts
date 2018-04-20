import { Injectable } from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class UploadService {
    constructor(public storage: AngularFireStorage,
                private camera: Camera) { }

    // Our methods will go here...

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
    
    public uploadDealPhoto(imageData: string, fileName: string): void {
        console.log(imageData);

        this.storage.upload("/locale-deal-photos/"+ fileName, imageData);
    }
}