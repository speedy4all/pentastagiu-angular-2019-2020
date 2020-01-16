import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  submitted = false;
  user: User = {
    email: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

}

interface User {
  email: string,
  password: string
}
