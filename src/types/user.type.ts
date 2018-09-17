import { Guid } from "./utils.type";

export class LocaleUser {
    public uid: string;//from firebase auth
    public firstName: string;
    public userType: UserType;
    public cardIds?: Guid[];
    public radius?: number;//this will probably become user settings
    public claimedCards?: Guid[];

    public constructor(uid: string, userType: UserType, firstName: string) {
        this.uid = uid;
        this.userType = userType;
        this.firstName = firstName;
    }

    public getAsPlainObject() {
        return Object.assign({}, this);
    }
}

export enum UserType {
    Consumer,
    Organization,
    User//signifies both consumer and organization
}