import { FormBuilder, Validators } from '@angular/forms';
import { RememberMeFormGroup } from './remember-me-form-group.type';

export class UserLoginFormGroup extends RememberMeFormGroup {
    constructor(formBuilder: FormBuilder) {
        super(formBuilder);

        this.addControl('email', this.formBuilder.control('', Validators.compose([Validators.email, Validators.required])));
        this.addControl('password', this.formBuilder.control('', Validators.compose([Validators.minLength(8), Validators.maxLength(64)])));
    }
}