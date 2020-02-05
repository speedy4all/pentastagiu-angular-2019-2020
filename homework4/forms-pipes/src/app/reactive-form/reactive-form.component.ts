import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  title = 'Reactive form';
  reactiveForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  saveForm(form) {
    console.log(form);
  }

  createForm() {
    this.reactiveForm = this.form.group({
      email: ['email@email.com', Validators.required],
      password: ['', Validators.required]
    });
  }

}
