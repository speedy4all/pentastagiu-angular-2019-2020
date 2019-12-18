const { Todo } = require('./todo.js');

Todo.prototype.modify = function (name) {
    this.name = name;
}

Todo.prototype.modifyData = function (data) {
    this.data = data;
}

Todo.prototype.modifyDescribe = function (description) {
    this.description = description;
}

exports.Todo = Todo;
