class Todo {
    constructor(taskName, endDate, completed, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = false;
        this.description = description;
    }
    finish() {
        this.completed = true;
    }
}
exports.Todo = Todo;