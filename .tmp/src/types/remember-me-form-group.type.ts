import { FormBuilder, FormGroup } from "@angular/forms";

export class RememberMeFormGroup extends FormGroup {
    public formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        super({});

        this.formBuilder = formBuilder;

        this.addControl('rememberMe', this.formBuilder.control(''));
    }
}