var Task = /** @class */ (function () {
    function Task(name, date, description, completed) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.completed = completed;
    }
    Task.prototype.finish = function () {
        this.completed = true;
    };
    Task.prototype.changeProperty = function (propName, newValue) {
        this[propName] = newValue;
    };
    return Task;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
    }
    ToDoList.prototype.addTask = function (newTask) {
        this.tasks.push(newTask);
    };
    ToDoList.prototype.finishTask = function (index) {
        this.tasks[index].finish();
    };
    ToDoList.prototype.allTasks = function () {
        console.table(this.tasks);
    };
    ToDoList.prototype.changeProp = function (index, propName, newValue) {
        for (var props in this.tasks[index]) {
            if (props == propName) {
                this.tasks[index].changeProperty(propName, newValue);
                return;
            }
        }
        console.log(propName + " does not exist");
    };
    ToDoList.prototype.unfinishedTasks = function () {
        var notFinished = this.tasks.filter(function (el) { return el.completed === false; });
        console.table(notFinished);
    };
    ToDoList.prototype.removeUnfinishedTask = function (index) {
        if (this.tasks[index].completed === false) {
            this.tasks.splice(index, 1);
            return;
        }
        console.log('Selected task is finished');
    };
    return ToDoList;
}());
var myList = new ToDoList();
myList.addTask(new Task('Shopping', new Date('2019-12-20'), 'Buy hat', false));
myList.addTask(new Task('Phone Call', new Date('2019-12-20'), 'Call uncle for birthday', false));
myList.addTask(new Task('Pay bills', new Date('2019-12-20'), 'Pay gas bill', false));
myList.addTask(new Task('Shopping', new Date('2019-12-20'), 'Buy washing machine', false));
myList.allTasks();
myList.finishTask(1);
myList.allTasks();
myList.changeProp(0, 'description', 'Buy hat and scarf');
myList.allTasks();
myList.removeUnfinishedTask(1);
myList.unfinishedTasks();
