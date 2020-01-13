import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tema4 (forms)';
  string = '';
  firstForm: FormGroup;
  secondForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.createFirstForm();
    this.createSecondForm();
  }
  saveName(form) {
    console.log(form);
  }

  createFirstForm() {
    this.firstForm = this.form.group({
      email: ['', [Validators.required, Validators.minLength(1)] ],
      password: ['', [Validators.required, Validators.minLength(1)] ]
    });
  }

  createSecondForm() {
    this.secondForm = this.form.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      email: ['', Validators.required ],
    });
  }
}
 