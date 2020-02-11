import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  toDoTitle: string;

  @Output()
  changed = new EventEmitter<boolean>();

  constructor() {
    this.toDoTitle = '';
  }

  itemResolved() {
    this.changed.emit(true);
  }

  ngOnInit() {
  }

}
