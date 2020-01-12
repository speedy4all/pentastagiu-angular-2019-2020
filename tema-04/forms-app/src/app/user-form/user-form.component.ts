import { Component } from '@angular/core';
import { PersonalData } from '../user-form/personal-data';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  title = 'User Form';
  model = new PersonalData(1, '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
