var Todo = /** @class */ (function () {
    function Todo(name, date, description, finished) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.finished = finished;
        this.name = name;
        this.description = description;
        this.date = date;
        this.finished = false;
    }
    ;
    Todo.prototype.finish = function () {
        if (!this.finished) {
            return this.finished = true;
        }
        ;
    };
    Todo.prototype.modify = function (name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
    };
    return Todo;
}());
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
var todos = new Todos();
todos.add('Doctor appointment', 'medical tests', new Date('2020-12-05'));
todos.add('Theatre play', 'Hamlet', new Date('2020-01-05'));
todos.add('Movie', 'Titanic', new Date('2020-02-02'));
todos.add('Shopping', 'Christmas tree', new Date('2020-01-01'));
todos["delete"](2);
todos.finishTask(1);
todos.update(0, 'Dentist appointment', 'tooth decay', new Date('2021-01-04'));
todos.displayAll();
todos.displayAllFinished();
