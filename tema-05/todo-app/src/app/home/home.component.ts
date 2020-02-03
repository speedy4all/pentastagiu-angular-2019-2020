import { Component } from '@angular/core';

import { TodoItemComponent } from '../shared-components/todo-item/todo-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  todoArray = ['Todo 01', 'Todo 02', 'Todo 03', 'Todo 04', 'Todo 05', 'Todo 06', 'Todo 07', 'Todo 08', 'Todo 09'];
  // delete todo
  delTodo(i: number) {
    this.todoArray.splice(i, 1);
  }
}
