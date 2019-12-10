var Task = /** @class */ (function () {
    function Task(name, date, finished, description) {
        this.name = name;
        this.date = date;
        this.finished = finished;
        this.description = description;
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
    return Task;
}());
var ListOfTasks = /** @class */ (function () {
    function ListOfTasks() {
        this.allTasks = [];
    }
    ListOfTasks.prototype.addTask = function (name, date, finished, description) {
        var newTask = new Task(name, date, finished, description);
        this.allTasks.push(newTask);
    };
    ListOfTasks.prototype.listAllTasks = function () {
        console.table(this.allTasks);
    };
    ListOfTasks.prototype.finishTask = function (index) {
        this.allTasks[index].finished = true;
    };
    ListOfTasks.prototype.getTaskAtIndex = function (index) {
        var task = this.allTasks[index];
        return {
            name: task.name,
            date: task.date,
            finished: task.finished,
            description: task.description
        };
    };
    ListOfTasks.prototype.editTask = function (index, task) {
        if (this.allTasks[index].finished === false) {
            this.allTasks[index] = task;
        }
        else {
            console.error('cannot edit task not finished');
        }
    };
    ListOfTasks.prototype.deleteTask = function (index) {
        if (this.allTasks[index].finished === false) {
            this.allTasks.splice(index, 1);
        }
        else {
            console.error('cannot delete task not finished');
        }
    };
    ListOfTasks.prototype.listNotFinishedTasks = function () {
        var notFinished = this.allTasks.filter(function (f) { return f.finished === false; });
        console.table(notFinished);
    };
    return ListOfTasks;
}());
//1.Creare lista taskuri
var todos = new ListOfTasks();
//2.Adaugare 3 taskuri
todos.addTask('Have a coffee', new Date('2020-10-12'), false, 'Not too strong');
todos.addTask('Take a walk', new Date('2012-06-13'), false, 'For at least 30 minutes.');
todos.addTask('Read a book', new Date('2020-02-12'), false, 'Of your choice');
//3.Listare taskuri
todos.listAllTasks();
//4.Finalizare task
todos.finishTask(2);
//5.Modificare task
var editTask1 = todos.getTaskAtIndex(1);
editTask1.name = 'Floricele pe campii';
todos.editTask(1, editTask1);
//3.Listare taskuri
todos.listAllTasks();
//6.Stergere task
todos.deleteTask(0);
//7.Listare taskuri nefinalizate
todos.listNotFinishedTasks();
