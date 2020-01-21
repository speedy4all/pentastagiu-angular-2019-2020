import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit{

  @Input() task: string;
  active = true;

  constructor() {
  }

  ngOnInit() {
  }
}