import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Output() delEvent = new EventEmitter<boolean>();
  @Input() todo: string;

  constructor() { }

  delClicked(action: boolean) {
    this.delEvent.emit(action);
  }

}
