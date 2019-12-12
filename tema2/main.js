const { Todos } = require('./todos.js');
const { Todo } = require('./todo.js');
const { modifyTodo } = require('./modifyTodo.js');
const { modifyTodos } = require('./modifyTodos.js');

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-07"),"apple, pen"));
tasks.add(new Todo("Go to movie", new Date("2019.12.15"),"cinema"));
tasks.add(new Todo("Dentist", new Date("2019-12-17"),"tooth not found"));
tasks.add(new Todo("Buying a new car", new Date("2019-12-24"),"most important"));

tasks.listAll();
tasks.finishTask(1);
tasks.finishTask(2);
tasks.listAll();
tasks.modifyName(0,"Go to shopping in Auchan.");
tasks.listAll();
tasks.deleteTaskByIndex(0);
tasks.listAll();
tasks.listNotFinished();
tasks.listAll();

