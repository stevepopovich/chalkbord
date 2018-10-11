import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Injectable()
export class LocationService {
    private currentLocationPromise: Promise<Geoposition>;

    constructor(private geolocation: Geolocation) {

    }

    public setUpCurrentLocation() {
        this.currentLocationPromise = this.geolocation.getCurrentPosition();
    }

    public getCurrentLocation(): Promise<Geoposition> {
        return this.currentLocationPromise;
    }
}