
const {Todo} = require("./list")
var Todos = /** @class */ (function () {
    function Todos() {
    }
    Todos.prototype.add = function (name, description, date) {
        var newItem = new Todo(name, date, description, false);
        Todos.allTodos.push(newItem);
    };
    Todos.prototype["delete"] = function (index) {
        Todos.allTodos.splice(index, 1);
    };
    Todos.prototype.update = function (index, name, description, date) {
        Todos.allTodos[index].modify(name, description, date);
    };
    Todos.prototype.finishTask = function (index) {
        Todos.allTodos[index].finish();
    };
    Todos.prototype.displayAllFinished = function () {
        return console.table(Todos.allTodos.filter(function (item) { return !item.finished; }));
    };
    Todos.prototype.displayAll = function () {
        return console.table(Todos.allTodos);
    };
    Todos.allTodos = new Array;
    return Todos;
}());
exports.Todos = Todos;