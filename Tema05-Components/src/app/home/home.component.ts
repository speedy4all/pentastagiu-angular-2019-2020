import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  text: string;

  constructor() {

    this.text = "abcd";
  }

  addTask(){
    this.text = "bla bla";
    console.log(this.text);
  }



}
