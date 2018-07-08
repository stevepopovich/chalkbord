import { Guid } from "./utils.type";
import { LocaleLocation } from "./location.type";
import { Organization } from "./organization.type";

export class LocaleCard {
    public id: string;

    public imageURL: string;
    public organization: Organization;

    public constructor(public dealDescription: string, public dealStart: Date,
        public dealEnd: Date, public numberOfDeals: Number, public dealType: DealType, obj?: any) {
        this.id = Guid.newGuid();

        if (obj) {
            this.id = obj.id;
            this.organization = obj.organization;
            this.dealDescription = obj.dealDescription;
            this.dealStart = new Date(obj.dealStart);
            this.dealEnd = new Date(obj.dealEnd);
            this.numberOfDeals = obj.numberOfDeals;
            this.dealType = obj.dealType;
        }
    }

    public getAsPlainObject(): any {
        this.organization = Object.assign({}, this.organization);

        return Object.assign({}, this);
    }

    public static getBlankCard(): LocaleCard {
        const blankCard = new LocaleCard(null, new Date(), new Date(), -1, DealType.Drinks, null)
        blankCard.organization = new Organization("", "", "", "", new LocaleLocation());
        return blankCard;
    }

    public static updateDealModel(objectToUpdate: LocaleCard, updatedObject: LocaleCard): void {
        objectToUpdate.dealDescription = updatedObject.dealDescription;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealStart = updatedObject.dealStart;
        objectToUpdate.dealEnd = updatedObject.dealEnd;
        objectToUpdate.dealType = updatedObject.dealType;
        objectToUpdate.numberOfDeals = updatedObject.numberOfDeals;
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
}

export enum DealType {
    Drinks,
    Food,
    Both
}

