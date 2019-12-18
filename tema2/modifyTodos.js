const { Todos } = require('./todos.js');

Todos.prototype.modifyDescription = function(index,description) {
    this.todos[index].modifyDescribe(description);
}

Todos.prototype.modifyDate = function(index,data) {
    this.todos[index].modifyData(data);
}

Todos.prototype.modifyName = function(index,name) {
    this.todos[index].modify(name);
}

exports.Todos = Todos;
