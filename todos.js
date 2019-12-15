function Todos(todos = []) {
    this.todos = todos;
}
Todos.prototype.add = function (todo) {
    this.todos.push(todo);
};
Todos.prototype["delete"] = function (index) {
    if (index > -1) {
        this.todos.splice(index, 1);
    }
};
Todos.prototype.modify = function (index, name, date, description) {
    if (index > -1) {
        this.todos[index].modify(name, date, description);
    }
};
Todos.prototype.finalize = function (index) {
    if (index > -1) {
        this.todos[index].finalize();
    }
};
Todos.prototype.print = function () {
    console.table(this.todos);
};
Todos.prototype.printNotFinished = function () {
    console.table(this.todos.filter(function (todo) { return !todo.isFinished; }));
};

exports.Todos = Todos;
