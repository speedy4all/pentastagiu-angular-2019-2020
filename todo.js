"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo(name, date, description) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
    Todo.prototype.finish = function () {
        if (this.finished != true)
            this.finished = true;
        else
            console.log("Task-ul " + this.name + " este deja finalizat.");
    };
    Todo.prototype.modify = function (modified, target) {
        switch (target) {
            case "name":
                this.name = modified;
                break;
            case "date":
                this.date = modified;
                break;
            case "description":
                this.description = modified;
                break;
        }
    };
    return Todo;
}());
exports.Todo = Todo;
