"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.taskList = [];
        console.log('The list of tasks was created.');
    }
    TaskList.prototype.addTask = function (task) {
        this.taskList.push(task);
    };
    TaskList.prototype.deleteTask = function (task) {
        if (task.isFinished) {
            console.log('The task can not be deleted because is finished.');
        }
        else {
            this.taskList = this.taskList.filter(function (t) { return t !== task; });
        }
    };
    TaskList.prototype.modifyTask = function (task, propertyName, propertyValue) {
        this.taskList.forEach(function (t) {
            if (t === task) {
                t.modifyTask(propertyName, propertyValue);
            }
        });
    };
    TaskList.prototype.finishTask = function (task) {
        this.taskList.forEach(function (t) {
            if (t === task) {
                t.finishTask();
            }
        });
    };
    TaskList.prototype.printAll = function () {
        this.taskList.forEach(function (task) { return console.table(task); });
    };
    TaskList.prototype.printAllUnfinished = function () {
        this.taskList.filter(function (task) { return !task.isFinished; }).forEach(function (task) { return console.table(task); });
    };
    return TaskList;
}());
exports.TaskList = TaskList;
