"use strict";
exports.__esModule = true;
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
    }
    ToDoList.prototype.addTask = function (newTask) {
        this.tasks.push(newTask);
    };
    ToDoList.prototype.finishTask = function (index) {
        this.tasks[index].finish();
    };
    ToDoList.prototype.allTasks = function () {
        console.table(this.tasks);
    };
    ToDoList.prototype.changeProp = function (index, propName, newValue) {
        if (this.tasks[index]) {
            this.tasks[index].changeProperty(propName, newValue);
            return;
        }
        console.log("Task does not exist");
    };
    ToDoList.prototype.unfinishedTasks = function () {
        var notFinished = this.tasks.filter(function (el) { return el.completed === false; });
        console.table(notFinished);
    };
    ToDoList.prototype.removeUnfinishedTask = function (index) {
        if (this.tasks[index] && this.tasks[index].completed === false) {
            this.tasks.splice(index, 1);
            return;
        }
        console.log('Selected task is finished');
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
