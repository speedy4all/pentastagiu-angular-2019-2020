import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add.component';



@NgModule({
  declarations: [TodoAddComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodoAddComponent
  ]
})
export class TodoAddModule { }
