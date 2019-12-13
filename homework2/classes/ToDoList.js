"use strict";
exports.__esModule = true;
var ToDo_1 = require("./ToDo");
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todos = [];
    }
    ;
    ToDoList.prototype.addToDo = function (nume, descriere, data) {
        this.todos.push(new ToDo_1.ToDo(nume, descriere, data));
        return;
    };
    ToDoList.prototype.modifyToDo = function (index, descriere, nume) {
        this.todos[index].modifyToDo(nume, descriere);
        return;
    };
    ToDoList.prototype.setFinished = function (index) {
        this.todos[index].setFinished();
        return;
    };
    ToDoList.prototype.deleteToDo = function (index) {
        this.todos[index].deleteToDo();
        delete this.todos[index];
        return;
    };
    ToDoList.prototype.printUnfinished = function () {
        var unFinished = [];
        this.todos.forEach(function (element) {
            if (!element.isFinished())
                unFinished.push(element);
        });
        console.table(unFinished);
        return;
    };
    ToDoList.prototype.printTodos = function () {
        console.table(this.todos);
        return;
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
