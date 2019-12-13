const {Task} = require('./task');

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

exports.ListOfTasks = ListOfTasks;
