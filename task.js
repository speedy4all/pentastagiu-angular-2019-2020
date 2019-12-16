"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(name, date, description, completed) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.completed = completed;
    }
    Task.prototype.finish = function () {
        this.completed = true;
    };
    Task.prototype.changeProperty = function (propName, newValue) {
        if (this[propName]) {
            this[propName] = newValue;
            return;
        }
        console.log("Property \"" + propName + "\" does not exist");
    };
    return Task;
}());
exports.Task = Task;
