import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { TodoAddButtonComponent } from './todo-add-button/todo-add-button.component';



@NgModule({
  declarations: [TodoItemComponent, TodoAddButtonComponent],
  exports: [
    TodoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoItemModule { }
