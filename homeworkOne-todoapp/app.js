var Todo = /** @class */ (function () {
    function Todo(taskName, endDate, completed, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = completed;
        this.description = description;
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = false;
        this.description = description;
    }
    Todo.prototype.finish = function () {
        this.completed = true;
    };
    Todo.prototype.modify = function (taskName, endDate, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.description = description;
    };
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.allTodos = new Array;
    }
    //functie creare task
    TodoList.prototype.createTodo = function (taskName, endDate, description) {
        var newItem = new Todo(taskName, endDate, false, description);
        this.allTodos.push(newItem);
    };
    //functie listare taskuri
    TodoList.prototype.listTodos = function () {
        console.table(this.allTodos);
    };
    //functie modificare task
    TodoList.prototype.modifyTask = function (index, taskName, endDate, description) {
        this.allTodos[index].taskName = taskName || this.allTodos[index].taskName;
        this.allTodos[index].endDate = endDate || this.allTodos[index].endDate;
        this.allTodos[index].description = description || this.allTodos[index].description;
        this.listTodos();
    };
    //functie finalizare task    
    TodoList.prototype.finishTask = function (index) {
        this.allTodos[index].finish();
        this.listTodos();
    };
    //functie pentru stergerea unui task
    TodoList.prototype.deleteTask = function (index) {
        this.allTodos.splice(index, 1);
        this.listTodos();
    };
    //functie listare taskuri nefinalizate
    TodoList.prototype.listUnfinishedTodos = function () {
        var finished = this.allTodos.filter(function (t) { return !t.completed; });
        console.table(finished);
        this.listTodos();
    };
    return TodoList;
}());
//1.Creare lista taskuri
var todos = new TodoList();
//2.Adaugare 3 taskuri
todos.createTodo('Take a break', new Date('2019-12-12'), 'Once you earn it');
todos.createTodo('Listen to music', new Date('2020-06-23'), 'Not too loud');
todos.createTodo('Have dinner with friends', new Date('2020-01-11'), 'Dont drink too much');
//3.Listare taskuri
todos.listTodos();
//4.Finalizare task
todos.finishTask(2);
//5.Modificare task
todos.modifyTask(1, undefined, undefined, "Loud af");
//6.Stergere task
todos.deleteTask(0);
//7.Listare taskuri nefinalizate
todos.listUnfinishedTodos();
