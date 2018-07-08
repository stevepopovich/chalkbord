export class Guid {
    static newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export class Util {
    //used simply to async wait for something
    public static delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static randomNumber(from: number, to: number): number {
        return Math.floor(from + Math.random() * to);
    }
}