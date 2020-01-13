import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sangular-app';
  testForm2: FormGroup;
  constructor(private form: FormBuilder) {
    this.createForm();
  }
  saveName(form) {
    console.log(form);
  }

  createForm() {
    this.testForm2 = this.form.group({
      name: ['test', Validators.required ],
      title: ['', Validators.required ]
    });
  }
}
 