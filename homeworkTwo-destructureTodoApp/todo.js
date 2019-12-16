class Todo {
    constructor(taskName, endDate, completed, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = completed;
        this.description = description;
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = false;
        this.description = description;
    }
    finish() {
        this.completed = true;
    }
    modify(taskName, endDate, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.description = description;
    }
}

exports.Todo = Todo;