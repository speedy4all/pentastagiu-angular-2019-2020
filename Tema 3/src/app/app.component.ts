import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
  {
    label: 'Bring Milk',
    done: false,
    priority: 3
  },
  {
    label: 'Pay mobile bill',
    done: true,
    priority: 1
  },
  {
    label: 'Clean House',
    done: false,
    priority: 4
  },
  {
    label: 'Fix the door',
    done: false,
    priority: 5
  }
 ];
 addTodo(newTodoLabel){
   var newTodo = {
     label: newTodoLabel,
     priority: 1,
     done: false
   };
   this.todos.push(newTodo);
 }
 deleteTodo(todo){
   this.todos = this.todos.filter( t =>t.label !== todo.label);
 }
}
