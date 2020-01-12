import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'forms-app';
    authTitle = 'Autentification form';
    registerForm: FormGroup;
    registerFormUser: FormGroup;
    submitted = false;
    submittedUser = false;

    constructor(private formBuilder: FormBuilder) {}
    
    // easy function to math passwords
    mustMathc(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
            }

            if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
            } else {
            matchingControl.setErrors(null);
            }
        }
    }

    ngOnInit() {
        // autentification validators
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            }, {
            validator: this.mustMathc('password', 'confirmPassword')
        });
        // user validators
        this.registerFormUser = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', [Validators.required, Validators.minLength(12)]],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    // convenience getter for easy access to autentification form
    get auth() { return this.registerForm.controls; }

    // convenience getter for easy access to user form
    get authUser() { return this.registerFormUser.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
        return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onSubmitUser() {
        this.submittedUser = true;

        // stop here if form is invalid
        if (this.registerFormUser.invalid) {
        return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormUser.value, null, 4));
    }

}
