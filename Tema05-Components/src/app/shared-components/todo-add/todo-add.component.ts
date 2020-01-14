import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  @Output() addEvent = new EventEmitter<boolean>();

  addTask(add: boolean){
    this.addEvent.emit(add);
    console.log(add);
  }

  constructor() { }



}
