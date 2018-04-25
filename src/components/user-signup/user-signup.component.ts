import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthorizationService, UserType, GSUser } from "../../services/authorization.service";
import { ViewControllerService } from "../../services/view-controller.service";

@Component({
    templateUrl: './user-signup.component.html',
    selector: 'user-signup',
    styleUrls: ['/user-signup.component.scss']
})
export class UserSignUpComponent{
    public userFormGroup: FormGroup;

    public signingUp: boolean = false;

    public isRest: boolean = false;

    public constructor(private formBuilder: FormBuilder, private auth: AuthorizationService, private viewControl: ViewControllerService){
        this.userFormGroup = this.formBuilder.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9]*')])],
            isRestuarant: [''],
        });
    }

    public signUp(): void{
        if(!this.signingUp){
            this.signingUp = true;
        }else if(this.userFormGroup.valid){
            const email: string = this.userFormGroup.get("email").value;
            const password: string = this.userFormGroup.get("password").value;

            var userType: UserType;
            if(this.userFormGroup.get("isRestuarant").value)
                userType = UserType.Restaurant;
            else
                userType = UserType.Consumer;

            this.auth.checkUserSignInMethods(email).then((methods) => {
                if(!methods || methods.length < 1){//user not in db
                    this.auth.signUpUser(email, password).then(() => {
                        this.auth.signIn(email, password, true).then(() => {
                            const newUser = new GSUser(email, userType);
        
                            this.auth.currentUser = newUser;
        
                            this.auth.userCollection.doc(newUser.id).set(newUser.getAsPlainObject());

                            this.viewControl.setConsumerView();//will destory this
        
                        }).catch((reason) => {//couldn't sign in 
                            console.error("Sign up failed because: " + reason);
                        });
                    }).catch((reason) => {//couldn't sign up
                        console.error("Sign up failed because: " + reason);
                    });
                }
            }).catch((reason) => {//couldn't check sign in methods
                console.error("Sign up failed because: " + reason);
            });
        }
        else{
            //tell them shits invalid
        }
    }
    
    public login(): void{
        if(this.userFormGroup.valid)
            this.auth.signIn(this.userFormGroup.get("email").value, this.userFormGroup.get("password").value, false);
    }
}