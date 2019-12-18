"use strict";
exports.__esModule = true;
var task_1 = require("./task");
var taskList_1 = require("./taskList");
function runTaskList() {
    var myList = new taskList_1.ToDoList();
    myList.addTask(new task_1.Task('Shopping', new Date('2019-12-20'), 'Buy hat', false));
    myList.addTask(new task_1.Task('Phone Call', new Date('2019-12-20'), 'Call uncle for birthday', false));
    myList.addTask(new task_1.Task('Pay bills', new Date('2019-12-20'), 'Pay gas bill', false));
    myList.addTask(new task_1.Task('Shopping', new Date('2019-12-20'), 'Buy washing machine', false));
    myList.allTasks();
    myList.finishTask(1);
    myList.allTasks();
    myList.changeProp(0, 'description', 'Buy hat and scarf');
    myList.allTasks();
    myList.removeUnfinishedTask(2);
    myList.unfinishedTasks();
}
exports.runTaskList = runTaskList;
