import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'tema4App';
  testForm: FormGroup;
  testForm2: FormGroup;

  constructor (private form: FormBuilder) {
    this.createForm();
    this.createTestForm2();
  }

  saveName(form: any) {
    console.log(form)
  }

  createForm() {
    this.testForm = this.form.group( {
      email: ["", [Validators.required, Validators.minLength(1)] ],
      password: ["", [Validators.required, Validators.minLength(1)] ]
    })
   } ;

    createTestForm2 () {
      this.testForm2 = this.form.group({
        firstName: ['', [Validators.required, Validators.minLength(1)] ],
        lastName: ['', [Validators.required, Validators.minLength(1)] ],
        phoneNumber: ['', [Validators.required, Validators.minLength(1)] ],
        email: ['', [Validators.required, Validators.minLength(1)] ],
      });
  } 
}
