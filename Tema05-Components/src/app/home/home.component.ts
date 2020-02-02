import { Component, OnInit } from '@angular/core';

import { TodoItemComponent } from '../shared-components/todo-item/todo-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  title = "Todo App";
  increment = 0;
  taskItem = [];

  constructor() {

  }

  addTask(){
    this.increment++;
    this.taskItem.push("Task : "+this.increment);
  }

  deleteTask(position){
    this.taskItem.splice(position, 1);
  }

  doneTask(position){
    this.taskItem[position] += " DONE";
  }

}
