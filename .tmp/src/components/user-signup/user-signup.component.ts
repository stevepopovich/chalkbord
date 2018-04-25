import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService, UserType } from "../../services/authorization.service";
import { CardDataService } from "../../services/card-data.service";

@Component({
    templateUrl: './user-signup.component.html',
    selector: 'user-signup',
    styleUrls: ['/user-signup.component.scss']
})
export class UserSignUpComponent{
    public userFormGroup: FormGroup;

    public signingUp: boolean = false;

    public constructor(public formBuilder: FormBuilder, public auth: AuthorizationService, public cardService: CardDataService){
        this.userFormGroup = formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            isRestuarant: [''],
        });
    }

    public signUp(): void{
        if(!this.signingUp){
            this.signingUp = true;
        }else if(this.userFormGroup.valid){
            if(this.userFormGroup.get("isRestuarant").value)
                this.auth.signUpUser(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, UserType.Restaurant);
            else
                this.auth.signUpUser(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, UserType.Consumer);

                //navigate to profile
        }
        else{
            //tell them shits invalid
        }
    }
    
    public login(): void{
        this.auth.signIn(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, false);
    }
}