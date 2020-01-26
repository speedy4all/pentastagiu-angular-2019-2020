import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-app';
  stringForPipe = 'testing the string';
  reactiveForm1: FormGroup;
  reactiveForm2: FormGroup;
  constructor(private form: FormBuilder) {
    this.createForm1();
    this.createForm2();
  }
  saveForm(form) {
    console.log(form.value);
  }

  createForm1() {
    this.reactiveForm1 = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  createForm2() {
    this.reactiveForm2 = this.form.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
