var Task = /** @class */ (function () {
    function Task(name, endDate, description) {
        this._isFinished = false;
        this.name = name;
        this.endDate = endDate;
        this.description = description;
    }
    Task.prototype.finishTask = function () {
        this._isFinished = true;
    };
    Task.prototype.modifyTask = function (propertyName, propertyValue) {
        if (this._isFinished) {
            console.log('The task is finished and it can not be modified');
            return;
        }
        var taskKeys = Object.keys(this);
        for (var _i = 0, taskKeys_1 = taskKeys; _i < taskKeys_1.length; _i++) {
            var key = taskKeys_1[_i];
            if (key === propertyName) {
                this[propertyName] = propertyValue;
                return;
            }
        }
        console.log("Property " + propertyName + " does not exist");
    };
    Object.defineProperty(Task.prototype, "isFinished", {
        get: function () {
            return this._isFinished;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.taskList = [];
        console.log('The list of tasks was created.');
    }
    TaskList.prototype.addTask = function (task) {
        this.taskList.push(task);
    };
    TaskList.prototype.deleteTask = function (task) {
        if (task.isFinished) {
            console.log('The task can not be deleted because is finished.');
        }
        else {
            this.taskList = this.taskList.filter(function (t) { return t !== task; });
        }
    };
    TaskList.prototype.modifyTask = function (task, propertyName, propertyValue) {
        this.taskList.forEach(function (t) {
            if (t === task) {
                t.modifyTask(propertyName, propertyValue);
            }
        });
    };
    TaskList.prototype.finishTask = function (task) {
        this.taskList.forEach(function (t) {
            if (t === task) {
                t.finishTask();
            }
        });
    };
    TaskList.prototype.printAll = function () {
        this.taskList.forEach(function (task) { return console.table(task); });
    };
    TaskList.prototype.printAllUnfinished = function () {
        this.taskList.filter(function (task) { return !task.isFinished; }).forEach(function (task) { return console.table(task); });
    };
    return TaskList;
}());
var taskList = new TaskList();
var task1 = new Task('Christmas party', new Date('2019-12-25'), 'description 1');
var task2 = new Task('First Exam', new Date('2020-01-19'), 'description 2');
var task3 = new Task('Mothers Day', new Date('2020-03-08'), 'description 3');
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);
taskList.finishTask(task2);
taskList.printAll();
taskList.modifyTask(task1, 'name', 'Task Updated');
taskList.printAll();
taskList.deleteTask(task3);
taskList.printAll();
taskList.printAllUnfinished();
