
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
exports.Todo = Todo;