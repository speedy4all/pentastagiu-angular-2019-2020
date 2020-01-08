import { Component } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tema04 Forms & Pipes';

  formOne: FormGroup;
  formTwo: FormGroup;
  formThree: FormGroup;

  constructor(private form: FormBuilder){
    this.createFormOne();
    this.createFormTwo();
    this.createFormThree();
  }

  saveForm(form){
    console.log(form);
  }

  createFormOne(){
      this.formOne = this.form.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  createFormTwo(){
    this.formTwo = this.form.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
      ])],
      email: ['', Validators.required],
    });
  }

  createFormThree(){
    this.formThree = this.form.group({
      text: ['This is a text']
    });
  }
}
