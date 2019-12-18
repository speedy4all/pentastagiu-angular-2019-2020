function Todo(name,date,description) {
    this.name = name;
    this.data = date;
    this.finished = false;
    this.description = description;
};

Todo.prototype.finish = function () {
    this.finished = true;
};

exports.Todo = Todo;