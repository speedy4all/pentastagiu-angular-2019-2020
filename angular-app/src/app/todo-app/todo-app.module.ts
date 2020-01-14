import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app.component';
import {TodoItemModule} from './todo-item/todo-item.module';
import {HeaderModule} from './header/header.module';



@NgModule({
  declarations: [TodoAppComponent],
  imports: [
    CommonModule,
    TodoItemModule,
    HeaderModule
  ]
})
export class TodoAppModule { }
