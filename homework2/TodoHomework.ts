import { ToDoList } from './classes/ToDoList'

let todos = new ToDoList();

// Adding todos
todos.addToDo('Morning routine', 'Woke up, drink my coffee then get redy for work', new Date('12/12/2019'));
todos.addToDo('Work', 'Finish those scripts', new Date());
todos.addToDo('Lunch', 'Find somethig to eat', new Date());
todos.addToDo('Relax', 'Watch a movie or something', new Date());

// Printing todos
todos.printTodos();

//Modifying toods 
todos.modifyToDo(0, "Well, I think I'm gonna be late for work", "Late for work");
todos.modifyToDo(2, "I think I'm gonna order something")

todos.printTodos();

// Finishing
todos.setFinished(3);

todos.printTodos();

//Deleteting
todos.deleteToDo(1);

todos.printTodos();

//Ptinting the unfinished todos
todos.printUnfinished();
