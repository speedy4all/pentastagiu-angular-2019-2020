import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoShellComponent } from './todo-shell.component';
import { TodoHeaderModule } from './todo-header/todo-header.module';
import { TodoAddModule } from './todo-add/todo-add.module';
import { TodoItemModule } from './todo-item/todo-item.module';



@NgModule({
  declarations: [TodoShellComponent],
  imports: [
    CommonModule,
    TodoHeaderModule,
    TodoAddModule,
    TodoItemModule
  ],
  exports: [
    TodoShellComponent
  ]
})
export class TodoShellModule { }
