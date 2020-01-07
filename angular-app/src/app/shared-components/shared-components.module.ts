import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TotoAddComponent } from './toto-add/toto-add.component';
import { TodoAddComponent } from './todo-add/todo-add.component';



@NgModule({
  declarations: [TodoItemComponent, TotoAddComponent, TodoAddComponent],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
