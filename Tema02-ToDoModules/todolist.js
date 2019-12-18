"use strict";
exports.__esModule = true;
var todo_1 = require("./todo");
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.allTodos = new Array;
    }
    //adds new ToDo
    ToDoList.prototype.createTask = function (name, endDate, description) {
        this.allTodos.push(new todo_1.ToDo(name, endDate, description));
    };
    //display all ToDos
    ToDoList.prototype.listAll = function () {
        console.table(this.allTodos);
    };
    //finish a task
    ToDoList.prototype.finishTask = function (index) {
        this.allTodos[index].finsh();
    };
    //delete a task
    ToDoList.prototype.deleteTask = function (index) {
        this.allTodos.splice(index, 1);
    };
    //list all not finished tasks
    ToDoList.prototype.notFinshed = function () {
        var table = this.allTodos.filter(function (t) { return !t.finished; });
        console.table(table);
    };
    //Am modificat functia sa fie mai intuitiva
    ToDoList.prototype.changeParam = function (index, type, parameter) {
        switch (type) {
            case "name":
                this.allTodos[index].setName(parameter);
                break;
            case "date":
                this.allTodos[index].setDate(parameter);
                break;
            case "description":
                this.allTodos[index].setDescription(parameter);
                break;
        }
    };
    return ToDoList;
}());
exports.ToDoList = ToDoList;
