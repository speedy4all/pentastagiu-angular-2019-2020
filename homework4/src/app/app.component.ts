import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework 4';

  logInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
