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