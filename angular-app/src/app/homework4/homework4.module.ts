import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeworkScreenComponent} from './homework-screen/homework-screen.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {AddSpacePipe} from './add-space.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeworkScreenComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    AddSpacePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddSpacePipe
  ]
})
export class Homework4Module {
}
