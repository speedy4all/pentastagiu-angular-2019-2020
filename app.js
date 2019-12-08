var ToDo = /** @class */ (function () {
    function ToDo(nume, descriere, data) {
        this.nume = nume;
        this.descriere = descriere;
        this.data = data;
        this.finished = false;
    }
    ;
    ToDo.prototype.isFinished = function () {
        return this.finished;
    };
    ToDo.prototype.modifyToDo = function (numeNou, descriereNoua) {
        if (numeNou)
            this.nume = numeNou;
        if (descriereNoua)
            this.descriere = descriereNoua;
        return;
    };
    ToDo.prototype.setFinished = function () {
        this.finished = true;
        return;
    };
    ToDo.prototype.deleteToDo = function () {
        delete this.data;
        delete this.descriere;
        delete this.nume;
        delete this.finished;
        return;
    };
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todos = [];
    }
    ;
    ToDoList.prototype.addToDo = function (nume, descriere, data) {
        this.todos.push(new ToDo(nume, descriere, data));
        return;
    };
    ToDoList.prototype.modifyToDo = function (index, descriere, nume) {
        this.todos[index].modifyToDo(nume, descriere);
        return;
    };
    ToDoList.prototype.setFinished = function (index) {
        this.todos[index].setFinished();
        return;
    };
    ToDoList.prototype.deleteToDo = function (index) {
        this.todos[index].deleteToDo();
        delete this.todos[index];
        return;
    };
    ToDoList.prototype.printUnfinished = function () {
        var unFinished = [];
        this.todos.forEach(function (element) {
            if (!element.isFinished())
                unFinished.push(element);
        });
        console.table(unFinished);
        return;
    };
    ToDoList.prototype.printTodos = function () {
        console.table(this.todos);
        return;
    };
    return ToDoList;
}());
var todos = new ToDoList();
todos.addToDo('Morning routine', 'Woke up, drink my coffee then get redy for work', new Date('12/12/2019'));
todos.addToDo('Work', 'Finish those scripts', new Date());
todos.addToDo('Lunch', 'Find somethig to eat', new Date());
todos.addToDo('Relax', 'Watch a movie or something', new Date());
todos.printTodos();
todos.modifyToDo(0, "Well, I think I'm gonna be late for work", "Late for work");
todos.modifyToDo(2, "I think I'm gonna order something");
todos.printTodos();
todos.setFinished(3);
todos.printTodos();
todos.deleteToDo(1);
todos.printTodos();
todos.printUnfinished();
