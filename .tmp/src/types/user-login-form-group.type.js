var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Validators } from '@angular/forms';
import { RememberMeFormGroup } from './remember-me-form-group.type';
var UserLoginFormGroup = (function (_super) {
    __extends(UserLoginFormGroup, _super);
    function UserLoginFormGroup(formBuilder) {
        var _this = _super.call(this, formBuilder) || this;
        _this.addControl('email', _this.formBuilder.control('', Validators.compose([Validators.email, Validators.required])));
        _this.addControl('password', _this.formBuilder.control('', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])));
        return _this;
    }
    return UserLoginFormGroup;
}(RememberMeFormGroup));
export { UserLoginFormGroup };
//# sourceMappingURL=user-login-form-group.type.js.map