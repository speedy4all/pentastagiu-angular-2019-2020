const {TodoList} = require("./todolist");
//
function startProgram(){

//1.Creare lista taskuri
const todos = new TodoList();
//2.Adaugare 3 taskuri
todos.createTodo('Take a break', new Date('2019-12-12'), 'Once you earn it');
todos.createTodo('Listen to music', new Date('2020-06-23'), 'Not too loud');
todos.createTodo('Have dinner with friends', new Date('2020-01-11'), 'Dont drink too much');
//3.Listare taskuri
todos.listTodos();
//4.Finalizare task
todos.finishTask(2);
//5.Modificare task
todos.modifyTask(1, undefined, null, "Loud af");
//6.Stergere task
todos.deleteTask(0);
//7.Listare taskuri nefinalizate
todos.listUnfinishedTodos();
}

exports.startProgram = startProgram;