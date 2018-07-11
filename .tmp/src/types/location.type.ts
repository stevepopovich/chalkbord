export class LocaleLocation {
    public lat: number;
    public lng: number

    constructor(googleLocation?: google.maps.LatLng){
        if(googleLocation){
            this.lat = googleLocation.lat();
            this.lng = googleLocation.lng();
        }
    }

    public getAsPlainObject(): any {
        return Object.assign({}, this);
    }
}