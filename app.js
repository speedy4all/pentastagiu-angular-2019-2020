var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodos = function (name, date, description, finished) {
        if (name === '') {
            return;
        }
        this.todos.push({
            name: name,
            date: date,
            description: description,
            finished: false
        });
    };
    TodoList.prototype.getUnfinishedTasks = function () {
        var notFinished = this.todos.filter(function (todo) { return !todo.finished; });
        console.table(notFinished);
    };
    TodoList.prototype.modifyTask = function (index, newName) {
        var notFinished = this.todos.filter(function (todo) { return !todo.finished; });
        var anotherName;
        for (var _i = 0, notFinished_1 = notFinished; _i < notFinished_1.length; _i++) {
            var task = notFinished_1[_i];
            if (task.finished || typeof index !== 'number') {
                return;
            }
            anotherName = task.name;
        }
        anotherName = newName;
        this.todos[index].name = anotherName;
    };
    TodoList.prototype.deleteUnfinishedTask = function (index) {
        var notFinished = this.todos.filter(function (todo) { return !todo.finished; });
        notFinished.splice(index, 1);
        var finished = this.todos.filter(function (todo) { return todo.finished; });
        var newArr = finished.concat(notFinished);
        this.todos = newArr;
        var sortedTodo = this.todos.sort();
        return sortedTodo;
    };
    TodoList.prototype.finishTask = function (task) {
        this.todos[task].finished = true;
    };
    TodoList.prototype.getAllTodos = function () {
        console.table(this.todos.filter(function (todo) { return todo.name; }));
    };
    return TodoList;
}());
var todo = new TodoList();
todo.addTodos('Wake up', new Date("2019-12-05"), 'I hope i wake up.');
todo.addTodos('Work for money', new Date("2019-12-15"), 'I hope for more money.');
todo.addTodos('Go to the gym and deadlift', new Date("2019-12-25"), 'I hope to deadlift 200kg today.');
todo.addTodos('Go home', new Date("2019-12-10"), 'I hope to find my home.');
todo.addTodos('Go to the window', new Date("2019-12-12"), 'I home my window is close.');
todo.getAllTodos();
todo.finishTask(0);
todo.getAllTodos();
todo.modifyTask(1, 'A new name');
todo.getAllTodos();
todo.deleteUnfinishedTask(2);
todo.getUnfinishedTasks();
todo.getAllTodos();
