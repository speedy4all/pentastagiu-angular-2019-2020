import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [LoginFormComponent],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
