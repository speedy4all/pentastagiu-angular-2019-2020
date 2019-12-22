import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';



@NgModule({
  declarations: [TodoItemComponent, TodoAddComponent],
  imports: [
    CommonModule
  ],
  exports: [TodoItemComponent, TodoAddComponent]
})
export class SharedComponentsModule { }
