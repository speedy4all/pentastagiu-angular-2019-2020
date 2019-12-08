var Todo = /** @class */ (function () {
    function Todo(name, date, description) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
    Todo.prototype.finish = function () {
        if (this.finished != true)
            this.finished = true;
        else
            console.log("Task-ul " + this.name + " este deja finalizat.");
    };
    Todo.prototype.modify = function (modified, target) {
        switch (target) {
            case "name":
                this.name = modified;
                break;
            case "date":
                this.date = modified;
                break;
            case "description":
                this.description = modified;
                break;
        }
    };
    return Todo;
}());
var Todos = /** @class */ (function () {
    function Todos() {
        this.taskList = [];
    }
    Todos.prototype.add = function (task) {
        this.taskList.push(task);
    };
    Todos.prototype.finishTask = function (index) {
        if (index < this.taskList.length)
            this.taskList[index].finish();
    };
    Todos.prototype.deleteTask = function (index) {
        if (index < this.taskList.length) {
            if (this.taskList[index].finished == false)
                this.taskList.splice(index);
            else
                console.log("Task-ul este finalizat, nu se poate sterge.");
        }
        else
            console.log("Index invalid!");
    };
    Todos.prototype.listAll = function () {
        console.table(this.taskList);
    };
    Todos.prototype.listNotFinished = function () {
        var unfinishedTaskList = this.taskList.filter(function (task) { return task.finished == false; });
        if (unfinishedTaskList.length > 0)
            console.table(unfinishedTaskList);
        else
            console.log("Toate task-urile sunt finalizate.");
    };
    Todos.prototype.modify = function (index, modified, target) {
        if (index < this.taskList.length)
            this.taskList[index].modify(modified, target);
        else
            console.log("Index invalid!");
    };
    return Todos;
}());

const tasks = new Todos();

tasks.add(new Todo("Task1", new Date("December 1, 2019 08:00:00"), "Descriere Task1"));
tasks.add(new Todo("Task2", new Date("December 2, 2019 08:00:00"), "Descriere Task2"));
tasks.add(new Todo("Task3", new Date("December 3, 2019 08:00:00"), "Descriere Task3"));
tasks.add(new Todo("Task4", new Date("December 4, 2019 08:00:00"), "Descriere Task4"));

tasks.listAll();

tasks.modify(1, "Task 2 Modified", "name");
tasks.deleteTask(3);
tasks.finishTask(2);
tasks.finishTask(2);
tasks.deleteTask(2);

tasks.listAll();
tasks.listNotFinished();