import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

    @Output() newTodo = new EventEmitter<Object>();

    constructor() {}

    ngOnInit() {
    }

  public addNewTodo(): void {
    const newTask = {
      name: 'New Task',
      completed: false
    };
    this.newTodo.emit(newTask);
  }

}
