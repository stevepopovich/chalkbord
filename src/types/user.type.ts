import { LocaleCard } from "./deals.type";
import { Guid } from "./utils.type";
import { Observable } from "rxjs";
import { Organization } from "./organization.type";

export class LocaleUser {
    public uid: string;//from firebase auth
    public firstName: string;
    public userType: UserType;
    public cardIds?: Guid[];
    public organization?: Organization;
    public cards?: Observable<LocaleCard[]>;
    public radius?: number;

    public constructor(uid: string, userType: UserType, firstName: string) {
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
    }

    public getAsPlainObject() {
        this.organization = Object.assign({}, this.organization);

        return Object.assign({}, this);
    }
}

export enum UserType {
    Consumer,
    Organization,
    User//signifies both consumer and organization
}