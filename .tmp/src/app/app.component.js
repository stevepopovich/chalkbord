var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
var LocaleApp = (function () {
    function LocaleApp(statusBar) {
        this.statusBar = statusBar;
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByName("black");
    }
    LocaleApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/Contence/locale/src/app/app.template.html"*/'<consumer></consumer>'/*ion-inline-end:"/Users/Contence/locale/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [StatusBar])
    ], LocaleApp);
    return LocaleApp;
}());
export { LocaleApp };
//# sourceMappingURL=app.component.js.map