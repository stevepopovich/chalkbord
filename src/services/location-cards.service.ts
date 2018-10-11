import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { LocaleLocation } from '../types/location.type';
import { CardDataService } from './firebase/firestore-collection/card-data.service';
import { LocaleCard } from '../types/deals.type';

@Injectable()
export class LocationCardsService {
    public cardModels: LocaleCard[];
    public currentLocation: LocaleLocation;

    public setUpCurrentLocationCards(geolocation: Geolocation, cardService: CardDataService, currentLocation: LocaleLocation): Promise<LocaleCard[]> {
        return new Promise(function (resolve) {
            if (currentLocation) {
                cardService.getCardsByLatLng(currentLocation, 100000000).subscribe((cardModels) => {
                    return resolve(cardModels);
                });
            }
            
            geolocation.watchPosition().subscribe((resp) => {
                currentLocation = new LocaleLocation();
                currentLocation.lat = resp.coords.latitude;
                currentLocation.lng = resp.coords.longitude;

                cardService.getCardsByLatLng(currentLocation, 100000000).subscribe((cardModels) => {
                    return resolve(cardModels);
                });
            });
        });
    }
}
