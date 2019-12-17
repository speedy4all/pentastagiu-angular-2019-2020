const { Todos } = require("./todos");
const { Todo } = require('./todo');


function todolist(){
const taskList = new Todos();
task1 = new Todo("Eat", new Date("2019-12-05"), "Eat well");
task2 = new Todo("Sleep", new Date("2019-12-18"),  "Sleep well");
task3 = new Todo("Go to shopping", new Date("2019-12-16"),  "Buy");

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

taskList.printAllTasks();

/** 4. Se va finaliza un task") */
taskList.finishTask(1);
taskList.printAllTasks();

/**6. Se va modifica un task nefinalizat" */

taskList.modifyName(2,"Go to shopping to Auchan");
taskList.printAllTasks();

/** 7. Se va sterge un task nefinalizat" */
taskList.deleteTask(1);
taskList.printAllTasks();

/** Se vor lista task-urile nefinalizate") */
taskList.printUnfinishedTasks();
}

module.exports.todolist = todolist;