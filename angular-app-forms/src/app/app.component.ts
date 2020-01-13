import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-forms';
  text = 'Audi, Vorsprung durch Technik';
  testForm: FormGroup;
  testForm1: FormGroup;
  constructor(private form: FormBuilder) {
    this.createForm();
    this.createForm1();
  }
  saveName(form) {
    console.log(form);
  }
  
  createForm() {
    this.testForm = this.form.group({
      Email: ['email', Validators.required],
      Password: ['password', Validators.minLength(1)]
    });
  }

  createForm1() {
    this.testForm1 = this.form.group( {
      FirstName: ['First Name', Validators.required],
      LastName: ['Last Name',Validators.required],
      Phone: ['Phone',Validators.required],
      Email: ['Email',Validators.required]
    })
  }
}
