import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  todoArray=[];
  todo;
  // add todo
  addTodo(value){
    if(value!==""){
      this.todoArray.push(value)
    }else{
      alert('Field required')
    }
  }
  // delete todo
  delTodo(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }
}