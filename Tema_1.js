var Todo = /** @class */ (function () {
    function Todo(name, date, description) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
    Todo.prototype.finish = function () {
        if (this.finished == false) {
            this.finished = true;
        }
        else {
            console.log("Task finalizat!");
        }
    };
    Todo.prototype.modify = function (target, modified) {
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
    Todos.prototype["delete"] = function (index) {
        if (index < this.taskList.length)
            delete this.taskList[index];
        else
            console.log("index invalid!");
    };
    Todos.prototype.modify = function (index, target, modified) {
        if (index < this.taskList.length)
            this.taskList[index].modify(target, modified);
        else
            console.log("index invalid!");
    };
    Todos.prototype.finish = function (index) {
        if (index < this.taskList.length)
            this.taskList[index].finish();
        else
            console.log("index invalid");
    };
    Todos.prototype.list = function () {
        console.table(this.taskList);
    };
    Todos.prototype.listNotFinished = function () {
        var unfinishedTaskList = this.taskList.filter(function (task) { return task.finished == false; });
        if (unfinishedTaskList.length > 0) {
            console.table(unfinishedTaskList);
        }
        else {
            console.log("Toate task-urile au fost finalizate");
        }
    };
    return Todos;
}());



const task=new Todos();

task.add(new Todo("task 1"), new Date("November 3, 2019 05:00:00"),"Descriere pentru task1");
task.add(new Todo("task 2"), new Date("November 10, 2019 06:00:00"),"Descriere pentru task1");
task.add(new Todo("task 3"), new Date("December 11, 2019 07:00:00"),"Descriere pentru task1");

task.list();

task.modify(0,"task 1 modificat","abc");
task.delete(2);
task.finish(1);

task.list();

task.listNotFinished();
