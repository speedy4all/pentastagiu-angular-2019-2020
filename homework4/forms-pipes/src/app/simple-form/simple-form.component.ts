import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  title = 'Simple form';
  form: string;

  constructor() {
  }

  ngOnInit() {
  }

  saveForm(form) {
    console.log(form);
  }
}
