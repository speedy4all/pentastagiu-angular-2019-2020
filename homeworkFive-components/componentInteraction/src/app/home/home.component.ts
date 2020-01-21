import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
}