import { Guid } from "./utils.type";
import { LocaleLocation } from "./location.type";
import { Organization } from "./organization.type";
import * as moment from 'moment';

export class LocaleCard {
    public id: string;

    public imageURL: string;
    public organization: Organization;

    public constructor(public dealDescription: string,
        public longDealDescription: string,
        public dealStart: moment.MomentObjectOutput,
        public dealEnd: moment.MomentObjectOutput,
        public numberOfDeals: Number,
        public dealType: DealType,
        public isVegetarian: boolean,
        public isVegan: boolean,
        obj?: any) { // This obj is used for easily building a card
        this.id = Guid.newGuid();

        if (obj) {
            this.id = obj.id;
            this.organization = obj.organization;
            this.dealDescription = obj.dealDescription;
            this.longDealDescription = obj.longDealDescription;
            this.dealStart = obj.dealStart;
            this.dealEnd = obj.dealEnd;
            this.numberOfDeals = obj.numberOfDeals;
            this.isVegetarian = obj.isVegetarian;
            this.isVegan = obj.isVegan;
            this.dealType = obj.dealType;
        }
    }

    public getAsPlainObject(): any {
        this.organization = Object.assign({}, this.organization);

        return Object.assign({}, this);
    }

    public static getBlankCard(): LocaleCard {
        const blankCard = new LocaleCard(null, null, moment().toObject(), moment().toObject(), -1, DealType.Drinks, false, false, null);
        blankCard.organization = new Organization("", "", "", "", new LocaleLocation());
        return blankCard;
    }

    public static updateDealModel(objectToUpdate: LocaleCard, updatedObject: LocaleCard): void {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.longDealDescription = updatedObject.longDealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
        objectToUpdate.isVegetarian = updatedObject.isVegetarian;
        objectToUpdate.isVegan = updatedObject.isVegan;
        objectToUpdate.organization = updatedObject.organization;
    }

    public static findAndUpdateCards(incomingCards: LocaleCard[], cardsToManipulate: LocaleCard[]) {
        incomingCards.forEach((dealModel) => {
            const foundCard = cardsToManipulate[cardsToManipulate.findIndex(c => c.id == dealModel.id)];

            if (foundCard)
                LocaleCard.updateDealModel(foundCard, dealModel);
            else
                cardsToManipulate.push(dealModel);
        });
    }

    public static cardsAreLogicallyEqual(obj1: LocaleCard, obj2: LocaleCard): boolean {
        if (obj1 && obj2) {
            return obj1.dealDescription === obj2.dealDescription
                && moment(obj1.dealEnd).isSame(moment(obj2.dealEnd))
                && moment(obj1.dealStart).isSame(moment(obj2.dealStart))
                && obj1.dealType === obj2.dealType
                && obj1.isVegan === obj2.isVegan
                && obj1.isVegetarian === obj2.isVegetarian
                && obj1.longDealDescription === obj2.longDealDescription
                && obj1.numberOfDeals === obj2.numberOfDeals;
        } else
            return false;
    }
}

export enum DealType {
    Drinks,
    Food,
    Both
}

