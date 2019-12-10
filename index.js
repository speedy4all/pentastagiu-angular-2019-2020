"use strict";
exports.__esModule = true;
var TodoItem = /** @class */ (function () {
    function TodoItem(todo, date, description, complete) {
        if (complete === void 0) { complete = false; }
        this.complete = false;
        this.todo = todo;
        this.description = description;
        this.date = date;
        this.complete = complete;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
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
var todos = [
    new TodoItem("Write review", new Date("2019-12-05"), "to eMag"),
    new TodoItem("Shopping", new Date("2019-12-05"), "Potatos and Onion"),
];
var collection = new TodoCollection("Rudolf", todos);
console.clear();
console.log(collection.userName + "'s Todo List");
collection.displayTodo();
collection.addTodo("Run a bike", "");
collection.addTodo("Bake pizza in microwave", "with salami");
collection.addTodo("Watch new movie", "Star Wars");
collection.displayTodo();
collection.finishTodo(2);
collection.displayTodo();
collection.modifyTodo(3, "description", "and peperoni");
collection.deleteTodo(1);
collection.displayTodo();
collection.noFinish();
