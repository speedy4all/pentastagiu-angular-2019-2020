import { Component } from '@angular/core';
import { Credentials } from '../login-form/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  title = 'Login Form';
  model = new Credentials(1, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
