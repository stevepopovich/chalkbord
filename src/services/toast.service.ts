import { Injectable } from "@angular/core";
import { ToastController, Toast } from "ionic-angular";

@Injectable()
export class ToastService {

    constructor(public toastCtrl: ToastController) {

    }

    public showToast(message: string, timeInMS: number): void {
        let toast = this.toastCtrl.create({
            message: message,
            duration: timeInMS,
            position: "bottom"
        });

        toast.present();
    }

    public showReadableToast(message: string): void {
        const wordTime = this.calculateReadTime(message);

        let toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom"
        });

        toast.present();
    }

    public showReadableAndAnswerableOkayToast(message: string): Toast {
        let wordTime = this.calculateReadTime(message);

        wordTime *= 2;

        let toast: Toast = this.toastCtrl.create({
            message: message,
            duration: wordTime,
            position: "bottom",
            showCloseButton: true,
            closeButtonText: "OK"
        });

        return toast;
    }

    private calculateReadTime(message: string): number {
        const wordCount = message.split(" ").length;

        const wordsPerMinute = 210;//resonable words per minute someone can read on a computer

        const wordTime = ((wordCount / wordsPerMinute) *
            (60 * 1000)) +//convert to milliseconds
            1500;//delay to see the notification toast;

        return wordTime;
    }
}