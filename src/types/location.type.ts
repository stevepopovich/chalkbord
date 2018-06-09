export class GSLocation {
    public lat: number;
    public lng: number

    constructor(googleLocation: google.maps.LatLng){
        this.lat = googleLocation.lat();
        this.lng = googleLocation.lng();
    }

    public getAsPlainObject(): any {
        return Object.assign({}, this);
    }
}