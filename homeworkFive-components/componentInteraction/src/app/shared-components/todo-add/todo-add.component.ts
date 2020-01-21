import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})

export class TodoAddComponent {

  @Output() addEvent = new EventEmitter<boolean>();

  addTask(add: boolean){
    this.addEvent.emit(add);
  }

  constructor() { }

}
