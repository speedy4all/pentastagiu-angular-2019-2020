const {ListOfTasks} = require('./tasks');

//1.Creare lista taskuri
var todos = new ListOfTasks();
//2.Adaugare 3 taskuri
todos.addTask('Have a coffee', new Date('2020-10-12'), false, 'Not too strong');
todos.addTask('Take a walk', new Date('2012-06-13'), false, 'For at least 30 minutes.');
todos.addTask('Read a book', new Date('2020-02-12'), false, 'Of your choice');
//3.Listare taskuri
todos.listAllTasks();
//4.Finalizare task
todos.finishTask(2);
//5.Modificare task
var editTask1 = todos.getTaskAtIndex(1);
editTask1.name = 'Floricele pe campii';
todos.editTask(1, editTask1);
//3.Listare taskuri
todos.listAllTasks();
//6.Stergere task
todos.deleteTask(0);
//7.Listare taskuri nefinalizate
todos.listNotFinishedTasks();
