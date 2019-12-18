const {TodoItem} = require('./TodoItem.js');
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.userName = userName;
        this.todoItems = todoItems;
    }
    TodoCollection.prototype.addTodo = function (todo, description) {
        this.todoItems.push(new TodoItem(todo, new Date, description));
        ;
    };
    TodoCollection.prototype.deleteTodo = function (id) {
        this.todoItems.splice(id, 1);
    };
    TodoCollection.prototype.finishTodo = function (id) {
        this.todoItems[id].complete = true;
    };
    TodoCollection.prototype.displayTodo = function () {
        console.table(this.todoItems);
    };
    TodoCollection.prototype.modifyTodo = function (id, modify, value) {
        switch (modify) {
            case "todo":
                this.todoItems[id].todo = value;
                break;
            case "description":
                this.todoItems[id].description = value;
                break;
            case "date":
                this.todoItems[id].date = value;
                break;
        }
    };
    TodoCollection.prototype.noFinish = function () {
        console.table(this.todoItems.filter(function (item) { return !item.complete; }));
    };
    return TodoCollection;
}());
exports.TodoCollection = TodoCollection;