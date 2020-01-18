import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Array<Object>;

    @Output() removeTodo = new EventEmitter<number>();

    constructor() {}

    ngOnInit() {}

    public removeTask(): void {
      this.removeTodo.emit(1);
    }

}
