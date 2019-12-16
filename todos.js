"use strict";
exports.__esModule = true;
var Todos = /** @class */ (function () {
    function Todos() {
        this.taskList = [];
    }
    Todos.prototype.add = function (task) {
        this.taskList.push(task);
    };
    Todos.prototype.finishTask = function (index) {
        if (index < this.taskList.length)
            this.taskList[index].finish();
    };
    Todos.prototype.deleteTask = function (index) {
        if (index < this.taskList.length) {
            if (this.taskList[index].finished == false)
                this.taskList.splice(index);
            else
                console.log("Task-ul este finalizat, nu se poate sterge.");
        }
        else
            console.log("Index invalid!");
    };
    Todos.prototype.listAll = function () {
        console.table(this.taskList);
    };
    Todos.prototype.listNotFinished = function () {
        var unfinishedTaskList = this.taskList.filter(function (task) { return task.finished == false; });
        if (unfinishedTaskList.length > 0)
            console.table(unfinishedTaskList);
        else
            console.log("Toate task-urile sunt finalizate.");
    };
    Todos.prototype.modify = function (index, modified, target) {
        if (index < this.taskList.length)
            this.taskList[index].modify(modified, target);
        else
            console.log("Index invalid!");
    };
    return Todos;
}());
exports.Todos = Todos;
