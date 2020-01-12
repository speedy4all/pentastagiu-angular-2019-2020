import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [UserFormComponent],
  exports: [
    UserFormComponent
  ]
})
export class UserFormModule { }
