import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.scss']
})
export class MainTodoComponent implements OnInit {

  todoItems: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.todoItems = [
      {
          name: 'Wake up',
          completed: false
      },
      {
          name: 'Go to work',
          completed: false
      },
      {
          name: 'Go to the gym',
          completed: false
      }
  ];
  }

  public addTodo(newTask: Object) {
    this.todoItems.push(newTask);
  }

  public onRemove(remove: number): void {
      this.todoItems.splice(remove, 1);
  }

}
