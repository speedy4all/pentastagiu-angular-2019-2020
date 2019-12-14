"use strict";
exports.__esModule = true;
var todolist_1 = require("./todolist");
function execute() {
    //EXECUTION
    //1 - Create list
    var todos = new todolist_1.ToDoList();
    //2 - Create items
    todos.createTask("Do groceries", new Date("2019-12-13"), "Get something to eat");
    todos.createTask("Do laundry", new Date("2019-12-15"), "Wash your dirty clothes.");
    todos.createTask("Clean the room", new Date("2019-12-14"), "Make it look clean at least.");
    //3 - Display items
    todos.listAll();
    //4 - Finish tasks
    todos.finishTask(2);
    todos.finishTask(0);
    todos.listAll();
    //5 - Change parameters
    todos.changeParam(1, "task", "New Task Here");
    todos.changeParam(2, "date", new Date("2019-12-25"));
    todos.changeParam(1, "description", "New Description Here");
    todos.listAll();
    //6 - Delete parameter
    todos.deleteTask(2);
    todos.listAll();
    //7 - Display tasks not finished
    todos.notFinshed();
}
exports.execute = execute;
