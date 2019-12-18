function Todos(todos = []) {
    this.todos = todos;
}

Todos.prototype.add = function(todo) {
    this.todos.push(todo);
}

Todos.prototype.deleteTaskByIndex = function (index) {
    this.todos.splice(index,1);
}

Todos.prototype.getAll = function() {
    return this.todos;
}

Todos.prototype.listNotFinished = function() {
    const notFinished = this.todos.filter(t => !t.finished);
    console.table(notFinished);
}

Todos.prototype.listAll = function () {
    console.table(this.todos);
}

Todos.prototype.finishTask = function (index) {
    this.todos[index].finish();
}

exports.Todos = Todos;