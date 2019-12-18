function Todo(name, date, isFinished, description) {
    this.name = name;
    this.date = date;
    this.isFinished = isFinished;
    this.description = description;
}
Todo.prototype.finalize = function () {
    this.isFinished = true;
};
Todo.prototype.modify = function (name, date, description) {
    if (name !== undefined && name !== null) {
        this.name = name;
    }
    if (date !== undefined && date !== null) {
        this.date = date;
    }
    if (description !== undefined && description !== null) {
        this.description = description;
    }
};

exports.Todo = Todo;
