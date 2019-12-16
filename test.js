"use strict";
exports.__esModule = true;
var todos_1 = require("./todos");
var todo_1 = require("./todo");
function test() {
    var tasks = new todos_1.Todos();
    tasks.add(new todo_1.Todo("Task1", new Date("December 1, 2019 08:00:00"), "Descriere Task1"));
    tasks.add(new todo_1.Todo("Task2", new Date("December 2, 2019 08:00:00"), "Descriere Task2"));
    tasks.add(new todo_1.Todo("Task3", new Date("December 3, 2019 08:00:00"), "Descriere Task3"));
    tasks.add(new todo_1.Todo("Task4", new Date("December 4, 2019 08:00:00"), "Descriere Task4"));
    tasks.listAll();
    tasks.modify(1, "Task 2 Modified", "name");
    tasks.deleteTask(3);
    tasks.finishTask(2);
    tasks.finishTask(2);
    tasks.deleteTask(2);
    tasks.listAll();
    tasks.listNotFinished();
}
exports.test = test;
